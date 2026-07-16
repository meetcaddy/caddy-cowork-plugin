# Knowledge graph ontology

The graph is RDF N-Quads in the `ops:` namespace (`http://ops-sys.local/ontology#`), stored in
**named graphs** (one per data scope). `graphq.py` matches across all named graphs. A node's
literal properties ARE the citable text — the script reads them directly; it never dereferences a
file path to fetch content.

## How to query well
- **Find entry points** with `search` over text (matches `name`, `noteText`, `summary`,
  `description`, `rationale`, `ruleText`, `criterion`, `purpose`, `path`, `rdfs:label`).
- **Traverse** with `neighbors` to follow relationships out from an entity.
- **Read** a full entity with `node` (all properties + source + incoming links).
- Filter `search` by class with `--type <Class>` when the question implies one.

## Classes seen in base-produced graphs (solo-ops / PM shape)
`Document`, `Decision`, `Project`, `Task`, `Rule`, `Note`, `Domain`, `Handoff`, `Concept`,
`Milestone`, `SemanticEdge` (plus dev-ops types when present: `PaulPlan`, `PaulSummary`,
`AcceptanceCriteria`, `FileChange`).

## Business ontology (for a company/exec graph — the intended shape)
When a client graph is built for a business (not solo-ops), expect entity types like:
`Person`, `Seat`/`Role`, `Team`, `Client`/`Account`, `Contract`/`SLA`, `Process`/`SOP`,
`Policy`, `CoreValue`, `Decision`, `Rock`/`Project`, `Issue`, `Meeting`, `Metric`, `Tool`/`System`.
Relationship predicates: `owns`, `reportsTo`, `responsibleFor`, `serves`, `governedBy`,
`partOf`, `uses`, `decided`, `blocks`, `measures`, plus the base edges below.

## Text predicates (answer content)
`name` · `noteText` · `summary` · `description` · `rationale` · `recall` · `ruleText` ·
`criterion` · `purpose` · `path` · `rdfs:label`

## Relationship predicates (traversal)
`relatedTo` · `references` · `fromPlan` · `belongsTo` · `hasDomain` · `hasRule` ·
`hasDecision` · `hasTask` · `hasMilestone` · `hasGoal` · `blockedBy` · `nextAction` ·
`peerWorkspace` · `hasSection` · reified `SemanticEdge` (`from` / `to` / `relation`)

## Metadata / citation predicates
`status` · `domain` · `sourceFile` (+ `sourceLine`) · `sourceDoc` · `filePath` · `path` ·
`createdAt` · `updatedAt`. `graphq` reads these to produce the `source` shown with each answer.
