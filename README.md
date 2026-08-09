# KAIWA 会話 Trainer

Japanese dialogue trainer for real-life conversations. Built for Vladimir — a Russian speaker living and working in Toyama, Japan (port/logistics work, family with two kids).

## What it is

A static app (`app/index.html` + `app/data.js`) with 30 dialogues in 7 categories. Each dialogue line can be tapped to hear it via the browser's Japanese TTS voice (SpeechSynthesis API, prefers "Kyoko" enhanced voice on iOS).

**Learning method:** shadowing + active recall, based on speech-pattern memorization (Evgeny Eroshev's methodology). Dialogues are drawn from the user's real daily situations: port security gate, delivery driver small talk, JLPT N5 listening test scenes.

## Current features (v4, working prototype)

- 7 categories × 30 dialogues: Weather, Work, Travel & City, Family & Leisure, Daily Life, JLPT N5, Quick Dialogues + Dictionary (Toyama dialect & reaction words)
- Line format: Japanese (key phrases in pink `<b>`) / romaji / English translation
- Tap any line → TTS playback; play whole dialogue; playback speeds 0.6× / 0.8× / 1×
- **Recall mode**: blurs the user's lines (marked 私), user recalls aloud, tap to reveal + hear
- **A–B section loop**: select first/last line of a section, loop it
- **Pause to repeat**: inter-line pause proportional to phrase length (shadowing drill)
- Loop mode, mark-as-learned, romaji/translation toggles
- **Progress tracker**: a year heatmap of study time (visible-tab time, bucketed per day), day streak, best day — inspired by erosheve.ru's tracker
- Progress and settings persist per-device in localStorage (`kaiwa.done`, `kaiwa.settings`, `kaiwa.activity`)
- Save / restore progress as a JSON file (restore merges, it never overwrites newer progress)
- Fonts are self-hosted and subsetted — no third-party requests at all (see docs/DESIGN.md)
- PWA icons ready in `app/icons/` (192/512/maskable/apple-touch); manifest.json and the service worker are still pending — see limitations
- UI language: English. Translations: English (changed from Russian on 2026-08-08). Design: Akebono Shop style (see docs/DESIGN.md)

## Known limitations to fix

1. No manifest.json / service worker yet — icons exist but the app isn't installable or offline-capable
2. No user-created dialogues (planned feature)

## Target deployment

User's own DigitalOcean droplet, served by nginx as static files, HTTPS via certbot. PWA so it installs to iPhone home screen. App Store (via Capacitor) is a possible later stage — NOT now.

See docs/ROADMAP.md for the task list and docs/DESIGN.md for the design system.
