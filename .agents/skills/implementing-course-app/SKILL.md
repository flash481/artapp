---
name: implementing-course-app
description: "Build or change the lightweight, data-driven art-course web app, including mobile layouts, lesson rendering, local progress, and static deployment support."
---

# Implement the course app

**Preferred implementation worker: Luna Max** (`gpt-6-luna` at max reasoning when selectable) for most coding and routine integration. Reserve **Sol High** (`gpt-6-sol` at high reasoning when selectable) for difficult architecture decisions or systemic problems. This follows the project's objective to lower aggregate token/compute cost by routing high-volume implementation to capable Luna workers and reserving Sol for high-leverage reasoning; it is not a measured price claim. The identifiers are task/agent choices only, not repository routing configuration.

Keep the app static, lightweight, and data-driven. Lesson content belongs in the content model, not embedded in UI components. Optimize the main flow for reading on an iPhone while drawing: portrait layout, legible type, comfortable line length and spacing, large touch targets, straightforward navigation, safe-area support, and enlargable visuals. Keep desktop usable without letting it drive design decisions.

Use local storage for learner progress and settings; do not add a backend or account system. Follow the documented static password workflow and explain its limited, casual deterrence: it is not real security and must never be used to protect source books. Honor GitHub Pages base paths and keep `sources/` books, extracts, research, notes, and raw image collections out of app assets and production output. Prefer deterministic technical teaching graphics. Follow established stack, schema, and checks in the repository rather than adding infrastructure without a concrete need.
