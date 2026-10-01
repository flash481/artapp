import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const lessonsDir = resolve(root, "curriculum", "lessons");
const assetRecordsDir = resolve(root, "curriculum", "assets");
const publicDir = resolve(root, "public");
const diagramsDir = resolve(publicDir, "assets", "diagrams");
const teachingDir = resolve(publicDir, "assets", "teaching");
const expectedLabel = "DEVELOPMENT FIXTURE — NOT FINAL CURRICULUM";
const expectedPilotIds = new Set(Array.from({ length: 9 }, (_, index) => `lesson-${String(index + 1).padStart(2, "0")}`));
const stages = new Set(["introduced", "practised", "revisited", "combined", "independent"]);
const teachingSections = new Set(["concept", "deepDive", "warmup", "exercise", "mistakes"]);
const problems = [];

function listPublicAssets(directory, extension) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory).flatMap((name) => {
    const filePath = resolve(directory, name);
    if (statSync(filePath).isDirectory()) return listPublicAssets(filePath, extension);
    return name.toLowerCase().endsWith(extension) ? [filePath] : [];
  });
}

const publicDiagramFiles = listPublicAssets(diagramsDir, ".svg");
const publicTeachingFiles = listPublicAssets(teachingDir, ".jpg");
const publicDiagramPaths = new Set(publicDiagramFiles.map((filePath) => relative(root, filePath).split(sep).join("/")));
const publicTeachingPaths = new Set(publicTeachingFiles.map((filePath) => relative(root, filePath).split(sep).join("/")));
const assetRecordsByFile = new Map();
const publicAssetIds = new Set();
let diagramRecordCount = 0;
let teachingExampleRecordCount = 0;

if ((publicDiagramFiles.length > 0 || publicTeachingFiles.length > 0) && !existsSync(assetRecordsDir)) {
  problems.push("Public lesson visuals exist, but curriculum/assets/ has no provenance records.");
}
if (existsSync(assetRecordsDir)) {
  for (const file of readdirSync(assetRecordsDir).filter((name) => name.endsWith(".json"))) {
    let record;
    try {
      record = JSON.parse(readFileSync(resolve(assetRecordsDir, file), "utf8"));
    } catch (error) {
      problems.push(`${file}: invalid asset provenance JSON (${error instanceof Error ? error.message : "parse error"}).`);
      continue;
    }

    if (typeof record.file !== "string") continue;
    const isDiagram = record.file.startsWith("public/assets/diagrams/");
    const isTeachingExample = record.file.startsWith("public/assets/teaching/");
    if (!isDiagram && !isTeachingExample) continue;
    if (assetRecordsByFile.has(record.file)) problems.push(`${file}: duplicate provenance record for "${record.file}".`);
    assetRecordsByFile.set(record.file, { ...record, recordFile: file });

    if (typeof record.asset_id !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(record.asset_id)) {
      problems.push(`${file}: asset_id must be a stable lowercase hyphenated ID.`);
    } else if (publicAssetIds.has(record.asset_id)) {
      problems.push(`${file}: duplicate public lesson visual asset_id "${record.asset_id}".`);
    } else publicAssetIds.add(record.asset_id);

    const expectedCategory = isDiagram ? "diagram" : "generated_example";
    const expectedOrigin = isDiagram ? "original" : "generated";
    if (record.category !== expectedCategory) problems.push(`${file}: ${isDiagram ? "public diagram" : "public teaching example"} category must be "${expectedCategory}".`);
    if (record.provenance?.origin !== expectedOrigin || record.provenance?.rights_basis !== expectedOrigin) {
      problems.push(`${file}: ${isDiagram ? "public diagram" : "public teaching example"} provenance must state ${expectedOrigin} origin and rights basis.`);
    }
    if (record.distribution !== "deployable_after_review") {
      problems.push(`${file}: public lesson visual distribution must be "deployable_after_review".`);
    }
    const publicPaths = isDiagram ? publicDiagramPaths : publicTeachingPaths;
    if (!publicPaths.has(record.file)) problems.push(`${file}: provenance file "${record.file}" does not match a public ${isDiagram ? "diagram SVG" : "teaching JPG"}.`);
    if (isDiagram) diagramRecordCount += 1;
    else teachingExampleRecordCount += 1;
  }
}

