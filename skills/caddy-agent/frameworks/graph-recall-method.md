# Graph-recall method

How to turn a plain-language question into a grounded, cited answer against the local graph.

## The loop
1. **Locate** — pull the key entities/terms from the question; `search` each (add `--type` when
   the question implies a class). Rank the hits.
2. **Traverse** — for relational questions ("who owns…", "what's affected by…", "how does X
   connect to Y"), run `neighbors` on the strongest hits (1 hop for direct, 2 for chains).
3. **Read** — where full detail matters, `node` the entity to get all properties + source.
4. **Synthesize** — one direct answer, exec-paced. **Cite the `source` of every record used.**

## Discipline (non-negotiable)
- **Never invent.** If the queries return nothing relevant, say *"the graph doesn't contain that"*
  — do not fill the gap from general knowledge. Trust is the product.
- **Cite everything.** An uncited claim is a bug. Attach the `source` (file path / doc) to each fact.
- **Relationships first.** Reach for how things connect, not just what mentions a keyword — that's
  the difference between this and a document search.

## When to use which command
- Broad "what do we know about X" → `search`, then `explore` the best hit.
- "Who / what connects to X" → `explore` (neighbors).
- "Give me everything on X" → `entity` (node).
- "What's even in here" → `schema`.

## Scale note
`graphq.py` is pure-stdlib and loads the whole graph per call (fast to ~mid-six-figure quads).
For very large client graphs, a SPARQL/pyoxigraph tier is the future upgrade — same commands,
same output shape.
