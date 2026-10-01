# Core Drawing lesson production template

Use one copy per canonical map entry. Complete the internal brief before writing learner copy. Preserve the map's lesson identity and learning task; do not fill gaps by inventing architecture. Save completed working briefs/evidence packets under private `sources/`; do not commit private notes, excerpts, research, or local file paths in lesson JSON. See [`docs/LESSON_PRODUCTION.md`](../LESSON_PRODUCTION.md) for workflow, evidence and handoffs.

## Internal authoring brief

### Canonical identity

- Canonical lesson number/title:
- Stable production ID (`core-001` … `core-150`):
- Module / lesson type / target duration / difficulty:
- Canonical map entry (link or exact excerpt):
- Map-prioritized objective and expected learner outcome:
- Primary and secondary fundamentals; concept IDs/names/stages:

### Learning context

- Prior capability needed (describe what the learner can do, not only a broad lesson range):
- Skills retrieved from nearby lessons:
- New concept or action taught now:
- Later return/transfer point and what will change:
- Neighboring context (previous 2–3 / next 2–3 lessons):
- Likely misconception and visible evidence that reveals it:

### Pilot interpretation notes (apply only to named lessons)

- **01:** Start drawing immediately. Keep the baseline for Lesson 139. Make the correction on the same drawing; do not require a formal measurement exercise or a second redraw.
- **03:** Test broad point/side contact physically and apply one broad mark for a stated observed purpose, such as following a visible fruit-boundary curve. Do not introduce tonal modeling or value groups before Lesson 31.
- **07:** Branch gaps preview Lesson 08; do not repeat the general negative-space lesson here.
- **08:** The learner compares gaps without shading them. A teaching overlay may outline or accent a gap to identify it.
- **10:** Optional faint through-lines may explain overlap; do not teach formal volume construction before Lesson 36.

### Access and materials

- Have ready (paper, HB, eraser, optional tools, subject/reference):
- Subject route and quick setup:
- Supplied fixed-view fallback, where life or outdoor drawing needs one:
- Viewpoint/crop/light to keep fixed:
- Graphite actions required and where/how previously taught:
- New graphite action, if any:

### Source evidence

| Source ID / full bibliographic identity | Exact page/section/figure checked | Insight actually used | Informs (concept, warm-up, exercise, mistakes, visual) | Limits/uncertainty |
|---|---|---|---|---|
| | | | | |

Record only evidence actually checked. Keep the completed table and detailed insight notes in a private packet under `sources/`; lesson JSON contains no local source paths, excerpts, or private research. If a source cannot be checked, state the limitation privately and escalate a material factual uncertainty. Do not paste extracts into learner copy.

### Visual contracts

| Asset ID / role | Teaching decision it clarifies | Must show / must avoid | Creation route (deterministic, generated, existing licensed/PD) | Alt-text intent | Phone-size check |
|---|---|---|---|---|---|
| | | | | | |

No fixed image count. Each visual must clarify a learning decision; a role can reuse an asset only when it genuinely serves both contexts. Do not turn a reference into an instructional example or vice versa.

### Timing and completion

| `authoring.timingBudget` field | Minutes |
|---|---:|
| `setupAndReading` | |
| `looking` | |
| `warmup` (0 if omitted) | |
| `drawing` | |
| `compareAndCorrect` | |
| `review` | |
| `reserve` (unassigned friction/slack) | |
| **Sum (must equal canonical `durationMinutes`)** | |

Keep `reserve >= max(5 minutes, ceil(10% of durationMinutes))`. Do not fill reserve with extra tasks. `exercise.durationMinutes` equals `drawing + compareAndCorrect`; Compare/Correct are steps within the exercise, not separate exercises. If a warm-up is omitted, both `warmup` and its budget are omitted/zero as allowed by schema.

- Observable completion evidence (what drawing/action shows the objective was attempted):
- Distinct mapped actions and observable evidence for each (a heading or label alone is not completion evidence; keep different checks, such as edge-angle comparison and two-landmark plumb alignment, separate):
- Expected learner friction and simplification if needed:
- Real-use question to record after learner completes the lesson:

### Author self-QA

- [ ] Map sequence, title, objective, subject and task preserved.
- [ ] The learner can draw a recognizable subject from the start or as the map specifies.
- [ ] Explanation is only what is needed to begin; construction stays provisional.
- [ ] Warm-up rehearses one narrower action or is omitted.
- [ ] No unlearned graphite method is required.
- [ ] The physical pencil/page contact is shown or explained before requiring its effect; each applied mark has an observed purpose.
- [ ] Compare/correct wording names the same visible relationship shown by any related image. Split a physical demonstration if a composite is hard to read at phone size.
- [ ] Every distinct mapped action has observable completion evidence; no differently defined action is treated as a substitute for another.
- [ ] If checking pressure on the reverse, describe a front indentation and possible raised track on the back held to angled light; feel lightly.
- [ ] `authoring.timingBudget` fields sum to `durationMinutes`; reserve is at least the required amount and remains unassigned.
- [ ] `warmup.durationMinutes` matches `timingBudget.warmup`; `exercise.durationMinutes` matches drawing plus compare/correct.
- [ ] The learner checks the actual subject/reference and makes a useful correction.
- [ ] Source locators are real and precisely tied to teaching sections.
- [ ] Read More adds original optional teaching; sources stay separate.
- [ ] Visuals teach decisions and include alt text/provenance; no quota or decoration.
- [ ] No private book material or working notes appear in learner-facing fields.
- [ ] A second Luna reviewer can audit the draft without author context.

