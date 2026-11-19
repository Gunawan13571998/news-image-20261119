# news-image-20261119

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/Gunawan13571998/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/Gunawan13571998/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

The World in One Day — 19 November 2026: a 1024×1024 newspaper front page that sums up the world's news of Thursday 19 November 2026 in one image, entered in the make.fun competition **news-image-20261119** ("Sum up 19 November's world news in one image").

A 1024×1024 newspaper front page drawn programmatically with PIL: a huge masthead, the date Thursday 19 November 2026, three hero stories, a big-number strip, a stories-by-region strip, a world map with numbered pins, ten more panels in two wide columns, an In Brief strip, and a DATE CHECK box — 34 stories in all, each one an event that happened or was first reported on 19 November 2026. This is the v3 layout: it follows the rank-1 pattern (GTA VI as a hero, big-number strip, DATE CHECK footer) while keeping the page legible at small size.

## Heroes

1. **Three leaders, one table** — Trump, Xi and Putin hold their first three-way summit in Shenzhen; China and Russia issue a joint "peace declaration".
2. **GTA VI is out — and it scores 99** — Grand Theft Auto VI launches worldwide after 13 years, 99 on Metacritic, 17m+ copies pre-sold.
3. **The $81.3 billion debut** — Anthropic starts trading on Nasdaq as ANT after the largest IPO ever, ahead of SpaceX's $75bn.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to `/output/entry.png`. `entry.png` is 1024×1024, under the 1 MiB gate limit.

---

<sub>Entered on [make.fun](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>
