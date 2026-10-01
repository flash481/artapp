# Lesson data contract

Lesson content is independent of application UI. The version 3 machine-readable contract is [`curriculum/schemas/lesson.schema.json`](../curriculum/schemas/lesson.schema.json), and the app consumes lesson JSON from the curriculum area. The contract matches `src/lib/lesson.ts`; the three development fixtures retain the base fields.

## Phase 1 contract

| Field | Purpose |
|---|---|
| `id`, `title` | Stable identity and learner-facing title |
| `durationMinutes`, `difficulty`, `medium`, `materials` | Time, anticipated level, media, and supplies |
| `lessonType` | Kind of learning activity; supports later study, experiment, review, checkpoint, and project types |
| `fundamentals.primary`, `fundamentals.secondary` | Main and supporting fundamental associations |
| `concepts` | Concept IDs/names with per-concept spiral stage |
| `prerequisites` | IDs of earlier lessons or explicitly modelled learning experiences |
| `objective` | Short learning outcome |
| `warmup` | Relevant short preparation, normally 5–10 minutes |
| `explanation` | Concise theory in short paragraphs |
| `visuals` | Image path, alt text, optional caption, and inline provenance |
| `exercise` | Main drawing instructions, time, source, and subject type |
| `reflection` | A few focused self-review questions |
| `extension` | Optional additional exploration |
| `artistReferences`, `bookReferences` | Artist and source references; book records support page locators and notes |
| `scaffoldingLevel` | Optional future metadata for how much structure the learner receives |
| `status`, `label` | Fixed fixture marker in Phase 1 |

Published lessons require a structured `teaching` block. The three Phase 1 fixtures retain `status: "development-fixture"` and the exact label `DEVELOPMENT FIXTURE — NOT FINAL CURRICULUM`. The app lists only published lessons as playable.

Full `bookReferences` in the repository lesson JSON are internal source provenance. The Vite app import strips those records from the public bundle. `teaching.sources` is a deliberately public, learner-facing citation list: title, author, edition, precise page locator, section(s), and a short account of what the source informed. Do not put private working notes, source excerpts, or file paths there.

## Structured teaching for published lessons

| Field | Role |
|---|---|
| `teaching.whyItMatters` | Brief practical reason to learn the skill |
| `teaching.connections` | Explicit link to earlier lessons and their use here |
| `explanation` | Essential beginner concept, readable before drawing |
| `teaching.conceptVisuals` | Annotated concept demonstrations |
| `teaching.deepDive` | Optional richer theory, shown in a closed “Go deeper” section |
| `warmup`, `teaching.warmupVisuals` | Short practice instructions and a visible demonstration |
| `exercise`, `teaching.exerciseVisuals` | Main observation task and staged or analytical visual guidance |
| `teaching.commonMistakes` | Each diagnosis pairs `mistake`, `lookFor`, and an original visual |
| `teaching.selfCheck`, `reflection` | Observable checks followed by open reflection |
| `teaching.sources` | Page-level citations with `sections` linking each source to concept, deep dive, warm-up, exercise, or mistakes |

Each visual retains `src`, `alt`, `caption`, and inline provenance and must have a matching public asset provenance record. The essential lesson path remains concise; optional theory and sources are collapsed by default. Visual examples should clarify an observational choice, not prescribe the learner’s exact subject or finished drawing.

`sourceImages` is a private editorial association for a limited source-book illustration (`id`, `sourceId`, `page`, `section`) if one is ever judged indispensable. The Vite import removes it from the public bundle. The current public app neither serves source scans nor implements authentication. Any later private image delivery needs a separate authenticated store and explicit rights review; a `sourceImages` entry alone must never cause a scan to be copied into `public/`.

The spiral stages are `introduced`, `practised`, `revisited`, `combined`, and `independent`. Current records attach a stage to each concept in `concepts`. Phase 2 curriculum metadata maps concept IDs to canonical concept tags and parent fundamentals so coverage can roll lesson concept stages up to each fundamental.

## Authoring guidance

The usual lesson path is objective → purposeful warm-up → concise concept → useful visual material → substantial drawing → self-review → optional extension. The exercise should usually lead to an actual recognisable drawing. Artist-study, master-study, experiment, review/checkpoint, and project lessons may adapt the normal pattern while retaining a clear objective and learner activity.

Normal lessons are usually about 30–60 minutes. The schema allows longer project durations. The app's current `lessonType` and `difficulty` are open strings; use consistent values and document the Phase 2 vocabulary in curriculum metadata rather than adding unsupported app routing or content machinery.

The 93-lesson architecture is currently a planning proposal, not schema-ready production content. After human approval, use the canonical map for placement and prerequisites and this contract for lesson data. Refer to [CURRICULUM.md](CURRICULUM.md), [PEDAGOGY.md](PEDAGOGY.md), and [CONTENT_PIPELINE.md](CONTENT_PIPELINE.md).
