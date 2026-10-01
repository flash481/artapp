# Source books and private research

## Where to put books

Place lawfully possessed source books in **`sources/books/`**. Planned supported document formats are **PDF and EPUB**. Scanned PDFs may need OCR; identify whether text extraction is usable and run OCR only where necessary. Preserve original files unchanged. Keep conversion and extraction outputs in the private source area, never in the deployable curriculum or assets.

| Directory | Contents |
|---|---|
| `sources/books/` | Original personal-use PDFs and EPUBs |
| `sources/extracted/` | Private extracted text, page images, OCR, and conversion outputs |
| `sources/analyses/` | Structured book analyses and private evidence summaries |
| `sources/inventories/` | Source, exercise, and illustration inventories |
| `sources/research/` | Private domain research and synthesis working notes |
| `sources/notes/` | Personal notes and agent scratch material |

Use stable book IDs in filenames and records; capture title, author, edition, year, format, and relevant page/section locators. The current Core Drawing map was built from the analyzed learner-provided books. Use targeted page checks for future production rather than reopening broad inventory work. See the [current content pipeline](CONTENT_PIPELINE.md).

## Private handling rules

- Treat every file under `sources/` as private. The repository's ignore rules must cover original formats, extracts, OCR, notes, inventories, analyses, and scratch files. Verify the rules before adding private material.
- Keep `sources/` out of the public application bundle, GitHub Pages artifacts, and any checked-in sample content.
- Never rely on static password protection to secure source material. A client-side app can be inspected and downloaded.
- Analyse lawfully held books by extracting concepts, exercises, page references, and paraphrased teaching summaries. Do not reproduce an entire book, chapter, or illustration library.
- When a source illustration or short extract is relevant to personal study, record exact provenance and keep it private by default. Assess rights and intended distribution before considering any public deployment.
- Prefer original diagrams, newly generated reference images, and public-domain artworks where suitable. Record source links, license or rights basis, and access dates for researched or public-domain material.

## Analysis handoff

Each individual book analysis should follow [`book-analysis.schema.json`](../curriculum/schemas/book-analysis.schema.json). Return compact structured summaries with accurate page/figure references. Sol should receive those summaries and request targeted checks where needed, not ingest every full book by default. Cross-book synthesis and course decisions belong in the Phase 2 pipeline.
