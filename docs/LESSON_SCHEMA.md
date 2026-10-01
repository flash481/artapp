# Lesson data contract

Lesson content is independent of application UI. The version 4 machine-readable contract is [`curriculum/schemas/lesson.schema.json`](../curriculum/schemas/lesson.schema.json), and the app consumes lesson JSON from the curriculum area. The contract matches `src/lib/lesson.ts`; the three development fixtures retain the base fields, and the nine `lesson-NN.json` records remain historical prototypes.

## Canonical lesson record

| Field | Purpose |
|---|---|
| `id`, `title` | Stable identity and learner-facing title |
| `durationMinutes`, `difficulty`, `medium`, `materials` | Time, anticipated level, media, and supplies |
| `lessonType` | Kind of learning activity; supports later study, experiment, review, checkpoint, and project types |
| `fundamentals.primary`, `fundamentals.secondary` | Main and supporting fundamental associations |
| `concepts` | Concept IDs/names with per-concept spiral stage |
| `prerequisites` | IDs of earlier lessons or explicitly modelled learning experiences |
| `objective` | Short learning outcome |
| `haveReady` | Subject, setup, reference route, and a supplied fallback visual available before the exercise |
| `warmup` | Optional narrow preparation, normally 5–10 minutes when useful |
| `explanation` | Concise theory in short paragraphs |
| `visuals` | Legacy-renderer image path, alt text, optional caption, and inline provenance; canonical lessons should use the relevant `teaching.*Visuals` array instead |
| `exercise` | Main drawing instructions, time, source, and subject type |
| `reflection` | A few focused self-review questions |
| `authoring` | Non-sensitive canonical number, prerequisite capabilities, later returns, and structured timing budget; stripped from the public bundle |
| `extension` | Optional additional exploration |
| `artistReferences`, `bookReferences` | Artist and source references; book records support page locators and notes |
| `scaffoldingLevel` | Optional future metadata for how much structure the learner receives |
| `status`, `label` | Canonical drafts use `draft` / `DRAFT — NOT FOR LEARNERS`; `published` / empty label is reserved for approved integration; fixtures keep their exact fixture label |

Canonical `core-NNN` lesson drafts and published records require a structured `teaching` block, `haveReady`, and non-sensitive `authoring` metadata. Both require explicit `teaching.compare` and `teaching.correct` instructions so comparison leads to an actual correction. Drafts use `status: "draft"` and `label: "DRAFT — NOT FOR LEARNERS"`; only approved records use `published` with an empty label. The three Phase 1 fixtures retain `status: "development-fixture"` and the exact label `DEVELOPMENT FIXTURE — NOT FINAL CURRICULUM`. The app lists only published lessons as playable.

The Vite app import strips non-sensitive editorial metadata from the public bundle. Keep detailed source evidence packets, working briefs, analyses, excerpts, private research, and local source paths under `sources/`, never in committed lesson JSON. `teaching.sources` is a learner-facing citation list: title, author, edition, precise page locator, section(s), and a short account of what the source informed. Pilot Lessons 01–10 require citations to checked evidence. Never put private working notes, source excerpts, or file paths in the lesson record.

## Structured teaching for published lessons

| Field | Role |
|---|---|
| `teaching.whyItMatters` | Brief practical reason to learn the skill |
| `teaching.connections` | Explicit link to earlier lessons and their use here |
| `teaching.compare` | One or more observable relationships to inspect |
| `teaching.correct` | One or more concrete actions for a selected correction |
| `explanation` | Essential beginner concept, readable before drawing |
| `teaching.conceptVisuals` | Optional annotated concept demonstrations |
| `teaching.deepDive` | Optional richer theory, shown in a closed “Go deeper” section |
| `warmup`, `teaching.warmupVisuals` | Optional short practice and visual, only when it prepares a narrower action |
| `exercise`, `teaching.exerciseVisuals` | Main observation task and optional staged or analytical visual guidance |
| `teaching.commonMistakes` | Optional diagnoses; an image is optional |
| `teaching.selfCheck`, `reflection` | Observable checks followed by open reflection |
| `teaching.sources` | Page-level checked citations for the pilot with `sections` linking each source to concept, deep dive, warm-up, exercise, or mistakes |

