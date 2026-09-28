# Visual asset standards

## Asset groups

Keep teaching visuals as independent assets so lessons can reference them by stable ID. Planned groups are:

- **Diagrams:** SVG or other deterministic graphics for geometry, construction, perspective, ellipses, value scales, and similar accuracy-critical material.
- **Generated references:** newly generated subjects or scenes for drawing practice.
- **Generated examples:** original demonstrations that explain a concept.
- **Public-domain master studies:** authentic historical works with verified attribution and public-domain rationale.
- **Selected source illustrations:** exceptional, carefully selected book illustrations, private by default and never copied as a collection.

Use deterministic graphics when measurement or geometry needs to be exact. Generated imagery is suitable for still lifes, portraits, flowers, landscapes, and other references where exact technical geometry is not the point. Prefer original or public-domain visual teaching material when it serves the same purpose as a source illustration.

## Provenance required

Every asset used by a lesson must have a record conforming to [`asset-provenance.schema.json`](../curriculum/schemas/asset-provenance.schema.json). Record a stable ID, file path, category, creator or generating method, work/source details, rights basis, relevant URL or book/page locator, attribution, and intended distribution. Set distribution explicitly; source-derived content defaults to personal-only until reviewed.

Record useful alt text and a learner-facing caption. Ensure diagrams remain legible on a phone, avoid text too small at portrait width, and provide enough context for an image to make sense when enlarged. Do not crop, recolour, or otherwise change a master work in a way that misrepresents it.

## Deployment boundary

Assets in the public asset tree are shipped with a static site and can be downloaded by visitors even if the UI is password-gated. Do not place original books, raw book images, page scans, raw source illustration sets, or private analysis material there. Before using a selected source illustration in deployable material, record its provenance and review the applicable rights and intended distribution. Password gating does not change this rule.
