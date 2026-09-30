import fs from 'node:fs';

// Phase 2B architecture source. Regenerate with: node scripts/build-phase-2b.mjs
const root = new URL('../', import.meta.url);
const read = p => JSON.parse(fs.readFileSync(new URL(p, root), 'utf8'));
const write = (p, value) => fs.writeFileSync(new URL(p, root), JSON.stringify(value, null, 2) + '\n');
const taxonomy = read('sources/research/CANONICAL_TAXONOMY.json');
const ledger = read('sources/research/SOURCE_COVERAGE_LEDGER.json');
const concepts = Object.fromEntries(taxonomy.concepts.map(c => [c.concept_id, c]));
const sections = [
  ['Look and draw', 'high', 'beginner'],
  ['Build form and light', 'high', 'beginner'],
  ['Make space and design', 'medium', 'developing'],
  ['Draw people and movement', 'medium', 'developing'],
  ['Combine and interpret', 'low', 'intermediate'],
  ['Choose and communicate', 'independent', 'intermediate'],
];
const F = {
  'observation-perception':'observation', 'edges-contour':'line-shape', 'negative-space':'observation',
  'mark-making-line-quality':'line-shape', 'proportion-measurement':'measurement',
  'gesture-action':'gesture', 'figure-structure-anatomy':'gesture', 'head-portrait-construction':'form',
  'hands-extremities':'form', 'form-volume':'form', 'perspective-space':'space',
  'ellipse-cylinder-construction':'space', 'drapery-clothing':'gesture',
  'value-light-shadow':'value', 'depth-atmosphere':'space', 'texture-surface':'surface-edges',
  'color-media':'materials', 'composition-framing':'composition',
  'visual-hierarchy-focal-path':'composition', 'design-rhythm-pattern':'composition',
  'narrative-staging':'composition', 'creative-invention':'invention',
  'practice-reflection':'reflection', 'master-study-copying':'reflection',
  'stylized-character-construction':'invention',
};
const fundamentals = [
  ['observation','Observe visible relationships'],['line-shape','Describe shapes with line'],
  ['measurement','Compare size and placement'],['form','Construct volume'],
  ['space','Organise depth and perspective'],['value','Group light and shadow'],
  ['surface-edges','Choose edges and marks'],['gesture','Capture movement and structure'],
  ['composition','Arrange a readable picture'],['materials','Choose drawing media'],
  ['invention','Transform observed knowledge'],['reflection','Review and redirect practice'],
];
const prereqConcepts = {
  'edges-contour':['observation-perception'], 'negative-space':['observation-perception'],
  'proportion-measurement':['observation-perception'], 'form-volume':['observation-perception'],
  'perspective-space':['form-volume'],
  'value-light-shadow':['observation-perception'], 'depth-atmosphere':['value-light-shadow','perspective-space'],
  'head-portrait-construction':['proportion-measurement','form-volume'],
  'hands-extremities':['gesture-action','form-volume'], 'figure-structure-anatomy':['gesture-action','form-volume'],
  'visual-hierarchy-focal-path':['composition-framing','value-light-shadow'],
  'narrative-staging':['composition-framing','gesture-action'],
  'stylized-character-construction':['form-volume'],
  'texture-surface':['mark-making-line-quality','value-light-shadow'],
  'drapery-clothing':['figure-structure-anatomy'],
  'color-media':['value-light-shadow'],
};
const preferredBooks = {
  'observation-perception':['dodson-keys-to-drawing','watson-garcia-absolute-beginner'],
  'practice-reflection':['dodson-keys-to-drawing','picard-beginning-drawing'],
  'composition-framing':['picard-beginning-drawing','dodson-keys-to-drawing'],
  'visual-hierarchy-focal-path':['garvey-williams-mastering-composition','picard-beginning-drawing'],
  'value-light-shadow':['dodson-keys-to-drawing','aristides-classical-atelier'],
  'form-volume':['picard-beginning-drawing','aristides-classical-atelier'],
  'perspective-space':['norling-perspective-made-easy','picard-beginning-drawing'],
  'head-portrait-construction':['loomis-head-hands','watson-garcia-absolute-beginner'],
  'gesture-action':['hampton-figure-drawing','picard-beginning-drawing'],
  'creative-invention':['dodson-keys-to-drawing','watson-garcia-absolute-beginner'],
  'mark-making-line-quality':['dodson-keys-to-drawing','picard-beginning-drawing'],
  'color-media':['watson-garcia-absolute-beginner','picard-beginning-drawing'],
};
const illustrationCandidates = {
  18:['norling-perspective-made-easy-illustration-01'],
  23:['picard-beginning-drawing-illustration-06'],
  36:['picard-beginning-drawing-illustration-08'],
  38:['loomis-head-hands-illustration-01'],
  41:['loomis-head-hands-illustration-03'],
};
const warmups = {
  'observation-perception':'make two tiny observation sketches and name one changed relationship',
  'edges-contour':'trace two short observed contours without naming the object',
  'negative-space':'sketch two gaps around the subject as shapes',
  'proportion-measurement':'compare one length, one angle, and one alignment',
  'mark-making-line-quality':'try light, medium, and decisive strokes on a small shape',
  'composition-framing':'make two thumbnail crops with different margins',
  'value-light-shadow':'reduce a small view to light, middle, and dark masses',
  'form-volume':'block one subject part as a simple turning volume',
  'ellipse-cylinder-construction':'draw three observed openings from different heights',
  'perspective-space':'locate eye level and two receding edge directions',
  'texture-surface':'compare a hard, soft, and lost edge or three mark densities',
  'depth-atmosphere':'make a three-plane value thumbnail',
  'gesture-action':'draw three short action lines before adding mass',
  'head-portrait-construction':'draw three head axes at different tilts',
  'hands-extremities':'block a hand as palm mass and finger group in two poses',
  'figure-structure-anatomy':'mark weight line, ribcage, and pelvis on two small poses',
  'drapery-clothing':'mark gravity direction and three main cloth folds',
  'visual-hierarchy-focal-path':'make two thumbnails with different strongest contrasts',
  'design-rhythm-pattern':'vary spacing between three shapes in two thumbnails',
  'narrative-staging':'make two object arrangements that suggest different actions',
  'creative-invention':'draw three fast variations of one observed form',
  'practice-reflection':'review one earlier drawing for a specific strength and correction',
  'master-study-copying':'compare three directional or value choices in the study work',
  'stylized-character-construction':'draw one action guide and three large shapes',
  'color-media':'make two broad graphite or charcoal masses and lift one light',
};

