#!/usr/bin/env node
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/notion/snapshot.ts
var fs3 = __toESM(require("fs"));
var path3 = __toESM(require("path"));

// src/lib/nq.ts
var fs = __toESM(require("fs"));
var path = __toESM(require("path"));
var NS = "http://ops-sys.local/ontology#";
var CODE = "http://ops-sys.local/code#";
var RDF_TYPE = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";
var RDFS_LABEL = "http://www.w3.org/2000/01/rdf-schema#label";
function esc(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t");
}
function sanitize(name) {
  return String(name).replace(/[^A-Za-z0-9_]/g, "_");
}
var GraphWriter = class {
  lines = [];
  graphIri;
  proj;
  source;
  /**
   * @param platform  e.g. 'notion' — namespaces the graph IRI
   * @param scopeId   the platform's scope id (workspace/account) — names the graph
   * @param project   node-IRI prefix, e.g. 'notion_myworkspace'
   */
  constructor(platform, scopeId, project) {
    this.graphIri = `http://ops-sys.local/graph/${platform}/${scopeId}`;
    this.proj = sanitize(project);
    this.source = `${platform}-snapshot:${scopeId}`;
  }
  iri(id) {
    return `${CODE}${this.proj}_${sanitize(id)}`;
  }
  node(id, label, type, meta = {}) {
    const s = `<${this.iri(id)}>`;
    this.lines.push(`${s} <${RDF_TYPE}> <${NS}${type}> <${this.graphIri}> .`);
    this.lines.push(`${s} <${RDFS_LABEL}> "${esc(label || id)}" <${this.graphIri}> .`);
    this.lines.push(`${s} <${NS}sourceFile> "${esc(this.source)}" <${this.graphIri}> .`);
    for (const [k, v] of Object.entries(meta)) {
      if (v === null || v === void 0 || v === "") continue;
      if (Array.isArray(v)) {
        for (const item of v) this.lines.push(`${s} <${NS}${k}> "${esc(String(item))}" <${this.graphIri}> .`);
      } else {
        this.lines.push(`${s} <${NS}${k}> "${esc(String(v))}" <${this.graphIri}> .`);
      }
    }
  }
  edge(src, tgt, rel = "contains") {
    this.lines.push(`<${this.iri(src)}> <${NS}${rel}> <${this.iri(tgt)}> <${this.graphIri}> .`);
  }
  get counts() {
    return { statements: this.lines.length };
  }
  /** Emitted statements — read by delta mode to splice into an existing graph. */
  get emitted() {
    return this.lines;
  }
  /** Sanitized node-IRI prefix — needed by delta mode to match graph lines. */
  get project() {
    return this.proj;
  }
  /** Atomic write into <root>/graphs/<platform>-<scopeId>.nq-style path. */
  write(outFile) {
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    const tmp = outFile + ".tmp";
    fs.writeFileSync(tmp, this.lines.join("\n") + "\n");
    fs.renameSync(tmp, outFile);
    return outFile;
  }
};

// src/lib/delta.ts
var fs2 = __toESM(require("fs"));
var path2 = __toESM(require("path"));
function loadLatestManifest(outRoot, prefix) {
  const dir = path2.join(outRoot, "snapshots");
  if (!fs2.existsSync(dir)) return void 0;
  const names = fs2.readdirSync(dir).filter((n) => n.startsWith(prefix)).sort().reverse();
  for (const name of names) {
    const file = path2.join(dir, name, "manifest.json");
    if (!fs2.existsSync(file)) continue;
    try {
      return JSON.parse(fs2.readFileSync(file, "utf-8"));
    } catch {
    }
  }
  return void 0;
}
function parseRest(line, sEnd) {
  const pStart = line.indexOf("<", sEnd + 1);
  const pEnd = line.indexOf(">", pStart + 1);
  const predicate = line.slice(pStart + 1, pEnd);
  let object = null;
  if (line[pEnd + 2] === "<") {
    const oEnd = line.indexOf(">", pEnd + 3);
    object = line.slice(pEnd + 3, oEnd);
  }
  return { predicate, object };
}
function bumpWatermark(wm, t) {
  if (t && t > wm.watermark) wm.watermark = t;
}
var WATERMARK_SLACK_MS = 5 * 60 * 1e3;

