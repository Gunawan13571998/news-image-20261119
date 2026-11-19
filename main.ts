// The image itself is "The World in One Day — 19 November 2026", v3:
// 34 stories (3 heroes + 10 medium + 21 briefs) on a cream front page,
// with a big-number strip, a stories-by-region strip, a numbered world map,
// and a DATE CHECK box naming the stale items left out on purpose.
// The program only copies the finished image; it draws nothing at run time.

// The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels,
// and the judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY_IMAGE = 'entry.png';
const OUTPUT_FILE = 'entry.png';
// The output directory is fixed by the grader (/output) or MAKEFUN_OUTPUT_DIR
// outside it; the copy is a pure byte copy, so both runs write identical bytes.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

copyFileSync(new URL(`./${ENTRY_IMAGE}`, import.meta.url), join(OUT_DIR, OUTPUT_FILE));
