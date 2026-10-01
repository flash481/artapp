# ArtApp Core Drawing — research synthesis and architecture proposal

**Status:** research and synthesis companion for the current 93-lesson architecture. The single canonical lesson sequence and production map is [`CORE_DRAWING_MAP.md`](CORE_DRAWING_MAP.md); the visual production specification is [`CORE_DRAWING_VISUAL_MANIFEST.md`](CORE_DRAWING_VISUAL_MANIFEST.md). All are planning artifacts, not finished lessons or approval to begin production. Published pilot lesson JSON and existing assets remain unchanged; their old IDs are historical pilot identifiers. Superseded 72-lesson planning data is archived and must not be used as current.

**Research checked:** 2026-09-30. Internal source-book work is documented privately in `sources/`; this public curriculum planning document uses bibliographic references and page/section locators only. Keep source books, extracted pages, analyses, and private notes out of the app and deployment.

## 1. Research synthesis

### What the approaches agree on

Across the ArtApp books and external curricula, learners repeatedly look at visible relationships rather than rely on object labels or remembered symbols. They compare edges, large shapes, intervals, angles, negative spaces, and proportions; propose a broad structure; then check and revise it. Large forms and value groups tend to precede detail. These shared practices are strong grounds for the course's central cycle: **draw → observe → compare → diagnose → correct → redraw**.

The approaches do not establish one universal sequence. Attention-first books (Edwards; Watson Garcia; Dodson) isolate what a learner notices. Construction-forward sources (Aristides; Hampton; Loomis; Norling) organize observations with masses, axes, planes, or perspective. These can work together: observation gathers evidence; construction offers a provisional explanation; comparison decides whether it fits. A construction proposal must remain revisable.

### External curriculum scan and decision

The lead compared the independent curriculum investigations against university/foundation and atelier routes. Youngstown State's published Foundation Drawing schedule moves through contour, gesture, positive/negative shape, structural still life, perspective, value, drapery, texture, and portrait; its assignments and repeated sketchbook work make drawing practice visible throughout the sequence. ANU's observational drawing course interleaves line, composition, structure, proportion/perspective, tone, still life, movement, and a final composition. The UNO and RISD course descriptions likewise emphasize observation, varied tasks, critique/iteration, and application rather than one uninterrupted drill block. These examples support a subject-led sequence with repeated applications, but they are syllabi and course descriptions, not controlled comparisons of sequences.

Atelier programs more often stage intensive exercises (Bargue/cast before sustained figure work) and assume substantial studio time, a teacher, and/or a model. They show the value of sustained studies and careful value/form development; their complete order and time expectations are not a fit for an independent home course. Construction curricula such as Drawabox's [Lines, Ellipses and Boxes lesson](https://drawabox.com/lesson/1) make spatial reasoning and repeated form practice explicit, but use a different goal and practice burden from observational graphite drawing. The ArtApp plan therefore borrows construction as a practical support, not as the entire course.

**Architecture decision:** begin with recognizable real subjects and a short observation/correction cycle, teach basic graphite control immediately, then stay with contour and shape long enough to apply them. Do not preserve the former pilot's sampler order. Move measurement, crop/composition, value, construction and ellipses into focused clusters where each receives practice and later return. The opening is: mug baseline/tool orientation, line pressure/selection, contour transfer, silhouette, plant negative space, chair gaps, angles, overlaps, then an extended study. Gesture begins in its own later cluster after form, space and value; the old one-off four-pose preview is removed. Detailed anatomy, specialist landscape, botanical drawing, charcoal and painting remain later-course material.

External examples consulted:

- [Youngstown State, ART 1521 Foundation Drawing syllabus, Fall 2026](https://catalog.ysu.edu/syllabi/2026-fall/art-1521-03-40520/)
- [Australian National University, ARTV1020 Observational Drawing, 2024](https://programsandcourses.anu.edu.au/2024/course/ARTV1020/First%20Semester/3807)
- [Grand Central Atelier, Drawing Year](https://grandcentralatelier.org/core-program/drawing-year/)
- [RISD Continuing Education, Drawing Fundamentals](https://cereg.risd.edu/search/publicCourseSearchDetails.do?courseId=1029403&method=load&selectedProgramAreaId=1010095)
- [University of Nebraska at Omaha, Drawing course syllabus](https://www.unomaha.edu/college-of-communication-fine-arts-and-media/art-and-art-history/_files/documents/drawing.pdf)
- [Drawabox, Lesson 1: Lines, Ellipses and Boxes](https://drawabox.com/lesson/1)

### Independent proposal and synthesis decisions

A separately developed 90-lesson proposal also started with direct observation of recognizable objects and later applied foundations to people and organic subjects. Across the external scans, source books, independent proposal and fresh review, the strongest agreement is early real-subject drawing, whole-to-part looking, comparison/correction, and repeated practice. The disagreement was whether to sample many concepts in the first nine or keep early work concentrated. Fresh reviewers and the beginner audit found the protected pilot sequence spread contour, line, negative space, measurement, composition, value, construction and ellipses too thinly; the revised sequence moves those strong pieces into the cluster where they can be practised and revisited. The resulting map has 93 lessons after useful mergers and removal of the gesture sampler, not a target quota.

### ArtApp source-book structural analysis

The private corpus contains 11 learner-provided books: eight PDFs and three EPUBs. The source analyses contain 70 concept records, 66 exercise records, and 45 selected illustration records. They describe instructional content, not comparative learning outcomes. Three sources are image-only (`Keys to Drawing`, Hampton, and `Creative Illustration`); Norling and Pokémon contain noisy/partial OCR; Loomis page-image sampling is selective; Aristides is a reflowable EPUB without fixed pages. Locators below therefore use printed pages when checked and chapter/section headings for Aristides. Full scope/access caveats remain in `sources/inventories/source-inventory.md` and each private analysis.

| Source | Verified progression and best use in this course | Limits and source-use decisions |
|---|---|---|
| Claire Watson Garcia, *Drawing for the Absolute and Utter Beginner, Revised: 15th Anniversary Edition* (2018) | Seeing pp. 15–23; contour pp. 24–37; dimension pp. 38–49; accuracy pp. 50–71; pencil pp. 72–87; portrait pp. 118–159; still life pp. 168–188. Best compact beginner source for sequential graphite tasks and troubleshooting. | Exclude charcoal/Conté/wash as course media. Use observation and measurement examples as adaptable prompts, not as proof of a universal face ratio or single best sequence.
| Bert Dodson, *Keys to Drawing* (original copyright 1985; supplied paperback impression/copy details uncertain) | Process pp. 10–39; line pp. 40–69; measurement pp. 70–101; light pp. 102–127; depth pp. 128–147; texture pp. 148–171; design pp. 172–197. Useful short observational applications. | Supplied EPUB consists of page images; locate visually, not through text search. p. 110's vase under four lights is a general light demonstration, not botanical instruction. p. 135's chair/figure draw-through is a useful construction candidate.
| Alain Picard, *Portfolio: Beginning Drawing: A Multidimensional Approach* (2016) | Tools/setup pp. 6–22; techniques pp. 24–44; perspective pp. 45–55; forms pp. 57–63; tone pp. 65–71; light/shadow pp. 73–79; composition pp. 81–95; integrated projects pp. 98–125. Strongest compact bridge to a graphite home course. | Translate its mixed-media projects into graphite. p. 29 negative space, p. 74 sphere/cast shadow, p. 82 composition thumbnail, and pp. 106–113 staged landscape are useful source-visual candidates; an original ArtApp drawing/diagram can teach each equally well.
| Betty Edwards, *Drawing on the Right Side of the Brain*, 4th ed. (2012) | PDF pp. 121–154 edges; 155–179 spaces; 180–211 sighting/relationships; 212–250 profile portrait; 251–289 light/shadow. Useful attention exercises, negative-space and measured-observation tasks. | Use PDF locators because print crosswalk is unverified. Keep her exercises separate from the oversimplified left/right-brain explanation; do not label learners by hemisphere.
| Juliette Aristides, *Classical Drawing Atelier* (eBook 2011; original 2006) | Reflowable EPUB: Ch. 3 line, block-in and measuring; Chs. 4–5 value/form; Chs. 6–7 copying/cast; Chs. 8–9 figure/portrait; Ch. 10 staged atelier lessons. Strong for block-in and staged progression. | Cite chapter/section, not page. The studio's long atelier model is not an assumed home prerequisite. Ch. 2 Golden Ratio/nature does not substantiate flower measurement or universal proportion rules.
| Ernest R. Norling, *Perspective Made Easy* (Dover 1999; original 1939) | Printed pp. 1–66 horizon, vanishing points, one/two-point boxes; pp. 67–116 buildings, figures and interiors; pp. 117–154 cylinders, ellipses and divisions. Best systematic perspective reference in the set. | Use carefully checked printed pages; OCR is noisy. Qualify “horizon equals eye level” as a level-ground shorthand and “incorrect” close vanishing points as a limited box-view warning, not a universal rule.
| Michael Hampton, *Figure Drawing: Design and Invention* (2009) | Printed pp. 3–28 gesture; 29–49 landmarks/weight; 50–85 forms/connections/head; 160–177 hands; 218–231 drapery. Useful once basic form is familiar. | Image-only scan, visually sampled. Use gesture and mass/landmark vocabulary; defer anatomy. Hampton says the anatomy chapter is a simplified design basis, not an anatomy reference.
| Andrew Loomis, *Drawing the Head and Hands* (2011 reprint) | Printed pp. 22–35 head construction; 44–69 feature placement/planes; 129–149 hand construction. Useful for axes and volumes alongside observation. | Use selectively and correct its templates against the sitter. Avoid dated prescriptive beauty and racial categories. Image plates and search extraction are limited.
| Richard Garvey-Williams, *Mastering Composition* (2014) | Printed pp. 14–70 perception, balance, framing; 72–101 design elements/depth; 102–113 tone; 114–159 simplification/salience/background. Helpful for framing and thumbnail alternatives. | A photography book: transfer decision-making to drawing. Treat visual-weight and golden-ratio claims as options to test, not laws.
| Andrew Loomis, *Creative Illustration* (2012 facsimile of 1947 edition) | Printed pp. 25–47 line/viewpoint; 81–96 tone and tonal planning; p. 92 shows multiple tonal thumbnails. Useful for later mark/value planning. | Image-only, selective page review; author assumes prior drawing training. Original thumbnail visuals teach the planning idea equally well. No color/career material is needed for Core.
| Maria S. Barbo and Tracey West, with Ron Zalme; illustrated by Ron Zalme, *How to Draw Deluxe Edition (Pokémon)* (2018) | Intro pp. 6–9 and sampled character lessons use guides, large shapes, light construction, then refinement. Useful only as an accessible construction-scaffold example. | Four lesson samples do not establish the whole book's method or transfer to observational naturalism. Do not use Pokémon art in the public app.

The old 72-map has some materially mismatched references. Watson Garcia pp. 118–159 are portrait chapters and pp. 72–87 are pencil technique, so these ranges are not perspective or gesture support. The revised locators use Norling/Picard/Dodson for spatial projection and Hampton/Edwards for figure observation. Red-team and page-range spot checks corrected old mismatches such as WG18 pp. 128–147 used as perspective and H09 pp. 129–159 used as beginner foreshortening support. A final source-locator pass also moved ellipse/cylinder/foreshortening references from WG18 Ch. 3 (pp. 38–49, dimension shading) to Ch. 4 (pp. 50–71, accuracy and perspective), while removing that chapter from box-plane and cross-contour entries where it did not directly support the concept.

### Read More and Sources & Further Reading plan

The lesson map keeps two teaching layers distinct. **Read More / Go Deeper** plans original optional ArtApp teaching: why the exercise works, a useful nuance or misconception, links to prior/later ideas, and the technique's limits. **Sources & Further Reading** is the lesson's source record and onward reading list: only material that informed the teaching, with the relevant author/title locator. At production, these should remain separate expandable sections; a bibliography is not a substitute for teaching and Read More is not copied source prose.

### Existing 72-lesson curriculum audit

The legacy map has a useful broad arc: recognizable objects, observation/shape/measurement/composition/value/form, then people and larger studies. Keep those capabilities and the quality of the enriched pilot materials, but not its sequence by default. The audit found prerequisites chained more strictly than tasks require, negative-space practice fading, repeated convenience objects without changed questions, three dedicated flower anchors plus an optional repeat, isolated drapery, adjacent extended projects, charcoal/specialist drift and inaccurate source locators. The current map redistributes those capabilities, creates deliberate recurrence, varies subject defaults, gives folds a small transfer cluster, spaces sustained applications, removes Core charcoal and replaces dedicated flower lessons with proportionate plant/natural-form studies. Legacy lesson numbers are not requirements or one-to-one destinations.

### Learning-science conclusions and limits

There is strong general evidence that spacing practice over time helps retention, and moderate evidence that interleaving can aid discrimination in visual learning. Most interleaving studies concern categorization/recognition or carefully defined tasks, not a home learner producing graphite drawings. Applied motor-learning findings are mixed. Retrieval practice improves memory, while transfer varies by task and how different the practice/test contexts are. Feedback helps on average, but its effects vary with specificity, timing, and task. Drawing-specific evidence is thin.

The closest drawing-specific study reviewed here, Vodyanyk & Jaeggi (2025), tested a remote, self-administered observational-drawing program of 10 lessons plus 2–3 practice opportunities per lesson with adults aged 65–87. Drawing accuracy improved in the intervention sample, but attrition was 47%; practice schedules were self-selected, so the study does not compare spacing schedules or establish this course's optimal order. It supports feasibility for that sample, not broad claims about younger beginners or a specific curriculum.

**Decision:** focused clusters plus a long spiral is a reasoned course-design choice, not a directly proven drawing intervention. Stay with a new skill long enough to understand and apply it across several subjects; then schedule short recall/use again in later clusters. Interleave related decisions when the exercise is ready for it, rather than switching tasks every few minutes. Every drawing gets one clear review criterion, one comparison, and an opportunity to correct. Reduce prompts progressively. Use short memory sketches only as optional retrieval cues, then return to observation.

Research cited:

- Brunmair & Richter (2019), interleaving meta-analysis: [DOI](https://doi.org/10.1037/bul0000209)
- Firth (2021), review of interleaving and visual learning: [DOI](https://doi.org/10.1002/rev3.3266)
- Cepeda et al. (2006), spacing meta-analysis: [DOI](https://doi.org/10.1037/0033-2909.132.3.354)
- Pan & Rickard (2018), retrieval practice and transfer meta-analysis: [DOI](https://doi.org/10.1037/bul0000151)
- Wisniewski et al. (2020), feedback meta-analysis: [DOI](https://doi.org/10.3389/fpsyg.2019.03087)
- Vodyanyk & Jaeggi (2025), remote observational-drawing intervention: [SAGE article](https://doi.org/10.1177/01640275251321813)

### Life, reference and home learning

Use **Life recommended** when direct three-dimensional comparison offers a meaningful benefit (viewpoint, measurement, negative space, ellipse, construction or spatial arrangement). Each such lesson in the companion map has an ArtApp-owned reference-photo fallback specification. Keep the physical setup simple: one object or small group, stable chair/view, paper and a pencil; a lamp is called for only when studying light.

Use **Reference recommended** for fixed, repeatable, fleeting, difficult-to-arrange or socially inaccessible subjects, especially gesture, poses, controlled portrait light and selected landscape views. Figure/portrait options always include supplied references and self-reference/mirror; a willing model is optional. Gesture lessons specify enough separate poses to complete the whole set. The **Either** label applies when a fixed-plane image or a live subject offers comparable evidence for the lesson's specific question. **Both intentionally used** means the comparison itself is the lesson.

Photographs are chosen projections and records of one moment. Lens position and distance change perspective; crop removes context; exposure and display can compress values or clip detail; lighting creates or removes shadows; a still image freezes movement. These effects vary by photograph and must be inspected, not assumed. A phone selfie taken very close can enlarge near features because of viewpoint. Learners should check source size, viewpoint, crop, light, shadow detail, and movement before deciding that a reference is useful.

### Decisions requiring teaching judgment

The opening-order disagreement was resolved by treating the nine pilot lessons as high-quality material rather than fixed sequence constraints. The early plan now establishes basic graphite control, then contour and shape; measurement, composition, value, construction and ellipse material move to concentrated clusters. A short optional human-reference substitution is available in the Lesson 09 extended study, but there is no gesture sampler before gesture instruction. The final 93-lesson count follows useful mergers and deletion of the old preview, not a quota.

The main remaining judgment is whether the 13-lesson human-subject module (52–64) feels proportionate in a general course. Its subclusters are distinct and reference/self options are available, so it remains for review. A second judgment is whether future production should revise/re-index the existing pilot JSON to match the approved plan; the present task preserves those published files and their old IDs.
## 2. Recommended module architecture

The canonical map is [`CORE_DRAWING_MAP.md`](CORE_DRAWING_MAP.md). It contains every lesson-level prerequisite, concept recurrence, subject/mode, fallback, exercise, reinforcement, Read More topic/source locator, placement reason and visual asset ID. This companion explains the course-level choices; it does not offer a second sequence.

| Module | Purpose, entry and concentrated clusters | Revisited concepts and extended study | Exit capability, deferrals and specialist links |
|---|---|---|---|
| 1. Observation and graphite line (01–03) | No prerequisite. Start with a real mug and observation/correction; introduce grip, pressure, point/side and erasure; focus line selection, then contour turns. | Observation recurs through all later studies; line returns in 65–72. No extended study. | Learner can make light, selected graphite marks and compare a contour. Defer shading methods and formal construction. Supports every later course. |
| 2. Shape, gaps and relationships (04–09) | Whole silhouette; plant negative shapes and chair gaps; angles/alignment; overlap/interrupted edges. | Apply early looking skills to different subjects; Lesson 09 consolidates 01–08. | Learner can check a recognizable object/group through silhouette, gaps and overlap. No formal perspective or tone rendering. Specialist transfer to all courses. |
| 3. Comparative measurement (10–17) | Temporary unit and overall proportion; repeated intervals; angle/length comparison; irregular manufactured object; group relationships. | Reappears in form, rooms, people and open studies. Lesson 17 consolidates 10–16. | Learner can use a few comparative checks without treating a sighting as a fixed formula. Supports figure, portrait, landscape and object study. |
| 4. Composition as active choice (18–25) | Crop/scale; balance through negative spaces; overlap; tangency; focus and simplification; simple two-value thumbnails. | Horizontal strand throughout the course. Lesson 25 reuses crop, gaps and a two-value plan. Full value technique remains in 43–51. | Learner can compare framing options and explain what a crop emphasizes. Defer advanced design theory; supports illustration, landscape and painting. |
| 5. Form, construction and ellipses (26–33) | Box planes; observed ellipse and viewpoint; cylinders; cross-contour; joined forms; construct/compare/rebuild; draw-through. | Construction is checked against observation in 31 and 33; later viewpoint transfer in 85. Lesson 33 consolidates 26–32. | Learner can propose simple volumes and revise them against visible contour/proportion. Defer anatomy and advanced geometric construction; supports figure, portrait and still life. |
| 6. Perspective and spatial depth (34–42) | Eye level; one-point depth; rotated box; room corner; furniture placement; repeated intervals; simple foreshortening; multiple depth cues. | Builds on form, overlap and measurement; room application returns in 89. Lesson 42 consolidates 34–41. | Learner can use a limited perspective construction while checking the actual view. Advanced landscape is deferred; supports interiors and Landscape & Nature. |
| 7. Light, value and graphite control (43–51) | Value scale/grade choice; light direction and planes; cast and form shadow; parallel hatching; crosshatching; reflected light/eraser lifting; changed light; blending as optional; hierarchy. | Retrieves graphite control from 01–02 and simple two-value planning from 23; later used in portraits, organic forms, edges and integration. Lesson 51 consolidates 43–50. | Learner can group values and build tone reversibly with graphite. Charcoal and painting are specialist courses, not prerequisites. |
| 8. Human subjects (52–64) | Gesture; weight; gesture into masses; readable pose; simple proportion/support; figure foreshortening; head axis and observed intervals; profile/three-quarter comparison; hands and hand/object relation. | Applies contour, measurement, construction, perspective and value. Lesson 64 consolidates the learner's chosen path through 52–63. | Learner can make an introductory pose/head/hand study without memorized anatomy or a required live model. Detailed anatomy and portrait likeness are deferred; links to Figure and Portrait courses. |
| 9. Edges, texture and mark economy (65–72) | Line hierarchy; hard/soft and lost/found edges; directional/form-following hatch; texture with fewer marks; material distinctions; selective finish. | Retrieves pressure, grade, layering, hatching, blending and eraser skills; Lesson 72 applies two or more methods. | Learner can select marks that support observed form/material and stop before overworking. Specialist media and illustration stylization are deferred. |
| 10. Organic forms and fabric (73–80) | Irregular axis; linked natural forms; leaf/branch overlap as general shape study; natural surface; cloth support and major folds. | Transfers construction, spacing, value and mark choice; Lesson 80 combines natural form and cloth. | Learner can organize irregular shapes and broad folds without botanical taxonomy or exhaustive drapery. Links to Botanical, Landscape & Nature, Figure and Coloured Pencil. |
| 11. Integration and independence (81–93) | Return to baseline; life/photo comparison and photo audit; limited environment; viewpoint transfer; simplification; chosen composition; figure in space; familiar interior; question-led practice and self-diagnosis. | Lesson 89 is an extended interior transfer; 90–93 reduce prompts and combine learner-selected concepts; 93 is the final independent study. | Learner plans, observes, compares, corrects and chooses a useful next question. Applies to every later specialist course; no multi-day finished-art project is required. |

Composition is both a concentrated cluster (18–25) and a horizontal strand. Simple value appears briefly in the composition cluster because thumbnails need a way to distinguish light and dark; full tonal control is not assumed until 43–51. The opening is deliberately concentrated rather than a tour of every topic.

## 3. Dependency model

Prerequisites in the canonical map identify useful prior capability, not mastery tests. A learner can repeat or repair a lesson without being locked out. There are no chains that require every previous extended study as a gate.

- **Opening:** 01 has no prerequisite; 02 uses 01's observation baseline; 03 adds contour after basic mark control; 04–08 develop silhouette, gaps, angles and overlap; 09 consolidates those experiences. Measurement begins at 10 without making early exposure a formal gate.
- **Measurement and composition:** 10 starts a focused unit/whole-proportion cluster; 11–16 vary the comparison problem; 17 consolidates. Crop and composition begin at 18 using the accumulated object/relationship skills; thumbnails do not require advanced value rendering.
- **Form and space:** 26 depends on simple proportion; 27 adds the observed ellipse; 28–33 connect volumes and correction. Perspective at 34 uses volume/overlap ideas, then progresses from simple views to interiors and multiple depth clues; 42 consolidates.
- **Value and graphite:** 43 follows form/space and teaches its own scale, grades, light/dark groups and reversible layers before asking for richer shadows. 44–50 build the specific shadow/mark effects; 51 consolidates. Early L23 value is limited to two broad thumbnail groups and a first hatch patch, explicitly repeated in L25.
- **People and mark choice:** gesture starts at 52 with a complete supplied pose set. Proportion, masses, head/hand construction and foreshortening build from earlier shape, measurement, form and space. Edges/material work at 65 retrieves taught graphite effects. Irregular forms and cloth at 73–80 reuse those methods.
- **Integration:** 81 explicitly revisits the baseline; later lessons select concepts by task, not by a strict chain. Lessons 90–93 do not require completion of every prior study.

An independent dependency audit found no remaining future prerequisite references, circular prerequisites or prerequisite requiring material first taught later. The map is the source for individual lesson links; do not recreate a separate authoritative prerequisite JSON.

## 4. Concept recurrence map

| Concept strand | Exposure | Focused teaching | Reinforcement | Later application and integration |
|---|---|---|---|---|
| Observation and self-correction | 01 mug baseline; 02–03 compare marks/contours | 04–17 shapes and measurement; each cluster uses compare/diagnose/correct | Extended studies 09, 17, 25, 33, 42, 51, 64, 72, 80, 89; lesson-specific correction throughout | 81 baseline return; 90–93 increasingly independent practice |
| Contour, line quality and mark economy | 01–03, especially line control at 02 and contour turns at 03 | 04–08 silhouette, gaps, angles and interrupted edges | 10–17 proportion; 26–33 construction checked by visible contour | 65–72 focused hierarchy/edge/texture, then integrated studies |
| Negative space, crop and composition | 03/05 gap work, 06 chair transfer, 07–08 relationships | 18–25 crop, balance, overlap, tangency, focal choice and thumbnails | 33, 42, 51 and every later thumbnail or arrangement | 64, 72, 80, 87–93; composition remains active, not completed |
| Measurement, proportion and alignment | 07 early angle; 10–17 comparative checks | 10–17 temporary units, intervals, angles and group proportion | 26–33 volume ratios; 34–42 spatial relationships; 52–63 people | 85 viewpoint transfer; 89–93 independent selection |
| Form, construction, ellipses and cross-contour | 08 overlap is a visible-depth cue; no early construction boot camp | 26–33 boxes, ellipse, cylinder, cross-contour, joined forms and correction | 34–42 interiors; 52–63 simple human masses; 73–80 irregular forms | 85–89 and independent subject choice |
| Perspective and spatial depth | 08 overlap, 15 apparent shortening without ellipse requirement | 34–42 eye level, convergence, room planes and depth cues | 42 extended room; 52–63 pose/head/hand placement; 82–85 photo/viewpoint | 88–89 person/interior, 93 chosen integration |
| Value and light logic | 23 two-value thumbnails and hatch used as a dark mass | 43–51 value groups, grade/pressure, layered tone, light, shadows, lift and blending judgment | 64, 66–72; 76–80 natural forms/fabric; 82–89 reference and integrated studies | 90–93, selected by the learner's question |
| Graphite/tool handling | 01–02 grip, point/side, pressure, sharpen/rotate, gentle erasure | 23 first parallel hatch; 43–51 grades, scale, layering, broad tone, shadows, crosshatch, lifting and optional blending | 65 line hierarchy; 66 edge softness; 67 erased-back edges; 68 directional hatch; 69–70 texture/material; 71–72 correction/page care and integration | 73–80 and 81–93 retrieve tools selectively; methods do not disappear after the value module |
| Gesture, figure, head and hands | No disconnected early gesture sampler; broad shape/overlap are learned first | 52–63 gesture, weight, proportion, support, head observation, hand masses and simple foreshortening | 64 extended person study; 83 reference audit | 88 figure in space and learner-selected human subject in 90–93 |
| Organic form and cloth | 05 plant gap as a general shape lesson | 73–80 irregular axes, clusters, natural surfaces and supported folds | 80 extended combination | 84 limited outdoor/window view; 86, 89–93 subject transfer |
| Photographic-reference literacy | Supplied fallback accompanies lessons that need it | 82 direct-life/photo comparison; 83 photo audit | Reference-based figure lessons and supplied fixed-light views | 85 paired views, 88, 90–93 intelligent source choice |

## 5. Graphite craft and tool-handling audit

The course teaches seeing and construction alongside the physical craft of graphite. Techniques are placed where real subjects need them and retrieved in later drawings, rather than isolated in one long tool module.

| Skill | First explicit teaching | Later use/retrieval | Current coverage and source grounding |
|---|---|---|---|
| Grades and use | 43: brief 2H/HB/2B comparison when available; H typically harder/lighter, HB general, B softer/darker; HB/pressure-only route remains complete | 44–51 chosen grade/pressure; 65–72 selective marks | Picard pp. 8–9; Watson Garcia pp. 40–46 and 72–80. Maker/paper differences are qualified. |
| Grip, point/side, sharpening and pencil angle | 01: relaxed writing grip, optional farther-back/looser broad-mark hold, sharpened point, rounded-point check/rotate/sharpen cue, point vs side; 02 retrieval | 44 broad side tone and lower pencil angle; 65 line hierarchy | Picard pp. 21–23, 32–35; Watson Garcia pp. 72–80. No grip is prescribed. |
| Pressure and reversible marks | 01–02 light marks, pressure ladder, avoid scoring paper | 43–51 layered tone; 65–72 line/edge control | Picard pp. 21–23; Dodson pp. 40–69; Watson Garcia pp. 72–80. |
| Hatching and crosshatching | 23 short parallel-stroke sampler used in a two-value thumbnail; 43 may retrieve the patch if useful | 46 form-following parallel hatch; 47 crosshatch; 68 directional/form-following hatch; 72 integrated choice | Picard p. 39 and pp. 31–41; do not use the plant-gap lesson as a tone exercise. |
| Value scale, layers and gradation | 43 five-step HB scale plus required grade comparison; 44 broad side/point marks and smooth gradual layers | 45–51 shadows, plane transitions, light change, selective blend; 64, 66–72, 80 | Picard pp. 65–71; Watson Garcia pp. 40–46; Dodson pp. 102–127. |
| Building darks, white paper and paper care | 43–45 build in light layers, reserve paper for highlights, avoid hard pressure/burnish | 48 eraser lift; 51 sustained still life with slip sheet/page care; 71–72 correction/clean page | Picard pp. 8–9, 21–23; Watson Garcia pp. 40–46; paper shine/muddiness are ArtApp practical cautions, not attributed quotations. |
| Erasers and lifted light | 01 gentle lift; 48 explicitly compares kneaded/putty and firmer gum/vinyl erasers, lifting into tone | 67 lost/found edge; 71 erase back/selective correction; 72 and later studies | Picard pp. 8–9, 21–23; Watson Garcia pp. 74–80. |
| Blending and edges | 50 compares layered gradient with optional gentle blending after layered tone; 66 tests soft edge | 67 lost/found; 70 material choice; 71–72 restraint | Picard pp. 65–79; Watson Garcia pp. 72–83. Blending is useful selectively, not a required finish; muddy over-smudging is practical ArtApp guidance. |
| Materials and surface marks | 68–70 marks for form/texture/material, after methods are demonstrated | 72 extended study; 76–80 and 86–93 selective transfer | Dodson pp. 148–171; Picard pp. 31–41, 65–79. |

A fresh beginner audit found and corrected the main readiness gaps: hatching was removed from the negative-space plant study; Lesson 23 now introduces parallel hatch inside a tonal thumbnail and Lesson 25 repeats it; Lesson 43's visual now demonstrates the requested five-step HB-only value scale as light layers; the first sustained study is bounded to one primary and one overlapping secondary object; and pencil-point maintenance is introduced before later marks require it. A visual-plan review also removed unintended gap shading from the chair study. New original visual prompts for grade comparison, broad layered tone, crosshatching, lifted highlights, blending and page care are specified in the visual manifest.

## 6. Subject balance and life/reference strategy

The row-by-row map classifies **59 lessons Life recommended, 17 Either, 16 Reference recommended and one Both intentionally used**. Every Life lesson names an easy setup and supplied photo fallback. These labels reflect the learning question, not a target ratio.

| Subject family | Planned role and recurrence decision |
|---|---|
| Manufactured/household objects | Mug, shoe, package, chair, book, tools, utensils, vessels and furniture recur where contour, proportion, crop, construction, shadow or edge is the changed question. Repetition is purposeful and is varied with subject transfer. |
| Food and other natural objects | Fruit/egg, potato, ginger, onion/garlic, stone and shells apply shape, light, form, grouping and texture; no species study is required. |
| Plants and flowers | One required potted-plant negative-space study at 05. Lesson 10 permits a flower/stem as an optional measurement subject; Lesson 75 uses leafy branch/herb with a flower only as a substitute. No mandatory flower lesson or flower quota. The old flower visuals remain as historical pilot assets, not required future subjects. |
| Fabric/clothing | Cloth appears alongside objects as a material/support; 78–79 give folds a small connected cluster, then 80 applies them. It does not become specialist drapery. |
| People | All pose/head/hand exercises have supplied references; mirror/self-reference routes are available when appropriate, and another person is never required. The pose sets include enough separate images for the full timed work. |
| Interiors and nature/environment | Perspective progresses through room views; 84 is one limited window/outdoor application, not a landscape module. |
| Learner-selected subjects | Choice increases late in the course with a clear question, fallback reference and success criterion; choice does not replace foundations. |

### Subject-frequency and repetition audit

Counts below report the specified anchor opportunities; categories overlap because, for example, a spoon is both a manufactured object and a material study. They are a diagnostic, not equal-subject quotas.

| Subject hotspot | Planned frequency/locations | Judgment |
|---|---|---|
| Flowers | **Zero required flower lessons.** Flower is an optional measurement subject at 10 and an optional substitute for the leaf/branch study at 75. | Proportionate; no flower strand. The potted plant at 05 is required but teaches negative shape, not botany. |
| Plant-led studies | Two: potted plant gaps at 05; leafy branch/herb overlap at 75. | Both teach different general drawing skills; specialist plant structure is deferred. |
| People | 13 consecutive human-subject lessons at 52–64, plus photo-reference literacy at 83 and figure-in-space integration at 88. | The sequence is the most sustained subject block, but each task changes skill; no live model is required. |
| Interior/space | Nine focused lessons at 34–42, plus familiar-room extension at 89 and limited view at 84. | A coherent spatial cluster, balanced by everyday objects and people. Lesson 84 is not a landscape strand. |
| Fabric | Two focused fold studies at 78–79 plus the natural-form/fabric extension at 80; cloth also appears as one material among groups. | Useful transfer to support and broad folds; not a drapery course. |
| Mug | Three explicit returns: observation baseline 01, crop/framing 18, spaced baseline redraw 81. | Same recognizable subject, three different questions; intentionally retained. |
| Spoon | Four distinct study slots: contour-turn transfer 03, foreshortening 15, cast shadow 45, material/edge choice 70; it can also be an optional personal object at 10 or hand-held object at 63. | Repetition teaches transfer across contour, projection, light and material. Lesson 10 is no longer spoon-default. |
| Carton, kettle and cloth | Carton plane value 47, controlled light change 49, sustained limited-value still life 51. | Deliberately controlled repeat supports comparison; these are not three identical still-life assignments. |
| Chair | Gap shape 06, tangency alternative 21, draw-through 32, room placement 38/42, cloth support 78. | Repeated furniture offers different visible relationships, proportion, construction, space and fabric support. |

The full subject list and mode are in each map row, so later production can count actual authored choices and revise any repeat that no longer serves its stated question. The course also includes manufactured/structured objects, personal objects, food, stone/shell and limited environmental views; these are spread through the map rather than assigned equal percentages.
Use life when depth, viewpoint, measurement, gap, ellipse or construction evidence matters. Use reference for fleeting poses, controlled portraits/light, difficult or inaccessible setups, or repeatable paired conditions. Either is used where the specific task is comparable. Lesson 82 intentionally compares a direct view with its phone photograph; 83 teaches source inspection. Lens position/distance affect perspective, crop removes evidence, exposure/display can compress or clip values, and a photograph freezes movement; these effects vary and should be checked rather than assumed. This is a literacy skill, not a claim that photos are inherently unreliable.

## 7. Lessons 01–09 reconciliation

The former pilot order was judged against the whole 93-lesson map. Its detailed teaching and existing visual assets were not overwritten. Each concept is kept, moved, merged or made optional only where the new progression provides practice and a meaningful return.

| Existing pilot lesson | Canonical map placement | Decision and reason |
|---|---:|---|
| 01 Mug: observe, compare, correct | 01 | **Keep first.** It establishes the course's observation loop and provides a spaced baseline. Add only a brief graphite orientation to the future authored lesson; existing JSON/assets stay unchanged. |
| 02 Contour | 03 | **Move after line control.** Merge with the later contour-turn exercise so the learner practises one boundary skill on a second subject rather than repeating a full shoe lesson. |
| 03 Plant negative space | 05 | **Move after silhouette.** Keep the plant as one varied real subject. Remove hatch/shading from the gap so shape evidence stays distinct from tonal method. |
| 04 Flower measurement | 10 | **Move into the measurement cluster and optionalize the flower.** Merge its useful comparative-sighting method with the unit lesson; a learner-selected personal object is the ordinary default. Keep existing flower images only as historical materials/optional future examples. |
| 05 Line pressure/search/selection | 02 | **Move earlier.** It teaches marks needed before contour, gap and angle work and opens a focused two-lesson graphite-line start. |
| 06 Crop/composition | 18 | **Move into the composition cluster.** Merge duplicate crop application; use the same view/objects for changed framing, then revisit thumbnails and hierarchy. |
| 07 Three-value fruit | 43 | **Move into the full value cluster.** Merge the pilot study with grade/scale/value-group introduction so the learner is not asked to render tone before practical methods are taught. |
| 08 Cup construction | 31 | **Move after volumes/ellipses.** Merge with build/compare/rebuild; construction stays provisional and the observed cup corrects it. |
| 09 Ellipse/rim/eye level | 27 | **Move between simple box forms and cylinders.** Merge with the focused ellipse-axis/viewpoint lesson; comparison is retained without becoming an early detached geometry task. |

The resulting opening is: **01 mug observation/tool orientation → 02 line pressure/search/selection → 03 shoe contour plus utensil-turn transfer → 04 parcel silhouette → 05 plant gaps → 06 chair gaps → 07 angles/alignment → 08 overlap/interrupted edges → 09 extended study → 10 comparative measurement.** Lesson 09 asks for one main object and one overlapping secondary object; a third is optional. It does not preview gesture as a separate topic.

## 8. Visual teaching plan and visual source candidates

Every lesson has a visual purpose, type, content, stage, annotations, difficulty, alt-text intent, source relationship, essential/optional decision and detailed prompt in [`CORE_DRAWING_VISUAL_MANIFEST.md`](CORE_DRAWING_VISUAL_MANIFEST.md). Visuals vary among hand-drawn graphite demonstrations, technical diagrams, references/setup examples and comparison/correction progressions. The reusable ArtApp master-style prompt adapts from loose early correction to more resolved later studies; it does not force identical compositions. No images have been generated in this planning task.

Source-book illustrations were inspected as candidates, not automatically selected: Picard p. 29 for negative space, p. 39 for hatch/crosshatch, p. 35 for broad side-tone, p. 74 for sphere/cast shadow and p. 82 for composition thumbnails; Dodson p. 110 for changed-light vase (flowers are incidental) and p. 135 for chair/figure draw-through; Garvey-Williams p. 65 for cropping; Norling pp. 117–154 for ellipse/axis diagrams; Loomis *Creative Illustration* p. 92 for tonal thumbnails; Picard pp. 106–113 for a limited landscape sequence. In each case an original ArtApp drawing or deterministic diagram can teach the principle without reproducing the source image. Exact candidates/why they help are included in the per-lesson visual entries. Private source pages, books, extracts and analyses remain under `sources/`, excluded from deployment.

## 9. Red-team findings and revisions

The initial complete-map reviewers identified weak opening distribution, dependency mismatches, confusing time/subject demands, repeated convenient objects, a long human block, and visual/source coverage concerns. Those points were evaluated against the map rather than appended uncritically.

| Review finding | Evaluation and revision in the current map |
|---|---|
| Lessons 01–09 were being kept mainly because they existed, spreading topics too thinly. | **Accepted.** Re-sequenced and merged as in Section 7. High-quality detail/assets remain; sequence is no longer protected. |
| Some early tasks assumed marks/effects before instruction. | **Accepted.** Line/tool control is 01–02; plant gaps no longer use hatch; hatch begins with value thumbnail 23 and is repeated at 25, then formally develops at 46–47/68; full tone starts at 43. Grade choice, sharpening, erasure, blending and page-care instruction are made explicit. |
| First extended study asked too much setup/material at once. | **Accepted.** Lesson 09 is one primary object plus one overlapping secondary; optional third object; the study has specified 75-minute timing. |
| Subject repeats and flower drift risked turning convenient examples into a theme. | **Accepted.** Lesson 10 defaults to learner-chosen personal object; Lesson 16 and 50 vary object groups; one required plant study remains; flower is optional only. The 59/17/16/1 mode distribution is audited. |
| Human module may be long for a general beginner. | **Considered, retained for now.** Lessons 52–64 form gesture, support/proportion, head and hand clusters, with applications and a supplied/self-reference route. Reviewer found content introductory and accessible but noted this is the only 13-lesson uninterrupted subject block. No extra lesson was added to regularize extension spacing. |
| References included inaccurate chapter/page assignments. | **Accepted.** WG18 pp. 128–147 is not used for perspective; WG18 pp. 72–87 is pencil material, not gesture; Hampton anatomy pages are not cited for beginner foreshortening. The map uses checked page/section locators from appropriate sources and the source analyses record extraction limits. |
| Some supplemental graphite visuals had no detailed prompt. | **Accepted.** Grade sampler, layered tone, crosshatching, eraser lift, blend comparison and page-care visuals now have independent prompt detail; Lesson 51 prompt explicitly shows pale layers, reserved highlight and optional hatch. |
| Utensils and carton/kettle/cloth recur. | **Accepted where variation improved transfer.** Lesson 10 is a learner-chosen object; Lesson 16 uses tin/carton/cloth; Lesson 50 uses pear/jar/cloth. Carton/kettle/cloth remain through plane value, changed light and sustained application because the changed-light comparison benefits from controlled subjects. |
| Existing repository docs/data could make the old sequence appear current. | **Accepted.** Legacy map/audits/generator and pilot plans are archived with explicit warnings; `docs/CURRICULUM.md` points to the single canonical map; validator no longer imports the old map. |

## 10. Time and practice estimate

The durations are lesson targets including cue/setup, drawing, comparison and review. Actual study is flexible; a learner may stop at a sensible point. The row-by-row sum is **4,535 required minutes (75 h 35 min)**: 5 Focused Studies at 25 minutes, 77 Standard Lessons at 45 minutes, and 11 Extended Studies totaling 945 minutes (15 h 45 min). Extended studies are 75, 90 or 120 minutes as listed in the map; they introduce little/no major theory and consolidate the preceding cluster.

Optional lesson-specific reinforcement is estimated at 10–20 minutes each. If the learner completes and chooses reinforcement for every lesson reached, cumulative estimates are:

| Course progress | Required lesson time completed | Optional reinforcement at 10–20 min per completed lesson | Cumulative time with all those options |
|---|---:|---:|---:|
| 25% (23 lessons) | 17 h 15 min | 3 h 50 min–7 h 40 min | 21 h 05 min–24 h 55 min |
| 50% (46 lessons) | 36 h 15 min | 7 h 40 min–15 h 20 min | 43 h 55 min–51 h 35 min |
| 75% (70 lessons) | 55 h 25 min | 11 h 40 min–23 h 20 min | 67 h 05 min–78 h 45 min |
| 100% (93 lessons) | 75 h 35 min | 15 h 30 min–31 h | 91 h 05 min–106 h 35 min |

A practical overall estimate is **about 80–92 hours** for one pass plus roughly 25–50% of optional reinforcement. This excludes optional repeats of a full lesson or time spent making extra studies by choice; no project requires multiple days.

## 11. Specialist-course deferrals

- **Charcoal:** all dedicated charcoal technique removed from Core. Graphite gives sufficient control for value, edge and gesture foundations.
- **Portrait:** basic head construction and observed feature intervals remain introductory; likeness, advanced planes, portrait lighting and sustained portraiture belong in Portrait.
- **Figure:** gesture, weight, simple masses/proportion, support and modest foreshortening remain; detailed anatomy and muscle memorization belong in Figure.
- **Botanical:** plants/flowers teach ordinary shape, gap, overlap and value. Species-specific structure and botanical accuracy belong in Botanical.
- **Landscape & Nature:** one limited window/outdoor view and natural-object studies support breadth; advanced landscape composition, atmosphere, trees and field practice belong in Landscape & Nature.
- **Coloured Pencil / Gouache and Painting:** color mixing, layering systems and paint handling are deferred.
- **Illustration/Stylisation:** shape simplification supports later illustration, but dedicated stylization and character-design progression are deferred.

## 12. Final audits

| Audit | Result |
|---|---|
| Dependencies | Local prerequisites reviewed; no future/circular links; no lesson requires another person or every earlier extension. |
| Spiral | Major concepts progress from exposure to cluster, application, revisit and independent choice; composition and correction stay horizontal strands. |
| Graphite/tool craft | Grades, grip, point/side, pressure, sharpening, layering, scale, gradation, hatching, crosshatching, blending, erasure/lift, highlight preservation, edges, texture/material marks and page care have first-use and recurrence entries. |
| Subject balance | 59 Life, 17 Either, 16 Reference, 1 Both; manufactured objects, food/natural forms, fabric, people, interiors and learner choice all appear. Repeated subjects have a changed drawing question. |
| Flower/specialist scope | No required flower lesson; one required plant-gap study; optional flower routes only. No charcoal, specialist anatomy, botanical method or extended landscape strand. |
| Home access | Life rows name setup plus supplied fallback; pose sets have enough supplied references; self/mirror options are available; no lesson relies on another person. |
| Sources/Read More | Every lesson entry plans concise core teaching, substantive optional Read More topics, and relevant source locators; source visual candidates are recorded but not automatically reused. |
| Visual coverage | Every current lesson ID has a visual plan/prompt or mapped existing pilot asset; technical diagrams are limited to cases where geometry helps; graphite drawings show process/correction. |
| Extended practice | Eleven applications are spread through the map; the 51→64 human-module interval is longest and contains short applications. |
| Time | Required total 75 h 35 min; extended portion 15 h 45 min; reinforcement scenarios and realistic estimate are calculated from row durations. |
| Artifact/source privacy | One canonical public map; legacy machine plans archived; private source books/extracts/analyses remain under `sources/`, not deployment. |

## 13. Unresolved human judgments

1. **The 13-lesson human-subject module:** reviewers found it accessible and internally clustered, but it is the course's longest uninterrupted subject block. Keep it for this review; after seeing the map, decide whether Lesson 55 should remain separate or merge into the pose sequence.
2. **Pilot JSON migration:** the enriched pilot JSON/assets retain their old 01–09 IDs and the app continues to reflect that legacy pilot order until lesson content is intentionally reconciled after architecture approval. Decide then whether to edit those nine files or preserve their historic ids with explicit aliases.
3. **Production approval:** approve or revise this architecture and visual specification before authoring lessons 10 onward or generating planned images. That production work has not begun.