The subject fallback in `haveReady` is a public owned/reference asset with inline provenance and matching separate asset record. Every other visual retains `src`, `alt`, optional caption, and inline provenance and must have a matching public asset record if deployed. There is no fixed image count; optional visual arrays can be empty. Canonical lessons with structured `teaching` render `teaching.conceptVisuals`, `teaching.warmupVisuals`, `teaching.exerciseVisuals`, and mistake-card visuals. The top-level `visuals` array is rendered only by the legacy lesson view, so leave it empty for canonical records and put each visual in the appropriate teaching array. The essential lesson path remains concise; optional theory and sources are collapsed by default. Visual examples should clarify an observational choice, not prescribe the learner’s exact subject or finished drawing.

For canonical production lessons, `authoring` includes `canonicalNumber`, `prerequisiteCapabilities`, `laterReturns`, and `timingBudget` fields `setupAndReading`, `looking`, `warmup`, `drawing`, `compareAndCorrect`, `review`, and `reserve`. These are production metadata, not private source notes. The categories sum to `durationMinutes`; reserve is at least `max(5 minutes, ceil(10% of durationMinutes))`. `warmup` budget is zero if omitted and matches the warm-up duration if present. `exercise.durationMinutes` equals drawing plus compare/correct time.

`sourceImages` is a private editorial association for a limited source-book illustration (`id`, `sourceId`, `page`, `section`) if one is ever judged indispensable. The Vite import removes it from the public bundle. The current public app neither serves source scans nor implements authentication. Any later private image delivery needs a separate authenticated store and explicit rights review; a `sourceImages` entry alone must never cause a scan to be copied into `public/`.

The spiral stages are `introduced`, `practised`, `revisited`, `combined`, and `independent`. Current records attach a stage to each concept in `concepts`. Phase 2 curriculum metadata maps concept IDs to canonical concept tags and parent fundamentals so coverage can roll lesson concept stages up to each fundamental.

## Lesson validation

`npm run validate:lessons` is the release gate for a contiguous published canonical prefix. With no options, it requires Lessons 001–010, each present and published, within the requested range, with required references, local visuals, matching asset records, and approved deployable provenance. For an explicitly authorized later batch, set the end of the contiguous prefix with `--through`; for example, `npm run validate:lessons -- --through 30` checks Lessons 001–030. The validator rejects canonical files beyond the requested end.

During text-stage authoring, use `npm run validate:lessons -- --draft` (or combine it with `--through N`). Draft mode still checks structure, timing, citation shape, and the expected prefix, but it reports missing canonical records, asset files, and provenance/distribution approval as pending rather than treating those as release-ready. It does not publish drafts. Run the command without `--draft` for final release validation. The maximum accepted prefix is Lesson 150.

## Authoring guidance

The usual lesson path is objective → purposeful warm-up → concise concept → useful visual material → substantial drawing → self-review → optional extension. The exercise should usually lead to an actual recognisable drawing. Artist-study, master-study, experiment, review/checkpoint, and project lessons may adapt the normal pattern while retaining a clear objective and learner activity.

Normal lessons are usually about 30–60 minutes. The schema allows longer project durations. The app's current `lessonType` and `difficulty` are open strings; use consistent values and document the Phase 2 vocabulary in curriculum metadata rather than adding unsupported app routing or content machinery.

The final 150-lesson architecture remains frozen. The production specification authorizes Lessons 01–10; use the canonical map for placement and prerequisites and this contract for lesson data. Refer to [CURRICULUM.md](CURRICULUM.md), [PEDAGOGY.md](PEDAGOGY.md), and [LESSON_PRODUCTION.md](LESSON_PRODUCTION.md).