// Each row is a bounded Phase 2C specification, not finished learner-facing prose.
// title | purpose | primary concepts (comma-separated) | subject | main exercise intent |
// learner decision | visual support | medium | source exercise ID (optional) | anchor prerequisite lesson (optional)
const rows = `
Your first drawing|Keep a baseline and learn to compare what is seen with what was drawn|observation-perception,practice-reflection|mug from life|Draw a mug twice, noting one specific relationship to improve in the second attempt|Choose viewpoint|from-life|graphite|dodson-keys-to-drawing-exercise-02|
Follow an edge|Observe changing contour rather than a remembered outline|edges-contour,observation-perception|shoe from life|Make a slow contour shoe drawing and a second clearer pass|Choose the shoe and viewpoint|from-life|graphite|dodson-keys-to-drawing-exercise-01|1
Shapes around a plant|Use negative spaces to check an organic silhouette|negative-space,observation-perception|potted plant from life|Draw a plant through gaps between leaves and pot before the positive shapes|Choose one gap to correct|from-life|graphite||2
Measure a flower|Compare angles and relative lengths in a simple flower|proportion-measurement,negative-space|flower or leafy stem from life|Mark the bloom-to-stem ratio and major angles, then draw a single stem|Choose bloom or leafy stem|from-life|graphite||3
Confident lines, familiar object|Choose line pressure and direction to clarify a simple object|mark-making-line-quality,edges-contour|book or key from life|Draw one object with light searching lines and selected final lines|Choose which edges to strengthen|from-life|graphite||2
Three crops of one subject|Discover that framing changes emphasis before detail is added|composition-framing,negative-space|mug and book from life|Make three thumbnail crops, then develop the clearest arrangement|Choose crop and viewpoint|from-life|graphite|dodson-keys-to-drawing-exercise-08|3
Three simple values|Separate light, middle, and dark in a recognisable subject|value-light-shadow,composition-framing|fruit under a lamp|Draw fruit as three large value groups with a cast shadow|Choose the light position|from-life|graphite|dodson-keys-to-drawing-exercise-05|6
Build a cup from volumes|Use simple volumes to organise a familiar object|form-volume,ellipse-cylinder-construction|cup from life|Construct a cup from cylinder and handle masses, then compare to observation|Choose cup angle|svg-diagram|graphite||4
Ellipse and rim|Check ellipse width against eye level in a real vessel|ellipse-cylinder-construction,proportion-measurement|bowl from life|Draw bowls from two viewpoints, comparing rims and side walls|Choose viewpoints|svg-diagram|graphite||8
Leaves as volumes|Turn flat leaf outlines into bent, overlapping forms|form-volume,edges-contour,gesture-action|leafy branch from life|Draw a branch with a directional gesture, folded leaf masses, and selective contours|Choose branch orientation|from-life|graphite||8
Near, middle, far|Suggest depth before formal projection|perspective-space,composition-framing|view through a window|Make a small landscape with overlap, scale changes, and foreground framing|Choose the view and crop|from-life|graphite||6
Playful shape translation|Apply shape comparison to a stylised character without replacing observation|stylized-character-construction,form-volume,creative-invention|chosen Pokémon or original simple creature|Reduce a character to large shapes, then redraw it from memory with one proportion check|Choose character and correction|learner-reference|graphite|pokemon-how-to-draw-exercise-01|8
Angle and alignment|Check placement using two visible landmarks|proportion-measurement,observation-perception|shoe and bottle from life|Draw the pair after marking relative heights, slopes, and alignments|Choose two checks to repeat|from-life|graphite||4
Light family, shadow family|See connected light and shadow shapes before shading detail|value-light-shadow,form-volume|egg or ball under one lamp|Draw a lit rounded object with two families and a cast shadow|Choose the light direction|svg-diagram|graphite|aristides-classical-atelier-exercise-01|7
Draw through a form|Use light construction to understand overlapping objects|form-volume,edges-contour|cup behind book from life|Draw through hidden parts lightly, then select visible contours|Choose overlap|from-life|graphite|dodson-keys-to-drawing-exercise-06|8
Petal layers|Construct a bloom as overlapping, turning forms|form-volume,negative-space|simple flower from life|Block the center and petal groups, then compare gaps and overlaps|Choose bloom and viewing angle|from-life|graphite||10
The first room corner|Find eye level and receding directions in a room|perspective-space,proportion-measurement|room corner from life|Draw a corner with floor and ceiling lines meeting consistently|Choose seated or standing viewpoint|svg-diagram|graphite|norling-perspective-made-easy-exercise-01|11
Boxes in a real scene|Use one-point convergence to check a shelf or corridor|perspective-space,form-volume|shelf or corridor from life|Block major box faces and test receding edges against eye level|Choose scene|svg-diagram|graphite||17
Marks that turn|Use directional hatching to support volume|mark-making-line-quality,form-volume|shell or folded cloth from life|Draw form first, then use restrained directional marks|Choose mark density|from-life|graphite|dodson-keys-to-drawing-exercise-07|15
Edges in a lit object|Separate hard, soft, and disappearing edges|texture-surface,value-light-shadow|fruit or ceramic object under lamp|Make a value study that varies edge clarity around the form|Choose which edge to lose|svg-diagram|graphite||14
One plant, two lights|Compare how a light move changes shadow design|value-light-shadow,composition-framing|plant under desk lamp|Make two small value studies after moving the lamp|Choose strongest shadow pattern|from-life|graphite|dodson-keys-to-drawing-exercise-05|16
Two-point object|Turn a box or book without losing consistent recession|perspective-space,form-volume|book or small box from life|Draw a rotated book using two receding edge families|Choose rotation|svg-diagram|graphite||18
Shape, value, and focus|Create hierarchy in a small still-life arrangement|visual-hierarchy-focal-path,composition-framing|three household objects from life|Thumbnail two arrangements and finish one with a focal contrast|Choose focal object|from-life|graphite||21
Project: observed still life|Combine measured shapes, form, value, and framing|composition-framing,value-light-shadow,proportion-measurement,practice-reflection,observation-perception|self-arranged still life from life|Plan two thumbnails and make one sustained drawing, reviewing placement and value|Choose objects, crop, lighting|from-life|graphite|watson-garcia-absolute-beginner-exercise-08|23
Trees from masses|Simplify a tree into trunk, branch rhythm, and foliage groups|form-volume,gesture-action|tree from life or window|Draw a tree with gesture and large masses before leaf details|Choose tree and viewpoint|from-life|graphite||10
Atmosphere in three planes|Use value and edge contrast for landscape depth|depth-atmosphere,value-light-shadow|landscape from life or supplied view|Make a three-plane landscape, keeping distance quieter|Choose distant shape grouping|generated-reference|graphite||11
Avoid accidental tangents|Improve clarity where shapes nearly touch|composition-framing,negative-space,edges-contour|plant and container from life|Make two crops and change one overlap or tangent|Choose crop correction|from-life|graphite|dodson-keys-to-drawing-exercise-08|23
Creature from another angle|Rotate simple character forms rather than tracing a contour|stylized-character-construction,perspective-space,creative-invention|chosen Pokémon or original creature|Construct a character in a new three-quarter view with visible form axes|Choose view and pose|learner-reference|graphite|pokemon-how-to-draw-exercise-02|22
Landscape thumbnails|Compare focal paths and large value shapes in a view|visual-hierarchy-focal-path,composition-framing|outdoor view or supplied landscape|Make four thumbnails with different crops and choose one to develop|Choose crop and focal area|from-life|graphite||26
Charcoal masses|Use charcoal to move broad value shapes quickly|color-media,value-light-shadow|lamp-lit still life from life|Make two broad charcoal block-ins and lift lights with an eraser|Choose object grouping|from-life|charcoal||24
Plant stems in space|Use curved axes, overlap, and a vessel rim to explain a small arrangement|gesture-action,form-volume,ellipse-cylinder-construction|leafy stems in a jar from life|Draw gesture lines, volumes, jar ellipse, and selected overlaps|Choose arrangement|from-life|graphite||16
Interior depth|Coordinate eye level, size, and overlapping furniture|perspective-space,composition-framing|room from life|Draw a room corner with two furniture masses and a planned focal area|Choose viewpoint and crop|svg-diagram|graphite||18
Texture with restraint|Suggest a surface without filling every area|texture-surface,visual-hierarchy-focal-path,edges-contour,mark-making-line-quality|bark, stone, or fabric from life|Draw a textured object, concentrating marks near the focal point|Choose texture and omitted areas|from-life|graphite|dodson-keys-to-drawing-exercise-07|20
Light on a flower|Group petal shadows without outlining every petal|value-light-shadow,form-volume|single flower under lamp|Draw a bloom with three value groups and restrained edges|Choose bloom and light angle|from-life|graphite||16
Charcoal landscape atmosphere|Use broad charcoal masses and soft distance|depth-atmosphere,color-media|landscape from life or generated reference|Draw a small landscape in charcoal, lifting the lightest plane|Choose view and focal contrast|generated-reference|charcoal||30
Project: a sense of place|Combine landscape depth, framing, and tonal emphasis|composition-framing,depth-atmosphere,visual-hierarchy-focal-path,practice-reflection,creative-invention|chosen familiar place|Plan three viewpoints and finish one place drawing|Choose place, crop, medium|from-life|choice|picard-beginning-drawing-exercise-10|35
Action before anatomy|Capture a pose with direction and weight|gesture-action,observation-perception|willing model or timed figure reference|Make short gestures, then one longer action drawing|Choose poses to repeat|generated-reference|graphite|hampton-figure-drawing-exercise-01|25
Head as a turning form|Use a simple head mass and axes to track orientation|head-portrait-construction,form-volume|mirror or head reference|Construct heads at three tilts without detailed features|Choose tilt|svg-diagram|graphite|loomis-head-hands-exercise-01|22
Observed face intervals|Check features against the whole head and individual sitter|proportion-measurement,head-portrait-construction|mirror self-portrait|Draw a self-portrait block-in using a few measured intervals|Choose which ratio to test|from-life|graphite|watson-garcia-absolute-beginner-exercise-07|38
Profile and silhouette|Use negative shape and head structure in profile|head-portrait-construction,negative-space|mirror or willing sitter|Draw a profile with large silhouette and neck junction first|Choose sitter or reference|generated-reference|graphite|edwards-right-side-brain-exercise-07|39
Hands as moving forms|Group palm and fingers by action before detail|hands-extremities,gesture-action|own hand from life|Draw three hand poses as palm block and finger groups|Choose poses|svg-diagram|graphite||37
Weight and landmarks|Connect ribcage, pelvis, and ground contact|figure-structure-anatomy,gesture-action|standing figure reference|Draw a standing figure with weight line and simple masses|Choose pose|generated-reference|graphite||37
Clothing over form|Let folds follow the body and gravity|drapery-clothing,figure-structure-anatomy,hands-extremities|own hand holding fabric from life|Draw the hand mass and a few cloth folds that explain gravity and contact|Choose fabric and grip|from-life|graphite||42
Figure in a room|Combine body scale with a simple environment|figure-structure-anatomy,perspective-space|seated figure in room reference|Place a seated figure and chair with shared eye level and overlaps|Choose crop|generated-reference|graphite|dodson-keys-to-drawing-exercise-06|42
Portrait light pattern|Model head planes with grouped shadows|head-portrait-construction,value-light-shadow|lit self-portrait or supplied head|Block pose, then light and shadow shapes before features|Choose light direction|generated-reference|charcoal|aristides-classical-atelier-exercise-04|40
Gesture in charcoal|Use broad lines and mass to capture movement|gesture-action,color-media|timed figure reference|Make a sequence of short charcoal gestures and one sustained pose|Choose pose duration|generated-reference|charcoal||42
Portrait as an individual|Balance construction guides with observed differences|head-portrait-construction,observation-perception|mirror or willing sitter|Draw one portrait, revising generic ratios against the sitter|Choose distinctive relationships|from-life|graphite||45
Project: figure or portrait|Integrate gesture, proportion, form, and light|figure-structure-anatomy,head-portrait-construction,value-light-shadow,practice-reflection,proportion-measurement|chosen person or self|Plan studies and complete one sustained figure or portrait|Choose subject, crop, medium|generated-reference|choice||47
Line study from a master|Study a verified artist's line choice, then transfer it to life|master-study-copying,mark-making-line-quality|public-domain drawing and own object|Compare strokes in a small crop, then draw a different observed object|Choose line quality to transfer|optional-master-example|graphite|dodson-keys-to-drawing-exercise-03|24
Object group rhythm|Arrange several objects with rhythm and negative space|design-rhythm-pattern,composition-framing,ellipse-cylinder-construction|cup, book, and small object from life|Make three arrangement thumbnails, then develop one while checking the cup rim|Choose rhythm and focal object|from-life|graphite||31
Water and reflection|Distinguish horizontal surface pattern from object form|depth-atmosphere,value-light-shadow|water view or generated reference|Draw a simple waterside view with grouped reflections and distant values|Choose horizon and reflection detail|generated-reference|graphite||36
Building among trees|Combine perspective and natural forms without equal detail|perspective-space,visual-hierarchy-focal-path|building in landscape from life|Block building axes and tree masses, then choose focal contrast|Choose building and view|from-life|graphite||36
Character in motion|Apply gesture, rotation, and structure to a stylised subject|stylized-character-construction,gesture-action,creative-invention|chosen Pokémon or original creature|Construct a changed pose with action line and turned volumes|Choose pose and character|learner-reference|graphite||42
Edge-led charcoal study|Use hard, soft, and lost edges to direct attention|texture-surface,value-light-shadow,edges-contour|portrait or still life under controlled light|Make a charcoal study with one sharp focal edge and quieter surround|Choose focal edge|from-life|charcoal||45
Master value study|Analyze a verified work's big value grouping and transfer it|master-study-copying,visual-hierarchy-focal-path|public-domain drawing and own subject|Reduce a master drawing to value shapes, then apply one pattern to life|Choose value lesson to transfer|optional-master-example|graphite|aristides-classical-atelier-exercise-02|49
Landscape mark language|Vary marks for trees, ground, and distance|texture-surface,depth-atmosphere,mark-making-line-quality|outdoor landscape from life|Draw a scene with three mark families and reduced distant texture|Choose marks and omissions|from-life|graphite||51
Still life with a story|Use placement and contrast to suggest a relationship|narrative-staging,composition-framing,creative-invention|personal objects from life|Arrange two or three objects to suggest a simple idea without words|Choose narrative and framing|from-life|graphite||24
Charcoal portrait|Use charcoal masses and edges for an expressive likeness|head-portrait-construction,color-media|self or willing sitter|Make a portrait led by pose, shadow design, and selective edges|Choose sitter, crop, and focal area|from-life|charcoal||47
Project: natural forms|Combine organic construction, value, edges, and composition|form-volume,composition-framing,value-light-shadow,proportion-measurement|plant, shell, or natural object from life|Plan and complete a sustained natural-form drawing with selective detail|Choose subject, light, medium|from-life|choice||54
Project: landscape interpretation|Choose what to simplify and emphasize in a place|composition-framing,depth-atmosphere,creative-invention|chosen landscape|Make studies, plan values, and finish an interpreted landscape|Choose place, viewpoint, medium, focal point|from-life|choice||57
Own subject, three plans|Compare solutions before committing to a drawing|composition-framing,creative-invention|personally chosen subject|Make three small plans that vary crop and value structure|Choose subject and preferred plan|learner-choice|choice||60
Drawing from memory, then life|Test what observation adds to a remembered object|observation-perception,practice-reflection,proportion-measurement|familiar object from life|Draw from memory, then from life, and annotate two discoveries|Choose object and next practice target|from-life|graphite||61
Turn a vessel|Reconstruct a familiar subject after studying it|perspective-space,form-volume,edges-contour,ellipse-cylinder-construction|cup or vase from life|Study one view, then draw a plausible turned view with a checked ellipse|Choose vessel and rotation|from-life|graphite||62
Original creature design|Use observed animal or plant forms in a new design|creative-invention,stylized-character-construction|original creature based on life studies|Sketch observed inputs, vary three designs, and construct one in space|Choose source forms and pose|learner-choice|graphite||52
Quiet versus dramatic light|Choose value structure for an intended mood|value-light-shadow,visual-hierarchy-focal-path,texture-surface,edges-contour|same still life or scene|Make two lighting plans and develop one with controlled edges|Choose intention and medium|from-life|choice||61
Personal arrangement|Solve a composition with reduced prompts|composition-framing,design-rhythm-pattern,texture-surface,ellipse-cylinder-construction|one vessel with chosen objects or optional flowers from life|Arrange, thumbnail, and draw a group with chosen emphasis and a checked vessel rim|Choose arrangement, crop, light, medium|from-life|choice||60
Landscape from life, your way|Decide depth, focus, and mark language independently|depth-atmosphere,composition-framing,mark-making-line-quality|chosen outdoor view|Make a small outdoor drawing and revise its depth/focus plan|Choose view, medium, focal point|from-life|choice||60
Project: personal place|Make a finished drawing that communicates why a place matters|narrative-staging,composition-framing,creative-invention,color-media|personally meaningful place|Gather studies, compare thumbnails, and complete a place drawing|Choose all major visual decisions|learner-choice|choice||67
Hands in action|Use construction and observation with deliberate emphasis|hands-extremities,visual-hierarchy-focal-path,gesture-action,proportion-measurement|own hands holding an object from life|Make gesture and structure studies, then finish a focused hand drawing|Choose action, object, medium, emphasis|from-life|choice||48
Independent mixed-subject study|Combine two subject families without a prescribed solution|form-volume,composition-framing,creative-invention,mark-making-line-quality|chosen objects, plants, person, or place|Design and draw a scene connecting two different subjects|Choose subjects, crop, medium, light|learner-choice|choice||68
Final project planning|Define a personally meaningful drawing and test solutions|practice-reflection,composition-framing,visual-hierarchy-focal-path,color-media|personally chosen subject|Gather own or lawful references, make thumbnails and value plans, select a focal point|Choose subject, medium, references, design|learner-choice|choice||70
Final project|Make and evaluate an independent finished drawing|creative-invention,composition-framing,value-light-shadow|personally chosen subject|Complete the planned drawing, document decisions, and self-review with next steps|Choose and execute all major decisions|learner-choice|choice||71
`.trim().split('\n');

