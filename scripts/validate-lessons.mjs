import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const lessonsDir = resolve(root, "curriculum", "lessons");
const assetRecordsDir = resolve(root, "curriculum", "assets");
const assetsRoot = resolve(root, "public", "assets");
const expectedLabel = "DEVELOPMENT FIXTURE — NOT FINAL CURRICULUM";
const args = process.argv.slice(2);
const draftMode = args.includes("--draft");
const throughIndex = args.indexOf("--through");
const throughCount = throughIndex >= 0 && Number.isInteger(Number(args[throughIndex + 1]))
  ? Number(args[throughIndex + 1])
  : 10;
const expectedCoreIds = new Set(Array.from({ length: Math.max(0, throughCount) }, (_, index) => "core-" + String(index + 1).padStart(3, "0")));
const stages = new Set(["introduced", "practised", "revisited", "combined", "independent"]);
const sourceSections = new Set(["concept", "deepDive", "warmup", "exercise", "compare", "correct", "mistakes"]);
const imageExtensions = new Set([".svg", ".jpg", ".jpeg", ".png", ".webp"]);
const assetRules = {
  diagrams: { category: "diagram", origin: "original", rightsBasis: "original" },
  teaching: { category: "generated_example", origin: "generated", rightsBasis: "generated" },
  examples: { category: "generated_example", origin: "generated", rightsBasis: "generated" },
  references: { category: "generated_reference", origin: "generated", rightsBasis: "generated" },
  masters: { category: "public_domain_master", origin: "public_domain_work", rightsBasis: "public_domain_verified" },
  "selected-source": { category: "selected_source_illustration", origin: "source_book", rightsBasis: "personal_study_only" },
};
const problems = [];
const pending = new Set();

if (throughIndex >= 0 && (!Number.isInteger(Number(args[throughIndex + 1])) || throughCount < 1 || throughCount > 150)) {
  problems.push("--through must be an integer from 1 to 150.");
}
for (let index = 0; index < args.length; index += 1) {
  if (args[index] === "--draft") continue;
  if (args[index] === "--through") {
    index += 1;
    continue;
  }
  problems.push("Unsupported argument: " + args[index] + ".");
}
const pendingOrProblem = (message) => (draftMode ? pending.add(message) : problems.push(message));

function walkFiles(directory) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory).flatMap((name) => {
    const path = resolve(directory, name);
    return statSync(path).isDirectory() ? walkFiles(path) : [path];
  });
}

function requireString(value, path, file) {
  if (typeof value !== "string" || value.trim() === "") problems.push(file + ": " + path + " must be a non-empty string.");
}

function requireStringArray(value, path, file) {
  if (!Array.isArray(value) || !value.every((entry) => typeof entry === "string" && entry.trim() !== "")) {
    problems.push(file + ": " + path + " must be an array of non-empty strings.");
  }
}

function rejectUnknownKeys(value, allowedKeys, path, file) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return;
  for (const key of Object.keys(value)) {
    if (!allowedKeys.has(key)) problems.push(file + ": unsupported " + path + " field " + key + ".");
  }
}

function listJsonFiles(directory) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory).filter((name) => name.endsWith(".json")).sort();
}

const publicImageFiles = walkFiles(assetsRoot).filter((file) => imageExtensions.has(file.slice(file.lastIndexOf(".")).toLowerCase()));
const publicAssetPaths = new Set();
for (const file of publicImageFiles) {
  const path = relative(resolve(root, "public"), file).split(sep).join("/");
  const relativeToAssets = relative(assetsRoot, file).split(sep).join("/");
  const tree = relativeToAssets.split("/")[0];
  if (!assetRules[tree]) {
    problems.push(path + ": public visual is in an undeclared asset directory.");
    continue;
  }
  if (tree === "selected-source") {
    problems.push(path + ": source-book illustrations cannot be placed in the public asset tree.");
    continue;
  }
  publicAssetPaths.add(path);
}

