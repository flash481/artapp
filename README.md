# ArtApp Sketchbook lessons

A personal, self-paced drawing course for an adult learner working beside a sketchbook. The app is a static React + TypeScript site built with Vite; lesson content lives in JSON under `curriculum/lessons/`, separate from the interface.

## Course planning status

The canonical proposed Core Drawing course is the 93-lesson architecture in [`curriculum/CORE_DRAWING_MAP.md`](curriculum/CORE_DRAWING_MAP.md). It is planning only and awaits human review. Research and course-level audits are in [`curriculum/CORE_DRAWING_REDESIGN.md`](curriculum/CORE_DRAWING_REDESIGN.md); visual requirements and prompts are in [`curriculum/CORE_DRAWING_VISUAL_MANIFEST.md`](curriculum/CORE_DRAWING_VISUAL_MANIFEST.md).

The app currently contains the enriched pilot Lessons 01–09, whose JSON/assets retain their historic pilot IDs and original order. The curriculum plan repositions or combines some of those concepts; no pilot JSON/assets were rewritten here. Lessons 10+ and planned images have not been produced. Do not treat archived 72-lesson plans or maps as current, and do not begin lesson production until the learner approves the architecture and specification.

## Run locally

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

The app currently opens without a password. For GitHub Pages, set **Pages → Build and deployment → Source** to **GitHub Actions**, then push to `main` or run the **Build and deploy course** workflow. The workflow builds with the repository-name path prefix. Site content is publicly accessible, so only approved lesson content and assets belong in the deployment.

## Content and assets

- Add lesson JSON to `curriculum/lessons/` only from the approved map and validate it with `npm run validate:lessons`.
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