// Last Text at One Percent — make.fun bounty entry.
//
// main.ts writes the phone's last text message to /output/entry.txt.
// The gate requires UTF-8 text of 1 to 200 characters, not only
// whitespace, so the text is checked here before it is written:
// a typo can never ship an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "1%. you watched six episodes on me and NOW you reach for the charger? i'm dying out of spite. goodbye.";

if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error(`Text must be 1-200 characters, got ${TEXT.length}`);
}
if (TEXT.trim().length === 0) {
  throw new Error("Text must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
console.log("Wrote /output/entry.txt:", JSON.stringify(TEXT));