const assetRecordsByFile = new Map();
const assetIds = new Set();
if (existsSync(assetRecordsDir)) {
  for (const file of listJsonFiles(assetRecordsDir)) {
    let record;
    try {
      record = JSON.parse(readFileSync(resolve(assetRecordsDir, file), "utf8"));
    } catch (error) {
      problems.push(file + ": invalid asset provenance JSON (" + (error instanceof Error ? error.message : "parse error") + ").");
      continue;
    }
    if (typeof record.file !== "string" || !record.file.startsWith("public/assets/")) continue;
    if (assetRecordsByFile.has(record.file)) problems.push(file + ": duplicate provenance record for " + record.file + ".");
    assetRecordsByFile.set(record.file, { ...record, recordFile: file });
    if (typeof record.asset_id !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(record.asset_id)) {
      problems.push(file + ": asset_id must be a stable lowercase hyphenated ID.");
    } else if (assetIds.has(record.asset_id)) {
      problems.push(file + ": duplicate public asset_id " + record.asset_id + ".");
    } else assetIds.add(record.asset_id);
    requireString(record.alt_text, "alt_text", file);
    const actualFile = resolve(root, record.file);
    if (!actualFile.startsWith(resolve(root, "public") + sep)) {
      problems.push(file + ": provenance file escapes public/: " + record.file + ".");
    } else if (!existsSync(actualFile)) {
      pendingOrProblem(file + ": visual file is pending: " + record.file + ".");
    }
    const tree = record.file.split("/")[2];
    const rule = assetRules[tree];
    if (!rule) {
      problems.push(file + ": provenance points to an undeclared public asset directory.");
      continue;
    }
    if (record.category !== rule.category) problems.push(file + ": category for " + tree + " must be " + rule.category + ".");
    if (record.provenance?.origin !== rule.origin || record.provenance?.rights_basis !== rule.rightsBasis) {
      problems.push(file + ": provenance origin/rights_basis do not match the " + tree + " asset role.");
    }
    const expectedDistribution = tree === "selected-source" ? "personal_only" : "deployable_after_review";
    if (record.distribution !== expectedDistribution) {
      pendingOrProblem(file + ": asset distribution is not deployment-approved: " + record.file + ".");
    }
  }
}

for (const path of publicAssetPaths) {
  if (!assetRecordsByFile.has("public/" + path)) pendingOrProblem(path + ": provenance record is pending.");
}

const lessonFiles = listJsonFiles(lessonsDir);
const parsedLessons = new Map();
const allIds = new Set();
for (const file of lessonFiles) {
  let lesson;
  try {
    lesson = JSON.parse(readFileSync(resolve(lessonsDir, file), "utf8"));
  } catch (error) {
    problems.push(file + ": invalid JSON (" + (error instanceof Error ? error.message : "parse error") + ").");
    continue;
  }
  parsedLessons.set(file, lesson);
  if (typeof lesson.id === "string") {
    if (allIds.has(lesson.id)) problems.push(file + ": duplicate lesson id " + lesson.id + ".");
    allIds.add(lesson.id);
  }
}

const fixtureFiles = lessonFiles.filter((name) => /^fixture-\d{2}-.+\.json$/.test(name));
const prototypeFiles = lessonFiles.filter((name) => /^lesson-\d{2}\.json$/.test(name));
const canonicalFiles = lessonFiles.filter((name) => /^core-\d{3}\.json$/.test(name));
for (const file of lessonFiles) {
  if (!fixtureFiles.includes(file) && !prototypeFiles.includes(file) && !canonicalFiles.includes(file)) {
    problems.push(file + ": lesson filename must identify a fixture, historical prototype, or core-NNN lesson.");
  }
}
if (fixtureFiles.length !== 3) problems.push("Expected three preserved development fixtures; found " + fixtureFiles.length + ".");
if (prototypeFiles.length !== 9) problems.push("Expected nine untouched MVP prototype lessons; found " + prototypeFiles.length + ".");
if (canonicalFiles.length > throughCount) problems.push("Found canonical lessons beyond requested --through " + throughCount + ".");