if (rows.length !== 72) throw new Error(`Expected 72 lessons, got ${rows.length}`);
// Break up the people sequence with object design and place studies. These four
// swaps keep prerequisite anchors earlier while retaining the seven projects.
for (const [a,b] of [[43,50],[44,51],[46,52]]) [rows[a-1],rows[b-1]]=[rows[b-1],rows[a-1]];
// The landscape mark lesson now follows the relocated water/value study at 44.
rows[55]=rows[55].replace(/\|51$/, '|44');
const secondaryByLesson={
  1:['line-shape'],7:['form'],8:['observation'],14:['observation'],
  18:['measurement'],24:['form'],26:['composition'],30:['composition'],
  31:['observation'],36:['measurement'],38:['observation'],41:['measurement'],
  44:['composition'],45:['observation'],48:['measurement'],54:['composition'],
  59:['surface-edges'],60:['value'],66:['observation'],69:['measurement'],72:['reflection'],
};
const seenConcept = new Map();
const lessonMap = rows.map((line, i) => {
  const [title,purpose,focusText,subject,exerciseIntent,learnerDecisions,visual,medium,sourceExercise,anchor] = line.split('|');
  const n=i+1, id=`lesson-${String(n).padStart(2,'0')}`;
  const focus=focusText.split(',');
  for(const c of focus) if(!concepts[c]) throw new Error(`Unknown concept ${c} in ${id}`);
  const section=Math.floor(i/12), scaffolding=sections[section][1];
  const occurrences=focus.map(c=>seenConcept.get(c)||0);
  const conceptStages=focus.map((c,j)=>{
    const prior=occurrences[j]; seenConcept.set(c,prior+1);
    const stage=prior===0?'introduced':prior===1?'practised':scaffolding==='independent'?'independent':prior>=3&&n>=24?'combined':'revisited';
    return {id:c,name:concepts[c].label,stage};
  });
  const primary=[...new Set(focus.map(c=>F[c]))];
  const priorLesson=anchor?`lesson-${String(anchor).padStart(2,'0')}`:null;
  if(priorLesson && Number(anchor)>=n) throw new Error(`Invalid anchor in ${id}`);
  const prereq = priorLesson?[priorLesson]:[];
  const sourceRefs=[];
  for(const c of focus){
    const priority=preferredBooks[c]||[];
    const ranked=[...concepts[c].source_coverage].sort((a,b)=>{
      const ai=priority.indexOf(a.book_id), bi=priority.indexOf(b.book_id);
      return (ai<0?99:ai)-(bi<0?99:bi);
    });
    for(const s of ranked.slice(0,1)){
      if(!sourceRefs.some(x=>x.source_concept_id===s.source_concept_id)) sourceRefs.push({book_id:s.book_id,source_concept_id:s.source_concept_id,locator:s.locators[0]?.location||''});
    }
  }
  const sourceType=visual==='generated-reference'?'provided-reference':visual==='optional-master-example'?'verified-master':visual==='learner-reference'?'learner-selected-reference':visual==='learner-choice'?'learner-selected': 'from-life';
  const lessonType=title.startsWith('Project:')||n===72?'project':title.startsWith('Master')||title.includes('master')?'master-study':'lesson';
  const durationMinutes=lessonType==='project'?(n===72?150:90):(n===71?45:45);
  return {
    id,sequence:n,section:sections[section][0],title,purpose,durationMinutes,lessonType,
    difficulty:sections[section][2],medium:medium==='choice'?['graphite','charcoal']: [medium],
    requiredMaterials:medium==='charcoal'?['charcoal','eraser','sketchbook']:medium==='choice'?['graphite or charcoal','eraser','sketchbook']:['graphite pencil','eraser','sketchbook'],
    subject,exerciseSourceType:sourceType,
    fundamentals:{primary,secondary:(secondaryByLesson[n]||[]).filter(f=>!primary.includes(f))},
    concepts:conceptStages,newConcepts:conceptStages.filter(c=>c.stage==='introduced').map(c=>c.id),
    revisitedConcepts:conceptStages.filter(c=>c.stage!=='introduced').map(c=>c.id),
    prerequisites:prereq,
    warmupIntent:`5–10 minutes: ${warmups[focus[0]]}, using ${subject}.`,
    conceptTeachingIntent:purpose,mainDrawingExerciseIntent:exerciseIntent,learnerDecisions,
    scaffoldingLevel:scaffolding,sourceConceptReferences:sourceRefs,
    sourceExerciseReferences:sourceExercise?[sourceExercise]:[],visualRequirements:[visual],
    potentialSourceIllustrations:illustrationCandidates[n]||[],optionalExtensionIntent:`Repeat with a changed viewpoint, lighting, or subject while keeping the same ${concepts[focus[0]].label.toLowerCase()} question.`,
  };
});

