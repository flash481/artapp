# ArtApp Sketchbook lessons

A personal, self-paced drawing course for an adult learner working beside a sketchbook. The app is a static React + TypeScript site built with Vite; lesson content lives in JSON under `curriculum/lessons/`, separate from the interface.

## Course planning status

The canonical Core Drawing course is the frozen 150-lesson architecture in [`curriculum/CORE_DRAWING_MAP.md`](curriculum/CORE_DRAWING_MAP.md). Production is authorized for canonical Lessons 01–10 as `core-001`–`core-010`, in three independently reviewed groups. The enriched `lesson-01`–`lesson-09` JSON and assets remain historical MVP prototypes; preserve them and do not use their IDs or order for canonical lessons. Research and course-level audits are in [`curriculum/CORE_DRAWING_REDESIGN.md`](curriculum/CORE_DRAWING_REDESIGN.md); visual requirements and original prompts are in [`curriculum/CORE_DRAWING_VISUAL_MANIFEST.md`](curriculum/CORE_DRAWING_VISUAL_MANIFEST.md). See the [lesson production entrypoint](docs/LESSON_PRODUCTION.md) for the workflow and status rules.

Archived 72-lesson plans and the superseded 93-lesson architecture are historical only. Canonical production JSON uses stable `core-NNN` IDs; the app loads only records with `status: "published"`. Draft text-stage records can be checked without claiming asset or release readiness.

## Run locally

The ten-lesson production pilot and 21 new visuals have passed independent content/image review, senior acceptance and app/mobile/privacy checks. See the [pilot review record](docs/PRODUCTION_PILOT_01_10_REVIEW.md). Lessons 11–30 await learner review and authorization.

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

The app currently opens without a password. For GitHub Pages, set **Pages → Build and deployment → Source** to **GitHub Actions**, then push to `main` or run the **Build and deploy course** workflow. The workflow builds with the repository-name path prefix. Site content is publicly accessible, so only approved lesson content and assets belong in the deployment.

## Content and assets

- Add canonical lesson JSON to `curriculum/lessons/` only from the approved map. Use `npm run validate:lessons -- --draft` for structural checks while drafting; missing visual files and provenance remain pending. The default `npm run validate:lessons` is the strict release gate and requires the configured canonical set to be published with checked citations, complete assets, provenance, and timing. For later staged batches, use `npm run validate:lessons -- --through 30`.
- Put approved deployable teaching visuals in `public/assets/` and reference them by path relative to that folder.
- Keep books, extracted text, analyses, inventories, notes, and private research in `sources/`; these files stay private and outside the Vite public directory.
- Check the production build with `npm run verify:dist` before release.

Lesson completion and practice data are stored locally in the current browser. Use **Progress and settings** to export or restore a JSON progress file. The data does not sync between devices.

## Engineering checks

```sh
npm run validate:lessons
npm run typecheck
npm run lint
npm test
npm run build
npm run verify:dist
```
