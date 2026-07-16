#!/usr/bin/env python3
"""
graphq — zero-dependency N-Quads graph query + traversal (pure Python stdlib).

Loads one or more RDF N-Quads (.nq) files into in-memory indexes and answers the
retrieval/traversal queries an in-VM knowledge engine needs — entirely offline,
with only the Python 3 standard library. No pip installs, no SPARQL engine, no
network. Drop this file next to a graph.nq and run it.

Query semantics are ported from the BASE CLI (oxigraph/SPARQL) query layer:
  search    text search  = case-insensitive substring over text predicates
  neighbors follow outgoing/incoming edges + reified ops:SemanticEdge (BFS)
  node      full property dump of an entity (its literals ARE the citable text)
  schema    class / predicate / named-graph profile of the graph

Data lives in NAMED graphs; we match across all of them and report provenance.
Namespace is configurable via the OPS_NS env var (default matches BASE).

Usage:
  python3 graphq.py --graph graph.nq schema
  python3 graphq.py --graph graph.nq search "cowork" --limit 10 [--type Decision]
  python3 graphq.py --graph graph.nq neighbors <slug-or-iri> --hops 2
  python3 graphq.py --graph graph.nq node <slug-or-iri>
Graph path resolution order: --graph args -> $GRAPH_NQ -> ./graph.nq -> alongside script.
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
from collections import defaultdict

# ---- ontology namespace (override with env OPS_NS) ----
NS = os.environ.get("OPS_NS", "http://ops-sys.local/ontology#")
RDF_TYPE = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
# Overlay override marker: (subject ops:overrides predicate) in a .local.nq
# masks every source value of that (s, p). Mirrors graph-mcp server.ts.
OVERRIDES_P = NS + "overrides"
RDFS_LABEL = "http://www.w3.org/2000/01/rdf-schema#label"

# text-bearing predicates, richest-first (used for display + search)
TEXT_PREDS = [NS + p for p in (
    "name", "noteText", "summary", "description", "rationale", "recall",
    "ruleText", "criterion", "purpose", "filePath", "path",
)] + [RDFS_LABEL]

# source/citation predicates, preferred order
SOURCE_PREDS = [NS + p for p in ("sourceDoc", "sourceFile", "filePath", "path")]

# edge predicates for neighbor expansion
EDGE_PREDS = frozenset(NS + p for p in (
    "relatedTo", "references", "fromPlan", "belongsTo", "hasDomain", "hasRule",
    "hasDecision", "hasTask", "hasMilestone", "hasGoal", "blockedBy",
    "nextAction", "peerWorkspace", "calls", "importsFrom",
))

# ---- N-Quads term regex ----
_IRIREF = r"<[^>]*>"
_BLANK = r"_:[^\s]+"
_STRING = r'"(?:[^"\\]|\\.)*"'
_LITERAL = _STRING + r"(?:\^\^" + _IRIREF + r"|@[A-Za-z][A-Za-z0-9-]*)?"
_LINE = re.compile(
    rf"^\s*(?P<s>{_IRIREF}|{_BLANK})\s+(?P<p>{_IRIREF})\s+"
    rf"(?P<o>{_LITERAL}|{_IRIREF}|{_BLANK})(?:\s+(?P<g>{_IRIREF}|{_BLANK}))?\s*\.\s*$"
)
_LIT = re.compile(r'^"(?P<lex>(?:[^"\\]|\\.)*)"(?:\^\^<[^>]*>|@[\w-]+)?$')
_UNESCAPE = {r"\n": "\n", r"\t": "\t", r"\r": "\r", r"\"": '"', r"\\": "\\"}
_UNESC_RE = re.compile(r'\\[ntr"\\]')


def _unescape(s: str) -> str:
    return _UNESC_RE.sub(lambda m: _UNESCAPE[m.group(0)], s)


def parse_term(t: str):
    """Return (kind, value) where kind in {'iri','lit','blank'}."""
    if t.startswith("<"):
        return ("iri", t[1:-1])
    if t.startswith("_:"):
        return ("blank", t)
    m = _LIT.match(t)
    if m:
        return ("lit", _unescape(m.group("lex")))
    return ("lit", t)


def local_name(iri: str) -> str:
    """IRI -> local name after last # or / (BASE term_display parity)."""
    for sep in ("#", "/"):
        i = iri.rfind(sep)
        if i != -1 and i + 1 < len(iri):
            return iri[i + 1:]
    return iri