const first = c => lessonMap.find(l=>l.concepts.some(x=>x.id===c))?.id;
const conceptGraph={schema_version:'1.0',source_taxonomy:'sources/research/CANONICAL_TAXONOMY.json',
  fundamentals:fundamentals.map(([id,name])=>({id,name,concept_ids:Object.keys(F).filter(c=>F[c]===id)})),
  concepts:taxonomy.concepts.map(c=>({id:c.concept_id,label:c.label,fundamental_id:F[c.concept_id],prerequisite_concepts:prereqConcepts[c.concept_id]||[],first_lesson:first(c.concept_id),related_concepts:c.related_concept_ids})),
  note:'Prerequisites are enabling experiences, not mastery gates. Parent fundamentals roll canonical concepts into auditable strands.'};
const prerequisites={schema_version:'1.0',policy:'An anchor lesson supplies a useful prior experience; earlier drawing remains available without mastery gates.',
  concept_edges:conceptGraph.concepts.flatMap(c=>c.prerequisite_concepts.map(p=>({from:p,to:c.id}))),
  lesson_edges:lessonMap.flatMap(l=>l.prerequisites.map(p=>({from:p,to:l.id})))};
const stages=['introduced','practised','revisited','combined','independent'];
const coverage={schema_version:'1.0',generated_on:new Date().toISOString(),curriculum_version:'2b-1',fundamentals:fundamentals.map(([fid])=>{
  const groups=Object.fromEntries(stages.map(s=>[s,[]]));
  for(const l of lessonMap) for(const c of l.concepts) if(F[c.id]===fid&&!groups[c.stage].includes(l.id)) groups[c.stage].push(l.id);
  const missing=conceptGraph.concepts.filter(c=>c.fundamental_id===fid).flatMap(c=>c.prerequisite_concepts.filter(p=>Number(first(p)?.slice(-2))>=Number(c.first_lesson?.slice(-2))).map(p=>`${p} must precede ${c.id}`));
  return {fundamental_id:fid,stages:Object.fromEntries(stages.map(s=>[s,{count:groups[s].length,lesson_ids:groups[s]}])),missing_prerequisites:missing};
}),concepts:taxonomy.concepts.map(c=>{
  const appearances=lessonMap.filter(l=>l.concepts.some(x=>x.id===c.concept_id));
  const gaps=appearances.slice(1).map((l,i)=>l.sequence-appearances[i].sequence);
  return {concept_id:c.concept_id,first_lesson:appearances[0]?.id||null,lesson_ids:appearances.map(l=>l.id),max_sequence_gap:Math.max(0,...gaps),
    missing_stages:stages.filter(s=>!appearances.some(l=>l.concepts.some(x=>x.id===c.concept_id&&x.stage===s)))};
}),audit_notes:['Stage tags describe designed activities, not mastery. Inspect both fundamental rollups and canonical concept gaps; specialist concepts may deliberately lack all five stages.']};
const byConcept=Object.fromEntries(Object.keys(concepts).map(c=>[c,lessonMap.filter(l=>l.concepts.some(x=>x.id===c)).map(l=>l.id)]));
const optional=new Set(['drapery-clothing','color-media','narrative-staging']);
const included=new Set([
  'dodson-keys-to-drawing-concept-01','dodson-keys-to-drawing-concept-06','dodson-keys-to-drawing-concept-08',
  'edwards-right-side-brain-concept-03','hampton-figure-drawing-concept-01','hampton-figure-drawing-concept-02',
  'loomis-head-hands-concept-01','loomis-head-hands-concept-06','norling-perspective-made-easy-concept-01',
  'norling-perspective-made-easy-concept-02','norling-perspective-made-easy-concept-04',
  'picard-beginning-drawing-concept-07','pokemon-how-to-draw-concept-02',
  'watson-garcia-absolute-beginner-concept-08'
]);
const alternative=new Set(['edwards-right-side-brain-concept-01','edwards-right-side-brain-concept-05',
  'loomis-head-hands-concept-02','garvey-williams-mastering-composition-concept-03']);
