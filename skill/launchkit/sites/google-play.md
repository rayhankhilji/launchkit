---
id: google-play
name: "Google Play"
url: https://play.google.com/console
category: App Store / Marketplace
mode: manual
pricing: Paid
login: google
captcha: none
backlink_required: no
review_time: "production access review ~7 days; app reviews a few days"
verified: true
last_checked: 2026-10-12
---

# Google Play

Google's Android app store, managed in Play Console. Only relevant for an Android app (native, Flutter, React Native or a TWA wrapping a solid PWA).

## Before you start
- A signed Android App Bundle (AAB). No build, no listing.
- Play Console account: $25 one-time fee, Google sign-in. Google may ask for a government ID and a card in the developer's legal name; organisations need a D-U-N-S number. Fee is not refunded if identity checks fail.
- New personal accounts (created after 13 Nov 2023) must run a closed test with at least 12 testers opted in for 14 days in a row, then apply for production access (review usually 7 days or less). They also verify they own an Android device via the Play Console app. Plan for about three weeks.
- Assets: 512x512 icon, 1024x500 feature graphic, at least 4 phone screenshots (min 1080px, 9:16 or 16:9), optional YouTube preview video.
- Privacy policy URL, Data safety form, content rating questionnaire, target audience.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| App name | 30 chars | `product.name` |
| Short description | 80 chars | `product.tagline` (no emoji, no "best", no ALL CAPS) |
| Full description | 4000 chars | `product.description_long` + `product.key_features` |
| App icon | 512x512 PNG | `assets.logo_square` |
| Feature graphic | 1024x500 | built from `assets.logo_wide`, no Play badges or rankings |
| Phone screenshots | 2-8, min 1080px | `assets.screenshots` re-shot on device, no device frames |
| Video | YouTube URL | `links.demo_video` (ads off, not age restricted) |
| App or game / Category | dropdown | closest to `product.categories[0]`; B2B tools usually Productivity or Business |
| Tags | up to 5 | from Play's tag list matching `product.tags` |
| Free or paid | toggle | `product.pricing_model` free/freemium -> Free (with in-app products), paid -> Paid |
| Contact email / website | email, URL | `founder.email` or `submission.email`, `product.url` |
| Privacy policy | URL | user's privacy page |

## Steps
1. Manual. Don't create the account, pay or upload.
2. In the wrap-up, suggest it if `product.platforms` includes Android, and warn about the 12 testers x 14 days rule for new personal accounts.
3. Offer to draft the store listing and a tester recruitment message (friends, Discord, `links.discord`).
4. `launchkit mark google-play needs_human --note "needs AAB + $25 + closed test"`

## Make the listing perform
- Play search weighs the title, short description and full description. Put the main keyword in the title and short description once, naturally.
- The feature graphic is used in large-format collections and ads; keep text minimal and don't repeat the icon.
- Only the first 30 seconds of the video autoplay. Show the app in the first 5.
- Keep running the closed test after launch to catch crashes; Android vitals (crash and ANR rates) affect visibility.
- Add alt text to screenshots and localise the listing for big markets.

## Gotchas
- Text or images claiming "#1", "Editor's choice", prices or discounts in graphics get the listing rejected.
- Testers who drop out and rejoin reset their 14 days.

## After submitting
- Review status and policy emails go to the account owner. Reply to reviews in Ratings and reviews; add the `play.google.com/store/apps/details?id=` link to the profile.