for (const file of publicDiagramPaths) {
  if (!assetRecordsByFile.has(file)) problems.push(`${file}: missing curriculum/assets provenance record.`);
}
for (const file of publicTeachingPaths) {
  if (!assetRecordsByFile.has(file)) problems.push(`${file}: missing curriculum/assets provenance record.`);
}

const files = readdirSync(lessonsDir).filter((name) => name.endsWith(".json")).sort();
if (files.length === 0) problems.push("No lesson JSON files were found in curriculum/lessons.");

function requireString(value, path, file) {
  if (typeof value !== "string" || value.trim() === "") problems.push(`${file}: ${path} must be a non-empty string.`);
}

function requireStringArray(value, path, file) {
  if (!Array.isArray(value) || !value.every((entry) => typeof entry === "string")) {
    problems.push(`${file}: ${path} must be an array of strings.`);
  }
}

function checkVisual(visual, path, file) {
  requireString(visual?.src, `${path}.src`, file);
  requireString(visual?.alt, `${path}.alt`, file);
  requireString(visual?.provenance?.kind, `${path}.provenance.kind`, file);
  if (typeof visual?.src === "string") {
    const relativeAsset = visual.src.replace(/^\/+/, "");
    const assetPath = resolve(publicDir, relativeAsset);
    if (!assetPath.startsWith(`${publicDir}${sep}`) || !existsSync(assetPath)) {
      problems.push(`${file}: visual asset "${visual.src}" is missing from public/.`);
    }
    if ((relativeAsset.startsWith("assets/diagrams/") || relativeAsset.startsWith("assets/teaching/")) && !assetRecordsByFile.has(`public/${relativeAsset}`)) {
      problems.push(`${file}: visual asset "${visual.src}" has no provenance record.`);
    }
  }
}