const optionalSource=new Set(['hampton-figure-drawing-concept-05','hampton-figure-drawing-concept-06',
  'norling-perspective-made-easy-concept-05','loomis-creative-illustration-concept-05']);
const sourceMapping={schema_version:'1.0',source_ledger:'sources/research/SOURCE_COVERAGE_LEDGER.json',
  placement_policy:'lesson_ids are representative teaching anchors chosen for highest canonical-concept overlap and spread through the course; concept_match_lesson_ids lists all matching lesson metadata, not a claim that every source method is taught there.',
  status_vocabulary:['INCLUDED','MERGED','ALTERNATIVE METHOD','OPTIONAL / ADVANCED','OMITTED'],
  decisions:ledger.books.flatMap(b=>b.canonical_concept_coverage.map(s=>{
    const placed=[...new Set(s.canonical_concept_ids.flatMap(c=>byConcept[c]||[]))];
    const ranked=lessonMap.map(l=>({id:l.id,n:l.sequence,score:l.concepts.filter(c=>s.canonical_concept_ids.includes(c.id)).length,
      sourceExercise:l.sourceExerciseReferences.some(e=>e.startsWith(b.book_id+'-exercise-'))})).filter(x=>x.score>0)
      .sort((a,z)=>(z.score+(z.sourceExercise?1:0))-(a.score+(a.sourceExercise?1:0))||a.n-z.n);
    const anchors=[];
    for(const x of ranked) if(anchors.length<4) anchors.push(x.id);
    for(const [lo,hi] of [[1,24],[25,48],[49,72]]){
      const x=ranked.filter(x=>x.n>=lo&&x.n<=hi).sort((a,z)=>z.score-a.score||a.n-z.n)[0];
      if(x&&!anchors.includes(x.id)) anchors.push(x.id);
    }
    anchors.sort((a,z)=>Number(a.slice(-2))-Number(z.slice(-2)));
    let status=s.canonical_concept_ids.every(c=>optional.has(c))?'OPTIONAL / ADVANCED':s.canonical_concept_ids.some(c=>concepts[c]?.source_count>1)?'MERGED':'INCLUDED';
    if(included.has(s.source_concept_id)) status='INCLUDED';
    if(alternative.has(s.source_concept_id)) status='ALTERNATIVE METHOD';
    if(s.source_concept_id==='loomis-creative-illustration-concept-04'||s.source_concept_id==='pokemon-how-to-draw-concept-04') status='OMITTED';
    if(optionalSource.has(s.source_concept_id)) status='OPTIONAL / ADVANCED';
    const reason=status==='OMITTED'?(s.source_concept_id==='pokemon-how-to-draw-concept-04'?'Licensed-character colour finishing and page-care advice are excluded; graphite value order and mark control are taught through other source methods.':'Colour interaction theory belongs to a later colour course; tonal relationships are covered separately in graphite/charcoal.'):status==='OPTIONAL / ADVANCED'?'Keep selective drawing applications; omit exhaustive technical or non-graphite/charcoal treatment.':status==='ALTERNATIVE METHOD'?(s.source_concept_id==='edwards-right-side-brain-concept-01'?'Use attention-reset exercises when useful; do not teach global hemisphere learner types.':'Preserve this as an alternate check or construction route; compare it with observation instead of imposing one fixed method.'):status==='MERGED'?'Integrate overlapping methods into the same spiral progression.':'Distinctive application retained.';
    return {book_id:b.book_id,source_concept_id:s.source_concept_id,source_concept:s.source_concept,canonical_concept_ids:s.canonical_concept_ids,status,lesson_ids:status==='OMITTED'?[]:anchors,concept_match_lesson_ids:placed,locators:s.locators.map(l=>l.location),reason};
  }))};
