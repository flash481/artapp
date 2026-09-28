# Sketchbook lessons

A small, personal drawing course for a learner working beside a sketchbook. The app is a static React + TypeScript site built with Vite; lesson content lives in JSON under `curriculum/lessons/`, separate from the interface.

The three current lessons are development fixtures for checking navigation, content, diagrams, and local progress. They are labelled **DEVELOPMENT FIXTURE — NOT FINAL CURRICULUM**. Do not expand them into the researched course until Phase 2.

## Run locally

Use Node.js 22.12 or newer.

```sh
npm ci
npm run hash-password
```

Enter a course password at the hidden terminal prompt and copy the printed hash into a local `.env.local` file:

```dotenv
VITE_COURSE_PASSWORD_HASH=your_64_character_sha256_hash
```

`.env.local` is ignored by Git. Then start the app:

```sh
npm run dev
```

The app shows a setup-required screen if it has no valid 64-character SHA-256 hash. It never has a development bypass.

## Change the password

Run `npm run hash-password` again, enter the new password, then replace `VITE_COURSE_PASSWORD_HASH` in `.env.local`. Restart the dev server or rebuild the published site. The browser stores only an unlock marker; changing the configured hash invalidates that marker.

For GitHub Pages, add the generated hash as a repository Actions secret named exactly `VITE_COURSE_PASSWORD_HASH`:

1. Open the GitHub repository settings.
2. Go to **Secrets and variables → Actions**.
3. Create a repository secret named `VITE_COURSE_PASSWORD_HASH` and paste the hash as its value.
4. Set GitHub Pages to use **GitHub Actions** as its build and deployment source.
5. Push to `main` or start the **Build and deploy course** workflow manually.

The workflow stops before building when the secret is missing or malformed. For a project Pages site it builds with the repository-name path prefix. The hash is shipped to the browser as part of the static app, so this gate only discourages casual browsing. It is not real security and must never be used to protect books or private source material.

## Content and assets

- Add lesson JSON to `curriculum/lessons/` and validate it with `npm run validate:lessons`.
- Put deployable teaching visuals in `public/assets/` and reference them by path relative to that folder, for example `assets/diagrams/example.svg`.
- Keep books, extracted text, analyses, inventories, notes, and research in the corresponding private `sources/` directories. Those areas are ignored by Git where appropriate and are outside Vite's public directory.
- The production build contains only Vite's `dist/` output. Check it with `npm run verify:dist`.

Lesson completion, revisits, current lesson, concept practice counts, and the fixture-label setting are stored locally in the current browser. Use **Progress and settings** to export or restore a JSON progress file. The data does not sync between devices.

## Engineering checks

```sh
npm run validate:lessons
npm run typecheck
npm run lint
npm test
npm run build
npm run verify:dist
```

Vitest covers password verification and lock behavior, lesson rendering and navigation, and progress persistence. The deployment workflow runs the same checks before publishing.
