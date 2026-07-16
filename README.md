# caddy-cowork-plugin

Caddy for Claude Cowork, packaged as a single Claude Code plugin. One install delivers both halves:

- **caddy-mcp** — the MCP server: Caddy portal login (device-code, one click), company graph delivery and refresh, live knowledge writes, account maps, and packages.
- **Caddy Agent** — the skill that administers the server and answers questions from your company's knowledge graph with grounded, cited answers. Onboarding-aware: on a fresh install it walks you from zero to a connected, queryable graph.

## Install

```
/plugin marketplace add meetcaddy/caddy-cowork-plugin
/plugin install caddy-cowork@meetcaddy
```

Restart the session when prompted.

## First run

Say "set up caddy" (or invoke `/caddy-agent onboard`). Caddy Agent handles the rest: it links the device to your portal, pulls your org's graph, and shows you what it can answer.

Credentials land in `~/.caddy/credentials.json`; graphs cache to `~/.caddy/graphs` (override with `GRAPH_DIR`).

## Requirements

- Node 18+ (runs the bundled server — no dependencies to install)
- Python 3 (runs the bundled query engine — stdlib only)
- A Caddy portal seat with at least one org granted