const countBy=(list,key)=>Object.fromEntries([...new Set(list.map(x=>x[key]))].map(v=>[v,list.filter(x=>x[key]===v).length]));
const exerciseAudit={schema_version:'1.0',lesson_count:lessonMap.length,lesson_type_counts:countBy(lessonMap,'lessonType'),exercise_source_counts:countBy(lessonMap,'exerciseSourceType'),
  source_exercise_count:lessonMap.filter(l=>l.sourceExerciseReferences.length).length,
  source_exercise_lesson_ids:lessonMap.filter(l=>l.sourceExerciseReferences.length).map(l=>l.id),
  graphite_only_lesson_ids:lessonMap.filter(l=>l.medium.length===1&&l.medium[0]==='graphite').map(l=>l.id),
  charcoal_only_lesson_ids:lessonMap.filter(l=>l.medium.length===1&&l.medium[0]==='charcoal').map(l=>l.id),
  medium_choice_lesson_ids:lessonMap.filter(l=>l.medium.length>1).map(l=>l.id),
  repeated_subject_counts:Object.fromEntries(['cup','book','fruit','box','sphere','mug','shoe'].map(term=>[term,lessonMap.filter(l=>new RegExp(`\\b${term}\\b`,'i').test(l.subject+' '+l.title+' '+l.mainDrawingExerciseIntent)).length])),
  review:'A source exercise is adapted, not copied. From-life work remains the default. Supplied references serve controlled light, poses, and hard-to-access views.'};
