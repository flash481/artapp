# Sketchbook lessons

A small, personal drawing course for a learner working beside a sketchbook. The app is a static React + TypeScript site built with Vite; lesson content lives in JSON under `curriculum/lessons/`, separate from the interface.

Lessons 1–9 are the finished Phase 2C pilot. Lessons 10–72 remain planned. Three labelled development fixtures are retained in the repository but are not shown in the app.

## Run locally

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

The app currently opens without a password. For GitHub Pages, set **Pages → Build and deployment → Source** to **GitHub Actions**, then push to `main` or run the **Build and deploy course** workflow. The workflow builds with the repository-name path prefix. Site content is publicly accessible, so only approved lesson content and assets belong in the deployment.

## Content and assets

- Add lesson JSON to `curriculum/lessons/` and validate it with `npm run validate:lessons`.
- Put deployable teaching visuals in `public/assets/` and reference them by path relative to that folder, for example `assets/diagrams/example.svg`.
- Keep books, extracted text, analyses, inventories, notes, and research in the corresponding private `sources/` directories. Those areas are ignored by Git where appropriate and are outside Vite's public directory.
- The production build contains only Vite's `dist/` output. Check it with `npm run verify:dist`.

Lesson completion, revisits, current lesson, and concept practice counts are stored locally in the current browser. Use **Progress and settings** to export or restore a JSON progress file. The data does not sync between devices.

## Engineering checks

```sh
npm run validate:lessons
npm run typecheck
npm run lint
npm test
npm run build
npm run verify:dist
```

Vitest covers direct lesson access, rendering and navigation, and progress persistence. The deployment workflow runs the same checks before publishing.
