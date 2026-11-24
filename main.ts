// One Emoji, One Smile — make.fun entry (u-0xkianno-one-emoji-one-smile-5470751f)
//
// Writes exactly one emoji, and nothing else, to entry.txt.
// The emoji is U+1F917 SMILING FACE WITH OPEN HANDS (🤗): a warm smile with
// open arms — the plainest single-character offer of warmth to a stranger.
// See NOTES.md for the full shortlist and the ordered-criteria reasoning
// that picked it.
//
// Node 22, standard library only, no network, fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = String.fromCodePoint(0x1f917); // 🤗

// Gate self-check: the sealed scorer only accepts 1–8 characters of
// non-whitespace UTF-8, so fail loudly here rather than ship an invalid
// entry if this constant is ever edited by mistake.
const charCount = [...EMOJI].length;
if (charCount < 1 || charCount > 8 || EMOJI.trim() === "") {
  throw new Error(`entry must be a single emoji, got ${charCount} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");
