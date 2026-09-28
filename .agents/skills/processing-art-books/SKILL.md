---
name: processing-art-books
description: "Inventory and extract learner-provided art books into private, page-referenced working material; use before book analysis when source files need preparation."
---

# Process art books

**Preferred worker: Luna Max** (`gpt-6-luna` at max reasoning when selectable). This is high-volume preparation and almost never needs Sol. The project routes high-volume work to capable Luna workers to lower aggregate token/compute cost, reserving Sol for high-leverage reasoning; this is an objective, not a measured price claim. The identifier is a task/agent choice, not repository routing configuration.

Work only with books the learner has supplied and may lawfully study. Preserve originals unchanged in `sources/books/`; place extracted text, inventories, and notes in the matching private `sources/` folders. Never copy source files or raw extraction into the app or deployment.

Inventory format, title, author, edition, publication details, chapters, and available page references. Extract searchable text from PDF or EPUB while retaining stable page/chapter locations. Flag image-only scans and OCR uncertainty; OCR only where normal extraction fails. Inventory useful illustrations and captions with page references, rendering selected pages when needed. Avoid extracting an entire image library or creating a large raw-text dump when a targeted extract will serve.

Follow `docs/SOURCE_BOOKS.md`. Keep summaries concise, preserve provenance, and leave originals in place for later targeted checks.