class Store:
    def __init__(self):
        self.spo = defaultdict(list)       # s -> [(p, (okind, oval), g)]
        self.pidx = defaultdict(list)      # p -> [(s, (okind, oval), g)]
        self.incoming = defaultdict(list)  # o_iri -> [(s, p, g)]
        self.by_type = defaultdict(list)   # class_iri -> [s]
        self.semedges = []                 # [(frm, to, rel, g)]
        self.n_quads = 0
        self.n_skipped = 0

    def _parse_line(self, line):
        if not line.strip() or line.lstrip().startswith("#"):
            return None
        m = _LINE.match(line)
        if not m:
            self.n_skipped += 1
            return None
        s = parse_term(m.group("s"))[1]
        p = m.group("p")[1:-1]
        o = parse_term(m.group("o"))
        g = m.group("g")
        g = g[1:-1] if g else ""
        return (s, p, o, g)

    def _index(self, s, p, o, g):
        self.spo[s].append((p, o, g))
        self.pidx[p].append((s, o, g))
        if o[0] == "iri":
            self.incoming[o[1]].append((s, p, g))
        if p == RDF_TYPE and o[0] == "iri":
            self.by_type[o[1]].append(s)
        self.n_quads += 1

    def load(self, paths):
        for path in paths:
            # Local-knowledge overlay: <graph>.local.nq holds everything added
            # live (graph-mcp writes). The queried graph is source UNION
            # overlay, with overlay overrides masking source (s, p) values.
            overlay = re.sub(r"\.nq$", ".local.nq", path)
            masked = set()
            overlay_quads = []
            if overlay != path and os.path.exists(overlay):
                with open(overlay, "r", encoding="utf-8", errors="replace") as f:
                    for line in f:
                        parsed = self._parse_line(line)
                        if not parsed:
                            continue
                        s, p, o, g = parsed
                        if p == OVERRIDES_P and o[0] == "iri":
                            masked.add((s, o[1]))
                            continue
                        overlay_quads.append(parsed)
            for (s, p, o, g) in overlay_quads:
                self._index(s, p, o, g)
            with open(path, "r", encoding="utf-8", errors="replace") as f:
                for line in f:
                    parsed = self._parse_line(line)
                    if not parsed:
                        continue
                    s, p, o, g = parsed
                    if (s, p) in masked:
                        continue
                    self._index(s, p, o, g)
        # collect reified semantic edges into an adjacency-friendly list
        for s in self.by_type.get(NS + "SemanticEdge", []):
            frm = to = rel = None
            g = ""
            for (p, o, gg) in self.spo.get(s, []):
                if p == NS + "from" and o[0] == "iri":
                    frm, g = o[1], gg
                elif p == NS + "to" and o[0] == "iri":
                    to = o[1]
                elif p == NS + "relation":
                    rel = o[1]
            if frm and to:
                self.semedges.append((frm, to, rel or "related", g))
        return self

    # ---- helpers ----
    def types(self, s):
        return [o[1] for (p, o, g) in self.spo.get(s, []) if p == RDF_TYPE and o[0] == "iri"]

    def first_text(self, s):
        vals = {}
        for (p, o, g) in self.spo.get(s, []):
            if o[0] == "lit" and p not in vals:
                vals[p] = o[1]
        for tp in TEXT_PREDS:
            if tp in vals:
                return vals[tp]
        return local_name(s)

    def source_of(self, s):
        props = {}
        for (p, o, g) in self.spo.get(s, []):
            props.setdefault(p, o)
        sf = props.get(NS + "sourceFile")
        if sf:
            sl = props.get(NS + "sourceLine")
            return f"{sf[1]}:{sl[1]}" if sl else sf[1]
        for sp in SOURCE_PREDS:
            if sp in props:
                return props[sp][1]
        return None

    def graph_of(self, s):
        for (p, o, g) in self.spo.get(s, []):
            if g:
                return g
        return ""

    def resolve(self, node):
        """Accept a full IRI, a minted slug, or a name; return the subject IRI."""
        if node in self.spo or node in self.incoming:
            return node
        code_ns = os.environ.get("CODE_NS", "http://ops-sys.local/code#")
        cands = [node, NS + node, code_ns + node]
        for pre in ("note/", "domain/", "decision/", "project/", "task/",
                    "concept/", "rule/", "handoff/", "milestone/"):
            cands.append(NS + pre + node)
        for c in cands:
            if c in self.spo:
                return c
        hits = self.search(node, limit=1)
        return hits[0]["iri"] if hits else None

    # ---- queries ----
    def search(self, kw, limit=20, type_filter=None):
        kwl = kw.lower()
        seen = {}
        for tp in TEXT_PREDS:
            for (s, o, g) in self.pidx.get(tp, []):
                if o[0] != "lit":
                    continue
                val = o[1]
                low = val.lower()
                if kwl not in low:
                    continue
                if s in seen:
                    continue
                tys = self.types(s)
                if type_filter and not any(
                    local_name(t).lower() == type_filter.lower() or t == type_filter
                    for t in tys
                ):
                    continue
                rank = 3 if low == kwl else 2 if low.startswith(kwl) else 1
                seen[s] = {
                    "id": local_name(s),
                    "iri": s,
                    "type": [local_name(t) for t in tys] or None,
                    "match_pred": local_name(tp),
                    "text": val if len(val) <= 400 else val[:400] + "…",
                    "source": self.source_of(s),
                    "graph": local_name(g) if g else None,
                    "_rank": rank,
                    "_len": len(val),
                }
        results = sorted(seen.values(), key=lambda r: (-r["_rank"], r["_len"]))
        for r in results:
            r.pop("_rank", None)
            r.pop("_len", None)
        return results[:limit]

    def neighbors(self, node, hops=1, limit=80):
        start = self.resolve(node)
        if not start:
            return {"error": f"node not found: {node}"}
        visited = {start}
        frontier = [start]
        edges = []
        for _ in range(max(1, hops)):
            nxt = []
            for s in frontier:
                # Traverse ANY relationship (an IRI-valued predicate), not a fixed
                # whitelist — a client graph uses its own ontology's edges.
                for (p, o, g) in self.spo.get(s, []):
                    if p != RDF_TYPE and o[0] == "iri":
                        edges.append({"from": local_name(s), "rel": local_name(p),
                                      "to": local_name(o[1]), "dir": "out"})
                        if o[1] not in visited:
                            visited.add(o[1]); nxt.append(o[1])
                for (s2, p, g) in self.incoming.get(s, []):
                    if p != RDF_TYPE:
                        edges.append({"from": local_name(s2), "rel": local_name(p),
                                      "to": local_name(s), "dir": "in"})
                        if s2 not in visited:
                            visited.add(s2); nxt.append(s2)
                for (frm, to, rel, g) in self.semedges:
                    if frm == s or to == s:
                        edges.append({"from": local_name(frm), "rel": rel,
                                      "to": local_name(to), "dir": "semantic"})
                        other = to if frm == s else frm
                        if other not in visited:
                            visited.add(other); nxt.append(other)
            frontier = nxt
            if not frontier:
                break
        nodes = [{
            "id": local_name(n), "iri": n,
            "type": [local_name(t) for t in self.types(n)] or None,
            "text": self.first_text(n)[:200],
            "source": self.source_of(n),
        } for n in list(visited)[:limit]]
        seen = set()
        deduped = []
        for e in edges:
            k = (e["from"], e["rel"], e["to"])
            if k in seen:
                continue
            seen.add(k)
            deduped.append(e)
        return {"start": local_name(start), "hops": hops,
                "nodes": nodes, "edges": deduped[:limit]}

    def node(self, node):
        s = self.resolve(node)
        if not s:
            return {"error": f"node not found: {node}"}
        props = defaultdict(list)
        for (p, o, g) in self.spo.get(s, []):
            props[local_name(p)].append(o[1] if o[0] == "lit" else local_name(o[1]))
        incoming = [{"from": local_name(s2), "rel": local_name(p)}
                    for (s2, p, g) in self.incoming.get(s, [])][:40]
        return {"id": local_name(s), "iri": s,
                "type": [local_name(t) for t in self.types(s)] or None,
                "source": self.source_of(s),
                "graph": local_name(self.graph_of(s)) or None,
                "properties": dict(props), "incoming": incoming}

    def schema(self):
        classes = sorted(((local_name(c), len(v)) for c, v in self.by_type.items()),
                         key=lambda x: -x[1])
        preds = sorted(((local_name(p), len(v)) for p, v in self.pidx.items()),
                       key=lambda x: -x[1])
        graphs = sorted({g for lst in self.spo.values() for (_, _, g) in lst if g})
        return {"quads": self.n_quads, "skipped_lines": self.n_skipped,
                "classes": classes[:40], "predicates": preds[:40],
                "named_graphs": [local_name(g) for g in graphs]}


