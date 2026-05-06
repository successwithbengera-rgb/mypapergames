# ChessTCG Website

A format philosophy project evaluating trading card games through the lens of infinite replayability, alternating play, and chess-like skill expression.

---

## Project Structure

```
chesstcg/
├── index.html              ← Homepage / Manifesto
├── games.html              ← All games listing page
├── about.html              ← About page
│
├── games/                  ← One page per TCG
│   ├── yugioh.html
│   ├── magic.html
│   ├── digimon.html
│   ├── starwars.html
│   ├── pokemon.html
│   ├── onepiece.html
│   ├── dragonball.html
│   └── fleshandblood.html
│
├── matchups/               ← Blog posts, one per matchup
│   ├── MATCHUP_TEMPLATE.html   ← ⭐ Copy this for every new matchup
│   ├── yugioh/
│   │   └── [matchup-slug].html
│   ├── magic/
│   ├── digimon/
│   ├── starwars/
│   ├── pokemon/
│   ├── onepiece/
│   ├── dragonball/
│   └── fleshandblood/
│
├── css/
│   ├── global.css          ← Shared styles (nav, footer, layout)
│   ├── home.css            ← Homepage only
│   ├── games.css           ← Games listing page
│   ├── game-page.css       ← Individual game pages
│   ├── matchup.css         ← Matchup blog posts
│   └── about.css           ← About page
│
├── js/
│   └── main.js             ← Scroll animations, nav highlighting
│
└── assets/
    ├── decklists/          ← .txt decklist files for download
    └── proxies/            ← .pdf proxy packs for download
```

---

## How to Add a New Matchup Post

### Step 1 — Copy the template
Copy `matchups/MATCHUP_TEMPLATE.html` into the correct game subfolder:

```
matchups/yugioh/goat-control-vs-chaos.html
matchups/magic/urza-vs-suicide-black.html
```

Use kebab-case slugs (lowercase, hyphens).

### Step 2 — Edit the `<head>` title
```html
<title>Goat Control vs. Chaos Control — Yu-Gi-Oh! — ChessTCG</title>
```

### Step 3 — Update the breadcrumb
```html
<a href="../../games/yugioh.html" class="breadcrumb">← Yu-Gi-Oh!</a>
```

### Step 4 — Fill in the header metadata
```html
<p class="matchup-format-badge">Goat Format · 2005</p>
<h1>Goat Control vs.<br><em>Chaos Control</em></h1>
<div class="matchup-meta">
  <span class="meta-tag">Control</span>
  <span class="meta-tag">Mirror Match</span>
  <span class="meta-tag">High Skill Ceiling</span>
</div>
<p class="matchup-summary">One paragraph summary...</p>
```

### Step 5 — Write the content sections
The template has these sections (all clearly marked with `<!-- EDIT: -->` comments):
- **Why This Matchup** — Philosophy and ChessTCG reasoning
- **The Format** — Banlist, rules, era, any custom restrictions
- **Matchup Breakdown** — Early/mid/late game dynamics
- **Decklists** — Cards for Deck A and Deck B
- **Skill Guide** (optional) — How to win, key decision points

### Step 6 — Add the card to the game page
Open the corresponding game page (e.g. `games/yugioh.html`) and add a matchup card inside `<div class="matchups-grid">`, replacing or alongside the empty state:

```html
<a href="../matchups/yugioh/goat-control-vs-chaos.html" class="matchup-card">
  <div class="matchup-header">
    <span class="matchup-format">Goat Format · 2005</span>
    <span class="matchup-type type-control">Control</span>
  </div>
  <h4>Goat Control vs. Chaos Control</h4>
  <p>The definitive Goat Format mirror. Two control decks differentiated entirely by pilot skill and in-game decision-making.</p>
  <div class="matchup-footer">
    <span class="matchup-tag">Mirror Match</span>
    <span class="matchup-tag">High Skill</span>
    <span class="read-more">Read →</span>
  </div>
</a>
```

Also remove the `<div class="matchup-empty">` once the first matchup is added.

---

## Matchup Type CSS Classes

For the colored badge on matchup cards:
- `type-control` — Blue
- `type-midrange` — Green
- `type-toolbox` — Gold

---

## Relative Paths Reference

| You are editing… | Path to root CSS | Path to root JS |
|---|---|---|
| `index.html` | `css/global.css` | `js/main.js` |
| `games.html` | `css/global.css` | `js/main.js` |
| `about.html` | `css/global.css` | `js/main.js` |
| `games/yugioh.html` | `../css/global.css` | `../js/main.js` |
| `matchups/yugioh/file.html` | `../../css/global.css` | `../../js/main.js` |

---

## Design System

**Colors (CSS variables in global.css):**
- `--ink` (#0d0c0a) — Main background
- `--smoke` (#2a2620) — Secondary background / cards
- `--paper` (#f5f0e8) — Primary text
- `--dust` (#8a8070) — Secondary text
- `--gold` (#b8953a) — Accent / highlight
- `--gold-light` (#d4ab52) — Italic em text, hover states
- `--gold-dim` (#7a6129) — Subtle gold accents

**Fonts:**
- `Cinzel` — Display / headings
- `Crimson Pro` — Body text
- `Space Mono` — Labels, tags, monospace

---

## Games List

| Game | File | Status |
|---|---|---|
| Yu-Gi-Oh! | `games/yugioh.html` | Active |
| Magic: The Gathering | `games/magic.html` | Active |
| Digimon TCG | `games/digimon.html` | Active |
| Star Wars: Unlimited | `games/starwars.html` | Active |
| Pokémon TCG | `games/pokemon.html` | Active |
| One Piece TCG | `games/onepiece.html` | Active |
| Dragon Ball Super TCG | `games/dragonball.html` | Active |
| Flesh and Blood | `games/fleshandblood.html` | Active |
| TBD | — | Pending |
