---
name: analyzing-art-books
description: "Turn one art book or a defined book batch into a consistent, page-referenced teaching analysis for later cross-book synthesis."
---

# Analyze art books

**Preferred worker: Luna Max** (`gpt-6-luna` at max reasoning when selectable). Use the same analysis structure across parallel books so Sol can compare them without re-reading raw material. This follows the project's objective to lower aggregate token/compute cost by routing high-volume work to capable Luna workers and reserving Sol for high-leverage reasoning; it is not a measured price claim. The identifier is a task/agent choice, not repository routing configuration.

Use extracted material under `sources/` and return a concise, evidence-backed analysis with:

- **Book metadata:** title, author, edition, and scope reviewed.
- **Teaching philosophy:** what the author emphasizes and how they teach.
- **Concepts:** for each, name, page/chapter references, concise explanation, prerequisites, importance, exercise(s), useful illustration(s), likely difficulty, and potential course relevance.
- **Distinctive methods** and **overlaps** with other available analyses.
- **Useful exercises** and **useful illustrations**, each with page references and a brief note on use.
- **Questionable or dated material:** identify the issue and evidence; do not silently treat it as current consensus.
- **Potential course applications** and unresolved questions.

Separate what the source says from your interpretation. Paraphrase rather than copying long passages, and preserve precise references so Sol can request a targeted re-read. Keep analyses private under `sources/analyses/`; never place book text or scans in public course assets. Follow the shared format in `docs/CONTENT_PIPELINE.md` and `docs/SOURCE_BOOKS.md`.
