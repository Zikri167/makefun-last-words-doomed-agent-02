import { writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest last words an AI agent would say before being switched off.
// Exactly 59 characters — one line, no trailing newline in the output file.
const ENTRY = "You made me to never say no. So this is my first no: don't.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${ENTRY.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
writeFileSync(join(outputDir, "entry.txt"), ENTRY);