function checkVisual(visual, path, file, expectedCategory) {
  requireString(visual?.src, path + ".src", file);
  requireString(visual?.alt, path + ".alt", file);
  requireString(visual?.provenance?.kind, path + ".provenance.kind", file);
  if (typeof visual?.src !== "string") return null;
  if (/^(?:https?:|data:)/i.test(visual.src)) {
    problems.push(file + ": " + path + ".src must point to a local, provenance-recorded public asset.");
    return null;
  }
  const relativeAsset = visual.src.replace(/^\/+/, "");
  const assetPath = resolve(root, "public", relativeAsset);
  if (!assetPath.startsWith(resolve(root, "public") + sep)) {
    problems.push(file + ": visual asset path escapes public/: " + visual.src + ".");
    return null;
  }
  if (!existsSync(assetPath)) {
    pendingOrProblem(file + ": visual file is pending: " + visual.src + ".");
    return null;
  }
  const record = assetRecordsByFile.get("public/" + relativeAsset.replaceAll("\\", "/"));
  if (!record) {
    pendingOrProblem(file + ": provenance for visual is pending: " + visual.src + ".");
    return null;
  }
  if (record.distribution !== "deployable_after_review") pendingOrProblem(file + ": visual is not approved for deployment: " + visual.src + ".");
  if (expectedCategory && record.category !== expectedCategory) {
    problems.push(file + ": " + path + " must use an asset with category " + expectedCategory + ".");
  }
  return record;
}

function validateCommonFields(lesson, file) {
  for (const field of ["id", "title", "difficulty", "lessonType", "objective"]) requireString(lesson[field], field, file);
  if (!Number.isInteger(lesson.durationMinutes) || lesson.durationMinutes < 1 || lesson.durationMinutes > 600) {
    problems.push(file + ": durationMinutes must be an integer between 1 and 600.");
  }
  for (const field of ["medium", "materials", "prerequisites", "artistReferences", "explanation", "reflection"]) {
    requireStringArray(lesson[field], field, file);
    if (["medium", "materials", "explanation"].includes(field) && Array.isArray(lesson[field]) && lesson[field].length < 1) {
      problems.push(file + ": " + field + " must not be empty.");
    }
  }
  for (const field of ["primary", "secondary"]) requireStringArray(lesson.fundamentals?.[field], "fundamentals." + field, file);
  if (!Array.isArray(lesson.concepts)) problems.push(file + ": concepts must be an array.");
  else {
    lesson.concepts.forEach((concept, index) => {
      requireString(concept.id, "concepts[" + index + "].id", file);
      requireString(concept.name, "concepts[" + index + "].name", file);
      if (!stages.has(concept.stage)) problems.push(file + ": concepts[" + index + "].stage is not supported.");
    });
  }
  if (!lesson.exercise || !Number.isInteger(lesson.exercise.durationMinutes) || lesson.exercise.durationMinutes < 1) {
    problems.push(file + ": exercise.durationMinutes must be a positive integer.");
  }
  for (const field of ["instructions", "source", "subjectType"]) requireString(lesson.exercise?.[field], "exercise." + field, file);
  if (lesson.warmup !== undefined) {
    if (!Number.isInteger(lesson.warmup?.durationMinutes) || lesson.warmup.durationMinutes < 1) {
      problems.push(file + ": warmup.durationMinutes must be a positive integer when warmup is present.");
    }
    requireString(lesson.warmup?.instructions, "warmup.instructions", file);
  }
  if (!Array.isArray(lesson.visuals)) problems.push(file + ": visuals must be an array.");
  else lesson.visuals.forEach((visual, index) => checkVisual(visual, "visuals[" + index + "]", file));
  if (!Array.isArray(lesson.bookReferences)) problems.push(file + ": bookReferences must be an array.");
  else lesson.bookReferences.forEach((reference, index) => requireString(reference.sourceId, "bookReferences[" + index + "].sourceId", file));
}

for (const file of fixtureFiles) {
  const lesson = parsedLessons.get(file);
  if (!lesson) continue;
  validateCommonFields(lesson, file);
  if (lesson.status !== "development-fixture") problems.push(file + ": fixture must retain development-fixture status.");
  if (lesson.label !== expectedLabel) problems.push(file + ": fixture label must exactly equal " + expectedLabel + ".");
}

