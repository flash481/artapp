# Content pipeline

## Current starting point

The final 150-lesson architecture remains frozen in [`../curriculum/CORE_DRAWING_MAP.md`](../curriculum/CORE_DRAWING_MAP.md). The architecture is content-complete; production turns its entries into lesson records and visuals without changing order or scope. The production specification and reference/provenance workflow are approved for the bounded pilot Lessons 01–10. Existing enriched pilot JSON/assets remain unchanged prototype/reference material with historic IDs.

Start at [`LESSON_PRODUCTION.md`](LESSON_PRODUCTION.md), which links the canonical template, visual specification, schemas, lifecycle, skills, handoffs, checklists and privacy rules. The current approval/decision ledger is [`PRODUCTION_PILOT_01_10_REVIEW.md`](PRODUCTION_PILOT_01_10_REVIEW.md); it distinguishes pending from completed review outcomes. Do not produce Lessons 11–30 until the learner reviews the pilot and authorizes the next batch.

## Production path

1. Select a bounded canonical entry and check its source evidence using analyses and targeted original pages under private `sources/`.
2. Draft to the production template, active lesson schema and neighboring context. Produce original learner copy; keep optional Read More separate from checked citations.
3. Define only the visual contracts the lesson needs. Generate or construct assets, then request independent image-to-lesson review; keep the generator from approving its own work.
4. Record alt text, inline provenance and a separate asset record for every deployed asset. Use owned fixed-view fallbacks where the map requires them.
5. Run independent lesson QA, resolve findings, check sequence and visual continuity at the relevant group/batch size, and escalate material questions to Sol.
6. Run repository-configured checks and inspect deployment output when the active production task requires app integration. Confirm that private material is excluded.

## Roles and evidence

Use Sol 6.1 at medium reasoning for production architecture, source/pedagogy disputes and senior review; use Luna Max for bounded source checks, lesson drafts, visual work, integration and routine QA when available. Give each worker only the project context needed. Use page-referenced evidence and targeted source checks rather than moving full books into synthesis context. Follow [`MODEL_STRATEGY.md`](MODEL_STRATEGY.md) for broader course work.

## Privacy

Original books, raw extracts/OCR, source images, analyses, private evidence packets, working authoring briefs, research notes and scratch work stay under `sources/`. Do not put excerpts, local source file paths or private notes in committed lesson JSON. All source files remain excluded from public deployment. Do not reproduce book illustrations or source prose. Record provenance and distribution decisions for every deployed asset.
