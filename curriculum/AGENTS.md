# Curriculum work

## Model handoff

**Sol High** (`gpt-6-sol` at high reasoning when selectable) owns cross-book synthesis, curriculum architecture, sequence, prerequisite reasoning, concept coverage, and spiral-learning decisions. It decides what the course teaches and when concepts recur.

**Luna Max** (`gpt-6-luna` at max reasoning when selectable) owns first-draft lessons, lesson metadata, and bulk content edits or integration, working from Sol-approved objectives and the repository schema. These identifiers guide task/agent choice only; they are not repository routing configuration.

## Phase and content boundaries

- Do not produce the real course in Phase 1. Begin the complete, integrated spiral curriculum only in Phase 2, after the learner has added books and the source analyses are ready.
- Build one curriculum from the combined evidence, not a sequence of book-by-book lesson blocks. Track concepts as introduced, practised, revisited, combined, and independently applied; vary subjects and gradually reduce scaffolding.
- Give Luna clear objectives, prerequisites, fundamentals, exercise intent, and source references. Keep lesson prose and repetitive metadata production with Luna. Bring unresolved source disagreements or structural gaps back to Sol rather than silently changing the architecture.
- Keep provenance with every borrowed or adapted exercise, idea, and visual. Use `docs/CURRICULUM.md`, `docs/CONTENT_PIPELINE.md`, and `docs/LESSON_SCHEMA.md` as the shared design references.
