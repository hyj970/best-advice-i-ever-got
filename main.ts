// Entry for make.fun bounty u-pangg7-the-best-advice-i-ever-got-358cefb0
// "The Best Advice I Ever Got" — one sentence, up to 200 characters.
// Writes the entry to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const RAW_ENTRY =
  "My grandmother said: if you wait until you feel ready, you'll wait forever — start scared, start small, but start.";

function formatEntry(text: string): string {
  return text.trim() + "\n";
}

const ENTRY = formatEntry(RAW_ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY.trimEnd());
