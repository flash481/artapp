# Source materials

## Model handoff

**Default worker: Luna Max** (`gpt-6-luna` at max reasoning when selectable). Use Luna for file inventories, PDF/EPUB extraction, image and caption inventories, first-pass reading, OCR when needed, and structured book analysis. Preserve original files unchanged and keep all outputs private under the appropriate `sources/` subdirectory.

**Sol High** (`gpt-6-sol` at high reasoning when selectable) generally receives concise analyses, not complete books. Escalate when sources conflict, interpretation is uncertain, a pedagogy decision is needed, or a targeted source inspection is requested. If Sol needs more evidence, return to Luna for the relevant pages or chapter and a short evidence-based finding.

These model identifiers express preferred task/agent choices, not repository routing configuration.

## Source workflow

- Put learner-provided originals in `sources/books/`; keep extracted text, analyses, inventories, research, and notes in their corresponding private folders. Do not add source files to `public/`, application content, or deployment output. Keep book files out of Git where possible and follow `docs/SOURCE_BOOKS.md`.
- Inventory title, author, edition, publication details, format, and usable page/chapter references before extraction. Preserve stable page references through extraction; flag scans and OCR uncertainty. OCR only when ordinary extraction is insufficient.
- Record useful figures and captions with page references. Render or extract only selected pages or images needed for analysis; do not copy whole illustration collections.
- Keep originals immutable. Avoid large verbatim passages in working summaries; paraphrase and preserve provenance so a reviewer can locate the source.
