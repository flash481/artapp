# Core Drawing lesson production

This is the entry point for producing canonical Core Drawing lessons and their teaching visuals. The approved 150-lesson sequence is frozen; production turns its entries into clear lessons without changing order, objectives, subjects, module boundaries, or course scope. A genuine architecture blocker stops only the affected lesson and goes to Sol for a decision.

## Execute an authorized batch

This is the end-to-end execution checklist, not a substitute for the linked role skills. Before production, confirm learner authorization and the exact contiguous lesson range; preserve the frozen map and historical MVP files. For 11–30 the review/approval unit is all twenty lessons, with smaller map-aligned work groups. A preparation request does not authorize writing the lessons.

1. The lead prepares bounded handoffs: exact map entries and manifest rows, the [production template](templates/CORE_DRAWING_LESSON_TEMPLATE.md), predecessor/next context, prerequisite capabilities and later returns. A Luna source worker checks targeted private analyses/originals and returns page-referenced evidence with edition/locator limits. Keep packets under `sources/production/`; never expose or reuse book artwork in public assets.
2. A Luna author uses [authoring-art-lessons](../.agents/skills/authoring-art-lessons/SKILL.md) to return draft canonical JSON, timing reserve, private brief, sources actually used and visual requirements. A different Luna reviewer uses [reviewing-art-lessons](../.agents/skills/reviewing-art-lessons/SKILL.md); resolve material findings and review group continuity before progressing. Validate the currently drafted contiguous prefix with `--draft --through N` (for example 14 after the first 11–14 group), then through 30 when all twenty drafts exist.
3. From accepted lesson text, create one visual contract per useful asset: stable ID, reference/teaching role, purpose, subject/view/crop, stage, must-show/must-avoid, intended path and alt/caption intent. Hand this contract, the accepted excerpt and [visual specification](ARTAPP_VISUAL_SPEC.md) to a Luna maker using [generating-artapp-images](../.agents/skills/generating-artapp-images/SKILL.md), or [creating-art-visuals](../.agents/skills/creating-art-visuals/SKILL.md) for deterministic construction. Generate original subject references; use controlled geometry when an alignment, measurement or comparison must be exact. Save prompts/output metadata privately; return actual assets, construction notes, full/phone renders, honest provenance drafts and limitations. No image quota or self-approval.
4. A different Luna image reviewer uses [reviewing-art-images](../.agents/skills/reviewing-art-images/SKILL.md) to inspect actual full and phone-size pixels against the contract and lesson, including accurate alt/caption and accessible fallback routes. Return PASS, PASS WITH MINOR FIX, REGENERATE or REMOVE / UNNECESSARY with evidence. Resolve required fixes before an integrator copies accepted files and creates matching inline/separate provenance with reviewed distribution. Confirm paths, actual metadata and file matches; preserve drafts until batch acceptance.
5. Review the entire batch as one learning experience, including the 10→11 boundary: independent Luna sequence/content and cross-set visual reviews under [reviewing-art-curriculum](../.agents/skills/reviewing-art-curriculum/SKILL.md), then Sol 6.1 medium senior acceptance. Sol adjudicates source, pedagogy, prerequisite, rights and accuracy disputes. Do not leave unresolved BLOCKER or IMPORTANT findings or treat earlier group PASS as final batch acceptance.
6. Accepted records become local `published` release candidates. Make configured release checks and expected app-test counts match the authorized published range; do not leave a ten-lesson-only gate silently approving a thirty-lesson release. Run strict `--through 30`, typecheck, lint, tests, prefixed build/preview, mobile/browser interaction and deployment privacy checks using [testing-course-app](../.agents/skills/testing-course-app/SKILL.md). Return affected records to draft for a material failure. Record actual outcomes, resolved findings and real-use uncertainties in the batch ledger. Deploy only when authorized and all gates pass, then stop at the authorized boundary.

## Canonical sources

Use these sources in this order for their defined roles:

1. [`curriculum/CORE_DRAWING_MAP.md`](../curriculum/CORE_DRAWING_MAP.md) controls lesson identity, title, sequence, practice, subject route, prerequisites/returns, and Read More intent.
2. [`curriculum/CORE_DRAWING_VISUAL_MANIFEST.md`](../curriculum/CORE_DRAWING_VISUAL_MANIFEST.md) controls the intended instructional information and visual prompt. Resolve an implementation mismatch while preserving the map's learner task; do not change the architecture. For example, Lesson 08's map says to compare the gaps without shading them. A teaching overlay may outline or accent a gap to identify it, while the learner does not shade the gap.
3. [`docs/templates/CORE_DRAWING_LESSON_TEMPLATE.md`](templates/CORE_DRAWING_LESSON_TEMPLATE.md) defines the production brief and learner-facing lesson rhythm.
4. [`curriculum/schemas/lesson.schema.json`](../curriculum/schemas/lesson.schema.json) defines lesson JSON; [`curriculum/schemas/asset-provenance.schema.json`](../curriculum/schemas/asset-provenance.schema.json) defines asset records.
5. [`docs/PEDAGOGY.md`](PEDAGOGY.md), [`docs/ASSET_STANDARDS.md`](ASSET_STANDARDS.md), [`docs/SOURCE_BOOKS.md`](SOURCE_BOOKS.md), and [`docs/LESSON_SCHEMA.md`](LESSON_SCHEMA.md) provide shared practice, privacy, and app-contract rules.

The published lessons with legacy IDs `lesson-01` through `lesson-09` and their visuals are MVP prototypes only. Preserve them as references. Canonical production lessons use stable IDs `core-001` through `core-150`; the first pilot maps map entries 01–10 to `core-001`–`core-010`. Do not overwrite legacy files or derive canonical content from their numbering.

## Start a bounded production task

For each author or reviewer, provide only the relevant canonical map entry, this template, the relevant skill, targeted source evidence, and concise previous/next lesson context. Include later-return information and known visual requirements when useful. A visual worker additionally needs the approved lesson excerpt and [`docs/ARTAPP_VISUAL_SPEC.md`](ARTAPP_VISUAL_SPEC.md). Keep books and raw extracts out of worker packets unless a targeted page image is essential for a private source check.

The 01–10 pilot is split into Group A (01–03), Group B (04–06), and Group C (07–10). Complete independent lesson QA for each group before moving on; keep later groups independent until their canonical predecessors are stable. For later work, a 20-lesson batch is the review/approval unit, with smaller authoring and review groups as context requires. Do not begin 11–30 until the learner reviews the pilot and authorizes that batch.

Use Sol 6.1 at medium reasoning for production design, source or pedagogy disputes, systemic findings, representative/difficult review, and final batch decisions. Use Luna Max for bounded source checks, drafting, asset work, integration, and routine QA. A reviewer should not normally review their own authored lesson or generated visual.

Each pilot record uses `haveReady.subject`, `haveReady.setup`, `haveReady.referenceRoute`, and an owned `haveReady.fallbackVisual`; use `teaching.compare` and `teaching.correct` for the action that bridges diagnosis to repair. The pilot's non-sensitive `authoring` block records canonical number, prerequisite capabilities, later returns, and the structured timing budget. The active schema/validator is authoritative for exact JSON field syntax.

## Lesson lifecycle

`Map entry selected → source evidence checked → lesson record marked draft → independent lesson QA → visual contracts → asset creation → independent image-to-lesson review → provenance and integration → group/batch QA → Sol content/sequence acceptance → local release-candidate status for strict validation and browser review → deployment only after engineering, mobile, and privacy checks pass`. The `published` status enables these release-candidate checks; it is not itself release approval. Return affected records to `draft` if a material check fails.