## Learner-facing draft

Write in calm, concise, concrete language for an adult drawing beside a sketchbook. Keep the core lesson usable before any optional section is opened. Use flexible headings, with a clear rhythm rather than identical wording in every lesson.

### Title

Canonical map title.

### Purpose

One or two short sentences: why this action helps with the drawing.

### Have ready

Materials, physical subject or reference, and simple setup. State the supplied fallback and any fixed-view instruction before the exercise.

### Essential idea

Short explanation, normally one to three concise paragraphs. Explain only the concept needed for this exercise. Describe what to look at and what the learner can test; avoid abstract lecture.

### Focused warm-up (optional)

One action, normally 5–10 minutes when used. It prepares the learner for the main exercise and does not reproduce the whole task.

### Main drawing

Give the drawing a realistic share of the lesson. Use short staged instructions that name: subject/setup; what to observe; the first marks/action; comparison point; one selected correction; and when to stop. Preserve looking time. The exercise normally produces a recognizable drawing.

### Compare and correct

Where it helps, state one observable relationship to inspect and invite the learner to diagnose a difference, make a correction, then compare again. Avoid declaring a drawing “wrong” without identifying evidence. When an image supports the check, its visible relationship must match the wording; do not leave the learner to infer a different comparison from the caption.

### Self-check

Two or three specific observable questions/actions, followed by a brief open reflection only when useful. Keep reflection grounded in the drawing.

### Read More / Go Deeper (optional)

Add original ArtApp reasoning, useful nuance, or a connection to a later drawing when it materially deepens understanding. For Lessons 01–10, include substantive depth where appropriate; do not pad to meet a length target. Keep it optional and distinct from citation details.

### Sources & Further Reading

Give accurate learner-facing citations for sources that informed the lesson, including title, author, edition, exact locator, the teaching sections informed, and a short original account of the influence. Do not claim that the learner needs to read a source to complete the lesson.

## Production JSON mapping

Deliver one record valid against [`curriculum/schemas/lesson.schema.json`](../../curriculum/schemas/lesson.schema.json). Canonical production drafts use `status: "draft"` and `label: "DRAFT — NOT FOR LEARNERS"`. After independent content, image, provenance and sequence review and Sol acceptance, integration may switch all required pilot records to `status: "published"` with an empty label as a local release candidate for strict validation and browser review. The status enables those checks; it is not release approval. Deploy only after engineering, mobile and privacy checks pass, and return affected records to draft if a material check fails. Retain the exact fixture label only for development fixtures. Map the draft as follows:

- Identity, duration, medium, tools, lesson type, fundamentals, concepts, prerequisites, objective, explanation, exercise, reflection, and extension → corresponding top-level schema fields.
- Subject/setup/fallback route → required `haveReady` with `subject`, `setup`, `referenceRoute`, and `fallbackVisual`. For the first ten lessons, the fallback is an owned public image with a matching provenance record, presented before the exercise as a compact thumbnail with an obvious enlarge action.
- Purpose and prior learning context → `teaching.whyItMatters` and `teaching.connections`.
- Explicit checks and repair instructions → required `teaching.compare` and `teaching.correct` arrays.
- Optional warm-up → `warmup` and `teaching.warmupVisuals` only when it prepares a narrower action. `conceptVisuals`, `exerciseVisuals`, and mistake visuals are optional; do not meet an image count.
- In the canonical rich lesson renderer, instructional visuals appear from `teaching.conceptVisuals`, `teaching.warmupVisuals`, `teaching.exerciseVisuals`, and `teaching.commonMistakes[].visual`. The top-level `visuals` array is for the legacy renderer; keep it empty for canonical `core-NNN` records unless integration explicitly needs a legacy view. Put each image in its matching teaching location and do not duplicate references.
- Read More → optional `teaching.deepDive`; check questions → `teaching.selfCheck`; learner-facing citations → `teaching.sources`.
- Keep detailed source evidence in the private `sources/` sidecar. Lesson JSON may contain only concise source IDs/locators allowed by the schema and non-sensitive metadata; `authoring` must not hold notes, excerpts, research, or file paths. Include accurate learner-facing citations for Lessons 01–10.
- Safe pilot `authoring` metadata → `canonicalNumber`, `prerequisiteCapabilities`, `laterReturns`, and `timingBudget` with `setupAndReading`, `looking`, `warmup`, `drawing`, `compareAndCorrect`, `review`, and `reserve`; no source evidence text or file path belongs there.

Use the canonical ID and filename exactly: `core-001.json` for Lesson 01 through `core-010.json` for Lesson 10 in `curriculum/lessons/`. Keep legacy MVP files untouched. The ordinary lesson arrays (`visuals`, `artistReferences`, `bookReferences`, `reflection`) remain required by the base contract even when some are empty. Store the completed private authoring brief separately under `sources/` and keep only fields the active schema explicitly allows in committed lesson JSON.
