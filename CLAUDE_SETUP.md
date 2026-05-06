# ChessTCG — Claude Setup Document

Paste this document into a new Claude chat, then describe what you want to add. Claude will produce the exact files to drag into the GitHub repository.

---

## What This Project Is

ChessTCG is a static website (pure HTML/CSS/JS, no build tools, no framework) that documents trading card game formats and matchups evaluated through a philosophy of infinite replayability, alternating play, and chess-like skill expression.

The site is hosted via GitHub Pages or any static host. Adding content = dragging files into the repository. Nothing else.

---

## The Rule: Two Files Per Matchup, Always

Every new matchup post requires exactly **two files**. Claude must always produce both.

### File 1 — The matchup HTML page
**Destination:** `matchups/[game]/[slug].html`

Example: `matchups/yugioh/goat-control-vs-chaos.html`

The slug must be lowercase, hyphenated, descriptive. No spaces.

### File 2 — The updated JSON registry
**Destination:** `data/matchups/[game].json`

Example: `data/matchups/yugioh.json`

This file is an array. Claude must output the **complete updated array** (not just the new entry). The game page reads this JSON and auto-renders the matchup card. No other file needs to be edited.

**JSON entry shape:**
```json
{
  "slug": "goat-control-vs-chaos",
  "title": "Goat Control vs. Chaos Control",
  "format": "Goat Format · 2005",
  "type": "control",
  "summary": "One or two sentence summary shown on the card preview.",
  "tags": ["Mirror Match", "High Skill"]
}
```

- `type` must be exactly one of: `control` | `midrange` | `toolbox`
- `tags` accepts up to 3 short labels
- `slug` must exactly match the HTML filename (without `.html`)

---

## File Structure Reference

```
chesstcg/
├── index.html              ← Homepage (do not edit)
├── games.html              ← All games listing (do not edit)
├── about.html              ← About page (do not edit)
│
├── games/                  ← One page per TCG (do not edit)
│   ├── yugioh.html
│   ├── magic.html
│   ├── digimon.html
│   ├── starwars.html
│   ├── pokemon.html
│   ├── onepiece.html
│   ├── dragonball.html
│   └── fleshandblood.html
│
├── matchups/               ← DROP NEW MATCHUP HTML FILES HERE
│   ├── yugioh/
│   ├── magic/
│   ├── digimon/
│   ├── starwars/
│   ├── pokemon/
│   ├── onepiece/
│   ├── dragonball/
│   └── fleshandblood/
│
├── data/
│   └── matchups/           ← DROP UPDATED JSON FILES HERE
│       ├── yugioh.json
│       ├── magic.json
│       ├── digimon.json
│       ├── starwars.json
│       ├── pokemon.json
│       ├── onepiece.json
│       ├── dragonball.json
│       └── fleshandblood.json
│
├── css/                    ← Do not edit
├── js/                     ← Do not edit
└── assets/
    ├── decklists/          ← Optional .txt decklist downloads
    └── proxies/            ← Optional .pdf proxy pack downloads
```

---

## HTML Page Structure (what Claude must produce)

The matchup HTML uses these CSS files (already in the repo):
- `../../css/global.css` — nav, footer, layout, typography
- `../../css/matchup.css` — all matchup-specific styles

The HTML structure must include these sections in order:

```html
<!-- 1. Nav (standard, links to ../../index.html etc.) -->
<!-- 2. <header class="matchup-header"> with: -->
<!--    - breadcrumb link back to the game page -->
<!--    - .matchup-format-badge (e.g. "Goat Format · 2005") -->
<!--    - <h1> with the matchup title -->
<!--    - .matchup-meta with <span class="meta-tag"> elements -->
<!--    - .matchup-summary paragraph -->
<!-- 3. Sections with class="matchup-section": -->
<!--    - Why This Matchup -->
<!--    - The Format (with .rule-box) -->
<!--    - Matchup Breakdown (with .matchup-dynamics grid) -->
<!--    - Decklists (with .decklists-grid and .decklist-card elements) -->
<!-- 4. Footer (standard) -->
<!-- 5. <script src="../../js/main.js"></script> -->
```

### Relative paths from a matchup file:
- CSS: `../../css/global.css` and `../../css/matchup.css`
- JS: `../../js/main.js`
- Nav links: `../../index.html`, `../../games.html`, `../../about.html`
- Breadcrumb: `../../games/[game].html`

---

## Design System