Keep each item's status explicit in the handoff. A lesson is not accepted while it has an unresolved BLOCKER or IMPORTANT finding. Routine MINOR issues can be corrected by the author/integrator, then marked resolved. Escalate uncertainty about curriculum meaning, a prerequisite, source interpretation, rights, technical correctness, or app schema to Sol with evidence and the smallest decision needed. If a requested implementation would change the frozen architecture, stop the affected work.

After the 01–10 pilot, record real-use questions for the learner: actual time, reading burden, warm-up value, visual usefulness, correction friction, subject setup, reference fit, Read More value, and phone/desktop presentation. These are hypotheses until observed; do not claim agent QA proves learner outcomes.

## Source and evidence workflow

Start from the map's module source anchors and private book analyses under `sources/analyses/`. Because `sources/` is git-ignored, default `rg --files` may hide its contents; use `rg --files --no-ignore sources` or direct directory enumeration before reporting that a source is unavailable. Inspect only the relevant original pages/sections under `sources/books/` when the claim needs a check or the analysis is insufficient. Keep the working evidence packet, detailed insight notes, and excerpts (if any) under `sources/`; do not commit them in lesson JSON or a public document. Record stable source ID, title, author, edition, exact page/chapter/figure, the insight actually used, and whether it informed concept, warm-up, exercise, mistakes, or visual in that private packet. Flag ambiguous editions, missing pages, or OCR limits; never fill gaps by guessing. In lesson records use only concise source IDs/locators permitted by the internal contract and learner-facing citations; never include private file paths or research notes.

Write all teaching and Read More in original ArtApp language. Read More adds reasoning, nuance, or a link to future drawing; it is not a disguised bibliography. `teaching.sources` is a learner-facing citation summary; keep internal notes, excerpts, filenames, and private research out of lesson JSON. For production lessons the `authoring` block carries only non-sensitive metadata: canonical number, prerequisite capabilities, later returns, and a timing budget with `setupAndReading`, `looking`, `warmup`, `drawing`, `compareAndCorrect`, `review`, and `reserve`. It contains no evidence text or file paths and is stripped from the public bundle. Pilot lessons 01–10 require checked citations; the active validator determines any later source-field requirements. Never copy source prose or book illustrations into public material.

## Visual and provenance workflow

Visuals need a teaching purpose, not a quota. Plan from the decision a learner needs to see. Use deterministic diagrams for accuracy-critical geometry, axes, measurement, perspective, or comparisons; use generated original graphite images when variation is acceptable. Distinguish subject references from teaching examples. Every outdoor lesson needs an ArtApp-owned fixed-view reference fallback, documented as a reference asset.

For every deployed asset, create a separate JSON record under `curriculum/assets/` that validates against the asset provenance schema. Include stable asset ID, repository file path, category, useful alt text, origin/model or creator, rights basis, source inspiration and locator when relevant, date, and explicit distribution. Set `distribution` to `deployable_after_review` only after independent review and rights/provenance checks. Selected source-book illustrations remain `personal_only`; no book scan, private source image, extract, analysis, or scratch file may enter `public/` or deployment. Lesson visuals also carry inline provenance as required by the lesson schema.

Reference images must suit the actual exercise: stable viewpoint and crop, visible relevant relationships, appropriate lighting/occlusion/perspective, enough resolution, and manageable complexity. Preserve a fixed view during drawing. A reference shows what to draw from; an instructional example explains a drawing decision.

## Handoffs

| From → to | Required inputs | Required return |
|---|---|---|
| Sol → lesson author | Map entry, template, source packet, nearby lesson context, visual notes | Schema-ready draft, timing budget, source trace, visual requirements, self-QA, open questions |
| Lesson author → lesson reviewer | Draft, map entry, evidence packet, neighboring summaries | Severity-coded findings with lesson/field, evidence, and smallest correction |
| Accepted lesson → visual planner/generator | Approved lesson excerpt, manifest requirement, visual spec | One visual contract per proposed asset, prompt or diagram plan, intended role, alt-text intent |
| Generator → independent image reviewer | Output asset, visual contract, lesson excerpt, style spec | PASS, PASS WITH MINOR FIX, REGENERATE, or REMOVE / UNNECESSARY, with concise evidence |
| Reviewer/integrator → production record | Approved lesson/assets, provenance, resolved findings | Stable IDs and paths, valid records, inline references, status, unresolved risks |
| Group/batch → continuity reviewer and Sol | Final lessons/assets, findings/resolutions, coverage/context | Sequence and visual-set findings; Sol decision for material issues and completion |

