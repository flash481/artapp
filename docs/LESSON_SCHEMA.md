# Lesson data contract

Lesson content is independent of application UI. The version 2 machine-readable contract is [`curriculum/schemas/lesson.schema.json`](../curriculum/schemas/lesson.schema.json), and the app consumes lesson JSON from the curriculum area. The contract matches `src/lib/lesson.ts` and the three development fixtures, including the current camelCase field names.

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

The version 2 schema accepts `status: "published"` with an empty label for finished content. The three Phase 1 fixtures retain `status: "development-fixture"` and the exact label `DEVELOPMENT FIXTURE — NOT FINAL CURRICULUM`. The app lists only published lessons as playable.

Full `bookReferences` in the repository lesson JSON are internal source provenance. The Vite app import strips those records from the public bundle; the learner-facing lesson currently does not display them. Keep precise source IDs and locators in the authored JSON for review without shipping private analysis notes.

The spiral stages are `introduced`, `practised`, `revisited`, `combined`, and `independent`. Current records attach a stage to each concept in `concepts`. Phase 2 curriculum metadata maps concept IDs to canonical concept tags and parent fundamentals so coverage can roll lesson concept stages up to each fundamental.

## Authoring guidance

The usual lesson path is objective → purposeful warm-up → concise concept → useful visual material → substantial drawing → self-review → optional extension. The exercise should usually lead to an actual recognisable drawing. Artist-study, master-study, experiment, review/checkpoint, and project lessons may adapt the normal pattern while retaining a clear objective and learner activity.

Normal lessons are usually about 30–60 minutes. The schema allows longer project durations. The app's current `lessonType` and `difficulty` are open strings; use consistent values and document the Phase 2 vocabulary in curriculum metadata rather than adding unsupported app routing or content machinery.

Curriculum placement and prerequisite decisions belong to Sol's Phase 2 architecture, after the sources have been analysed. Refer to [CURRICULUM.md](CURRICULUM.md) and [PEDAGOGY.md](PEDAGOGY.md).