**Colors:**
- Background: `#0d0c0a` (ink) and `#2a2620` (smoke)
- Text: `#f5f0e8` (paper) and `#8a8070` (dust/secondary)
- Accent: `#b8953a` (gold) and `#d4ab52` (gold-light for `<em>` and highlights)
- Borders: `#3a352e` (dark) and `#d4c9b0` (light, rarely used on dark bg)

**Fonts (loaded via Google Fonts):**
- Cinzel — all headings (`h1`–`h5`)
- Crimson Pro — all body text
- Space Mono — labels, tags, monospace elements

**`<em>` tags** render in gold-light italic. Use them for the second half of H1/H2 titles to create the visual split (e.g. `<h1>Goat Control vs.<br><em>Chaos Control</em></h1>`).

---

## Available CSS Classes (matchup posts)

| Class | Use |
|---|---|
| `.matchup-header` | Page header wrapper |
| `.matchup-format-badge` | Format label above title |
| `.matchup-meta` | Tag row below title |
| `.meta-tag` | Gold-bordered tag chip |
| `.matchup-summary` | Italic summary with gold left-border |
| `.matchup-section` | Content section (alternates bg color automatically) |
| `.rule-box` | Gold-bordered rules callout |
| `.matchup-dynamics` | 3-column early/mid/late game grid |
| `.dynamic-block` | Single cell inside dynamics grid |
| `.decklists-section` | Section modifier for decklist bg |
| `.decklists-grid` | 2-column decklist grid |
| `.decklist-card` | Single deck wrapper |
| `.decklist` | Card list wrapper |
| `.decklist-section` | Monster / Spell / Trap section |
| `.card-qty` | Quantity label (e.g. "3x") |
| `.deck-archetype` | Archetype label under deck name |

---

## Game List & Slugs

| Game | HTML page | JSON file | matchups folder |
|---|---|---|---|
| Yu-Gi-Oh! | `games/yugioh.html` | `data/matchups/yugioh.json` | `matchups/yugioh/` |
| Magic: The Gathering | `games/magic.html` | `data/matchups/magic.json` | `matchups/magic/` |
| Digimon TCG | `games/digimon.html` | `data/matchups/digimon.json` | `matchups/digimon/` |
| Star Wars: Unlimited | `games/starwars.html` | `data/matchups/starwars.json` | `matchups/starwars/` |
| Pokémon TCG | `games/pokemon.html` | `data/matchups/pokemon.json` | `matchups/pokemon/` |
| One Piece TCG | `games/onepiece.html` | `data/matchups/onepiece.json` | `matchups/onepiece/` |
| Dragon Ball Super TCG | `games/dragonball.html` | `data/matchups/dragonball.json` | `matchups/dragonball/` |
| Flesh and Blood | `games/fleshandblood.html` | `data/matchups/fleshandblood.json` | `matchups/fleshandblood/` |

---

## ChessTCG Philosophy (context for writing content)

All content must align with these principles:

1. **Alternating play is sacred.** Neither player should ever feel like a spectator. Turns must be short enough that both players are constantly engaged.

2. **Every threat must have an out.** The strongest card in the format may be dominant, but must always be beatable. Non-games — situations where continuing is pointless — are disqualifying.

3. **Matchups must be asymmetric but fair.** Any archetype matchup must be genuinely contested. No free wins.

4. **Skill decides the game.** Non-skill variance (mana screw, brick draws) must be acknowledged and mitigated by format and deck selection.

5. **Strategy cannot be a single line.** Decks whose entire plan collapses into one memorized combo are excluded. The decision tree must constantly branch based on the opponent's play.

**Approved archetypes:** Control, Midrange, Toolbox (and combinations of these)
**Excluded archetypes:** Aggro/Tempo — not because they lack skill, but because the skill gap is insufficient to produce consistently interesting games.

**The chess analogy:** A good game has a low skill floor (anyone can play) and a high skill ceiling (nobody has mastered it). It is infinitely replayable because micro-decisions always matter and no game is ever the same.

---

## Example Output Format

When asked to create a matchup, Claude must produce two clearly labeled code blocks:

---

**FILE 1 — Drop into: `matchups/yugioh/goat-control-vs-chaos.html`**
```html
[complete HTML file]
```

**FILE 2 — Drop into: `data/matchups/yugioh.json`**
```json
[complete updated JSON array]
```

---

That is the entire workflow. Two files. Drag both into the repo. Done.