def resolve_graph_paths(cli_paths):
    if cli_paths:
        return cli_paths
    env = os.environ.get("GRAPH_NQ")
    if env:
        return env.split(os.pathsep)
    here = os.path.dirname(os.path.abspath(__file__))
    for cand in (os.path.join(os.getcwd(), "graph.nq"),
                 os.path.join(here, "graph.nq"),
                 os.path.join(here, "..", "graph.nq")):
        if os.path.exists(cand):
            return [cand]
    raise SystemExit("No graph.nq found. Pass --graph PATH or set GRAPH_NQ.")


def main(argv=None):
    ap = argparse.ArgumentParser(description="Zero-dependency N-Quads graph query + traversal.")
    ap.add_argument("--graph", action="append", help="path to a .nq file (repeatable)")
    sub = ap.add_subparsers(dest="cmd", required=True)
    sub.add_parser("schema", help="profile classes, predicates, named graphs")
    sp = sub.add_parser("search", help="case-insensitive substring search over text predicates")
    sp.add_argument("keyword")
    sp.add_argument("--limit", type=int, default=20)
    sp.add_argument("--type", dest="type_filter", default=None, help="filter by class local name, e.g. Decision")
    ne = sub.add_parser("neighbors", help="BFS over edges + semantic edges")
    ne.add_argument("node")
    ne.add_argument("--hops", type=int, default=1)
    nd = sub.add_parser("node", help="full property dump of an entity")
    nd.add_argument("node")
    args = ap.parse_args(argv)

    store = Store().load(resolve_graph_paths(args.graph))
    if args.cmd == "schema":
        out = store.schema()
    elif args.cmd == "search":
        out = store.search(args.keyword, limit=args.limit, type_filter=args.type_filter)
    elif args.cmd == "neighbors":
        out = store.neighbors(args.node, hops=args.hops)
    elif args.cmd == "node":
        out = store.node(args.node)
    else:
        ap.error("unknown command")
    json.dump(out, sys.stdout, indent=2, ensure_ascii=False)
    sys.stdout.write("\n")


if __name__ == "__main__":
    main()
