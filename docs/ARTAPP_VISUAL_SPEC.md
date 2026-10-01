# ArtApp instructional visual specification

Apply this shared visual language to original lesson references and teaching examples. The lesson's visual contract controls the subject and instructional content; this specification controls presentation. Follow the map and [`curriculum/CORE_DRAWING_VISUAL_MANIFEST.md`](../curriculum/CORE_DRAWING_VISUAL_MANIFEST.md) for the intended lesson task. See [`docs/LESSON_PRODUCTION.md`](LESSON_PRODUCTION.md) for lifecycle and review requirements.

## Shared visual language

For hand-drawn examples, aim for believable graphite on lightly textured, clean drawing paper: a learner-appropriate study with visible but controlled search/construction marks when useful, ordinary pencil variation, and enough imperfection to feel achievable. Keep the focal drawing large and the background quiet. Let marks, contour, edges and tone explain the current drawing decision.

Use a clean technical diagram when geometric accuracy is the teaching point. It may be more controlled than a hand-drawn example, but it should remain simple, legible, and consistent with ArtApp's calm teaching tone.

Avoid glossy illustration, photorealistic finish when a study is requested, professional atelier polish, fake sketchbook clutter, corporate decoration, visual noise, unnecessary labels, tiny typography, essential prose embedded in images, and precision that a beginner is not expected to produce. Do not add arrows or labels unless the contract names what they explain.

## Choose the visual role

- **Subject reference:** a clear fixed view from which the learner draws; it provides evidence about a subject, not a drawing solution.
- **Teaching example:** original graphite marks explain a concept or technique at the lesson's current level.
- **Staged sequence:** consecutive states teach an order of actions; keep stages visually comparable.
- **Comparison/correction:** show a specific relationship and its correction with the same subject, crop, and as much of the same drawing as possible.
- **Construction or measurement overlay:** marks explain a provisional hypothesis that the learner checks against visible evidence.
- **Technique close-up:** pencil, paper, graphite, erasing or hatching behavior is large enough to inspect.
- **Completed example:** only as finished as the learner's current objective requires.
- **Deterministic diagram:** SVG or controlled geometry for exact axes, perspective, ellipses, crop, measurement or other correctness-critical relations.

One asset may support more than one lesson section only when it truly serves each role. Do not generate images to meet a numerical target.

## Prompt recipe

Build each image request from these concrete details:

1. Intended lesson, learner stage, and one instructional purpose.
2. Visual role and whether the subject is a reference or a drawing demonstration.
3. Subject, crop, viewpoint, background, and any fixed spatial relationships.
4. Required visible forms, marks, overlaps, gaps, axes, value groups, or correction evidence.
5. Graphite method and finish appropriate to skills already taught.
6. Phone-size priorities: image organization, scale of crucial marks, arrow/label size, and comparison clarity.
7. Desired paper/mark imperfections and explicit elements to avoid.

Use the following as the reusable style prefix, then make the contract-specific details explicit:

> Create an original ArtApp drawing-course visual. Use believable graphite on clean, lightly textured paper when a hand-drawn example is requested. Make the drawing look like an achievable study by a beginner who has learned only the named skills, with controlled construction marks and visible correction only where specified. Keep the subject and teaching point large, clear, and easy to read at phone size. Use a quiet background, restrained labels, and no decorative clutter. Match the requested stage of completion. Preserve accurate observed shape, overlap, viewpoint, light, and spatial relationships. Do not add unrequested shading, polish, objects, text, formula marks, or instructional claims.

## Match the lesson stage

For early Lessons 01–14, favor light, direct, beginner-scale contour, silhouette, gap, alignment and overlap studies. Use only graphite techniques already taught by that lesson. A contour lesson should not imply that the learner must shade; a silhouette lesson should not be rendered like a finished picture. Progress in later modules only as their map entries introduce axes, planes, value, materials, figure construction, or landscape.

Before/after images should hold the subject, viewpoint, crop, and drawing stage steady. Isolate the one correction under discussion and show its evidence with shared axes, bounding marks, gap shapes or another relevant check. Do not label one of two unrelated drawings as correct without showing why.

For one local contour choice or correction, use quiet single contours elsewhere. Confine competing lines to the selected area; make the chosen line and any retained pale guide distinguishable at normal phone size. Repeated double outlines across the whole subject obscure the decision even when the overall drawing looks plausible.

If generated stages drift or cannot isolate the required change, switch to a controlled drawing built from the actual owned reference. Reuse the identical contour path between stages and change only the named segment. Keep native diagrams as `.svg` files under `public/assets/diagrams/`, with asset category `diagram`, provenance origin `original`, and rights basis `original`; document any embedded owned reference. Render and inspect them at phone size. Do not describe a constructed diagram as a photographed physical graphite drawing.

For Lesson 01, begin from an unshaded baseline-stage example. If showing a correction, use two vertically stacked views of the same drawing and viewpoint, keep the feature change singular, and show the observed relation that motivated it. Avoid three narrow panels that shrink at phone size.

## Accuracy and accessibility

Use deterministic construction for exact geometry. If a generative image is being asked to prove geometric correctness, switch to a controlled diagram or flag the request for review. Check forms and ellipses, perspective, overlap, lighting, anatomy where relevant, and graphite behavior for internal consistency. Avoid making meaning depend only on subtle tone or color.

At normal inline display around 320–390 CSS pixels, the main distinction, necessary marks, arrows, labels, and comparison panels must remain readable. Enlargement may add detail but must not be required to understand the lesson. Keep essential meaning out of embedded text. Write alt text that identifies both the visible content and its instructional purpose.

## Per-asset handoff

Every proposed image returns with:

- stable asset ID and intended file path;
- lesson number/ID, role, and the approved visual contract;
- prompt or deterministic construction notes;
- original output and generation route/model/date where applicable;
- alt text and learner-facing caption;
- draft provenance fields for the asset schema and inline lesson record;
- image-generator self-QA, including phone-size and accuracy concerns;
- any limitation that needs an independent reviewer or Sol decision.

Generated work remains a draft until a separate reviewer assigns an outcome. Store only approved distributable outputs under the public teaching asset tree; source material, private pages, excluded drafts, and working prompts stay private under `sources/` or another approved non-public working location.
