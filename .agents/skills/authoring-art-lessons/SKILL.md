---
name: authoring-art-lessons
description: Draft canonical Core Drawing lessons from the frozen map, checked evidence, neighboring context, and the production template; use for lesson creation or revision before independent QA.
---

# Author ArtApp Core Drawing lessons

## Purpose

Turn one or a small bounded set of approved canonical map entries into learner-ready lesson records. Luna Max is the default author; Sol 6.1 owns curriculum interpretation, source/pedagogy decisions, difficult review, and systemic fixes.

## When to use

Use when drafting, revising, or integrating canonical Core Drawing lesson content. For independent review, use `reviewing-art-lessons`; for visual generation or review, use their separate skills. The legacy `lesson-01` … `lesson-09` files are prototypes, not the canonical sequence.

## Required inputs

- Exact entry from `curriculum/CORE_DRAWING_MAP.md` and the agreed stable ID (`core-001` … `core-150`).
- `docs/templates/CORE_DRAWING_LESSON_TEMPLATE.md` and `docs/LESSON_PRODUCTION.md`.
- Checked source evidence with bibliographic identity and precise locator for every source claim used. For pilot lessons 01–10, source citations are required and must be checked against private source material when available. Keep working packets/notes under `sources/` and do not put excerpts, research notes, or local file paths into committed lesson JSON.
- Short summaries for useful previous/next lessons and later returns.
- The relevant visual-manifest requirement, if known.

`sources/` is git-ignored and may be hidden by default `rg --files`; enumerate it with `rg --files --no-ignore sources` or direct directory listing before concluding evidence is unavailable.

## Required context

Follow the frozen map for title, sequence, practice, subject, prerequisites, and returns. Read only relevant guidance in `docs/PEDAGOGY.md`, `docs/LESSON_SCHEMA.md`, `docs/SOURCE_BOOKS.md`, and `docs/ASSET_STANDARDS.md`. Treat archived maps and MVP lessons/assets as historical examples only. Use the agreed production schema: include `haveReady` with subject, setup, reference route and fallback visual; represent the learner's comparison and correction explicitly with `teaching.compare` and `teaching.correct`; include checked sources for lessons 01–10. Optional warm-ups and visuals are used only when they help.

## Procedure

1. Read the canonical entry and surrounding sequence. Translate broad prerequisite ranges into the specific capabilities needed here; do not turn prerequisites into mastery gates.
2. Identify what is new, what is retrieved, what later return this prepares for, and any likely misconception. If an apparent inconsistency is only about a visual prompt, preserve the map's actual learner task and adapt the visual. Do not edit the architecture.
3. Check the relevant source analysis, then inspect targeted original pages/sections when needed. Record what was actually checked and what it informed. Never infer that a planned map anchor proves a source claim.
4. Plan subject access, `Have ready`, setup, life/reference route, and a supplied fixed-view fallback before drafting the exercise. Outdoor lessons require an ArtApp-owned fallback. Human lessons never require another person.
5. Write only the essential explanation needed to begin. Preserve the ArtApp cycle: **draw → observe → compare → diagnose → correct → redraw**. Observation gathers evidence; construction proposes an explanation; comparison decides whether it fits.
6. Make a warm-up optional and narrower than the main exercise. Teach the physical pencil, hand, and page action before requiring the resulting mark or effect. Do not make a learner shade, blend, hatch, lift, or use a pencil side before that method is taught. Tie every mark applied to the subject to an observed feature or relationship; avoid arbitrary demonstration marks. For pressure checks, distinguish a front indentation from a possible raised track on the reverse held at an angle to light; feel lightly.
7. Write the main exercise around a recognizable subject and real drawing time. Give every distinct mapped action observable learner-completion evidence; a heading or label alone does not complete an action. Do not use one kind of check as a proxy for another (for example, an edge-angle comparison does not complete a two-landmark positional plumb check). Include a visible comparison criterion, one selected correction, and a reasonable stop point. Compare/correct wording must name the relationship the learner can see in the subject and any related image. Use `authoring.timingBudget` with `setupAndReading`, `looking`, `warmup`, `drawing`, `compareAndCorrect`, `review`, and `reserve`; their sum equals `durationMinutes`, and `reserve >= max(5 minutes, ceil(10% of durationMinutes))`. Keep the reserve unassigned. `exercise.durationMinutes` equals `drawing + compareAndCorrect`, and the warm-up duration matches the warmup budget (zero when omitted).
8. Keep Read More as optional, original ArtApp teaching that deepens reasoning or links to later drawing. Keep it separate from source citations; include no padding to meet a paragraph count.
9. Complete the learner-facing fields and schema-ready lesson record using the template. Mark every proposed visual with a useful purpose, role, alt-text intent, and provenance route. For canonical `core-NNN` records, place visuals in the rich renderer's matching `teaching.conceptVisuals`, `teaching.warmupVisuals`, `teaching.exerciseVisuals`, or `teaching.commonMistakes[].visual` field; top-level `visuals` is legacy-only, and duplicate references are unnecessary. Do not generate or approve your own final images as part of authoring.
10. Run the author self-QA and send the draft, map entry, checked evidence, neighboring context, and visual contracts to an independent lesson reviewer.

