# CLAUDE.md — instructions for Claude Code

## Project

Japanese dialogue trainer (see README.md). Current state: one working static HTML prototype at `app/index.html`. The owner is a beginner programmer (learning Rust on the side, native Russian speaker) — explain decisions simply, prefer boring proven tech, keep the stack minimal.

## Prime directives

- **Do not lose or alter dialogue content.** All Japanese text and romaji in `const CATS` and `const WORDS` inside `app/data.js` are curated learning material — the Japanese side never changes without being asked. The English translations replaced the original Russian ones on 2026-08-08 (explicit request, after I flagged that it changes who the app is for); treat English translations the same way — don't casually reword them.
- Keep it a **static site** (no backend, no database, no build step unless truly needed). Progress is per-device via localStorage.
- Preserve every existing feature listed in README (recall mode, A–B loop, pause-to-repeat, speeds, toggles, TTS voice picker preferring Kyoko, study-time tracker).
- Keep the visual design (docs/DESIGN.md). UI text and dialogue translations are both in English now.
- Mobile-first: primary device is an iPhone (Safari). Test SpeechSynthesis behavior there — voices load async (`onvoiceschanged`), and audio must start from a user gesture.

## Task list (in order)

1. ~~**Refactor**: extract `CATS` and `WORDS` into `app/data.js`~~ — done. Loaded via a plain
   `<script src="data.js">` (globals, not an ES module) so `index.html` still opens directly
   from disk with no local server, and works unchanged once PWA/service-worker is added.
2. ~~**Persistence**~~ — done. `kaiwa.done` (array of stable "Category::Dialogue title" keys,
   not positional — survives reordering), `kaiwa.settings`, `kaiwa.activity` (per-day study
   seconds, see the Progress tracker below).
3. **PWA**: manifest.json (name "KAIWA Trainer", standalone display, theme color #0B0B16), service worker with cache-first for the app shell — not started. Icons are done: `app/icons/` (192, 512, 512 maskable, 180 apple-touch-icon; navy bg, white 会話 glyph, generated via GDI+, see the icon script note below).
4. **Deploy docs → deploy/**: nginx server block for a static site + certbot HTTPS steps for a DigitalOcean Ubuntu droplet; a one-line `scp` or rsync deploy script. Not started.
5. ~~**export/import progress as JSON file**~~ — done, moved up from "later" since it's the only
   defence against a cleared Safari history or a domain change. Still later / ask first:
   user-created dialogues, Capacitor wrapper for App Store.

## Progress tracker (added 2026-08-08)

A GitHub-style year heatmap on a new "Progress" screen, modeled after erosheve.ru's tracker
but built from scratch (own CSS, own data model — no shared code or embed). Tracks wall-clock
time the tab is visible and foregrounded (`document.visibilitychange`), bucketed into local
calendar days (`kaiwa.activity`), not tied to any specific dialogue or category. Flushes to
localStorage every 5s and on hide/pagehide so a killed tab loses at most a few seconds.
Streak counts backward from today, but doesn't break the streak before midnight just because
today has no activity yet (Duolingo-style grace). Included in the backup JSON (`activity`
field, `BACKUP_VERSION` bumped to 2; v1 backups without it still restore fine).

## Content conventions (for any new dialogues)

- Line tuple: `[who, jp, romaji, en]` where `who` is `"me"` (the user, marker 私) or `"he"` (interlocutor, marker 彼). The 4th field's internal name in the code is still `ru`/`ruOn`/`.ru` (CSS class, JS variable) — left as-is since renaming is unrelated churn, but it holds English text now, not Russian.
- Key phrases wrapped in `<b>` inside `jp` (rendered pink) — these are the patterns being drilled
- Level: JLPT N5–N4 grammar, polite です/ます style, natural spoken reactions (へえ、えー、なるほど)
- The user's real context: port work in Toyama (forklift, pallets, ships, security gate, documents), family (son 9, daughter 4), Russia/Vladivostok background, healthy lifestyle (no alcohol/smoking)

## Verification

After each change: open the page, check that (a) all categories render, (b) tapping a line speaks Japanese, (c) recall/A–B/loop/pause still work, (d) reload keeps progress (after task 2). `python3 -m http.server` in `app/` is enough for local testing; PWA/service-worker testing needs HTTPS or localhost.