const ids = new Set();
const publishedIds = new Set();
let publishedCount = 0;
let fixtureCount = 0;
for (const file of files) {
  const filePath = resolve(lessonsDir, file);
  let lesson;
  try {
    lesson = JSON.parse(readFileSync(filePath, "utf8"));
  } catch (error) {
    problems.push(`${file}: invalid JSON (${error instanceof Error ? error.message : "parse error"}).`);
    continue;
  }

  for (const field of ["id", "title", "difficulty", "lessonType", "objective"]) {
    requireString(lesson[field], field, file);
  }
  if (typeof lesson.id === "string") {
    if (ids.has(lesson.id)) problems.push(`${file}: duplicate lesson id "${lesson.id}".`);
    ids.add(lesson.id);
  }
  if (!Number.isFinite(lesson.durationMinutes) || lesson.durationMinutes <= 0) {
    problems.push(`${file}: durationMinutes must be a positive number.`);
  }
  for (const field of ["medium", "materials", "prerequisites", "artistReferences", "explanation", "reflection"]) {
    requireStringArray(lesson[field], field, file);
  }
  for (const field of ["primary", "secondary"]) {
    requireStringArray(lesson.fundamentals?.[field], `fundamentals.${field}`, file);
  }
  if (!Array.isArray(lesson.concepts)) {
    problems.push(`${file}: concepts must be an array.`);
  } else {
    for (const [index, concept] of lesson.concepts.entries()) {
      requireString(concept.id, `concepts[${index}].id`, file);
      requireString(concept.name, `concepts[${index}].name`, file);
      if (!stages.has(concept.stage)) problems.push(`${file}: concepts[${index}].stage is not supported.`);
    }
  }
  for (const field of ["warmup", "exercise"]) {
    const block = lesson[field];
    if (!block || !Number.isFinite(block.durationMinutes) || block.durationMinutes <= 0) {
      problems.push(`${file}: ${field}.durationMinutes must be a positive number.`);
    }
    requireString(block?.instructions, `${field}.instructions`, file);
  }
  requireString(lesson.exercise?.source, "exercise.source", file);
  requireString(lesson.exercise?.subjectType, "exercise.subjectType", file);
  if (!Array.isArray(lesson.visuals)) {
    problems.push(`${file}: visuals must be an array.`);
  } else {
    for (const [index, visual] of lesson.visuals.entries()) {
      checkVisual(visual, `visuals[${index}]`, file);
    }
  }
  if (!Array.isArray(lesson.bookReferences)) problems.push(`${file}: bookReferences must be an array.`);
  else {
    for (const [index, reference] of lesson.bookReferences.entries()) {
      requireString(reference.sourceId, `bookReferences[${index}].sourceId`, file);
    }
  }
  if (lesson.status === "development-fixture") {
    fixtureCount += 1;
    if (lesson.label !== expectedLabel) problems.push(`${file}: fixture label must exactly equal "${expectedLabel}".`);
    if (!file.startsWith("fixture-")) problems.push(`${file}: only named Phase 1 fixtures may have fixture status.`);
  } else if (lesson.status === "published") {
    publishedCount += 1;
    publishedIds.add(lesson.id);
    if (lesson.label !== "") problems.push(`${file}: published lesson label must be empty.`);
    const teaching = lesson.teaching;
    if (!teaching || typeof teaching !== "object") {
      problems.push(`${file}: published lesson needs structured teaching.`);
    } else {
      for (const field of ["whyItMatters", "connections"]) requireString(teaching[field], `teaching.${field}`, file);
      for (const field of ["deepDive", "selfCheck"]) {
        requireStringArray(teaching[field], `teaching.${field}`, file);
        if (Array.isArray(teaching[field]) && teaching[field].length < 2) problems.push(`${file}: teaching.${field} needs at least two entries.`);
      }
      for (const field of ["conceptVisuals", "warmupVisuals", "exerciseVisuals"]) {
        if (!Array.isArray(teaching[field]) || teaching[field].length < 1) problems.push(`${file}: teaching.${field} needs a visual.`);
        else teaching[field].forEach((visual, index) => checkVisual(visual, `teaching.${field}[${index}]`, file));
      }
      if (!Array.isArray(teaching.commonMistakes) || teaching.commonMistakes.length < 1) problems.push(`${file}: teaching.commonMistakes needs a diagnostic visual.`);
      else teaching.commonMistakes.forEach((item, index) => {
        requireString(item.mistake, `teaching.commonMistakes[${index}].mistake`, file);
        requireString(item.lookFor, `teaching.commonMistakes[${index}].lookFor`, file);
        checkVisual(item.visual, `teaching.commonMistakes[${index}].visual`, file);
      });
      if (!Array.isArray(teaching.sources) || teaching.sources.length < 1) problems.push(`${file}: teaching.sources needs inspected page-level references.`);
      else teaching.sources.forEach((source, index) => {
        for (const field of ["id", "title", "author", "edition", "pages", "usedFor"]) requireString(source[field], `teaching.sources[${index}].${field}`, file);
        if (!Array.isArray(source.sections) || source.sections.length < 1 || source.sections.some((section) => !teachingSections.has(section))) {
          problems.push(`${file}: teaching.sources[${index}].sections is invalid.`);
        }
      });
    }
    if (!expectedPilotIds.has(lesson.id)) problems.push(`${file}: published pilot IDs must remain lesson-01 through lesson-09.`);
    if (lesson.warmup.durationMinutes + lesson.exercise.durationMinutes > lesson.durationMinutes - 2) problems.push(`${file}: allow time for concept and reflection.`);
    if (lesson.exercise.durationMinutes <= lesson.durationMinutes / 2) problems.push(`${file}: drawing must take most lesson time.`);
  } else problems.push(`${file}: unsupported lesson status.`);
}

if (publishedCount !== 9) problems.push(`Expected nine published pilot lessons; found ${publishedCount}.`);
for (const id of expectedPilotIds) if (!publishedIds.has(id)) problems.push(`Expected published pilot lesson ID "${id}".`);
for (const id of publishedIds) if (!expectedPilotIds.has(id)) problems.push(`Unexpected published lesson ID "${id}"; the 93-lesson plan is not production content.`);
if (fixtureCount !== 3) problems.push(`Expected three preserved development fixtures; found ${fixtureCount}.`);

if (problems.length > 0) {
  console.error(`Lesson validation failed with ${problems.length} issue(s):\n- ${problems.join("\n- ")}`);
  process.exitCode = 1;
} else {
  console.log(`Validated ${publishedCount} published pilot lessons, ${fixtureCount} preserved fixtures, ${diagramRecordCount} public diagram SVG provenance records, ${teachingExampleRecordCount} generated teaching example records, and their visual assets.`);
}
