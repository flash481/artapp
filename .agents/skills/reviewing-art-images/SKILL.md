---
name: reviewing-art-images
description: Independently assess whether an ArtApp lesson visual is accurate, readable, stage-appropriate, and faithful to its approved lesson contract.
---

# Review ArtApp images against the lesson

## Purpose

Give an independent, evidence-based decision on one proposed visual and whether it serves the lesson. The reviewer should not be the image generator; if that is unavoidable, disclose it and ask Sol to obtain a separate review before approval.

## When to use

Use after generating, drawing, or selecting an image and before it is integrated as an approved lesson asset. Use `reviewing-art-lessons` for text, pedagogy, and lesson-schema review.

## Required inputs

- Reviewable image file.
- Approved visual contract and relevant canonical map entry.
- Relevant lesson excerpt, including exercise, skills already taught, caption and intended alt text.
- `docs/ARTAPP_VISUAL_SPEC.md`, `docs/LESSON_PRODUCTION.md`, and draft provenance record.

## Required context

The map sets learner activity; the visual manifest sets intended visual information; the approved contract specifies what the asset must show. Resolve prompt-versus-map conflicts in favor of preserving the map's task. Judge actual pixels, not the creator's description. Check at normal inline phone size as well as enlargement when necessary.

## Procedure

1. Verify the file and contract identify the same lesson, asset role, subject, and purpose. If an input is missing or ambiguous, return BLOCKED instead of guessing.
2. Assess pedagogical, stage, exercise, and contract alignment. Confirm the image does not teach future techniques or imply irrelevant finish.
3. Assess whether its decision is easy to understand, technically plausible, and consistent with observation. Inspect form, ellipses, perspective, overlap, lighting, anatomy where relevant, measurement cues, graphite marks, construction, and generative artifacts.
4. For before/after comparisons, check stable subject, crop, viewpoint, drawing stage, and visible evidence for the stated correction. Confirm that lesson compare/correct wording names the relationship the image actually shows; a caption alone does not make an unsupported comparison valid.
5. For physical graphite demonstrations, verify the hand/pencil/page contact that produces each mark and the observed feature served by any mark applied to the subject. Split a crowded sequence into role-specific images when its actions cannot be read at normal phone size.
6. Check legibility at normal phone inline size; verify labels/arrows and necessary light construction survive scaling and meaning does not depend on subtle color/tonal distinctions or embedded prose.
7. Check image role and redundancy. A reference should provide a stable view suitable for the exercise; it should not masquerade as the lesson solution. A teaching example should demonstrate only what the lesson asks.
8. Check alt text against the actual image and its teaching purpose. Review provenance fields for consistency with the image and intended distribution. Flag missing or unsupported claims.
9. Return exactly one verdict and concise evidence. Do not silently edit, regenerate, or approve your own output.

## Output contract

Choose one:

- **PASS** — the visual meets the contract and can proceed to integration.
- **PASS WITH MINOR FIX** — it is usable after a specific small edit to file/caption/alt/provenance; state the fix and who can make it.
- **REGENERATE** — a material teaching, accuracy, or readability defect requires a new output; cite the defect and what the next attempt must preserve/change.
- **REMOVE / UNNECESSARY** — the visual does not add enough teaching value, is redundant, or the contract does not need an image.

Return asset/lesson ID, verdict, findings grouped by pedagogical alignment, technical correctness, phone readability and provenance/accessibility, evidence from visible content, and the smallest next action. If the contract or image is unavailable, return **BLOCKED — NOT REVIEWED**, which is not a fifth pass verdict and never indicates approval.

## Self-QA

- I inspected the actual image and correct lesson excerpt.
- I checked the canonical learner task, not only the prompt.
- I considered stage, exercise, clarity, difficulty, observation, and redundancy.
- I checked technical correctness and artifacts relevant to this image.
- I assessed phone-size readability.
- I compared caption/alt/provenance claims with visible content and actual records.
- I selected a verdict that matches the evidence and named the next action.

## Escalation

Return **REGENERATE** or **REMOVE / UNNECESSARY** for material defects. Refer unresolved geometric/pedagogical/source-rights ambiguity to Sol with the visible evidence and the smallest decision needed. A PASS WITH MINOR FIX can be resolved by the integrator, followed by a check that the stated edit was made. Never turn a missing source, unclear contract, or inaccessible asset into PASS.

## Prohibited behavior

- Do not accept an image solely because it looks attractive or matches style.
- Do not treat the generated prompt as proof of output content.
- Do not infer correctness from a label or caption.
- Do not overlook advanced marks, incorrect geometry, visual artifacts, or unreadable phone details.
- Do not approve a private/source-derived asset for deployment without a defensible provenance and rights route.
- Do not edit or regenerate during independent review; report the action needed.
- Do not mark an unchecked, missing, or unavailable image as PASS.
