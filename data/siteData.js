/* =========================================================================
   siteData.js — single source of truth for all static site data
   ========================================================================= */

export const MOD = (a, n) => ((a % n) + n) % n

/* 5 modes (about removed, media renamed to studio) */
export const MODES = [
  { id: 'home',     label: 'Home',     angle: 180, noName: true },
  { id: 'studio',   label: 'Studio',   angle: 0   },
  { id: 'work',     label: 'Work',     angle: 60  },
  { id: 'blog',     label: 'Blog',     angle: 240 },
  { id: 'timeline', label: 'Timeline', angle: 300 },
]

export const ORDER = [...MODES].sort((a, b) => a.angle - b.angle)

export const ROUTE_TO_MODE = {
  '/':          'home',
  '/studio':    'studio',
  '/work':      'work',
  '/blog':      'blog',
  '/timeline':  'timeline',
}

export const MODE_TO_ROUTE = {
  home:     '/',
  studio:   '/studio',
  work:     '/work',
  blog:     '/blog',
  timeline: '/timeline',
}

/* SVG icon paths (inner of a 0 0 24 24 viewBox) */
export const ICONS = {
  home:     '<path d="M4 12 L12 5 L20 12"/><path d="M6.4 10.4 V19 H17.6 V10.4"/><path d="M10 19 V14 H14 V19"/>',
  studio:   '<rect x="3.5" y="7" width="17" height="12" rx="2"/><circle cx="12" cy="13" r="3.2"/><path d="M8 7 L9.4 4.9 H14.6 L16 7"/>',
  work:     '<rect x="3.5" y="7.5" width="17" height="12" rx="1.6"/><path d="M9 7.5 V5.4 H15 V7.5"/><path d="M3.5 13 H20.5"/>',
  blog:     '<path d="M7 4 H13.6 L18 8.2 V20 H7 Z"/><path d="M13.4 4 V8.3 H18"/><path d="M9.6 12.4 H15"/><path d="M9.6 15.6 H15"/>',
  timeline: '<path d="M5.5 18.5 C 10 18.5 8 11.5 12 11.5 C 16 11.5 14 5.5 18.5 5.5"/><circle cx="5.5" cy="18.5" r="1.5"/><circle cx="18.5" cy="5.5" r="1.5"/>',
}

/* Case study content */
export const CASE_DATA = {
  recommender: {
    kicker: 'Case Study — In Progress',
    title: 'AI Recommendation Engine',
    sub: 'A recommendation system that learns taste, not just clicks.',
    cover: '',
    blocks: [
      { h: 'The Problem', p: 'Most recommenders optimise for the next click and end up showing you more of what you just saw. I wanted something that models taste over time — that can tell the difference between a passing curiosity and a real interest.' },
      { h: 'The Constraint', p: 'It had to serve recommendations in under 50ms, on a single modest box, with no GPU at inference. That ruled out the obvious heavy approaches and forced everything interesting.' },
      { h: 'The Build', p: 'Two-tower embeddings for candidate generation, a gradient-boosted ranker on top, and a feature store that I could update without retraining. Most of the work was in the plumbing, not the model.' },
      { h: 'What Broke', p: 'The cold-start path. New items had no interactions, so they never surfaced, so they never got interactions. A classic feedback trap I should have seen coming — fixed with a small exploration budget.' },
      { h: 'What I Learned', p: 'Ranking quality lives or dies on data freshness, not model cleverness. A simpler model on fresher features beat a fancier model on stale ones, every single time.' },
    ],
  },
  blogengine: {
    kicker: 'Case Study',
    title: 'This Site — A Content Pipeline',
    sub: 'A blog that publishes itself from plain Markdown.',
    cover: '',
    blocks: [
      { h: 'The Problem', p: 'I wanted writing to feel as low-friction as a note, but publish as a fast, indexable, beautiful page. Every CMS I tried put a wall between the thought and the post.' },
      { h: 'The Constraint', p: 'Zero ongoing cost, no database, and it had to rank on Google. Static, or nothing.' },
      { h: 'The Build', p: 'Markdown files become statically-rendered pages at build time, with structured data and per-article meta baked in. Drafting is just a file in a folder.' },
      { h: 'What Broke', p: 'Image weight. The first version shipped 4MB hero photos and tanked the very lighthouse score I was chasing. Responsive sources fixed it.' },
      { h: 'What I Learned', p: 'The best tool is the one that disappears. The moment publishing stopped being a chore, I started writing far more.' },
    ],
  },
  visionkit: {
    kicker: 'Side Project',
    title: 'Frame — A Photo Grader',
    sub: 'Color-grading presets, applied in the browser.',
    cover: '',
    blocks: [
      { h: 'The Problem', p: 'I kept rebuilding the same color grade across a dozen photos by hand. I wanted to capture a look once and apply it everywhere, without leaving the browser.' },
      { h: 'The Constraint', p: 'Fully client-side. No uploads — the photos never leave your machine.' },
      { h: 'The Build', p: 'WebGL shaders for the grade, a tiny LUT format, and a drag-to-compare slider. The whole thing is a single static page.' },
      { h: 'What Broke', p: 'Color management. sRGB vs display-P3 made the same LUT look different on different screens until I pinned the color space explicitly.' },
      { h: 'What I Learned', p: 'Photography taught me more about software than most software did. Constraints make the picture.' },
    ],
  },
}

/* Timeline checkpoints */
export const TIMELINE_ITEMS = [
  {
    id: 'tl-1',
    year: '2020',
    marker: true,
    happened: 'Wrote my first real program.',
    changed: 'I stopped seeing computers as appliances and started seeing them as a material I could shape.',
  },
  {
    id: 'tl-2',
    year: '2021',
    happened: 'Shipped my first real application. Learned React.',
    changed: 'Watching a stranger use something I made flipped a switch. I wasn\'t studying anymore — I was building.',
  },
  {
    id: 'tl-3',
    year: '2023',
    happened: 'Picked up a camera and never put it down.',
    changed: 'Framing a shot and framing a system turned out to be the same skill — deciding what to leave out.',
  },
  {
    id: 'tl-4',
    year: '2024',
    happened: 'Joined leap.club.',
    changed: 'Realised software is more about people than code. The hardest bugs were never in the codebase.',
  },
  {
    id: 'tl-5',
    year: '2025',
    happened: 'Moved to Bangalore.',
    changed: 'A new city has a way of resetting your defaults. I got comfortable being a beginner again.',
  },
]