// src/lib/notion-oauth.ts
var http = __toESM(require("http"));
async function loopbackOAuth(opts) {
  const port = opts.port || 8735;
  const redirectUri = `http://localhost:${port}/callback`;
  const authUrl = `https://api.notion.com/v1/oauth/authorize?client_id=${encodeURIComponent(opts.clientId)}&response_type=code&owner=user&redirect_uri=${encodeURIComponent(redirectUri)}`;
  process.stderr.write("\n[notion-oauth] Open this URL to authorize, then pick the workspace:\n");
  process.stderr.write(`
${authUrl}

`);
  const code = await new Promise((resolve2, reject) => {
    const server = http.createServer((req, res2) => {
      const u = new URL(req.url || "", `http://localhost:${port}`);
      if (u.pathname !== "/callback") {
        res2.writeHead(404);
        res2.end();
        return;
      }
      const c = u.searchParams.get("code");
      const err = u.searchParams.get("error");
      res2.writeHead(200, { "Content-Type": "text/html" });
      res2.end(`<html><body style="font-family:system-ui;padding:3rem;text-align:center"><h2>${c ? "Authorized \u2713" : "Authorization failed"}</h2><p>${c ? "You can close this tab and return to the terminal." : err}</p></body></html>`);
      server.close();
      if (c) resolve2(c);
      else reject(new Error(`OAuth error: ${err}`));
    });
    server.on("error", reject);
    server.listen(port, () => process.stderr.write(`[notion-oauth] waiting for callback on ${redirectUri} ...
`));
    setTimeout(() => {
      server.close();
      reject(new Error("OAuth timed out (5 min)"));
    }, 3e5);
  });
  const basic = Buffer.from(`${opts.clientId}:${opts.clientSecret}`).toString("base64");
  const res = await fetch("https://api.notion.com/v1/oauth/token", {
    method: "POST",
    headers: { "Authorization": `Basic ${basic}`, "Content-Type": "application/json", "Notion-Version": "2022-06-28" },
    body: JSON.stringify({ grant_type: "authorization_code", code, redirect_uri: redirectUri })
  });
  if (!res.ok) throw new Error(`token exchange failed ${res.status}: ${(await res.text()).slice(0, 300)}`);
  const tok = await res.json();
  return {
    access_token: tok.access_token,
    workspace_id: tok.workspace_id,
    workspace_name: tok.workspace_name || "workspace",
    bot_id: tok.bot_id
  };
}

// src/notion/content.ts
function renderValue(prop) {
  if (!prop || !prop.type) return "";
  const t = prop.type;
  const v = prop[t];
  switch (t) {
    case "title":
    case "rich_text":
      return (v || []).map((r) => r.plain_text || "").join("");
    case "number":
      return v == null ? "" : String(v);
    case "select":
      return v?.name || "";
    case "status":
      return v?.name || "";
    case "multi_select":
      return (v || []).map((o) => o.name).join(", ");
    case "date":
      return v ? [v.start, v.end].filter(Boolean).join(" \u2192 ") : "";
    case "checkbox":
      return v ? "true" : "false";
    case "url":
    case "email":
    case "phone_number":
      return v || "";
    case "people":
      return (v || []).map((p) => p.name || p.id).join(", ");
    case "files":
      return (v || []).map((f) => f.name).join(", ");
    case "relation":
      return (v || []).map((r) => r.id).join(", ");
    case "rollup":
      if (v?.type === "array") return (v.array || []).map((x) => renderValue({ type: x.type, [x.type]: x[x.type] })).join(", ");
      return v?.[v?.type] != null ? String(v[v.type]) : "";
    case "formula":
      return v?.[v?.type] != null ? String(v[v.type]) : "";
    case "created_time":
    case "last_edited_time":
      return v || "";
    case "created_by":
    case "last_edited_by":
      return v?.name || v?.id || "";
    case "unique_id":
      return v ? `${v.prefix ? v.prefix + "-" : ""}${v.number}` : "";
    default:
      return "";
  }
}
function rowFromPage(page, stampProp) {
  const values = {};
  let title = "";
  for (const [name, prop] of Object.entries(page.properties || {})) {
    const text = renderValue(prop);
    if (prop.type === "title") title = text;
    if (text) values[name] = text;
  }
  return {
    id: page.id,
    title: title || "(untitled)",
    url: page.url,
    values,
    lastEdited: page.last_edited_time,
    stamp: stampProp ? page.properties?.[stampProp]?.date?.start || void 0 : void 0
  };
}
async function extractRecords(api2, dbId, cap, sleep2, stampProp) {
  const rows = [];
  let cursor;
  do {
    const body = { page_size: 100 };
    if (cursor) body.start_cursor = cursor;
    const res = await api2("POST", `/databases/${dbId}/query`, body);
    for (const page of res.results || []) rows.push(rowFromPage(page, stampProp));
    cursor = res.has_more ? res.next_cursor : void 0;
    await sleep2(200);
  } while (cursor && rows.length < cap);
  return rows.slice(0, cap);
}
var TEXT_BLOCKS = /* @__PURE__ */ new Set([
  "paragraph",
  "heading_1",
  "heading_2",
  "heading_3",
  "bulleted_list_item",
  "numbered_list_item",
  "to_do",
  "quote",
  "callout",
  "toggle",
  "code"
]);
async function extractPageText(api2, blockId, sleep2, opts = {}) {
  const maxBlocks = opts.maxBlocks ?? 400;
  const maxDepth = opts.maxDepth ?? 3;
  const out = [];
  let count = 0;
  async function walk(id, depth) {
    if (count >= maxBlocks || depth > maxDepth) return;
    let cursor;
    do {
      const res = await api2("GET", `/blocks/${id}/children?page_size=100${cursor ? `&start_cursor=${cursor}` : ""}`);
      for (const block of res.results || []) {
        if (count >= maxBlocks) break;
        if (opts.skip?.(block.id)) continue;
        const t = block.type;
        if (TEXT_BLOCKS.has(t)) {
          const rich = block[t]?.rich_text || [];
          const line = rich.map((r) => r.plain_text || "").join("");
          if (line.trim()) {
            out.push(line);
            count++;
          }
        }
        if (block.has_children && count < maxBlocks) await walk(block.id, depth + 1);
      }
      cursor = res.has_more ? res.next_cursor : void 0;
      await sleep2(200);
    } while (cursor && count < maxBlocks);
  }
  await walk(blockId, 0);
  return out.join("\n");
}

