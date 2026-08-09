# Design system — "Akebono" style

The app mirrors the owner's Figma design for his Akebono Shop project (clean e-commerce look). Keep this system when adding screens.

## Tokens (already in :root of index.html)

| Token | Value | Use |
|---|---|---|
| --navy | #0B0B16 | header, dark chips, 私 avatar-alternative |
| --bg | #FFFFFF | page background |
| --panel | #F6F7F9 | secondary surfaces, 彼 marker |
| --ink | #111827 | text |
| --gray | #6B7280 | secondary text |
| --line | #E5E7EB | card borders |
| --blue | #2563EB | primary buttons, study badge, playing state, 私 marker |
| --pink | #E5007D | key-phrase highlight, counters, dictionary accent |
| --green | #22C55E | learned badges, success |
| --lime | #C6F04D | top banner |

## Typography

- UI: Inter (400–800), tight letter-spacing on headings
- Japanese text: Zen Kaku Gothic New (only weights 500 and 700 are ever rendered)
- Sizes: h2 22px/800, card title 15.5px/700, jp line 16.5px/500, meta 12px

### Self-hosted fonts (`app/fonts/`, ~340 KB)

Fonts are **not** loaded from Google. A `<link>` to fonts.googleapis.com would send
every visitor's IP address to Google on each page load, and would break offline use
once the service worker lands. The `@font-face` rules live at the top of the `<style>`
block in `index.html`.

The files are **subsets**, not complete fonts — the full Japanese font is ~1.5 MB per
weight, versus 46 KB here:

- `inter-*.woff2` — a fixed alphabet: ASCII, the full Russian alphabet, romaji macrons
  (āīūēō) and common punctuation. New English or Russian text needs no regeneration.
  *(The Cyrillic block was added when dialogue translations were Russian. Translations
  moved to English on 2026-08-08 — Cyrillic is currently unused dead weight, ~90 KB
  across the 5 weights. Harmless to leave; drop it next time the fonts are regenerated
  if the size ever matters.)*
- `zenkaku-*.woff2` — exactly the 366 Japanese characters that appear in `data.js`.

**When adding dialogues with new kanji, the Japanese subset must be regenerated.**
A character that is missing from the subset silently falls back to the system font
(Hiragino Sans on iPhone) — readable, but visibly different. To regenerate, collect the
unique Japanese characters from `data.js` (dialogue text lives there, not in `index.html`
anymore) and request them from the Google Fonts
API with the `text=` parameter, then save the returned woff2 files over the old ones:

    https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@500;700&text=<characters>

(the request needs a modern browser User-Agent, otherwise Google returns TTF instead of woff2)

## Components

- Cards: white, 1px --line border, radius 12–14px, subtle shadow on press
- Badges: 10.5px uppercase 700, radius 5px (green=learned, blue=study, pink=NEW)
- Chips (toggles): radius 9px, outline default, filled navy when active (pink for Recall)
- Primary button: full-width, --blue, radius 12px, 700
- Top: lime banner (12.5px, dark green text) + navy header with logo 会話KAIWA (jp regular + italic 800) and right-aligned gray stat

## Voice & tone

UI copy: short, functional English ("Play whole dialogue", "Mark as learned"). Learning notes and dialogue translations: English (changed from Russian on 2026-08-08 at the owner's request). No emoji in UI chrome except control glyphs (▶ ■ 🔁 ⏸ ✓).
