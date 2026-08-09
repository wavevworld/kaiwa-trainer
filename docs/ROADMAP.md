# Roadmap

## Stage 1 — Site on DigitalOcean (now)

- [x] Extract dialogue data from index.html into app/data.js
- [x] localStorage persistence: learned marks + settings survive reload
- [ ] PWA: manifest.json, service worker (offline app shell) — icons 192/512/maskable/apple-touch are done, in `app/icons/`
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
- [ ] User-created dialogues (form → same data format → localStorage)
- [x] Export / import **progress** as a JSON file (done early — it is the only defence
      against a cleared Safari history, a new device, or a change of domain).
      Custom dialogues are not in the file yet; they do not exist yet.
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
