---
name: creating-art-visuals
description: "Create, select, or integrate diagrams and drawing references for a defined art lesson while preserving accuracy and asset provenance."
---

# Create art visuals

**Default worker: Luna Max** (`gpt-6-luna` at max reasoning when selectable) for implementation, integration, and metadata. This follows the project's objective to lower aggregate token/compute cost by routing high-volume asset work to capable Luna workers and reserving Sol for high-leverage reasoning; it is not a measured price claim. These identifiers are task/agent choices, not repository routing configuration. Ask Sol only when the visual choice changes curriculum intent or an accuracy or interpretation dispute remains.

Use [generating-artapp-images](../generating-artapp-images/SKILL.md) for original raster generation and [reviewing-art-images](../reviewing-art-images/SKILL.md) for independent image approval. This skill handles choosing an appropriate asset route, deterministic diagrams, rights-aware selection, captions, provenance, and integration. A creator must not approve their own generated visual.

Choose the medium for the teaching job:

- Use deterministic SVG or other reproducible graphics for accuracy-critical perspective, ellipse geometry, construction, and value scales.
- Use generated references or examples for suitable subjects such as still lifes, flowers, portraits, and landscapes. Keep them clearly labeled as teaching references, not historical works.
- Use genuine public-domain artworks for master studies, verifying the work and recording collection/source and rights information.
- Select source-book illustrations only when specifically useful; record book, edition, and page, and never reproduce a whole book or image library.

For graphite demonstrations, show the physical hand/pencil/page contact before its mark effect, and connect any mark applied to the subject to an observed feature or task. Compare/correction wording must match the relationship visible in the actual image. Split a crowded physical demonstration into separate, role-specific images when that improves phone readability; there is no fixed image count.

Follow `docs/ASSET_STANDARDS.md` and the lesson's visual intent. Include meaningful provenance, a useful description/alt text, and a stable asset reference. Keep raw source images and private book material under `sources/`; only intentionally selected, documented assets belong in the public app. Prefer a clear original diagram over copying a source figure when it teaches the same point. Check diagrams at phone size and avoid encoding essential distinctions only by color.
