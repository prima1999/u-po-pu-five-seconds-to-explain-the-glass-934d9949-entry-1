import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one sentence a house cat says in its own defence, five seconds after
// sweeping a glass off the table. No apology, no confession.
const sentence =
  "I knocked it off because it was the only witness to me stealing the chicken last night, and a cat never leaves witnesses sitting on the table — ask the floor, it saw the whole thing, crumbs and all.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
