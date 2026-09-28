---
name: testing-course-app
description: "Verify app behavior and deployment readiness, including mobile usability, local progress, static password flow, and exclusion of private source materials."
---

# Test the course app

**Preferred worker: Luna Max** (`gpt-6-luna` at max reasoning when selectable). Sol review is needed only if checks expose a systemic architecture or UX problem. This follows the project's objective to lower aggregate token/compute cost by routing high-volume checks to capable Luna workers and reserving Sol for high-leverage reasoning; it is not a measured price claim. The identifier is a task/agent choice, not repository routing configuration.

Use the repository's actual scripts and documented deployment settings. Run relevant tests, lint, type checks, and a production build. Verify GitHub Pages paths and inspect the produced deployment directory. Exercise lesson navigation and rendering, local progress/settings persistence, lock/unlock behavior, and image links. Check a narrow iPhone-sized viewport in portrait for typography, scrolling, touch targets, diagrams, and safe areas, then confirm the desktop layout remains usable.

**Treat source exclusion as a release gate.** Inspect both the build inputs and final output to ensure they contain no original PDFs/EPUBs/scans, raw extracts, analyses, private notes, agent scratch files, or source illustration collections. Confirm all deployed assets are intentionally selected and have provenance. Report commands and outcomes concisely, including any unavailable check; escalate systemic failures rather than hiding them.
