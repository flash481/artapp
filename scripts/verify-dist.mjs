import { readdirSync, statSync } from "node:fs";
import { relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const dist = resolve(root, "dist");
const forbiddenExtension = /\.(?:pdf|epub|mobi|djvu|txt|md|rst|docx?)$/i;
const forbiddenPath = /(?:^|[\\/])(?:sources?|extracted|analyses|inventories|research|notes|scratch)(?:[\\/]|$)/i;

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

if (badFiles.length > 0) {
  console.error(`Deployment output includes private or source-like files:\n- ${badFiles.map((path) => relative(dist, path)).join("\n- ")}`);
  process.exitCode = 1;
} else {
  console.log(`Deployment output contains ${files.length} public app file(s); no source books or private research files found.`);
}