const subjectFamily=l=>{
  const s=(l.subject+' '+l.title).toLowerCase();
  if(l.lessonType==='master-study') return 'master-study';
  if(/pokémon|creature|character/.test(s)) return 'stylized';
  if(/\b(portrait|figure|head|hands?|person|sitter|fabric)\b/.test(s)) return 'people';
  if(/landscape|place|outdoor|tree|window|water|building|room|interior/.test(s)) return 'environment';
  if(/flower|bloom|petal|plant|leaf|shell|natural form/.test(s)) return 'natural-forms';
  if(/personally chosen|chosen objects|mixed-subject/.test(s)) return 'learner-choice';
  return 'objects-still-life';
};
const subjectAudit={schema_version:'1.0',required_flower_lesson_ids:lessonMap.filter(l=>/flower|bloom|petal/i.test(l.subject+' '+l.title)&&!/optional flower/i.test(l.subject)).map(l=>l.id),
  optional_flower_lesson_ids:lessonMap.filter(l=>/optional flower/i.test(l.subject)).map(l=>l.id),
  plant_natural_form_lesson_ids:lessonMap.filter(l=>/plant|leaf|natural form|shell/i.test(l.subject+' '+l.title)).map(l=>l.id),
  landscape_lesson_ids:lessonMap.filter(l=>/landscape|place|view through|tree|water|outdoor|building among/i.test(l.subject+' '+l.title)).map(l=>l.id),
  stylized_lesson_ids:lessonMap.filter(l=>/Pokémon|creature|character/i.test(l.subject+' '+l.title)).map(l=>l.id),
  portrait_figure_lesson_ids:lessonMap.filter(l=>/\b(portrait|figure|head|hands?|person|clothing|sitter)\b/i.test(l.subject+' '+l.title)).map(l=>l.id),
  subject_family_counts:Object.fromEntries([...new Set(lessonMap.map(subjectFamily))].map(f=>[f,lessonMap.filter(l=>subjectFamily(l)===f).length])),
  subject_family_lesson_ids:Object.fromEntries([...new Set(lessonMap.map(subjectFamily))].map(f=>[f,lessonMap.filter(l=>subjectFamily(l)===f).map(l=>l.id)])),
  project_lesson_ids:lessonMap.filter(l=>l.lessonType==='project').map(l=>l.id)};
