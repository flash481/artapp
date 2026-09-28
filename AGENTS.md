# Repository guidance

This is a personal, self-paced drawing course for use beside a sketchbook, especially on iPhone. Phase 1 establishes the app and workflow; do not create the full course until books have been added and analyzed in Phase 2.

## Model routing

Use a lead/worker split whenever model choice is available:

- **Lead: Sol High** (`gpt-6-sol` at high reasoning in the current environment) for orchestration, pedagogy, cross-book synthesis, course architecture and sequence, prerequisite decisions, systemic issues, and senior review.
- **Worker: Luna Max** (`gpt-6-luna` at max reasoning in the current environment) for most reading, extraction, research, implementation, lesson drafts, metadata, assets, tests, and repetitive integration.

These identifiers describe task or agent choices only; do not invent repository-level routing configuration. The project's routing objective is to use capable Luna workers for high-volume work to lower aggregate token/compute cost, reserving Sol for high-leverage reasoning; this is an objective, not a measured price claim. Prefer **Sol plans → Luna executes → Sol reviews important results**. Send Sol compact, structured evidence with page references; use targeted Luna source checks instead of loading whole books into Sol context.

## Learning and privacy

- Design a spiral: introduce, practise, revisit, combine, and independently apply concepts across varied subjects. Do not impose month-long blocks by topic. Teach observational and structural drawing early; stylized subjects can reinforce, not replace, those foundations. Let personal style emerge through exposure and experimentation.
- Keep original books, extracts, analyses, research, private notes, and scratch work under `sources/`; never put them in the public app or deployment. Use only books the learner may lawfully study, preserve provenance, and avoid reproducing books or illustration collections. The app's static password is only a casual viewing barrier, never source protection.
- Keep the app lightweight, data-driven, mobile-first, and comfortable to use while drawing. Lesson content stays independent of UI code; use deterministic diagrams where visual accuracy matters.

## Project map and engineering

Read `docs/PROJECT_VISION.md` for scope; `docs/MODEL_STRATEGY.md` for delegation; `docs/PEDAGOGY.md` and `docs/CURRICULUM.md` for learning design; `docs/CONTENT_PIPELINE.md`, `docs/SOURCE_BOOKS.md`, and `docs/LESSON_SCHEMA.md` for content; `docs/ASSET_STANDARDS.md` and `docs/MASTER_STUDIES.md` for visuals; and `docs/DEPLOYMENT.md` for release steps. Workflow skills live in `.agents/skills/`: book processing/analysis, domain research, curriculum synthesis/authoring/review, visual creation, app implementation, and testing. Folder-specific handoffs are in `sources/AGENTS.md`, `curriculum/AGENTS.md`, and `src/AGENTS.md`.

For app changes, use the repository's available checks (tests, lint, type checks, production build) and inspect mobile layouts and GitHub Pages paths as relevant. Before release, inspect build output to confirm no private source material is included.
