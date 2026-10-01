---
name: generating-artapp-images
description: Generate or construct original ArtApp subject references and graphite teaching visuals from an approved lesson visual contract.
---

# Generate ArtApp instructional images

## Purpose

Create one original, lesson-specific reference or teaching visual that helps a learner make a drawing decision. Luna Max is the default worker. Image creation and image approval are separate jobs.

## When to use

Use when an approved lesson needs an original raster reference or graphite demonstration. Use deterministic SVG/controlled geometry for exact perspective, ellipses, axes, measurement, alignment, or other correctness-critical diagrams; the existing visual-construction workflow may be more appropriate there. For independent approval use `reviewing-art-images`.

## Required inputs

- Approved canonical lesson excerpt and its visual-manifest requirement.
- One visual contract: lesson/asset ID, role, instructional purpose, required content, exclusions, crop/viewpoint, intended stage, and alt-text intent.
- `docs/ARTAPP_VISUAL_SPEC.md` and `docs/LESSON_PRODUCTION.md`.
- Intended repository path and the current asset provenance schema.

## Required context

The map governs the learner task; a visual prompt never changes it. Check which graphite actions are already taught at this lesson. Treat references as evidence for drawing, and teaching examples as demonstrations. Keep books, scans, private notes, and copied illustration layouts out of prompts and public files. Do not reproduce a source illustration; use original subject matter and only the high-level teaching insight supported by evidence.

## Procedure

1. Confirm the contract describes an image-generation task. If precise geometry is the teaching point, switch to deterministic construction or escalate the mismatch.
2. Read only the lesson context needed to show the named decision. Choose the visual role (reference, example, staged sequence, comparison, construction overlay, technique close-up, or level-appropriate completion).
3. Build a prompt from the shared ArtApp style prefix and the required subject, crop, viewpoint, stage, method, must-show and must-avoid details. Show the physical contact that produces a demonstrated mark, tie any mark applied to the subject to an observed feature, and make the stated comparison criterion visible while holding unrelated properties steady. Split a physical demonstration if one composite will not read at phone size; do not force one panel or a fixed image count.
4. For a new raster, use Codex's built-in `image_gen` tool by default. In code-mode, call it through `functions.exec` with a first-line `// @exec: {"yield_time_ms": 120000, "max_output_tokens": 1000}` directive; use the same yield time on waits, and do not print image/base64 data. Render the returned result with `generatedImage(result)` when needed. The built-in tool saves under `$CODEX_HOME/generated_images/...`; do not pass or rely on a destination-path argument. Copy the selected output into the intended workspace asset path and verify that file exists. For edits to an existing local image, inspect it first with `view_image`, then pass its path as `referenced_image_paths`; for recent conversation images, include only the smallest required number with `num_last_images_to_include`. Preserve output as a draft until review.
   Save the exact submitted prompt under the private production packet before the generation call. Immediately record the returned output path, date, tool route, and any exposed model identifier before rendering or further work, so a context interruption cannot lose the record. If metadata is unavailable, state that limitation; never present a reconstructed prompt as verbatim.
5. Inspect the output against every must-show/must-avoid item. Check the anatomy/form, overlap, lighting, graphite handling, image artifacts, text artifacts, and whether the lesson stage is respected.
6. Check the image at normal phone inline size (roughly 320–390 CSS pixels). Make sure the essential marks and comparisons are visible without enlargement. If multiple physical actions compete for space, use role-specific images with a clear order and separate purposes.
7. Write concise alt text and a learner-facing caption. Prepare a provenance record that matches `curriculum/schemas/asset-provenance.schema.json`; include asset ID, intended file/category, generation route/model and date when known, rights basis, distribution status, and any source inspiration/locator. Use only a brief, accurate public attribution; keep private prompt notes and source research private.
8. Return the draft package for a separate image reviewer. Do not integrate it as approved or assign your own final review verdict.

## Output contract

Return:

- draft asset at the intended path, or a clear statement that no file was created;
- stable asset ID, lesson and role, and the visual contract;
- prompt or diagram-construction notes and generation route/model/date where available;
- alt text, caption, and provenance record draft;
- self-QA with phone-size and accuracy notes;
- any known limit requiring a reviewer or Sol decision.

Mark the status **DRAFT — READY FOR INDEPENDENT IMAGE REVIEW** only if a reviewable file and complete handoff exist. Otherwise mark **BLOCKED** and say what is missing. Never claim approval.

## Self-QA

- It teaches the contract's single stated decision.
- It distinguishes subject reference from drawing example.
- It uses only methods available by the lesson stage.
- It matches the requested finish and avoids unrelated polish or shading.
- Comparisons hold relevant variables steady and make their evidence visible.
- For a local correction, competing contours stay in that area; the rest of the subject has quiet single contours, and the selected line is distinguishable from a pale guide at phone size.
- Geometry and visible forms are credible; errors are named, not hidden.
- Essential details remain readable at phone size.
- Alt text states the content and instructional purpose.
- The provenance record is complete and its distribution is honest.
- No private source image, prose, notes, or unsupported attribution was used.

## Escalation

Ask Sol to resolve a contradiction between the visual contract and map activity, an accuracy disagreement, an ambiguous rights/source route, or a prompt that cannot show the lesson without teaching a later technique. Report the contract, output evidence, and smallest decision required. Ask for routine revision only when the independent reviewer identifies a concrete issue.

If built-in image generation fails or is unavailable, stop and tell the lead that the bundled CLI fallback requires an explicit user request. Do not use CLI/API, an external image service, web search/download, or a substitute placeholder without that request.

## Prohibited behavior

- Do not add a fixed image count or decorative image.
- Do not make a generated visual the authority over observed shape or map task.
- Do not make exact geometric claims with uncontrolled generated geometry.
- Do not create polished work when the learner is practising a limited study.
- Do not let before/after panels change multiple unrelated properties.
- Do not copy, trace, imitate, or upload book illustrations or private source scans for reproduction.
- Do not invent generation metadata, rights, citations, public approval, or review verdicts.
- Do not place private working files or source material under `public/`.
