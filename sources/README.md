# Private art-learning sources

Place lawfully possessed source **PDFs and EPUBs** in [`books/`](books/). Scanned PDFs may require OCR; the future pipeline should detect scans and OCR only when searchable text is unavailable. Keep each original unchanged.

All of `sources/` is private and must stay out of Git history and every public build/deployment. Its subdirectories are:

- `books/` — original source books
- `extracted/` — private text, OCR, page images, and conversions
- `analyses/` — structured book analyses
- `inventories/` — source, exercise, and illustration inventories
- `research/` — private domain research
- `notes/` — personal notes and agent scratch work

Do not copy source material into `curriculum/` or public app assets. Analyses should paraphrase and preserve page/section references; do not reproduce whole books or illustration libraries. A static password gate is not source protection. See [`docs/SOURCE_BOOKS.md`](../docs/SOURCE_BOOKS.md) for the full workflow.
