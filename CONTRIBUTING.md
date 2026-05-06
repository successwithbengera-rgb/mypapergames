# ChessTCG — Content Guide

This document explains exactly how the website is structured and how to add new content. 
Give this file to Claude in a new chat when you want to add a matchup or game page.

---

## Site Structure

```
chesstcg/
├── index.html                          ← Homepage
├── css/
│   └── style.css                       ← All styles (do not edit unless restyling)
├── js/
│   ├── content.js                      ← ⭐ ALL CONTENT DATA LIVES HERE
│   └── main.js                         ← Site behavior (scroll reveal, nav)
├── pages/
│   ├── games.html                      ← Games listing page
│   ├── philosophy.html                 ← Philosophy/manifesto page
│   └── games/
│       ├── _TEMPLATE_game.html         ← Template for new game pages
│       ├── _TEMPLATE_matchup.html      ← Template for new matchup pages
│       ├── yugioh.html                 ← Yu-Gi-Oh! game page
│       ├── magic.html                  ← Magic: The Gathering game page
│       ├── digimon.html
│       ├── pokemon.html
│       ├── onepiece.html
│       ├── dragonball.html
│       ├── fleshandblood.html
│       ├── starwars.html
│       └── [game-slug]/
│           └── matchups/
│               └── [matchup-slug].html ← Individual matchup article pages
└── assets/
    └── decklists/                      ← .ydk, .dec, .txt decklist downloads
```

---

## How to Add a New Matchup

### Step 1 — Create the matchup HTML file

Copy `pages/games/_TEMPLATE_matchup.html` to:
```
pages/games/[game-slug]/matchups/[matchup-slug].html
```

**Examples:**
- `pages/games/yugioh/matchups/monarchs-vs-chaos.html`
- `pages/games/magic/matchups/sultai-vs-azorius-control.html`
- `pages/games/digimon/matchups/blue-flare-vs-machinedramon.html`

Replace all `[PLACEHOLDER]` values in the file. See the comment block at the top of the template for a full list.

### Step 2 — Register it in content.js

Open `js/content.js` and add an entry to the `MATCHUPS` array:

```javascript
{
  id: "yugioh-monarchs-vs-chaos",         // Unique ID: [gameid]-[matchup-slug]
  gameId: "yugioh",                        // Must match a game's id in GAMES array
  title: "Monarchs vs. Chaos",            // Display title
  format: "Goat Format (2005)",           // Format label
  archetypes: ["Control", "Midrange"],    // Archetypes involved
  description: "Two of Goat Format's defining strategies collide in a matchup that exemplifies the ChessTCG philosophy.",
  slug: "monarchs-vs-chaos",              // Must match the filename (without .html)
  tags: ["Control", "Midrange", "Low Variance", "Goat Format"],
  date: "2024-01-15",
  featured: true                          // Set true for the first/best matchup
},
```

### Step 3 — Increment the matchup count

In `js/content.js`, find the game in the `GAMES` array and increment `matchupCount`:

```javascript
{
  id: "yugioh",
  matchupCount: 1,   // ← increment this
  ...
}
```

### Step 4 — Add a matchup card to the game page

Open `pages/games/[game-slug].html` and find the `#matchups-grid` div. 
Delete the "COMING SOON" empty state block (the `<div>` with it) and add:

```html
<a href="yugioh/matchups/monarchs-vs-chaos.html" class="matchup-card reveal">
  <p class="matchup-card__label">Goat Format — 2005</p>
  <h3 class="matchup-card__title">Monarchs vs. Chaos</h3>
  <p class="matchup-card__vs">Monarch Control vs. Chaos Control</p>
  <p class="matchup-card__desc">
    Two of Goat Format's defining strategies collide in a matchup that 
    exemplifies the ChessTCG philosophy. Every draw step demands a decision.
  </p>
  <div class="matchup-card__tags">
    <span class="tag tag--gold">Control</span>
    <span class="tag">Midrange</span>
    <span class="tag">Low Variance</span>
    <span class="tag">Goat Format</span>
  </div>
</a>
```

---

## How to Add a New Game

### Step 1 — Create the game HTML file

Copy `pages/games/_TEMPLATE_game.html` to `pages/games/[game-slug].html`.

Replace:
- `[GAME_NAME]` → Full game name
- `[GAME_SLUG]` → Short slug (no spaces, lowercase)
- `[GAME_TAGLINE]` → One-line description
- `[GAME_WHY]` → 2-4 paragraphs on why the game is in ChessTCG

### Step 2 — Register it in content.js

Add an entry to the `GAMES` array in `js/content.js`:

```javascript
{
  id: "newgame",
  name: "New Game TCG",
  tagline: "One-line tagline",
  description: "2–3 sentence description for the games grid card.",
  whyChessTCG: "Full explanation of why this game belongs in ChessTCG. Used on the game page. Can be multiple paragraphs as a single string — use \\n\\n for paragraph breaks if needed.",
  slug: "newgame",
  matchupCount: 0,
  enabled: true,
  tag: "TCG"
},
```

---

## CSS Classes Reference (for matchup articles)

| Class | Use |
|---|---|
| `.decklist` | Container for a decklist block |
| `.decklist__header` | Top bar with deck name + card count |
| `.decklist__section-title` | "Monsters (20)" labels |
| `.decklist__cards` | 2-column grid of card lines |
| `.decklist__card-line` | Single card row |
| `.qty` | Quantity number (gold color) |
| `.decklist__download` | Download button area |
| `.tag` | Small keyword tag |
| `.tag--gold` | Gold-colored tag (use for archetype) |
| `.btn.btn--primary` | Gold call-to-action button |
| `.btn.btn--ghost` | Outlined ghost button |
| `.reveal` | Add to any element for scroll-in animation |

---

## URL Structure

| Page | URL |
|---|---|
| Homepage | `/index.html` |
| Games list | `/pages/games.html` |
| Philosophy | `/pages/philosophy.html` |
| Game page | `/pages/games/[game-slug].html` |
| Matchup page | `/pages/games/[game-slug]/matchups/[matchup-slug].html` |

---

## Decklist Download Files

If you have a downloadable decklist file, place it in `/assets/decklists/` and 
link to it from the matchup page using the `.decklist__download` section:

```html
<div class="decklist__download">
  <a href="../../../../assets/decklists/goat-monarchs.ydk" class="btn btn--ghost" download>
    ↓ Download .ydk
  </a>
  <a href="../../../../assets/decklists/goat-monarchs.txt" class="btn btn--ghost" download>
    ↓ Download .txt
  </a>
</div>
```

Supported formats: `.ydk` (YGOPro), `.dec` (Magic), `.txt` (universal)

---

## Quick Checklist for Adding a Matchup

- [ ] Create `pages/games/[game]/matchups/[slug].html` from template
- [ ] Fill in all `[PLACEHOLDER]` values
- [ ] Add full decklist for both decks
- [ ] Add matchup entry to `MATCHUPS` array in `js/content.js`
- [ ] Increment `matchupCount` in `GAMES` array in `js/content.js`
- [ ] Add matchup card HTML to the game page
- [ ] (Optional) Add downloadable decklist file to `assets/decklists/`

---

*ChessTCG — The Format Project*
