# Deployment and privacy

## Static site model

The app is a lightweight React + TypeScript static site built with Vite for GitHub Pages. It has no backend or account system. The deployment workflow builds the site with a repository-name path prefix, verifies the `dist/` artifact, then publishes it through GitHub Pages. Only the application, approved curriculum data, and intentionally selected assets belong in the build output.

## Public access and source privacy

The site currently has no password gate. Its deployed lesson content and assets are publicly accessible. Keep private books and research outside the build regardless of any future access-control changes.

Do not publish source books, scans, EPUBs, raw extracts, OCR output, private analyses, research notes, inventories, scratch work, or unreviewed source illustrations.

## Build and privacy verification

The `Build and deploy course` workflow runs lesson validation, type checks, lint, tests, the production build, and deployment-output verification before publishing. If one check fails, deployment does not run. Run the same checks locally with the commands in the [README](../README.md).

The deployment-output check should keep confirming:

- The Pages base path and static build output are correct.
- The artifact has no source books, scans, raw extracts, analyses, private notes, scratch files, or undeclared visual material.
- Every shipped visual has an asset provenance record and approved distribution status.
- No private source data is emitted into build output.

Keep original sources under `sources/`, excluded by Git ignore rules and the static build. See [SOURCE_BOOKS.md](SOURCE_BOOKS.md) for input handling and [ASSET_STANDARDS.md](ASSET_STANDARDS.md) for visual provenance.