Do not let the generator approve its own image or the author approve their own lesson as the independent review.

## Compact checklists

**Lesson author:** map intent preserved; actual learner task observable; prerequisite capabilities named; only taught graphite methods required; subject and fallback ready; warm-up narrower than main task or omitted; timing fields sum to duration and include unassigned reserve; source claims traceable; optional depth remains optional; visual contracts and useful alt text supplied; lesson schema complete. For every distinct mapped action, define observable learner completion evidence; a label cannot substitute for doing the action. Keep different checks distinct (for example, comparing an edge's angle is not the same action as checking two landmarks' positional alignment against one plumb line). Teach the physical pencil/page action before asking for a graphite effect, and give each applied mark an observed purpose. Compare/correct wording must name the relationship shown in the subject and actual image. For pressure checks, distinguish front indentation from a possible raised track on the reverse held to angled light; feel lightly.

**Independent lesson reviewer:** objective/exercise alignment; prerequisite and stage correctness; learner cognitive load and clarity; drawing time and full timing realism; observe/compare/diagnose/correct cycle; graphite readiness; accessible subject/reference; source fidelity; useful Read More; visual requirements and schema fit; recurrence deepens/transfers; concrete severity-coded findings. For each distinct mapped action, verify there is observable completion evidence and that one check is not being used as a proxy for a different one.

**Image generator:** fulfills visual contract; appropriate role and stage; current technique only; one clear teaching point; evidence-based comparison; believable graphite when called for; legible at normal phone size; no decorative filler or essential embedded prose; accurate alt text and complete provenance draft. Show the physical contact that produces a demonstrated mark, tie each applied subject mark to an observed feature, and split a crowded physical demo into readable role-specific images when needed.

**Independent image reviewer:** objective, stage, exercise, contract, and caption alignment; clarity and difficulty; observation over formula; technical form/light/overlap/measurement accuracy; artifacts/text; phone readability; redundancy. Check that compare wording names a relationship visible in the actual image and split a physical demonstration if its actions do not read at phone size. Return exactly one of the four image-review outcomes and evidence.

**Group/batch reviewer:** progression and terminology; different subject applications; pencil/tool readiness; meaningful retrieval rather than repetition; total learner workload and drawing time; reference access; visual-language consistency without monotony; all findings resolved or explicitly escalated; public assets have reviewed provenance; private sources excluded.

## Discoverable skills

- Draft/revise a lesson: [authoring-art-lessons](../.agents/skills/authoring-art-lessons/SKILL.md)
- Generate instructional images: [generating-artapp-images](../.agents/skills/generating-artapp-images/SKILL.md)
- Independently review an image: [reviewing-art-images](../.agents/skills/reviewing-art-images/SKILL.md)
- Independently review lesson content: [reviewing-art-lessons](../.agents/skills/reviewing-art-lessons/SKILL.md)
- Integrate/select/construct visuals: [creating-art-visuals](../.agents/skills/creating-art-visuals/SKILL.md)
- Course-level review: [reviewing-art-curriculum](../.agents/skills/reviewing-art-curriculum/SKILL.md)

This page, the linked template, visual specification, schemas, map, and skills are the repository's production memory. The pilot's fresh Luna cold-start preparation test passed after the execution checklist was made explicit; see the [pilot review ledger](PRODUCTION_PILOT_01_10_REVIEW.md) for actual scope and outcomes. This establishes workflow discoverability, not authorization to begin 11–30 or proof of learner effectiveness.