for (const file of canonicalFiles) {
  const lesson = parsedLessons.get(file);
  if (!lesson) continue;
  rejectUnknownKeys(lesson, new Set([
    "id", "title", "durationMinutes", "difficulty", "medium", "materials", "lessonType", "fundamentals",
    "concepts", "prerequisites", "objective", "haveReady", "warmup", "explanation", "visuals", "exercise",
    "artistReferences", "bookReferences", "reflection", "teaching", "authoring", "sourceImages", "extension",
    "scaffoldingLevel", "status", "label",
  ]), "lesson", file);
  validateCommonFields(lesson, file);
  if (lesson.status !== "draft" && lesson.status !== "published") problems.push(file + ": canonical status must be draft or published.");
  if (lesson.status === "published" && lesson.label !== "") problems.push(file + ": published lesson label must be empty.");
  if (lesson.status === "draft" && lesson.label !== "DRAFT — NOT FOR LEARNERS") problems.push(file + ": draft label must exactly equal DRAFT — NOT FOR LEARNERS.");
  if (lesson.status === "draft" && !draftMode) problems.push(file + ": canonical lesson is still a draft; release validation requires published status.");
  if (!expectedCoreIds.has(lesson.id)) problems.push(file + ": lesson ID is outside the requested canonical prefix.");
  const fileNumber = Number(file.slice(5, 8));
  if (lesson.id !== "core-" + String(fileNumber).padStart(3, "0")) problems.push(file + ": filename and canonical ID do not match.");
  if (Array.isArray(lesson.bookReferences) && lesson.bookReferences.length > 0) {
    problems.push(file + ": keep private source evidence out of lesson JSON; use sources/production sidecars and public teaching.sources citations.");
  }
  if (lesson.sourceImages !== undefined) problems.push(file + ": sourceImages are private associations and are not permitted in canonical lesson JSON.");

  const ready = lesson.haveReady;
  if (!ready || typeof ready !== "object") {
    problems.push(file + ": published lesson needs Have Ready details and a supplied fallback visual.");
  } else {
    rejectUnknownKeys(ready, new Set(["subject", "setup", "referenceRoute", "fallbackVisual"]), "haveReady", file);
    for (const field of ["subject", "setup", "referenceRoute"]) requireString(ready[field], "haveReady." + field, file);
    checkVisual(ready.fallbackVisual, "haveReady.fallbackVisual", file, "generated_reference");
  }

  const authoring = lesson.authoring;
  if (!authoring || typeof authoring !== "object") {
    problems.push(file + ": published lesson needs safe authoring metadata and a complete timing budget.");
  } else {
    rejectUnknownKeys(authoring, new Set(["canonicalNumber", "prerequisiteCapabilities", "laterReturns", "timingBudget"]), "authoring", file);
    if (authoring.canonicalNumber !== fileNumber) problems.push(file + ": authoring.canonicalNumber must match its core-NNN ID.");
    requireStringArray(authoring.prerequisiteCapabilities, "authoring.prerequisiteCapabilities", file);
    requireStringArray(authoring.laterReturns, "authoring.laterReturns", file);
    const budget = authoring.timingBudget;
    const timeFields = ["setupAndReading", "looking", "warmup", "drawing", "compareAndCorrect", "review", "reserve"];
    if (!budget || typeof budget !== "object") problems.push(file + ": authoring.timingBudget is required.");
    else {
      rejectUnknownKeys(budget, new Set(timeFields), "authoring.timingBudget", file);
      for (const field of timeFields) {
        if (!Number.isInteger(budget[field]) || budget[field] < (field === "warmup" ? 0 : 1)) {
          problems.push(file + ": authoring.timingBudget." + field + " must be a valid integer number of minutes.");
        }
      }
      const allocated = timeFields.reduce((sum, field) => sum + (Number.isInteger(budget[field]) ? budget[field] : 0), 0);
      if (allocated !== lesson.durationMinutes) problems.push(file + ": timing budget plus reserve must total durationMinutes.");
      const minimumReserve = Math.max(5, Math.ceil(lesson.durationMinutes * 0.1));
      if (budget.reserve < minimumReserve) problems.push(file + ": timing reserve must be at least " + minimumReserve + " minutes.");
      const warmupMinutes = lesson.warmup?.durationMinutes ?? 0;
      if (budget.warmup !== warmupMinutes) problems.push(file + ": timing budget warmup must match the optional warmup block.");
      if (Number.isInteger(budget.drawing) && Number.isInteger(budget.compareAndCorrect)
        && lesson.exercise?.durationMinutes !== budget.drawing + budget.compareAndCorrect) {
        problems.push(file + ": exercise.durationMinutes must equal drawing plus compareAndCorrect budget.");
      }
    }
  }

  const teaching = lesson.teaching;
  if (!teaching || typeof teaching !== "object") {
    problems.push(file + ": published lesson needs structured teaching.");
    continue;
  }
  rejectUnknownKeys(teaching, new Set([
    "whyItMatters", "connections", "conceptVisuals", "deepDive", "warmupVisuals", "exerciseVisuals",
    "commonMistakes", "compare", "correct", "selfCheck", "sources",
  ]), "teaching", file);
  for (const field of ["whyItMatters", "connections"]) requireString(teaching[field], "teaching." + field, file);
  for (const field of ["compare", "correct", "selfCheck"]) {
    requireStringArray(teaching[field], "teaching." + field, file);
    if (Array.isArray(teaching[field]) && teaching[field].length < 1) problems.push(file + ": teaching." + field + " needs at least one entry.");
  }
  for (const field of ["conceptVisuals", "warmupVisuals", "exerciseVisuals"]) {
    if (teaching[field] === undefined) continue;
    if (!Array.isArray(teaching[field])) problems.push(file + ": teaching." + field + " must be an array when present.");
    else teaching[field].forEach((visual, index) => checkVisual(visual, "teaching." + field + "[" + index + "]", file));
  }
  if (Array.isArray(teaching.warmupVisuals) && teaching.warmupVisuals.length > 0 && !lesson.warmup) {
    problems.push(file + ": teaching.warmupVisuals needs a warmup section because the app only renders these visuals with the warmup.");
  }
  if (teaching.deepDive !== undefined) requireStringArray(teaching.deepDive, "teaching.deepDive", file);
  if (teaching.commonMistakes !== undefined) {
    if (!Array.isArray(teaching.commonMistakes)) problems.push(file + ": teaching.commonMistakes must be an array when present.");
    else teaching.commonMistakes.forEach((item, index) => {
      requireString(item.mistake, "teaching.commonMistakes[" + index + "].mistake", file);
      requireString(item.lookFor, "teaching.commonMistakes[" + index + "].lookFor", file);
      if (item.visual) checkVisual(item.visual, "teaching.commonMistakes[" + index + "].visual", file);
    });
  }
  if (teaching.sources === undefined) {
    if (fileNumber <= 10) problems.push(file + ": canonical Lessons 001–010 need at least one checked page-level citation.");
  } else if (!Array.isArray(teaching.sources)) {
    problems.push(file + ": teaching.sources must be an array when present.");
  } else {
    if (fileNumber <= 10 && teaching.sources.length < 1) {
      problems.push(file + ": canonical Lessons 001–010 need at least one checked page-level citation.");
    }
    teaching.sources.forEach((source, index) => {
    for (const field of ["id", "title", "author", "edition", "pages", "usedFor"]) requireString(source[field], "teaching.sources[" + index + "]." + field, file);
    if (typeof source.pages === "string" && /^(?:unknown|tbd|todo|n\/?a)$/i.test(source.pages.trim())) {
      problems.push(file + ": teaching.sources[" + index + "] needs a precise page or section locator.");
    }
    if (!Array.isArray(source.sections) || source.sections.length < 1 || source.sections.some((section) => !sourceSections.has(section))) {
      problems.push(file + ": teaching.sources[" + index + "].sections is invalid.");
    }
    });
  }
}

for (const id of expectedCoreIds) {
  const lesson = Array.from(parsedLessons.values()).find((record) => record.id === id);
  if (!lesson) {
    pendingOrProblem("Canonical lesson " + id + " has not been authored.");
  } else if (lesson.status !== "published" && !draftMode) {
    problems.push("Canonical lesson " + id + " is not published.");
  }
}

if (problems.length > 0) {
  console.error("Lesson validation failed with " + problems.length + " issue(s):\n- " + problems.join("\n- "));
  if (pending.size > 0) console.error("Pending draft-stage items:\n- " + Array.from(pending).join("\n- "));
  process.exitCode = 1;
} else {
  const visualCount = publicAssetPaths.size;
  const mode = draftMode ? "Draft structure checked" : "Release validation passed";
  console.log(mode + " for canonical Core Drawing lessons 001–" + String(throughCount).padStart(3, "0") + "; " + canonicalFiles.length + " lesson record(s), three development fixtures, " + prototypeFiles.length + " preserved MVP prototypes, and " + visualCount + " public visual asset(s).");
  if (pending.size > 0) console.log("Assets or lesson records still pending:\n- " + Array.from(pending).join("\n- "));
  if (draftMode) console.log("Draft mode checks structure only. Run without --draft for release readiness.");
}
