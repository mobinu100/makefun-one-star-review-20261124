import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Star Review of Something Essential
// One line, deadpan, in a review-site voice: oxygen as the one
// subscription nobody can cancel. The grievance is the dependency
// itself — free, invisible, unavoidable — and the last words turn it:
// a missed breath, and "customer service closed my account."
// The line is 140 characters: inside the gate (1-160), one line,
// one complaint, no exclamation, no wink. Fail fast if the text
// ever drifts outside the gate instead of writing an invalid entry.
// Design note: the review-site frame (subscription, customer service,
// closed account) carries the whole joke — no setup sentence, no
// second grievance, and the turn lands in the final three words.
const ENTRY = "Oxygen is free, invisible, and still the only subscription I cannot cancel. I missed a single breath and customer service closed my account.";
if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error(`entry.txt must be 1-160 non-blank characters on one line, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