// src/notion/snapshot.ts
var API = "https://api.notion.com/v1";
var VERSION = "2022-06-28";
var TOKEN = process.env.NOTION_TOKEN || "";
var PAGE_CAP = 300;
var DB_CAP = 500;
var RECORD_CAP = 5e3;
var CONTENT = process.argv.includes("--content") || process.argv.includes("--full");
var SINCE = process.argv.includes("--since");
var STAMP_BACKFILL = process.argv.includes("--stamp-backfill");
var argv = process.argv.slice(2);
function arg(name) {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 ? argv[i + 1] : void 0;
}
var STAMP_PROP = arg("stamp-prop");
function log(msg) {
  process.stderr.write(`[notion-snapshot] ${msg}
`);
}
var normId = (s) => String(s).toLowerCase().replace(/-/g, "");
function idSet(file, label) {
  if (!file) return null;
  const raw = JSON.parse(fs3.readFileSync(file, "utf-8"));
  const ids = Array.isArray(raw) ? raw : raw.ids || [];
  log(`curation: ${label} list loaded (${ids.length} root ids)`);
  return new Set(ids.map(normId));
}
var sleep = (ms) => new Promise((r) => setTimeout(r, ms));
var API_CALLS = 0;
async function api(method, endpoint, body) {
  API_CALLS++;
  const res = await fetch(`${API}${endpoint}`, {
    method,
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "Notion-Version": VERSION,
      "Content-Type": "application/json"
    },
    body: body ? JSON.stringify(body) : void 0
  });
  if (res.status === 429) {
    const wait = parseInt(res.headers.get("retry-after") || "2", 10) * 1e3;
    log(`rate limited \u2014 waiting ${wait}ms`);
    await sleep(wait);
    return api(method, endpoint, body);
  }
  if (!res.ok) throw new Error(`${method} ${endpoint} \u2192 ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return res.json();
}
async function paginateSearch(filterValue, cap) {
  const all = [];
  let cursor;
  do {
    const body = { filter: { property: "object", value: filterValue }, page_size: 100 };
    if (cursor) body.start_cursor = cursor;
    const res = await api("POST", "/search", body);
    all.push(...res.results || []);
    cursor = res.has_more ? res.next_cursor : void 0;
    await sleep(150);
  } while (cursor && all.length < cap);
  return all.slice(0, cap);
}
function plainTitle(rich) {
  return (rich || []).map((r) => r.plain_text || "").join("") || "(untitled)";
}
var rowStamp = (page) => STAMP_PROP ? page.properties?.[STAMP_PROP]?.date?.start || void 0 : void 0;
function emitDatabase(g, root, db, hasDb) {
  const dbId = db.id;
  g.node(`database_${dbId}`, plainTitle(db.title), "NotionDatabase", {
    notionId: dbId,
    url: db.url,
    inline: db.is_inline,
    archived: db.archived
  });
  g.edge(root, `database_${dbId}`);
  for (const [propName, prop] of Object.entries(db.properties || {})) {
    const pid = `${dbId}_${prop.id}`;
    const meta = { notionId: prop.id, propType: prop.type };
    if (prop.type === "select" || prop.type === "multi_select" || prop.type === "status") {
      meta.options = (prop[prop.type]?.options || []).map((o) => o.name).slice(0, 50);
    }
    if (prop.type === "formula") meta.expression = (prop.formula?.expression || "").slice(0, 200);
    g.node(`property_${pid}`, propName, "NotionProperty", meta);
    g.edge(`database_${dbId}`, `property_${pid}`);
    const targetDb = prop.relation?.database_id;
    if (targetDb && hasDb(targetDb)) {
      g.edge(`property_${pid}`, `database_${targetDb}`, "relatedTo");
    }
    const rollupRel = prop.rollup?.relation_property_id;
    if (rollupRel) g.edge(`property_${pid}`, `property_${dbId}_${rollupRel}`, "relatedTo");
  }
}
function emitRecord(g, dbId, r) {
  const body = Object.entries(r.values).map(([k, v]) => `${k}: ${v}`).join(" | ");
  g.node(`record_${r.id}`, r.title, "NotionRecord", {
    notionId: r.id,
    url: r.url,
    values: body,
    ...Object.fromEntries(Object.entries(r.values).map(([k, v]) => [`v_${k.replace(/[^A-Za-z0-9]/g, "_")}`, v]))
  });
  g.edge(`database_${dbId}`, `record_${r.id}`);
}
async function emitPage(g, root, p, errors, skip) {
  const meta = { notionId: p.id, url: p.url, archived: p.archived };
  if (CONTENT) {
    try {
      const text = await extractPageText(api, p.id, sleep, skip ? { skip } : {});
      if (text) meta.content = text;
    } catch (e) {
      errors[`page-content:${p.id}`] = String(e?.message).slice(0, 150);
    }
  }
  g.node(`page_${p.id}`, plainTitle(p.properties?.title?.title || p.properties?.Name?.title), "NotionPage", meta);
  g.edge(root, `page_${p.id}`);
}
async function searchChangedSince(thresholdIso) {
  const changed = [];
  let cursor;
  let done = false;
  do {
    const body = { sort: { timestamp: "last_edited_time", direction: "descending" }, page_size: 100 };
    if (cursor) body.start_cursor = cursor;
    const res = await api("POST", "/search", body);
    for (const r of res.results || []) {
      if ((r.last_edited_time || "") > thresholdIso) changed.push(r);
      else {
        done = true;
        break;
      }
    }
    cursor = !done && res.has_more ? res.next_cursor : void 0;
    if (cursor) await sleep(150);
  } while (cursor);
  return changed;
}
async function queryChangedRows(dbId, thresholdIso, stampLeg) {
  const editedLeg = { timestamp: "last_edited_time", last_edited_time: { after: thresholdIso } };
  const filter = stampLeg && STAMP_PROP ? { or: [editedLeg, { property: STAMP_PROP, date: { after: thresholdIso } }] } : editedLeg;
  const rows = [];
  let cursor;
  do {
    const body = { filter, page_size: 100 };
    if (cursor) body.start_cursor = cursor;
    const res = await api("POST", `/databases/${dbId}/query`, body);
    rows.push(...res.results || []);
    cursor = res.has_more ? res.next_cursor : void 0;
    await sleep(200);
  } while (cursor && rows.length < RECORD_CAP);
  return rows;
}
async function deltaSweep(opts) {
  const { slug, wsName, graphFile, snapDir, prevWatermark, prevStampDbs } = opts;
  const t0 = Date.now();
  const apiCalls0 = API_CALLS;
  const thresholdIso = new Date(Date.parse(prevWatermark) - WATERMARK_SLACK_MS).toISOString();
  log(`Delta mode: watermark ${prevWatermark} \u2014 fetching edits after ${thresholdIso}`);
  const errors = {};
  const wm = { watermark: prevWatermark };
  const changed = await searchChangedSince(thresholdIso);
  log(`  search: ${changed.length} changed objects`);
  const changedDbs = /* @__PURE__ */ new Map();
  const removedDbIds = /* @__PURE__ */ new Set();
  const topPages = /* @__PURE__ */ new Map();
  const recordPages = /* @__PURE__ */ new Map();
  const removedPageIds = /* @__PURE__ */ new Set();
  let skippedSubpages = 0;
  for (const r of changed) {
    bumpWatermark(wm, r.last_edited_time);
    const gone = r.archived || r.in_trash;
    if (r.object === "database") {
      if (gone) removedDbIds.add(r.id);
      else changedDbs.set(r.id, null);
    } else if (r.object === "page") {
      const pt = r.parent?.type;
      if (gone) removedPageIds.add(r.id);
      else if (pt === "workspace") topPages.set(r.id, r);
      else if (pt === "database_id") recordPages.set(r.id, r);
      else skippedSubpages++;
    }
  }
  if (skippedSubpages) log(`  skipped ${skippedSubpages} nested sub-pages (not standalone graph entities in a full sweep)`);
  for (const dbId of [...changedDbs.keys()]) {
    try {
      changedDbs.set(dbId, await api("GET", `/databases/${dbId}`));
    } catch (e) {
      errors[`database:${dbId}`] = String(e?.message).slice(0, 200);
      changedDbs.delete(dbId);
    }
    await sleep(150);
  }
  const stampDbs = new Set(prevStampDbs);
  if (STAMP_PROP) {
    for (const [dbId, db] of changedDbs) {
      if (db.properties?.[STAMP_PROP]) stampDbs.add(dbId);
      else stampDbs.delete(dbId);
    }
  }
  for (const dbId of removedDbIds) stampDbs.delete(dbId);
  const processRow = (page) => {
    bumpWatermark(wm, page.last_edited_time);
    bumpWatermark(wm, rowStamp(page));
    if (page.archived || page.in_trash) {
      removedPageIds.add(page.id);
      recordPages.delete(page.id);
    } else {
      recordPages.set(page.id, page);
    }
  };
  if (CONTENT) {
    for (const [dbId, db] of changedDbs) {
      try {
        const rows = await queryChangedRows(dbId, thresholdIso, !!(STAMP_PROP && db.properties?.[STAMP_PROP]));
        rows.forEach(processRow);
      } catch (e) {
        errors[`records:${dbId}`] = String(e?.message).slice(0, 200);
      }
    }
    for (const dbId of stampDbs) {
      if (changedDbs.has(dbId)) continue;
      try {
        const rows = await queryChangedRows(dbId, thresholdIso, true);
        rows.forEach(processRow);
      } catch (e) {
        errors[`stamp-records:${dbId}`] = String(e?.message).slice(0, 200);
      }
    }
  } else if (recordPages.size) {
    log(`  structure depth: ignoring ${recordPages.size} changed database rows (records exist only in --content graphs)`);
    recordPages.clear();
  }
  const totalChanged = changedDbs.size + removedDbIds.size + topPages.size + recordPages.size + removedPageIds.size;
  if (!totalChanged) {
    log(`No changes since watermark \u2014 graph untouched (${API_CALLS - apiCalls0} API requests, ${((Date.now() - t0) / 1e3).toFixed(1)}s)`);
    return;
  }
  const g = new GraphWriter("notion", slug, `notion_${slug}`);
  const root = `workspace_${slug}`;
  const containsPred = `${NS}contains`;
  const dbTypeIri = `${NS}NotionDatabase`;
  const recordIriPrefix = `${CODE}${g.project}_record_`;
  const dropSubjects = /* @__PURE__ */ new Set();
  const changedDbIris = /* @__PURE__ */ new Set();
  const removedDbIris = /* @__PURE__ */ new Set();
  const dropPageIris = /* @__PURE__ */ new Set();
  const propPrefixes = [];
  for (const dbId of changedDbs.keys()) {
    const iri = g.iri(`database_${dbId}`);
    dropSubjects.add(iri);
    changedDbIris.add(iri);
    propPrefixes.push(`${CODE}${g.project}_property_${sanitize(dbId)}_`);
  }
  for (const dbId of removedDbIds) {
    const iri = g.iri(`database_${dbId}`);
    dropSubjects.add(iri);
    removedDbIris.add(iri);
    propPrefixes.push(`${CODE}${g.project}_property_${sanitize(dbId)}_`);
  }
  for (const id of /* @__PURE__ */ new Set([...topPages.keys(), ...recordPages.keys(), ...removedPageIds])) {
    for (const kind of ["page_", "record_"]) {
      const iri = g.iri(kind + id);
      dropSubjects.add(iri);
      dropPageIris.add(iri);
    }
  }
  const knownDbIris = new Set(changedDbIris);
  const kept = [];
  let dropped = 0;
  for (const line of fs3.readFileSync(graphFile, "utf-8").split("\n")) {
    if (!line) continue;
    const sEnd = line.indexOf(">");
    const subject = line.slice(1, sEnd);
    let keep = true;
    if (dropSubjects.has(subject)) {
      if (changedDbIris.has(subject)) {
        const { predicate, object } = parseRest(line, sEnd);
        keep = predicate === containsPred && !!object && object.startsWith(recordIriPrefix) && !dropPageIris.has(object);
      } else {
        keep = false;
      }
    } else if (propPrefixes.some((p) => subject.startsWith(p))) {
      keep = false;
    } else {
      const { predicate, object } = parseRest(line, sEnd);
      if (object) {
        if (predicate === RDF_TYPE && object === dbTypeIri) knownDbIris.add(subject);
        if (dropPageIris.has(object) || removedDbIris.has(object)) keep = false;
        else if (changedDbIris.has(object) && predicate === containsPred) keep = false;
      }
    }
    if (keep) kept.push(line);
    else dropped++;
  }
  const hasDb = (id) => knownDbIris.has(g.iri(`database_${id}`));
  for (const db of changedDbs.values()) emitDatabase(g, root, db, hasDb);
  let orphanRecords = 0;
  for (const page of recordPages.values()) {
    const dbId = page.parent?.database_id;
    if (!dbId || !hasDb(dbId)) {
      orphanRecords++;
      continue;
    }
    emitRecord(g, dbId, rowFromPage(page, STAMP_PROP));
  }
  if (orphanRecords) log(`  skipped ${orphanRecords} changed records whose database is not in the graph`);
  for (const p of topPages.values()) await emitPage(g, root, p, errors);
  const out = kept.concat(g.emitted);
  const tmp = graphFile + ".tmp";
  fs3.writeFileSync(tmp, out.join("\n") + "\n");
  fs3.renameSync(tmp, graphFile);
  fs3.mkdirSync(snapDir, { recursive: true });
  fs3.writeFileSync(path3.join(snapDir, "manifest.json"), JSON.stringify({
    tool: "platform-graphs notion-snapshot",
    version: 1,
    generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    workspace: wsName,
    slug,
    mode: "delta",
    since: prevWatermark,
    counts: {
      databasesChanged: changedDbs.size,
      recordsChanged: recordPages.size,
      pagesChanged: topPages.size,
      removed: removedDbIds.size + removedPageIds.size
    },
    linesDropped: dropped,
    linesAppended: g.emitted.length,
    statements: out.length,
    watermark: wm.watermark,
    stampProp: STAMP_PROP ?? null,
    stampDbs: [...stampDbs],
    errors
  }, null, 2));
  log(`Graph patched: ${graphFile}`);
  log(`Delta done \u2014 ${changedDbs.size} databases, ${recordPages.size} records, ${topPages.size} pages refreshed; ${removedDbIds.size + removedPageIds.size} removed; ${dropped} lines dropped, ${g.emitted.length} appended (${API_CALLS - apiCalls0} API requests, ${((Date.now() - t0) / 1e3).toFixed(1)}s)`);
}
async function main() {
  if (argv.includes("--help") || argv.includes("-h")) {
    process.stdout.write(`Usage: notion-snapshot.cjs [options]

  --oauth                 authorize via browser loopback (needs --client-id/--client-secret or env)
  --client-id <id>        Notion OAuth client id (or NOTION_CLIENT_ID)
  --client-secret <sec>   Notion OAuth client secret (or NOTION_CLIENT_SECRET)
  --token-file <path>     read a saved access token (or NOTION_TOKEN env)
  --token-out <path>      where --oauth saves the token (default: <out>/.notion-token)
  --content | --full      content depth: database records + page body text
  --since                 incremental refresh: fetch only entities edited since the last
                          sweep's manifest watermark and patch the existing graph in place
                          (falls back to a full sweep if no watermark/graph exists)
  --stamp-prop <name>     operator-owned change-stamp Date property. Deltas OR it with
                          the built-in last_edited_time (which does NOT advance on API
                          property edits) and always re-query databases that carry it
  --stamp-backfill        full sweep only: rows whose stamp property is empty get it
                          initialized to the row's built-in last_edited_time (writes!)
  --exclude <ids.json>    curation: drop these root ids (full sweep only)
  --include <ids.json>    curation: keep ONLY these root ids (full sweep only)
  --out <dir>             output root for graphs/ and snapshots/ (default: cwd)
  --port <n>              OAuth loopback port (default: 8735)
`);
    return;
  }
  let oauthWsName;
  if (argv.includes("--oauth")) {
    const clientId = process.env.NOTION_CLIENT_ID || arg("client-id");
    const clientSecret = process.env.NOTION_CLIENT_SECRET || arg("client-secret");
    if (!clientId || !clientSecret) {
      log("--oauth needs NOTION_CLIENT_ID and NOTION_CLIENT_SECRET (env or --client-id/--client-secret)");
      process.exit(1);
    }
    const result = await loopbackOAuth({ clientId, clientSecret, port: parseInt(arg("port") || "8735", 10) });
    TOKEN = result.access_token;
    oauthWsName = result.workspace_name;
    log(`OAuth complete \u2014 workspace: ${result.workspace_name}`);
    const tokenFile = arg("token-out") || path3.join(path3.resolve(arg("out") || "."), ".notion-token");
    try {
      fs3.writeFileSync(tokenFile, result.access_token, { mode: 384 });
      log(`Access token saved: ${tokenFile} (reuse with --token-file, keep private)`);
    } catch {
    }
  }
  const tokenFileArg = arg("token-file");
  if (!argv.includes("--oauth") && tokenFileArg && fs3.existsSync(tokenFileArg)) {
    TOKEN = fs3.readFileSync(tokenFileArg, "utf-8").trim();
    log(`Using saved access token from ${tokenFileArg}`);
  }
  if (!TOKEN) {
    log("Provide NOTION_TOKEN (access token), --token-file <path>, or run with --oauth (+ client id/secret)");
    process.exit(1);
  }
  const me = await api("GET", "/users/me");
  const wsName = oauthWsName || me?.bot?.workspace_name || "workspace";
  const slug = wsName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "workspace";
  log(`Workspace: ${wsName} (${slug})`);
  const outRoot = path3.resolve(arg("out") || ".");
  const stamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[:T]/g, "-").slice(0, 16);
  const snapDir = path3.join(outRoot, "snapshots", `notion-${slug}-${stamp}`);
  const graphFile = path3.join(outRoot, "graphs", `notion-${slug}.nq`);
  const excludeIds = idSet(arg("exclude"), "exclude");
  const includeIds = idSet(arg("include"), "include");
  const keepRoot = (id) => {
    const n = normId(id);
    if (excludeIds?.has(n)) return false;
    if (includeIds && !includeIds.has(n)) return false;
    return true;
  };
  if (SINCE) {
    if (excludeIds || includeIds) {
      log("--since: curation lists require a full sweep \u2014 running full so excluded entities cannot be patched back in");
    } else {
      const prev = loadLatestManifest(outRoot, `notion-${slug}-`);
      if (!prev || !prev.watermark) {
        log("--since: no watermark in the most recent manifest \u2014 falling back to full sweep");
      } else if (!fs3.existsSync(graphFile)) {
        log(`--since: graph file missing (${graphFile}) \u2014 falling back to full sweep`);
      } else {
        if (STAMP_PROP && !prev.stampDbs) {
          log("--since: no stampDbs in manifest yet \u2014 stamp coverage limited to search-flagged databases until the next full sweep");
        }
        await deltaSweep({ slug, wsName, graphFile, snapDir, prevWatermark: prev.watermark, prevStampDbs: prev.stampDbs || [] });
        return;
      }
    }
  }
  fs3.mkdirSync(snapDir, { recursive: true });
  const errors = {};
  const wm = { watermark: "" };
  const stampDbs = [];
  let backfilled = 0;
  log("Sweeping databases...");
  const dbStubs = (await paginateSearch("database", DB_CAP)).filter((s) => keepRoot(s.id));
  const databases = [];
  for (const stub of dbStubs) {
    try {
      databases.push(await api("GET", `/databases/${stub.id}`));
    } catch (e) {
      errors[`database:${stub.id}`] = String(e?.message).slice(0, 200);
    }
    await sleep(150);
  }
  log(`  ${databases.length} databases (${dbStubs.length} found)`);
  log("Sweeping top-level pages...");
  const pages = (await paginateSearch("page", PAGE_CAP * 3)).filter((p) => p.parent?.type === "workspace").filter((p) => keepRoot(p.id)).slice(0, PAGE_CAP);
  log(`  ${pages.length} workspace-level pages`);
  if (excludeIds || includeIds) {
    log(`curation: root cut active \u2014 ${databases.length} databases, ${pages.length} pages survive`);
  }
  log("Sweeping users...");
  let users = [];
  try {
    let cursor;
    do {
      const res = await api("GET", `/users?page_size=100${cursor ? `&start_cursor=${cursor}` : ""}`);
      users.push(...res.results || []);
      cursor = res.has_more ? res.next_cursor : void 0;
    } while (cursor);
  } catch (e) {
    errors["users"] = String(e?.message).slice(0, 200);
  }
  log(`  ${users.length} users`);
  const g = new GraphWriter("notion", slug, `notion_${slug}`);
  const root = `workspace_${slug}`;
  g.node(root, `Notion Workspace: ${wsName}`, "NotionWorkspace", { name: wsName });
  const dbIds = new Set(databases.map((d) => d.id));
  for (const db of databases) {
    bumpWatermark(wm, db.last_edited_time);
    if (STAMP_PROP && db.properties?.[STAMP_PROP]) stampDbs.push(db.id);
    emitDatabase(g, root, db, (id) => dbIds.has(id));
  }
  const dropId = (id) => excludeIds?.has(normId(id)) ?? false;
  for (const db of databases) {
    if (!CONTENT) break;
    try {
      const rows = (await extractRecords(api, db.id, RECORD_CAP, sleep, STAMP_PROP)).filter((r) => !dropId(r.id));
      log(`  records: ${rows.length} in "${plainTitle(db.title)}"`);
      const dbHasStamp = !!(STAMP_PROP && db.properties?.[STAMP_PROP]);
      let filled = 0;
      for (const r of rows) {
        if (STAMP_BACKFILL && dbHasStamp && !r.stamp && r.lastEdited) {
          try {
            await api("PATCH", `/pages/${r.id}`, { properties: { [STAMP_PROP]: { date: { start: r.lastEdited } } } });
            r.stamp = r.lastEdited;
            r.values[STAMP_PROP] = r.lastEdited;
            filled++;
            backfilled++;
            await sleep(150);
          } catch (e) {
            errors[`stamp-backfill:${r.id}`] = String(e?.message).slice(0, 150);
          }
        }
        bumpWatermark(wm, r.lastEdited);
        bumpWatermark(wm, r.stamp);
        emitRecord(g, db.id, r);
      }
      if (filled) log(`  stamp backfill: ${filled} rows initialized in "${plainTitle(db.title)}"`);
    } catch (e) {
      errors[`records:${db.id}`] = String(e?.message).slice(0, 200);
    }
  }
  for (const p of pages) {
    bumpWatermark(wm, p.last_edited_time);
    await emitPage(g, root, p, errors, dropId);
  }
  for (const u of users) {
    g.node(`user_${u.id}`, u.name || u.id, "NotionUser", { notionId: u.id, userType: u.type });
    g.edge(root, `user_${u.id}`);
  }
  g.write(graphFile);
  fs3.writeFileSync(path3.join(snapDir, "structure.json"), JSON.stringify({ databases, pages, users }, null, 1));
  fs3.writeFileSync(path3.join(snapDir, "manifest.json"), JSON.stringify({
    tool: "platform-graphs notion-snapshot",
    version: 1,
    generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    workspace: wsName,
    slug,
    counts: { databases: databases.length, pages: pages.length, users: users.length },
    curation: excludeIds || includeIds ? { excluded: excludeIds ? excludeIds.size : 0, includeOnly: includeIds ? includeIds.size : 0 } : null,
    statements: g.counts.statements,
    watermark: wm.watermark || null,
    stampProp: STAMP_PROP ?? null,
    stampDbs,
    backfilled,
    errors
  }, null, 2));
  log(`Graph emitted: ${graphFile}`);
  log(`Done \u2014 ${databases.length} databases, ${pages.length} pages, ${users.length} users${backfilled ? `, ${backfilled} stamps backfilled` : ""}${Object.keys(errors).length ? `, ${Object.keys(errors).length} errors` : ""}`);
}
main().catch((e) => {
  log(`FATAL: ${e?.message || e}`);
  process.exit(1);
});
