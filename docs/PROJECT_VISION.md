# Project vision

## Purpose

ArtApp is a personal, self-paced drawing course for an adult learning beside a sketchbook, especially on an iPhone. The app answers: “I have some free time. What should I learn and draw next?” Short instruction should get the learner drawing recognizable subjects quickly and help them build independent observation and correction skills.

## Current phase

The Phase 1 static app and enriched pilot Lessons 01–09 exist. Source books have been analyzed, and the current research synthesis and rebuilt 130-lesson Core Drawing architecture are ready for human review. The single canonical plan is [`../curriculum/CORE_DRAWING_MAP.md`](../curriculum/CORE_DRAWING_MAP.md); its companion research and visual plans are linked from [`CURRICULUM.md`](CURRICULUM.md).

The published pilot lesson JSON and assets still use their original IDs/order as prototype/reference material. They were intentionally left untouched and do not constrain the proposed sequence. No lessons in the new sequence or planned images have been produced. Wait for approval of the architecture and production specification before lesson authoring.

## Course identity and learning experience

- Core Drawing is pencil/graphite, practical and observational. Charcoal, color, gouache and painting belong to specialist courses.
- Start with real objects; focus on a concept in a short cluster, then revisit it across varied subjects.
- Observation gathers evidence; construction is provisional and must be checked against what is visible.
- Teach pencil handling and tool effects before a drawing task requires them.
- Support life drawing with easy setup and supplied photo fallback. Human-subject practice never requires a second person.
- Keep composition and self-correction active across modules while scaffolding decreases.
- Use focused studies of about 20–30 minutes, standard lessons of about 40–60 minutes and extended studies of about 60–120 minutes.
- Keep the course broad enough to support later specialization without teaching detailed anatomy, botanical drawing, or advanced landscape work.

## App and privacy boundaries

The app is a lightweight, data-driven static site suitable for GitHub Pages. Lesson content stays independent of UI code. Progress is stored locally. Public deployment must contain approved lesson content and assets only; original books, extracted pages, private analyses, research and scratch work stay under `sources/` and out of Git/deployment. A static password gate is not source protection.

## Model routing

**Sol leads architecture, synthesis and senior review; Luna handles high-volume reading, drafting, implementation and routine QA when available.** See [`MODEL_STRATEGY.md`](MODEL_STRATEGY.md).
