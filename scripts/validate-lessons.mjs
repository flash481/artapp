import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const lessonsDir = resolve(root, "curriculum", "lessons");
const publicDir = resolve(root, "public");
const expectedLabel = "DEVELOPMENT FIXTURE — NOT FINAL CURRICULUM";
const stages = new Set(["introduced", "practised", "revisited", "combined", "independent"]);
const problems = [];

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

const ids = new Set();
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
      requireString(visual.src, `visuals[${index}].src`, file);
      requireString(visual.alt, `visuals[${index}].alt`, file);
      requireString(visual.provenance?.kind, `visuals[${index}].provenance.kind`, file);
      if (typeof visual.src === "string" && !/^https?:\/\//i.test(visual.src)) {
        const relativeAsset = visual.src.replace(/^\/+/, "");
        const assetPath = resolve(publicDir, relativeAsset);
        if (!assetPath.startsWith(`${publicDir}${sep}`) || !existsSync(assetPath)) {
          problems.push(`${file}: visual asset "${visual.src}" is missing from public/.`);
        }
      }
    }
  }
  if (!Array.isArray(lesson.bookReferences)) problems.push(`${file}: bookReferences must be an array.`);
  else {
    for (const [index, reference] of lesson.bookReferences.entries()) {
      requireString(reference.sourceId, `bookReferences[${index}].sourceId`, file);
    }
  }
  if (lesson.status !== "development-fixture") problems.push(`${file}: status must be "development-fixture" for Phase 1 fixtures.`);
  if (lesson.label !== expectedLabel) problems.push(`${file}: label must exactly equal "${expectedLabel}".`);
}

if (problems.length > 0) {
  console.error(`Lesson validation failed with ${problems.length} issue(s):\n- ${problems.join("\n- ")}`);
  process.exitCode = 1;
} else {
  console.log(`Validated ${files.length} development fixture lesson(s) and their visual assets.`);
}
