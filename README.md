# Darul Iman — cross-platform app starter

This is the first Expo + React Native + TypeScript starter for Android and iOS.

## Requirements
- Node.js LTS
- npm
- Expo Go on a phone for an initial preview, or Android Studio / Xcode for native builds
- Xcode is required for local iOS simulator/device builds and is available only on macOS

## Run
```bash
npm install
npx expo start
```
Scan the QR code with Expo Go. Press `a` for Android emulator or `i` for iOS simulator (macOS with Xcode).

## Project structure
```text
darul-iman/
├── App.tsx
├── app.json
├── package.json
├── tsconfig.json
└── src/
    ├── components/FeatureCard.tsx
    ├── data/imams.ts
    ├── screens/QuranScreen.tsx\n    ├── screens/HomeScreen.tsx
    ├── screens/ImamSelectionScreen.tsx
    └── theme/colors.ts
```

## Current prototype
- Home screen with Darul Iman identity and feature entry points
- Four-madhhab selection screen; selected madhhab is held in app state\n- Quran screen with a working Urdu/English selector for Mufti Muhammad Taqi Usmani's editions
- Prayer times are deliberately placeholders (—:—), not fabricated live times
- Quran/Hifz, Hadith/Sunnah and Tools are navigation placeholders for upcoming modules

## Production work still required
1. Integrate a vetted prayer-time calculation library/API, location permissions, timezone handling, calculation method selection and local mosque adjustments. Verify each madhhab's fiqh rules with qualified scholars.
2. Obtain written permission/licensing for Mufti Muhammad Taqi Usmani's Urdu and English translation/explanatory notes before embedding or distributing them. Existing third-party app listings do not grant reuse rights.\n3. Source Quran Arabic text, translations, audio and tajweed data from licensed/reliable sources; verify Uthmani text and verse numbering.
4. Add authenticated, referenced Hadith content with grading and translation provenance.
5. Build Hifz tracking (new lesson, recent revision, older revision), audio repeat and offline storage.
6. Add local notifications, offline database, accessibility, privacy policy, security review and automated tests.
7. Configure production Android/iOS signing, app-store assets, package identifiers and release builds.

## Important Islamic-content safeguard
Do not publish sample timings or unverified Quran/Hadith text as authoritative. Have prayer calculations and religious content reviewed before release.

## Build an installable Android APK (cloud build)
This project is configured for an APK using Expo Application Services (EAS). A cloud build requires an Expo account and internet access:

```bash
npm install
npx eas-cli login
npx eas-cli build --platform android --profile preview
```

When the cloud build finishes, open the build page/link on your Android phone and download/install the APK. This repository itself is not an APK. For a Play Store release, use the `production` profile (AAB) after signing and production checks.
