# Deployment and privacy

## Static site model

The app is a lightweight React + TypeScript static site built with Vite for GitHub Pages. It has no backend or account system. The deployment workflow builds the site with a repository-name path prefix, verifies the `dist/` artifact, then publishes it through GitHub Pages. Only the application, approved curriculum data, and intentionally selected assets belong in the build output.

## Password gate

The password screen is a convenience to deter casual visitors. It remembers a successful unlock locally and provides a lock/logout action. **Static password protection is not real security.** Any content included in a public static bundle can be fetched or inspected without using the interface; the client-side hash/check does not make bundled assets confidential. This only blocks casual viewing. Never rely on it to protect books or private source material.

Do not publish source books, scans, EPUBs, raw extracts, OCR output, private analyses, research notes, inventories, scratch work, or unreviewed source illustrations. This protection boundary applies regardless of password configuration.

The app uses a SHA-256 password hash. Generate one in an interactive terminal with:

```sh
npm run hash-password
```

Enter the password at the hidden prompt. For local use, put the printed value in the Git-ignored `.env.local` file:

```dotenv
VITE_COURSE_PASSWORD_HASH=your_64_character_sha256_hash
```

For GitHub Pages, create a GitHub Actions **repository secret** named exactly `VITE_COURSE_PASSWORD_HASH` and set its value to the generated hash. The workflow injects that secret into the Vite build. It checks the secret before dependency installation and fails if it is missing or is not a 64-character hexadecimal SHA-256 digest. Do not commit a plaintext password or `.env.local`.

To change the password, run `npm run hash-password` again and replace the local `.env.local` value and the GitHub repository secret value. Restart the local dev server or rebuild/redeploy the site. Because the unlock marker is keyed by the configured hash, changing it invalidates the previous marker.

## Build and privacy verification

The `Build and deploy course` workflow runs lesson validation, type checks, lint, tests, the production build, and deployment-output verification before publishing. If one check fails, deployment does not run. Run the same checks locally with the commands in the [README](../README.md).

The deployment-output check should keep confirming:

- The Pages base path and static build output are correct.
- The artifact has no source books, scans, raw extracts, analyses, private notes, scratch files, or undeclared visual material.
- Every shipped visual has an asset provenance record and approved distribution status.
- No plaintext password or private source data is emitted into build output.

Keep original sources under `sources/`, excluded by Git ignore rules and the static build. See [SOURCE_BOOKS.md](SOURCE_BOOKS.md) for input handling and [ASSET_STANDARDS.md](ASSET_STANDARDS.md) for visual provenance.
