---
name: reviewing-art-curriculum
description: "Check lesson batches or a complete course for content quality, curriculum progression, schema consistency, and source provenance."
---

# Review curriculum

For independent review of one production lesson, use [reviewing-art-lessons](../reviewing-art-lessons/SKILL.md). For image-to-lesson alignment, use [reviewing-art-images](../reviewing-art-images/SKILL.md). This course-level skill handles multi-lesson progression, recurrence, coverage, and systemic review.

Use two levels of review. The project's routing objective is to lower aggregate token/compute cost by using capable Luna workers for high-volume checks and reserving Sol for high-leverage reasoning; this is not a measured price claim.

1. **Luna Max** (`gpt-6-luna` at max reasoning when selectable) checks lessons or batches for schema completeness, duration, missing assets, repetition, technical inconsistencies, metadata, broken links, and provenance. Return specific lesson IDs and actionable findings. These identifiers are task/agent choices, not repository routing configuration.
2. **Sol High** (`gpt-6-sol` at high reasoning when selectable) reviews course structure, prerequisite order, spacing and recurrence, technical accuracy, pedagogy, cross-book synthesis, scaffolding reduction, and systemic issues. Inspect representative or problematic lessons rather than rereading every lesson without a reason.

Compare content with `docs/PEDAGOGY.md`, `docs/CURRICULUM.md`, and `docs/LESSON_SCHEMA.md`. Check whether fundamentals move from introduction through practice, revisiting, combination, and independent use; look for gaps and unhelpful clumps, not just repeated labels. Confirm source-derived ideas and visuals have provenance and private source material is absent from public assets. Separate local corrections Luna can make from architectural decisions for Sol. Report evidence, affected lessons, severity, and the smallest useful next action; do not redesign the whole course to fix isolated defects.
