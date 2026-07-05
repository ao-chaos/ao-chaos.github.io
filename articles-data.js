/**
 * articles-data.js
 * ─────────────────────────────────────────────────────────────────
 * Single source of truth for all articles on the site.
 * To add a new article, prepend a new object to the ARTICLES array.
 * The homepage will automatically feature the newest entry and
 * shift older ones down. writing.html will list everything.
 *
 * Fields:
 *   date       ISO date string "YYYY-MM-DD" — used for sorting
 *   title      Article title (string)
 *   excerpt    One–two sentence description shown on cards (string)
 *   tag        Category label shown in small caps (string)
 *   type       "html" → opens in same tab | "pdf" → opens in new tab
 *   readTime   e.g. "8 min read"
 *   url        Relative path or full URL
 *   stat       (optional) Big number shown in featured card stat box
 *   statLabel  (optional) Label below the stat number
 * ─────────────────────────────────────────────────────────────────
 */

const ARTICLES = [
  {
    date:      "2026-07-04",
    title:     "The Coming Disruption: What El Niño 2026 Means for Food, Water, and Economies",
    excerpt:   "A fast-developing Pacific warming event is shaping up to rival 1997, and the people least able to absorb the blow are in its direct path. From Peruvian anchovy fisheries to southern African maize harvests, the human cost is already taking shape.",
    tag:       "Climate Science",
    type:      "html",
    readTime:  "8 min read",
    url:       "elnino_socioeconomic_blog.html",
    stat:      "63%",
    statLabel: "NOAA probability of a \"very strong\" El Niño by late 2026"
  },
  {
    date:      "2025-03-01",
    title:     "London is Heating Up, And We Can See It From Space",
    excerpt:   "Landsat satellite data shows London's surface temperature rose by over a degree in eight years, but the heat is distributed far from equally. Tower Hamlets, one of the city's most deprived boroughs, is heating fastest.",
    tag:       "Data & Climate Science",
    type:      "html",
    readTime:  "5 min read",
    url:       "urban-heat-london.html",
    stat:      "+1.14°C",
    statLabel: "mean surface temp. rise across Greater London, 2015–2023"
  },
  {
    date:      "2024-09-01",
    title:     "Mars, Warm and Wet? The Evidence for an Ancient Habitable World",
    excerpt:   "From valley networks and lacustrine deposits to MAVEN atmospheric loss data — a deep dive into the geological and chemical evidence that Mars once hosted liquid water.",
    tag:       "Planetary Science",
    type:      "pdf",
    readTime:  "8 min read",
    url:       "articles/mars-warm-and-wet.pdf"
  },
  {
    date:      "2024-06-01",
    title:     "Gwen Stacy's Death: Physics or Just Storytelling?",
    excerpt:   "Calculating whether Spider-Man's web could have saved Gwen Stacy, using Young's modulus, impact deceleration forces, and the physics of sudden arrest.",
    tag:       "Physics & Pop Culture",
    type:      "pdf",
    readTime:  "3 min read",
    url:       "articles/gwen-stacy-physics.pdf"
  },
  {
    date:      "2024-03-01",
    title:     "Nightclub Energy — Could 1,600 Students Power a Venue?",
    excerpt:   "Applying the physics of metabolic heat generation to a real nightclub crowd: 4.19 GJ of thermal energy, enough to cover the venue's full electrical load.",
    tag:       "Energy & Sustainability",
    type:      "pdf",
    readTime:  "3 min read",
    url:       "articles/nightclub-energy.pdf"
  }
];
