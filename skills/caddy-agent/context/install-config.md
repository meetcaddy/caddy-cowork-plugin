# caddy-agent — install config

All company/deployment specifics live here. No workflow hardcodes any of it.

## Graph
- **graph_path:** `graph.nq`
  Path to the client's knowledge graph (N-Quads). Default: `graph.nq` in the project folder.
  The script also auto-resolves `./graph.nq` and its own directory, so a graph placed
  next to `scripts/graphq.py` is found automatically. Portal-connected installs pull to
  `~/.caddy/graphs` (override with `GRAPH_DIR`).
- **namespace:** `http://ops-sys.local/ontology#`
  Ontology IRI prefix. Override via the `OPS_NS` env var if a client graph uses a different one.

## Company
- **brand:** `{Company Name}`
  The label used when the skill refers to "the company" in answers and the greeting.

## Runtime
- **python:** `python3` — present in the Cowork Ubuntu VM. Verify once on install:
  `python3 --version` then `python3 scripts/graphq.py --graph graph.nq schema`.
- **node:** Node 18+ — runs the caddy-mcp server that ships in this plugin.

## Notes
- Reads via `graphq.py`; **writes via the caddy-mcp server** (`graph_remember`,
  `graph_update`, `graph_link`) — installed by this same plugin, no separate wiring.
  Without the caddy-mcp tools the skill degrades to read-only.
- Writes land in the local overlay `graph.local.nq` (quads tagged `remembered`, with
  `addedAt`/`addedBy` provenance; `.bak` per write). The delivered `graph.nq` is never
  modified, so pipeline re-deliveries can NEVER clobber live additions — no recovery
  step exists because none is needed. `graph_update` "replace" is an override that
  keeps winning across refreshes; mode "restore" returns to the source value.
- Portal-connected deployments (Caddy graph-portal) authenticate with `graph_login`
  (device-code, one click — no token files) and refresh with `graph_pull`, which also
  versions replaced graphs (`.v<N>.nq`, last 2) and migrates any pre-overlay inline
  facts into the overlay automatically.