## Output contract

Return one schema-ready production lesson record and a private internal authoring brief stored under `sources/`. Use the canonical stable ID; preserve legacy pilot files. For Lessons 01–10, filename is `curriculum/lessons/core-001.json` through `core-010.json`. Include:

- objective and concrete outcome;
- required subject/setup/fallback;
- learner copy with essential explanation, useful optional warm-up, main drawing, explicit compare/correct guidance, self-check, optional original Read More, and checked pilot citations;
- prerequisites, concept stage, timing budget, source-use notes, visual requirements, alt-text intent, and provenance needs in the private brief;
- in committed JSON, only source IDs/locators and non-sensitive metadata explicitly allowed by the active schema; never source excerpts, research notes, or local paths;
- a safe `authoring` block with `canonicalNumber`, `prerequisiteCapabilities`, `laterReturns`, and the exact structured `timingBudget`; keep source evidence in the private sidecar;
- a short self-QA and any unresolved question.

Set the JSON record to `status: "draft"` and `label: "DRAFT — NOT FOR LEARNERS"`. State the handoff as **DRAFT — READY FOR INDEPENDENT QA** only when required inputs and citations are present. Otherwise return **BLOCKED** with the precise missing evidence or decision. Do not mark it published or accepted.

## Self-QA

- Map identity, sequence, task, scope, and subject are unchanged.
- Explanations and new concepts are limited to what this lesson needs.
- Every required tool action has been taught or is demonstrably familiar.
- Every distinct mapped action has observable learner-completion evidence; differently defined checks remain distinct.
- The exercise provides time to observe, compare, and correct, including reserve time.
- The warm-up either prepares one narrow action or is omitted.
- Subject access and fallback work before the learner starts.
- Source locators are real and linked to the specific content they informed.
- Essential directions stand outside optional sections; Read More is original.
- Proposed assets have clear teaching contracts, accessible alt text, and provenance plans.
- The production schema is followed without private notes in public fields.

## Escalation

Stop and ask Sol to decide when map wording changes the intended learner task, a prerequisite cannot be met, the lesson depends on a technique not yet taught, source evidence conflicts or is materially uncertain, a rights question appears, the time cannot fit without changing intent, or app/schema requirements force a lesson-design change. Report evidence and the smallest decision needed.

## Prohibited behavior

- Do not add, remove, renumber, reorder, retitle, relocate, or redesign canonical lessons/modules.
- Do not author from legacy MVP content or archived course maps in place of the canonical map.
- Do not make construction formulas override observed evidence.
- Do not introduce specialist topics, unsupported tools/media, hidden preparation, generic motivational filler, unnecessary terminology, or abstract drills without the map's purpose.
- Do not invent source findings, page references, learner outcomes, accepted review status, or provenance.
- Do not copy source prose or illustrations or expose private source files, extracts, analyses, or notes.
