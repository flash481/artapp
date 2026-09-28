import { createHash } from "node:crypto";

if (!process.stdin.isTTY || typeof process.stdin.setRawMode !== "function") {
  console.error("Run `npm run hash-password` in an interactive terminal so the password can be entered without echo.");
  process.exit(1);
}

const chunks = [];
let finished = false;
process.stdout.write("Course password (input hidden): ");
process.stdin.setRawMode(true);
process.stdin.resume();

function finish() {
  if (finished) return;
  finished = true;
  process.stdin.setRawMode(false);
  process.stdin.pause();
  const password = Buffer.concat(chunks).toString("utf8");
  process.stdout.write("\n");
  if (!password) {
    console.error("No password entered; no hash generated.");
    process.exitCode = 1;
    return;
  }
  const hash = createHash("sha256").update(password, "utf8").digest("hex");
  process.stdout.write(`VITE_COURSE_PASSWORD_HASH=${hash}\n`);
}

process.stdin.on("data", (chunk) => {
  for (const byte of chunk) {
    if (byte === 3) {
      chunks.length = 0;
      process.stdout.write("\nCancelled.\n");
      process.exit(130);
    }
    if (byte === 10 || byte === 13) {
      finish();
      continue;
    }
    if (byte === 8 || byte === 127) {
      if (chunks.length > 0) chunks.pop();
      continue;
    }
    chunks.push(Buffer.from([byte]));
  }
});

process.stdin.on("end", finish);
