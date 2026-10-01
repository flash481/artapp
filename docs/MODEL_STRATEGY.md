# Model strategy

> **SOL HIGH — lead architect, orchestrator, curriculum synthesiser, decision-maker, and senior reviewer.**
>
> **LUNA MAX — primary worker for high-volume reading, extraction, research, coding, drafting, metadata, assets, integration, and routine QA.**

This is the repository's default routing policy. It is not an inflexible rule: choose the model that fits the actual work, and use stronger reasoning when it materially improves quality. The goal is **quality per token**, not the lowest token count. The user's cost/quality policy is to lower aggregate token and compute use by assigning capable Luna workers the high-volume tasks, while reserving Sol for synthesis and decisions where stronger reasoning has meaningful leverage. This is a routing objective, not a claim about measured current model prices or rates.

## Assignment defaults

| Work | Default |
|---|---|
| Repository implementation, frontend, components, styling, responsive work | Luna Max |
| Build fixes, GitHub Pages configuration, tests, accessibility, routine refactoring | Luna Max |
| PDF/EPUB inventory, extraction, scan detection, OCR when needed | Luna Max |
| Reading and analysing an individual book; exercise and illustration inventories | Luna Max |
| Targeted domain research and concise domain reports | Luna Max |
| First lesson drafts, lesson formatting, metadata, bulk integration | Luna Max |
| SVGs, asset implementation, captions, provenance metadata | Luna Max |
| Local checks, batch QA, consistency and broken-link checks | Luna Max |
| Project orchestration and decomposition | Sol High |
| Research strategy and reconciliation of source disagreements | Sol High |
| Cross-book and cross-domain synthesis | Sol High |
| Pedagogy, prerequisites, concept graph, spiral design, course sequence | Sol High |
| Curriculum coverage interpretation and major course decisions | Sol High |
| Representative, milestone, difficult, and final structural review | Sol High |
| Systemic issues spanning lessons, app, pedagogy, or source workflow | Sol High |

The Sol role does not mean Sol should read every book, write every lesson, or implement every component. Nor should Luna be used for a major educational decision solely to save tokens. Delegate when it preserves quality and gives the lead compact, traceable evidence.

## Context and token practice

1. Have Luna process books separately and return the shared [book-analysis schema](../curriculum/schemas/book-analysis.schema.json), with page or chapter locators.
2. Pass concise structured findings to Sol instead of raw book extracts or whole books.
3. Aggregate in stages: **book analyses → domain syntheses → Sol's cross-book curriculum reasoning**.
4. When a finding needs checking, ask a worker for a targeted source inspection and evidence locator rather than re-reading the entire book.
5. Generate lessons in bounded batches. Sol defines or approves objectives and reviews representative, milestone, difficult, and final structural samples; Luna drafts, checks, and integrates most lesson content.
6. Use hierarchical QA: Luna lesson checks → Luna batch checks → Sol structural review → Luna corrections.
7. Supply only the repository instructions relevant to each task. Preserve provenance so compact summaries remain auditable.

## Codex capability boundary

The collaboration tools exposed in the current Codex environment offer `gpt-6-sol` with `high` reasoning and `gpt-6-luna` with `max` reasoning as selectable agent options. These are descriptions of currently exposed model/effort choices, not repository configuration syntax. No supported repository-level model-routing configuration was identified. Do not invent one. Encode this policy in instructions, skills, task assignments, and tool-supported agent selection when available.

## Phase 2 routing

Sol sets research strategy and architecture. Parallel Luna workers inventory/analyse books with precise source locators; Luna domain workers prepare concise topic reports. Sol synthesizes, resolves trade-offs, establishes prerequisites and spiral coverage, and approves objectives. For authorized lesson production, use Sol 6.1 at medium reasoning as production lead/editor and Luna Max for most bounded evidence checks, drafting, visual production, integration, and routine QA. Separate authors/generators from independent reviewers where practical; Sol resolves material disputes and reviews representative, difficult, systemic, and final work. The final 150-lesson architecture is content-complete and frozen. The current approved production unit is Lessons 01–10; later batches require learner review/authorization.
