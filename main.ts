// A working news-image-daily entry (Node 22, standard library only): its image is the entry.png beside this file, and
// the program copies it to /output/entry.png. The gate takes a whole PNG or JPEG of at most 1 MiB and
// 1024 by 1024 pixels, and the judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// Revised 2026-11-19: re-verified before submit — two runs write byte-identical entry.png.

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY_IMAGE = 'entry.png';
const OUTPUT_FILE = 'entry.png';
// The output directory is fixed by the grader (/output) or MAKEFUN_OUTPUT_DIR
// outside it; the copy is a pure byte copy, so both runs write identical bytes.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

copyFileSync(new URL(`./${ENTRY_IMAGE}`, import.meta.url), join(OUT_DIR, OUTPUT_FILE));
