# Roadmap

## Stage 1 — Site on DigitalOcean (now)

- [x] Extract dialogue data from index.html into app/data.js
- [x] localStorage persistence: learned marks + settings survive reload
- [x] PWA: manifest.json, service worker (offline app shell) — icons 192/512/maskable/apple-touch in `app/icons/`
- [ ] nginx static site config + certbot HTTPS on the existing droplet
- [ ] Deploy script (rsync/scp one-liner)
- [ ] "Add to Home Screen" instructions shown once on iPhone

Result: feels like a native app on the phone, works offline, progress persists. Zero running costs beyond the existing server.

## Progress tracking (added 2026-08-08, not originally planned)

- [x] Study-time heatmap (year grid), day streak, best day, total — new "Progress" screen
      and home-screen card. Tracks visible-tab time client-side, no analytics/telemetry.
      Included in the JSON backup.

## Stage 2 — Content & learning features

- [x] Dialogue translations switched from Russian to English (2026-08-08, explicit request)
- [x] Dialogue editor: edit any line (Japanese / romaji / English / speaker), add and delete
      lines, rename a dialogue, write new ones — inline on the dialogue screen, stored in
      `kaiwa.edits`. `data.js` is never written to, so every built-in dialogue reverts in one
      tap, and anything edited is badged "✎ mine" as unverified.
- [x] Export / import as a JSON file (done early — it is the only defence
      against a cleared Safari history, a new device, or a change of domain).
      Since `BACKUP_VERSION` 3 the file carries the edits too, so it is now the only
      copy of anything written on the phone, not just a list of learned marks.
- [ ] Per-line "hard" flag → personal drill list
- [ ] Optional furigana rendering above kanji (ruby tags) — the user reads some kanji but not all
- [ ] More dialogues: remaining JLPT N5 test scenes (bag shop, copies for 45 students, summer vacation/Mt. Fuji, hospital room amenities, café after-meal drinks), port workday set (foreman, lunch break, coworkers)

## Stage 3 — Distribution (only if Stage 1 proves useful)

- [ ] Capacitor wrapper → iOS build
- [ ] Apple Developer account ($99/yr), App Store review
- [ ] Consider replacing TTS with pre-recorded audio for store quality

## Explicitly out of scope for now

- Accounts, sync between devices, any backend
- Android build
- Monetization
