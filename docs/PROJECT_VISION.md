# Project vision

## Purpose

This repository is the foundation for a personal, self-paced drawing course for one learner. Its central prompt is: “I have some free time. Tell me what I should learn and draw next.” The intended routine is to read a short lesson on an iPhone, draw beside it in a sketchbook, and glance back at the phone as needed.

The finished course should be a researched drawing education, not a list of prompts. It will connect observation, construction, form, perspective, value, composition, subjects, media, art history, and increasing independence through practical drawing.

## Phase boundary

Phase 1 establishes the static application, repository conventions, source workflow, schemas, agent instructions, and quality checks. The app may contain exactly three development fixtures to exercise navigation and rendering. They must remain clearly labelled **DEVELOPMENT FIXTURE — NOT FINAL CURRICULUM**.

Do not write the real course during Phase 1. Do not make major sequencing decisions before the learner's source books have been added and analysed. Phase 2 begins after books are added. Its target is roughly 60–80 integrated lessons, with 50–100 acceptable when the evidence and pedagogy support that size.

## Learning experience

- Mobile-first, especially for iPhone portrait use; desktop remains usable.
- Calm sketchbook and personal-tutor character: clear typography, useful whitespace, legible diagrams, large touch targets, simple scrolling, safe-area support, and little visual clutter.
- Lessons are independent of UI code and normally take about 30–60 minutes, with a short, relevant 5–10 minute warm-up and most time spent drawing.
- The curriculum spirals: concepts return in new subjects and combinations while scaffolding gradually decreases.
- Begin primarily with graphite. Introduce charcoal when its broad values, edges, gesture, portraits, or atmosphere serve a learning goal. Colour painting is out of scope.
- Integrate art history and master studies where an artist's work illuminates a drawing idea. Let personal style emerge from exposure, study, experiments, media, and choice; do not prescribe one.
- Use stylised subjects such as Pokémon occasionally to apply fundamentals. They must not displace early observational and structural drawing.

## System boundaries

The planned app is a lightweight, data-driven static site suitable for GitHub Pages. It has no backend or account system. Progress and settings are stored locally; JSON export/import may be added if straightforward. A small password gate may discourage casual viewing, but static client-side protection is not real security. Source books and private research must never depend on that gate for protection.

Keep original books, raw extraction, analyses, inventories, research notes, and scratch work private and out of deployment. Prefer new diagrams, generated teaching references, and public-domain artwork where they meet the same need. Record provenance for every visual asset.

## Working principle

**Sol thinks about the system. Luna does most of the work. Sol reviews important results.** Route high-volume reading, implementation, drafting, metadata, and routine QA to worker agents when the current Codex tools permit it. Reserve the lead for orchestration, synthesis, pedagogy, curriculum architecture, and difficult or structural review. See [MODEL_STRATEGY.md](MODEL_STRATEGY.md).
