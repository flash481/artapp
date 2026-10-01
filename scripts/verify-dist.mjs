import { readFileSync, readdirSync, statSync } from "node:fs";
import { relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const dist = resolve(root, "dist");
const assetRecordsDir = resolve(root, "curriculum", "assets");
const forbiddenExtension = /\.(?:pdf|epub|mobi|djvu|txt|md|rst|docx?)$/i;
const forbiddenPath = /(?:^|[\\/])(?:sources?|extracted|analyses|inventories|research|notes|scratch)(?:[\\/]|$)/i;
const visualExtension = /\.(?:svg|jpe?g|png|webp)$/i;
const privateLessonMetadata = /\b(?:bookReferences|sourceImages|authoring|authoringMetadata|productionNotes|sourceEvidence|sourceAnchors|sourceInsights|reviewNotes|provenance)\b/;

function walk(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = resolve(directory, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

let files;
try {
  files = walk(dist);
} catch {
  console.error("dist/ does not exist. Run npm run build first.");
  process.exit(1);
}

const badFiles = files.filter((path) => {
  const outputPath = relative(dist, path);
  return forbiddenExtension.test(path) || forbiddenPath.test(outputPath);
});

const problems = badFiles.map((path) => "Deployment output includes private or source-like file: " + relative(dist, path));
const assetRecordsByFile = new Map();
try {
  for (const name of readdirSync(assetRecordsDir).filter((file) => file.endsWith(".json"))) {
    const record = JSON.parse(readFileSync(resolve(assetRecordsDir, name), "utf8"));
    if (typeof record.file === "string") assetRecordsByFile.set(record.file, record);
  }
} catch (error) {
  problems.push("Unable to read curriculum asset provenance records: " + (error instanceof Error ? error.message : "unknown error"));
}

for (const path of files.filter((file) => visualExtension.test(file))) {
  const outputPath = relative(dist, path).replaceAll("\\", "/");
  if (!outputPath.startsWith("assets/")) continue;
  const record = assetRecordsByFile.get("public/" + outputPath);
  if (!record || record.distribution !== "deployable_after_review") {
    problems.push("Deployment visual lacks approved provenance: " + outputPath);
  }
}

for (const path of files.filter((file) => /\.(?:js|mjs|html|css|json)$/i.test(file))) {
  const outputPath = relative(dist, path);
  let contents;
  try {
    contents = readFileSync(path, "utf8");
  } catch (error) {
    problems.push("Unable to inspect deployment file " + outputPath + ": " + (error instanceof Error ? error.message : "read error"));
    continue;
  }
  if (privateLessonMetadata.test(contents)) problems.push("Private lesson metadata field leaked into deployment output: " + outputPath);
}

if (problems.length > 0) {
  console.error("Deployment verification failed with " + problems.length + " issue(s):\n- " + problems.join("\n- "));
  process.exitCode = 1;
} else {
  console.log("Deployment output contains " + files.length + " public app file(s); all shipped visuals have approved provenance, and private/source material is absent.");
}
