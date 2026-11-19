# news-image-20261119

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/Gunawan13571998/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/Gunawan13571998/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

The World in One Day — 19 November 2026: a 1024×1024 newspaper front page that sums up the world's news of Thursday 19 November 2026 in one image, entered in the make.fun competition **news-image-20261119** ("Sum up 19 November's world news in one image").

A 1024×1024 newspaper front page drawn programmatically with PIL: a huge masthead, the date Thursday 19 November 2026, a red ticker strip, three hero stories, a world map with numbered pins, twelve more panels, and an In Brief strip — 32 stories in all, each one an event that happened or was first reported on 19 November 2026.

## Heroes

1. **Three leaders, one table** — Trump, Xi and Putin hold their first three-way summit in Shenzhen; China and Russia issue a joint "peace declaration".
2. **Myanmar guilty of genocide** — the ICJ rules 9–6 that Myanmar committed genocide against the Rohingya, the first time the World Court has held a state responsible.
3. **The $81.3 billion debut** — Anthropic starts trading on Nasdaq as ANT after the largest IPO ever, ahead of SpaceX's $75bn.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to `/output/entry.png`. `entry.png` is 1024×1024, under the 1 MiB gate limit.

---

<sub>Entered on [make.fun](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>