const scaffoldingAudit={schema_version:'1.0',levels:['high','medium','low','independent'],
  sections:sections.map(([name,level],i)=>({section:name,level,lesson_ids:lessonMap.slice(i*12,(i+1)*12).map(l=>l.id)})),
  learner_decision_examples:[1,24,36,48,60,72].map(n=>({lesson_id:lessonMap[n-1].id,decisions:lessonMap[n-1].learnerDecisions}))};
const exerciseIds=new Set(ledger.books.flatMap(b=>b.useful_exercises.map(x=>x.exercise_id||x.id)));
const illustrationIds=new Set(ledger.books.flatMap(b=>b.useful_illustrations.map(x=>x.illustration_id||x.id)));
const sourceConceptIds=new Set(ledger.books.flatMap(b=>b.canonical_concept_coverage.map(x=>x.source_concept_id)));
for(const l of lessonMap){
  if(l.prerequisites.some(p=>Number(p.slice(-2))>=l.sequence)) throw new Error(`Forward prerequisite in ${l.id}`);
  if(l.sourceExerciseReferences.some(x=>!exerciseIds.has(x))) throw new Error(`Unknown exercise in ${l.id}`);
  if(l.potentialSourceIllustrations.some(x=>!illustrationIds.has(x))) throw new Error(`Unknown illustration in ${l.id}`);
  if(l.sourceConceptReferences.some(x=>!sourceConceptIds.has(x.source_concept_id))) throw new Error(`Unknown source concept in ${l.id}`);
}
if(sourceMapping.decisions.length!==sourceConceptIds.size) throw new Error('Source mapping is incomplete');
if(coverage.fundamentals.some(f=>f.missing_prerequisites.length)) throw new Error('Concept prerequisite order is invalid');
if(coverage.fundamentals.some(f=>stages.some(s=>f.stages[s].count===0))) throw new Error('Fundamental spiral stage is empty');
write('curriculum/lesson-map.json',{schema_version:'2b-1',course_id:'personal-drawing-education',sequence_policy:'self-paced-spiral',lesson_count:lessonMap.length,lessons:lessonMap});
write('curriculum/concept-graph.json',conceptGraph);
write('curriculum/prerequisites.json',prerequisites);
write('curriculum/coverage.json',coverage);
write('curriculum/source-mapping.json',sourceMapping);
write('curriculum/exercise-audit.json',exerciseAudit);
write('curriculum/subject-audit.json',subjectAudit);
write('curriculum/scaffolding-audit.json',scaffoldingAudit);
console.log(`Wrote ${lessonMap.length} lessons, ${sourceMapping.decisions.length} source decisions.`);
