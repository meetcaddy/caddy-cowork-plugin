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
var fs2 = __toESM(require("fs"));
var path2 = __toESM(require("path"));

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
  /** Atomic write into <root>/graphs/<platform>-<scopeId>.nq-style path. */
  write(outFile) {
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    const tmp = outFile + ".tmp";
    fs.writeFileSync(tmp, this.lines.join("\n") + "\n");
    fs.renameSync(tmp, outFile);
    return outFile;
  }
};

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
async function extractRecords(api2, dbId, cap, sleep2) {
  const rows = [];
  let cursor;
  do {
    const body = { page_size: 100 };
    if (cursor) body.start_cursor = cursor;
    const res = await api2("POST", `/databases/${dbId}/query`, body);
    for (const page of res.results || []) {
      const values = {};
      let title = "";
      for (const [name, prop] of Object.entries(page.properties || {})) {
        const text = renderValue(prop);
        if (prop.type === "title") title = text;
        if (text) values[name] = text;
      }
      rows.push({ id: page.id, title: title || "(untitled)", url: page.url, values });
    }
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
var argv = process.argv.slice(2);
function arg(name) {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 ? argv[i + 1] : void 0;
}
function log(msg) {
  process.stderr.write(`[notion-snapshot] ${msg}
`);
}
var normId = (s) => String(s).toLowerCase().replace(/-/g, "");
function idSet(file, label) {
  if (!file) return null;
  const raw = JSON.parse(fs2.readFileSync(file, "utf-8"));
  const ids = Array.isArray(raw) ? raw : raw.ids || [];
  log(`curation: ${label} list loaded (${ids.length} root ids)`);
  return new Set(ids.map(normId));
}
var sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function api(method, endpoint, body) {
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
async function main() {
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
    const tokenFile = arg("token-out") || path2.join(path2.resolve(arg("out") || "."), ".notion-token");
    try {
      fs2.writeFileSync(tokenFile, result.access_token, { mode: 384 });
      log(`Access token saved: ${tokenFile} (reuse with --token-file, keep private)`);
    } catch {
    }
  }
  const tokenFileArg = arg("token-file");
  if (!argv.includes("--oauth") && tokenFileArg && fs2.existsSync(tokenFileArg)) {
    TOKEN = fs2.readFileSync(tokenFileArg, "utf-8").trim();
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
  const outRoot = path2.resolve(arg("out") || ".");
  const stamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[:T]/g, "-").slice(0, 16);
  const snapDir = path2.join(outRoot, "snapshots", `notion-${slug}-${stamp}`);
  fs2.mkdirSync(snapDir, { recursive: true });
  const errors = {};
  const excludeIds = idSet(arg("exclude"), "exclude");
  const includeIds = idSet(arg("include"), "include");
  const keepRoot = (id) => {
    const n = normId(id);
    if (excludeIds?.has(n)) return false;
    if (includeIds && !includeIds.has(n)) return false;
    return true;
  };
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
      if (targetDb && dbIds.has(targetDb)) {
        g.edge(`property_${pid}`, `database_${targetDb}`, "relatedTo");
      }
      const rollupRel = prop.rollup?.relation_property_id;
      if (rollupRel) g.edge(`property_${pid}`, `property_${dbId}_${rollupRel}`, "relatedTo");
    }
  }
  const dropId = (id) => excludeIds?.has(normId(id)) ?? false;
  for (const db of databases) {
    if (!CONTENT) break;
    try {
      const rows = (await extractRecords(api, db.id, RECORD_CAP, sleep)).filter((r) => !dropId(r.id));
      log(`  records: ${rows.length} in "${plainTitle(db.title)}"`);
      for (const r of rows) {
        const body = Object.entries(r.values).map(([k, v]) => `${k}: ${v}`).join(" | ");
        g.node(`record_${r.id}`, r.title, "NotionRecord", {
          notionId: r.id,
          url: r.url,
          values: body,
          ...Object.fromEntries(Object.entries(r.values).map(([k, v]) => [`v_${k.replace(/[^A-Za-z0-9]/g, "_")}`, v]))
        });
        g.edge(`database_${db.id}`, `record_${r.id}`);
      }
    } catch (e) {
      errors[`records:${db.id}`] = String(e?.message).slice(0, 200);
    }
  }
  for (const p of pages) {
    const meta = { notionId: p.id, url: p.url, archived: p.archived };
    if (CONTENT) {
      try {
        const text = await extractPageText(api, p.id, sleep, { skip: dropId });
        if (text) meta.content = text;
      } catch (e) {
        errors[`page-content:${p.id}`] = String(e?.message).slice(0, 150);
      }
    }
    g.node(`page_${p.id}`, plainTitle(p.properties?.title?.title || p.properties?.Name?.title), "NotionPage", meta);
    g.edge(root, `page_${p.id}`);
  }
  for (const u of users) {
    g.node(`user_${u.id}`, u.name || u.id, "NotionUser", { notionId: u.id, userType: u.type });
    g.edge(root, `user_${u.id}`);
  }
  const graphFile = path2.join(outRoot, "graphs", `notion-${slug}.nq`);
  g.write(graphFile);
  fs2.writeFileSync(path2.join(snapDir, "structure.json"), JSON.stringify({ databases, pages, users }, null, 1));
  fs2.writeFileSync(path2.join(snapDir, "manifest.json"), JSON.stringify({
    tool: "platform-graphs notion-snapshot",
    version: 1,
    generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    workspace: wsName,
    slug,
    counts: { databases: databases.length, pages: pages.length, users: users.length },
    curation: excludeIds || includeIds ? { excluded: excludeIds ? excludeIds.size : 0, includeOnly: includeIds ? includeIds.size : 0 } : null,
    statements: g.counts.statements,
    errors
  }, null, 2));
  log(`Graph emitted: ${graphFile}`);
  log(`Done \u2014 ${databases.length} databases, ${pages.length} pages, ${users.length} users${Object.keys(errors).length ? `, ${Object.keys(errors).length} errors` : ""}`);
}
main().catch((e) => {
  log(`FATAL: ${e?.message || e}`);
  process.exit(1);
});
