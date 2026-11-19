# The World in One Day — 19 November 2026

Entry for the make.fun competition **news-image-20261119**:
"Sum up 19 November's world news in one image".

A 1024×1024 newspaper front page drawn programmatically with PIL
(see `../news-image-20261119-work/draw.py` for the draw script and
`stories-20261119.md` for the story list with sources): a huge masthead,
the date Thursday 19 November 2026, a red ticker strip, three hero stories,
a world map with numbered pins, twelve more panels, and an In Brief strip —
32 stories in all, each one an event that happened or was first reported on
19 November 2026.

## Heroes

1. **Three leaders, one table** — Trump, Xi and Putin hold their first
   three-way summit in Shenzhen; China and Russia issue a joint
   "peace declaration".
2. **Myanmar guilty of genocide** — the ICJ rules 9–6 that Myanmar committed
   genocide against the Rohingya, the first time the World Court has held a
   state responsible.
3. **The $81.3 billion debut** — Anthropic starts trading on Nasdaq as ANT
   after the largest IPO ever, ahead of SpaceX's $75bn.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`. Outside the grader's container:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`entry.png` is 1024×1024, under the 1 MiB gate limit.
