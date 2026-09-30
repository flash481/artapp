# Content pipeline

The following is the future Phase 2 workflow. Start it after the learner adds source books; Phase 1 contains no real course authoring.

## Flow and model roles

1. **Inventory — Luna Max:** list sources, formats, edition details, page counts, illustrations, captions, and scan/OCR needs. Preserve originals.
2. **Extract — Luna Max:** extract searchable text and page/section locators into private `sources/extracted/`. OCR only scanned material that lacks usable text. Keep raw extraction out of the lead's context.
3. **Analyse each book — Luna Max:** use the shared [book-analysis schema](../curriculum/schemas/book-analysis.schema.json) in `sources/analyses/`. Paraphrase teaching ideas, record precise page references, and identify exercises, distinctive methods, useful illustrations, disagreements, and limitations.
4. **Research domains — Luna Max:** produce concise evidence-based reports from book analyses, targeted source checks, and reliable additional research where appropriate. Retain source locators.
5. **Synthesize — Sol High:** compare books and domains, identify consensus and disagreement, resolve pedagogical choices, map concepts and prerequisites, identify gaps, and design one integrated spiral curriculum.
6. **Define objectives — Sol High:** set or approve lesson objectives, fundamental targets, prerequisite links, progression, exercise intent, and where concepts recur.
7. **Draft lessons and assets — Luna Max:** Sol sets objectives, fundamentals, prerequisites, and exercise intent. Before the first real batch, revise the Phase 1 lesson schema's fixture-only lifecycle fields. Then produce lessons in bounded batches using the shared schema; implement most SVGs, references, captions, and provenance records.
8. **Review — Luna then Sol:** Luna checks each lesson and batch for schema, duration, assets, links, metadata, provenance, repetition, and consistency. Sol reviews representative or problematic samples and the overall sequence, progression, source synthesis, and structural gaps.
9. **Correct and integrate — Luna Max:** fix routine findings and integrate accepted lesson and asset changes. Escalate systemic or high-judgement issues to Sol.
10. **Build and privacy check — Luna Max:** run the repository's configured quality checks and inspect deployment output to confirm no original books, raw extracts, private analyses, notes, or unapproved source illustrations are included. Sol reviews systemic failures.

```text
Sol: research plan
  └─ Luna: parallel book inventory, extraction, analysis
       └─ Luna: topic/domain reports
            └─ Sol: cross-book synthesis and course architecture
                 ├─ Luna: bounded lesson batches
                 ├─ Luna: visual assets and provenance
                 └─ Luna: routine QA and corrections
                      └─ Sol: structural and difficult-case review
```

## Evidence and context control

All book analyses should share one structure. Keep book, chapter, page, figure, or other locators precise enough for a targeted follow-up. Send Sol short structured evidence, not entire source text. If a synthesis decision needs verification, Sol requests a narrow source check from Luna. Do not repeatedly supply unrelated repository instructions or put hundreds of pages of extraction in a single agent context.

## Data and privacy boundaries

Original books, raw extracted text, raw book images, private research, analyses, inventories, personal notes, and agent scratch work belong under `sources/` and remain excluded from Git and all build/deploy outputs. Curriculum and deployable assets are separate. Do not copy private source material into the public course. Record the provenance and distribution decision for every selected asset. See [SOURCE_BOOKS.md](SOURCE_BOOKS.md), [ASSET_STANDARDS.md](ASSET_STANDARDS.md), and [DEPLOYMENT.md](DEPLOYMENT.md).
