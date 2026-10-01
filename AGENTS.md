# Repository guidance

This is a personal, self-paced drawing course for an adult learner working beside a sketchbook, especially on iPhone. The app is lightweight and data-driven; lesson content stays independent of UI code.

## Current curriculum status

- [`curriculum/CORE_DRAWING_MAP.md`](curriculum/CORE_DRAWING_MAP.md) is the single canonical proposed course sequence: 130 lessons, planning only, awaiting human review. It was rebuilt conceptually from a blank Lesson 01; count is not a quota.
- [`curriculum/CORE_DRAWING_REDESIGN.md`](curriculum/CORE_DRAWING_REDESIGN.md) records research, source analysis, synthesis and audits. [`curriculum/CORE_DRAWING_VISUAL_MANIFEST.md`](curriculum/CORE_DRAWING_VISUAL_MANIFEST.md) specifies instructional visuals and prompts.
- Enriched pilot JSON/assets for lessons 01–09 remain unchanged prototype/reference material with historic IDs/order. They do not constrain the proposed sequence; do not infer new lesson content or order from those files.
- Do not author any lesson in the proposed sequence or generate planned images until the learner approves the architecture and production specification.
- All old 72-lesson plans and machine-readable maps are archived under `curriculum/archive/`; historical files are never the current source of truth.

## Model routing

Use a lead/worker split when available:

- **Lead: Sol High** for orchestration, pedagogy, cross-book synthesis, course architecture, prerequisites and senior review.
- **Worker: Luna Max** for high-volume reading, source checks, research, drafting, assets, implementation, metadata and routine QA.

These identifiers guide agent choice only; do not invent repository routing configuration. Give each worker only the project context needed and send page-referenced evidence to the lead.

## Learning and privacy

- Teach graphite/pencil drawing through real, recognizable subjects from the beginning. Use short focused clusters, then apply and revisit concepts across varied subjects. Composition and self-correction remain active strands.
- Observation gathers evidence; construction is provisional and observation corrects it. Teach graphite/tool handling before requiring a mark or effect.
- Keep flowers proportionate. Charcoal, detailed anatomy, botanical drawing, advanced landscape, color media and stylization are specialist-course material.
- Life lessons need low-friction setup and supplied-reference fallback. Figure/portrait tasks do not require another person; use supplied references or self/mirror routes where useful.
- Keep books, extracts, source images, analyses, private research, personal notes and scratch work under `sources/`; never put them in public app assets or deployment. Do not reproduce source prose or illustration collections.
- Prefer deterministic diagrams where geometry requires accuracy. Every deployable visual needs provenance and useful alt text.

## Project map and engineering

Read `docs/PROJECT_VISION.md`, `docs/MODEL_STRATEGY.md`, `docs/PEDAGOGY.md`, `docs/CURRICULUM.md`, `docs/CONTENT_PIPELINE.md`, `docs/SOURCE_BOOKS.md`, `docs/LESSON_SCHEMA.md`, `docs/ASSET_STANDARDS.md`, `docs/MASTER_STUDIES.md` and `docs/DEPLOYMENT.md` as relevant. Folder handoffs live in `curriculum/AGENTS.md`, `sources/AGENTS.md` and `src/AGENTS.md`. Skills are in `.agents/skills/`.

For app changes, use the repository's configured checks, inspect mobile layouts and GitHub Pages paths, and inspect build output to confirm private material is excluded.
