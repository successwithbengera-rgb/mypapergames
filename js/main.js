/* ============================================
   CHESSTCG — MAIN JS
============================================ */

// ---- Scroll fade-in animations ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

function observeFadeTargets() {
  document.querySelectorAll(
    '.philosophy-block, .archetype-card, .principle-item, .game-card, .matchup-card'
  ).forEach(el => {
    if (!el.classList.contains('fade-up')) {
      el.classList.add('fade-up');
      observer.observe(el);
    }
  });
}
document.addEventListener('DOMContentLoaded', observeFadeTargets);

// ---- Auto-load matchup cards from JSON registry ----
// Called by each game page:
//   loadMatchups('../data/matchups/yugioh.json', 'matchups-grid', '../matchups/yugioh/');
//
// JSON array shape per entry:
// {
//   "slug": "goat-control-vs-chaos",
//   "title": "Goat Control vs. Chaos Control",
//   "format": "Goat Format · 2005",
//   "type": "control",          // control | midrange | toolbox
//   "summary": "Card summary.",
//   "tags": ["Mirror Match", "High Skill"]
// }

function loadMatchups(jsonPath, gridId, basePath) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  fetch(jsonPath)
    .then(res => { if (!res.ok) throw new Error(); return res.json(); })
    .then(matchups => {
      if (!matchups || matchups.length === 0) {
        grid.innerHTML = '<div class="matchup-empty"><p>No matchups yet — check back soon.</p></div>';
        return;
      }
      grid.innerHTML = matchups.map(m => buildMatchupCard(m, basePath)).join('');
      observeFadeTargets();
    })
    .catch(() => {
      grid.innerHTML = '<div class="matchup-empty"><p>Matchups coming soon.</p></div>';
    });
}

function buildMatchupCard(m, basePath) {
  const labels = { control: 'Control', midrange: 'Midrange', toolbox: 'Toolbox' };
  const tags = (m.tags || []).map(t => `<span class="matchup-tag">${t}</span>`).join('');
  return `
    <a href="${basePath}${m.slug}.html" class="matchup-card">
      <div class="matchup-header">
        <span class="matchup-format">${m.format}</span>
        <span class="matchup-type type-${m.type}">${labels[m.type] || m.type}</span>
      </div>
      <h4>${m.title}</h4>
      <p>${m.summary}</p>
      <div class="matchup-footer">
        ${tags}
        <span class="read-more">Read &rarr;</span>
      </div>
    </a>`;
}
