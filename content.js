/*
  CHESSTCG — Content Data
  ============================================================
  HOW TO ADD A NEW GAME:
  1. Copy one of the game objects below
  2. Fill in: id, name, tagline, description, whyChessTCG, slug, matchupCount
  3. Make sure slug matches the folder name in /pages/games/[slug]/
  4. Set enabled: false to show as "coming soon", true to link

  HOW TO ADD A NEW MATCHUP:
  1. Add an entry to the matchups array below with the correct gameId
  2. Create the matchup HTML page at /pages/games/[gameId]/matchups/[matchup-slug].html
  3. The matchup will automatically appear on the game's page
*/

const GAMES = [
  {
    id: "yugioh",
    name: "Yu-Gi-Oh!",
    tagline: "The brilliant system, curated",
    description: "An extraordinary game design trapped in an ever-escalating power spiral. We curate the formats where Yu-Gi-Oh! plays like chess: Goat (2005), Edison (2010), and DAD (2014).",
    whyChessTCG: "Yu-Gi-Oh! has arguably the deepest game design of any TCG — the interplay between monster effects, trap cards, and spell cards creates a layered decision tree that rewards mastery. But Konami's refusal to adopt a rotating format means the game has been in perpetual power creep. Modern Yu-Gi-Oh! is chess played only with queens. Our solution: curate the eras where the pieces match the philosophy — where Black Luster Soldier is powerful but never unbeatable, where there are outs to everything, and where games are decided by a thousand cuts of skill rather than who assembles their combo first.",
    slug: "yugioh",
    matchupCount: 0,
    enabled: true,
    tag: "TCG"
  },
  {
    id: "magic",
    name: "Magic: The Gathering",
    tagline: "When the system works, nothing rivals it",
    description: "The gold standard of TCG design — but plagued by infinite combos, mana screw, and tempo races that bypass skill. We find the matchups where Magic plays to its ceiling.",
    whyChessTCG: "Magic: The Gathering is, in theory, the most perfectly designed card game ever created. The rotating format is a stroke of genius. But in practice, the mana system creates games that are decided by variance rather than skill, and the metagame often devolves into whoever curves out fastest. We focus on formats and matchups where the mana curve is smooth, where control and midrange interact meaningfully, and where the game is decided by the quality of decisions rather than the luck of the draw.",
    slug: "magic",
    matchupCount: 0,
    enabled: true,
    tag: "TCG"
  },
  {
    id: "digimon",
    name: "Digimon",
    tagline: "The tug-of-war masterpiece",
    description: "A fundamentally well-designed game built around constant alternating play and meaningful back-and-forth. Digimon is the hidden gem of competitive TCGs.",
    whyChessTCG: "Digimon's security stack system creates an inherent tug-of-war dynamic that almost no other TCG achieves naturally. Attacking the security creates risk and reward. Evolving your Digimon creates board presence without emptying your hand. The game breathes with alternating decisions in a way that makes nearly every matchup feel interactive and fair. Digimon earns its place in ChessTCG with minimal curation needed — it already plays the way we want.",
    slug: "digimon",
    matchupCount: 0,
    enabled: true,
    tag: "TCG"
  },
  {
    id: "pokemon",
    name: "Pokémon",
    tagline: "The classic reimagined for real competition",
    description: "Modern Pokémon often sacrifices depth for accessibility. We go back to the formats and deckbuilding philosophies that reward decision-making over linear execution.",
    whyChessTCG: "Pokémon's simplicity is both its greatest strength and its greatest weakness. At its worst, it is pure tempo — draw the right card, slam it, win. At its best, it rewards precise resource management, prize trade calculations, and deck construction mastery. We seek the matchups and formats where toolbox strategies flourish and where the game creates genuine decision trees rather than linear racing.",
    slug: "pokemon",
    matchupCount: 0,
    enabled: true,
    tag: "TCG"
  },
  {
    id: "onepiece",
    name: "One Piece",
    tagline: "A newcomer with solid bones",
    description: "Bandai's entry into the competitive TCG space brings a clean, interactive system. Good matchups can elevate it into genuinely compelling competitive play.",
    whyChessTCG: "One Piece TCG is a well-constructed game with clear alternating play built into its turn structure. The Don!! system creates interesting resource decisions each turn. With the right matchup selection — leaning toward control and midrange over aggro — One Piece delivers a satisfying back-and-forth that holds up under repeated play.",
    slug: "onepiece",
    matchupCount: 0,
    enabled: true,
    tag: "TCG"
  },
  {
    id: "dragonball",
    name: "Dragon Ball Super",
    tagline: "High energy, curated for depth",
    description: "Dragon Ball's TCG mirrors its source material: explosive, high-stakes clashes. When controlled properly, the format rewards preparation and smart resource allocation.",
    whyChessTCG: "Dragon Ball Super Card Game rewards aggressive reading of the game state and careful hand management. The battle power system creates clear, legible board states that are easy to read but difficult to master. Selected matchups lean into the strategic elements rather than the pure combo potential, creating games that feel like genuine contests of skill.",
    slug: "dragonball",
    matchupCount: 0,
    enabled: true,
    tag: "TCG"
  },
  {
    id: "fleshandblood",
    name: "Flesh and Blood",
    tagline: "Designed for skill, built for depth",
    description: "LSS built Flesh and Blood from the ground up to solve the problems ChessTCG is designed to address. Nearly no mana system, pure resource management, constant alternation.",
    whyChessTCG: "Flesh and Blood is the closest any mass-market TCG has come to solving the design problems we care about. Every card is a resource. The pitch system means you're always making micro-decisions. The block mechanic creates constant interaction on both turns. The game was designed to prevent non-games and blow-out elements from dominating. FAB earns its place here with the least curation of any game in our lineup — it already plays like chess.",
    slug: "fleshandblood",
    matchupCount: 0,
    enabled: true,
    tag: "TCG"
  },
  {
    id: "starwars",
    name: "Star Wars: Unlimited",
    tagline: "The force is in the foundations",
    description: "Fantasy Flight's return to Star Wars brings a surprisingly deep system built around resource bases and meaningful combat decisions.",
    whyChessTCG: "Star Wars: Unlimited launched with a clear priority on interactive gameplay. The base damage mechanic creates a constant clock that keeps games from stalling indefinitely. Leader cards add a persistent strategic layer that rewards long-term planning. The system is designed around meaningful choices at each turn, making it a natural fit for the ChessTCG philosophy.",
    slug: "starwars",
    matchupCount: 0,
    enabled: true,
    tag: "TCG"
  },
  {
    id: "placeholder",
    name: "???",
    tagline: "More to come",
    description: "A ninth game is in consideration. Stay tuned as the ChessTCG roster expands.",
    whyChessTCG: "",
    slug: null,
    matchupCount: 0,
    enabled: false,
    tag: "TBD"
  }
];

const MATCHUPS = [
  /*
    EXAMPLE MATCHUP ENTRY — copy and fill in for each new matchup:
    {
      id: "goat-monarchs-vs-goat-chaos",
      gameId: "yugioh",
      title: "Monarchs vs. Chaos",
      format: "Goat Format (2005)",
      archetypes: ["Control", "Midrange"],
      description: "Two of Goat Format's defining strategies collide in a matchup that exemplifies the ChessTCG philosophy. Every card drawn demands a decision.",
      slug: "monarchs-vs-chaos",
      tags: ["Control", "Midrange", "Low Variance"],
      date: "2024-01-01",
      featured: true
    },
  */
];

/* ---- Exports for use in page scripts ---- */
if (typeof module !== 'undefined') {
  module.exports = { GAMES, MATCHUPS };
}
