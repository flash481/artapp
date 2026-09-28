# Curriculum architecture

## Phase 1: foundation only

Do not create the real course yet. The app worker owns exactly three clearly labelled development fixtures for testing navigation, rendering, warm-up, images, exercise instructions, review, and progress. Those fixtures are not curriculum recommendations and must not be treated as evidence-based sequencing.

Wait until the learner adds and analyses books before making major pedagogy and sequence decisions. Phase 2 should target about 60–80 lessons, while allowing 50–100 when the integrated learning design justifies it.

## Phase 2: one integrated spiral

Sol owns the overall architecture, synthesis, prerequisites, and sequence. The course should integrate ideas across books and subjects; it must not turn each source book into a consecutive block of lessons. Compare authors, retain useful disagreements, identify gaps, and decide what the learner needs. Record book/page references without passing unnecessary raw extracts into the lead's context.

Use curriculum metadata to describe fundamentals, concept tags, prerequisites, subject types, lesson kinds, materials, and source references. A lesson records spiral stage on each concept (`introduced`, `practised`, `revisited`, `combined`, or `independent`); the metadata maps concept tags to canonical fundamentals. Lesson files follow [LESSON_SCHEMA.md](LESSON_SCHEMA.md); curriculum metadata follows the [curriculum metadata schema](../curriculum/schemas/curriculum.schema.json). Keep course content separate from UI code.

## Coverage audit

Future audits should map lesson concept IDs to their canonical concept tags, roll those tags up to their parent fundamentals, count how often each fundamental appears at each spiral stage, preserve the lesson IDs behind those counts, and surface missing stages or prerequisites. Counts describe the designed course; they do not prove learner mastery. Luna can generate the report mechanically. Sol interprets gaps and decides whether to change the structure. See the [coverage audit schema](../curriculum/schemas/coverage-audit.schema.json).

| Fundamental | Introduced | Practised | Revisited | Combined | Independent |
|---|---:|---:|---:|---:|---:|
| Example fundamental | 0 | 0 | 0 | 0 | 0 |

The row above is a report shape only; it is not a claim about current course coverage.

## Illustrative recurrence patterns

These examples describe the intended data model, not an approved sequence or set of lessons:

- Value may return in simple grouping, basic form, fruit, still life, portrait, landscape, composition, and expressive work.
- Form may return with primitives, household objects, plants, stylised characters, hands, heads, figures, and environments.

Phase 2 should decide actual order and spacing only after source analysis and cross-book synthesis.
