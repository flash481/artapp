# Phase 2C production pilot: Lessons 01–09

## Scope and release state

Only Lessons 01–09 are finished and playable. The approved 72-lesson map remains intact. Lessons 10–72 remain planned and will be authored in three batches of 21 after learner feedback: 10–30, 31–51, and 52–72. The three Phase 1 development fixtures remain in the repository with their exact warning and are excluded from playable navigation.

The objectives, subjects, order, prerequisites, concept stages, and 45-minute target in `lesson-map.json` were retained. There are no curriculum-map deviations.

| Lesson | Duration | Primary fundamentals | Source concepts and exercises | Teaching visual |
|---|---:|---|---|---|
| 01 Your first drawing | 45 min | observation, reflection | Dodson concept 01, exercise 02 | mug from life |
| 02 Follow an edge | 45 min | line/shape, observation | Aristides concept 02; Dodson concept 01, exercise 01 | shoe from life |
| 03 Shapes around a plant | 45 min | observation | Edwards concept 03; Dodson concept 01 | plant from life |
| 04 Measure a flower | 45 min | measurement, observation | Aristides concept 02; Edwards concept 03 | flower or leafy stem from life |
| 05 Confident lines, familiar object | 45 min | line/shape | Dodson concept 02; Aristides concept 02 | book or key from life |
| 06 Three crops of one subject | 45 min | composition, observation | Picard concept 03; Edwards concept 03; Dodson exercise 08 | mug and book from life |
| 07 Three simple values | 45 min | value, composition | Dodson concept 04, exercise 05; Picard concept 03 | fruit and lamp from life |
| 08 Build a cup from volumes | 45 min | form, space | Picard concept 05; Dodson concept 05 | original cup construction SVG; cup from life |
| 09 Ellipse and rim | 45 min | space, measurement | Dodson concept 05; Aristides concept 02 | original eye-height/ellipse SVG; bowl from life |

Full book IDs, chapter/page locators, and exercise IDs are recorded in each lesson's `bookReferences`. The sources represented are Bert Dodson's *Keys to Drawing*, Juliette Aristides's *Classical Drawing Atelier*, Betty Edwards's *Drawing on the Right Side of the Brain*, and Alain Picard's *Portfolio: Beginning Drawing*. Source concepts guide original exercises; no book passages or illustrations were copied into the lessons. Generated references: **none**. Selected source illustrations: **none**. All nine tasks intentionally draw from life.

## Production decisions

- The learner makes a recognizable drawing in every lesson. Warm-ups prepare that lesson's visual question, explanations are short, and the main drawing takes 30–35 minutes.
- Exercises use short, numbered actions so a learner can glance at the phone and return to the sketchbook. Source citations stay in lesson metadata.
- Lessons 01–03 introduce comparison, contour, and negative space; 04–06 apply measurement, line emphasis, and framing; 07–09 add value, volumes, and ellipse checks. Later lessons reference earlier checks without repeating whole explanations.
- Flower proportions and bowl ellipses are judged from the observed subject. The map's Aristides concept 01 (Chapter Two Golden Ratio) leads for Lessons 04 and 09 were reviewed but not used. Finished lesson metadata cites the directly relevant Aristides concept 02, Chapter Three “The Block In” and “Measuring”; Dodson concept 05 supplies the ellipse/eye-level basis in Lesson 09. This is a source-use clarification; map objectives and sequencing did not change.
- The existing Phase 1 three-value fixture diagram did not clearly separate three value groups on the fruit, so Lesson 07 uses its real lamp-and-fruit setup instead.
- The two geometry diagrams are original deterministic SVGs with separate asset provenance records. Diagram captions describe them as aids to observation, rather than finished drawings to copy.
- The app uses published status to list only Lessons 01–09. It labels 10–72 as planned and keeps progress tied to finished lesson IDs.

## Editorial and mobile findings

- Lead review made Lesson 05 substantial for either a book or a key by using two small studies and one larger drawing.
- Sol High reviewed all nine lessons and the sequence, approving the pilot editorial content after the Lesson 04/09 source correction, Lesson 05 exercise expansion, and Lesson 09 measurement/diagram corrections. Explanations are 56–86 words; warm-ups 6–7 minutes; main drawing 30–35 minutes.
- Lesson 09 compares each observed rim's height relative to its own width. The diagram explicitly normalizes widths for a shape comparison and does not force equal observed widths.
- At 390px viewport width, the header, warm-up, step-by-step exercise, and both diagrams are readable. The first diagram pass had labels too small, prompting portrait SVG layouts with larger text. The lightbox was exercised on both diagram lessons. At 320px, removing the root minimum width resolved horizontal page scrolling.

## Rules to retain and questions for learner testing

Keep the map as the authority; use the private quick reference and targeted analyses for detail; adapt rather than copy; prefer life subjects when the map specifies them; use exact diagrams for geometry; keep assets and source provenance separate from the public app.

Ask after personal use: Does a 45-minute estimate match reality? Are Lessons 01–02's second attempts useful or repetitive? Is the plant's gap-first task clear without a supplied image? Does the book/key exercise remain interesting? Is the all-from-life opening varied enough? Can the ellipse diagram be understood at phone width? Are the directions easy to relocate while drawing? Which lesson would the learner want to repeat?

## Verification

`npm run validate:lessons`, `npm run lint`, `npm run typecheck`, `npm test`, `npm run build` (with `VITE_BASE_PATH=/artapp/`), and `npm run verify:dist` all passed after removing the password gate. Three automated tests passed. Vite/Vitest needed elevated filesystem access because the restricted sandbox blocked esbuild; this was an execution-environment restriction, not a project failure.

The production output has 12 public files, including five original SVGs (the two pilot diagrams and three preserved fixture assets) with a separate provenance record for each. JS is 260.36 kB (81.55 kB gzip); CSS is 10.50 kB (3.12 kB gzip). Images load lazily, and the public path uses `/artapp/`. Finished lessons 01–09 navigate and track completion; the app opens directly without a password. A browser check at 390px and 320px confirmed lesson text, steps, navigation, touch targets, diagram placement, lightbox, and no horizontal page overflow.

`verify:dist` found no source books, EPUBs, raw extracts, analyses, private research, or notes. A build-time import transform retains source provenance in repository lesson JSON while omitting `bookReferences` from the app bundle. The final JS audit found no password-gate code, source ID, page locator, provenance-note, or development-fixture title/label strings. No source-book illustration is deployed.
