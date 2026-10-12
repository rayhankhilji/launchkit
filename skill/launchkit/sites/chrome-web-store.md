---
id: chrome-web-store
name: "Chrome Web Store"
url: https://chrome.google.com/webstore/devconsole
category: App Store / Marketplace
mode: manual
pricing: Paid
login: google
captcha: none
backlink_required: no
review_time: "a few days (longer for broad permissions)"
verified: true
last_checked: 2026-10-12
---

# Chrome Web Store

Google's store for Chrome extensions and themes. Only relevant if the user ships a browser extension. Search inside the store sends steady organic installs, so a small utility extension can be a real acquisition channel.

## Before you start
- A packaged extension ZIP (Manifest V3) with a 128x128 icon inside it. Without a built extension there is nothing to submit; suggest it and stop.
- Developer account: sign in with a Google account at the dev console, accept the developer agreement and pay a one-time $5 registration fee. Needs `launch_settings.budget_usd` >= 5 or explicit user approval. Google may ask for a developer email and 2-step verification.
- Assets: at least one 1280x800 (or 640x400) screenshot, up to 5; a 440x280 small promo tile (required); optional 1400x560 marquee tile; optional YouTube video (`links.demo_video`).
- A privacy policy URL if the extension handles any user data.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Package | ZIP upload | built extension from the user |
| Title | from manifest `name` | `product.name` (short, no keyword stuffing) |
| Summary | from manifest `description`, 132 chars | `product.tagline` or trimmed `product.description_short` |
| Description | long text | `product.description_long`, then `product.key_features` as plain lines |
| Category | dropdown | closest match to `product.categories[0]`; most SaaS tools fit "Productivity" or "Developer Tools" |
| Language | dropdown | primary language of the extension |
| Store icon | 128x128 PNG | `assets.logo_square` resized, transparent padding, no border |
| Screenshots | 1280x800 or 640x400, 1-5 | `assets.screenshots` cropped to 16:10 |
| Small promo tile | 440x280 PNG/JPEG | make from `assets.logo_wide` on a solid brand colour, little text |
| Marquee promo tile | 1400x560, optional | same style; needed to be eligible for the homepage marquee |
| Promo video | YouTube URL, optional | `links.demo_video` if it is on YouTube |
| Official URL | verified site dropdown | `product.url` (requires Search Console verification) |
| Homepage / Support URL | URL | `product.url`, `links.docs` |
| Privacy tab | single purpose, permission justifications, data use | written from what the extension really does; ask the user |
| Distribution | public / unlisted / private, regions | public, all regions unless the user says otherwise |

## Steps
1. Manual. Don't create the account or pay. In the wrap-up, suggest it only if `product.platforms` includes a browser extension.
2. If the user wants to proceed, they open the dev console, pay the $5 fee and click **New item** to upload the ZIP.
3. Prepare the listing text, tiles and privacy answers for them using the field map, then let them click **Submit for review**.
4. They can choose deferred publishing and publish within 30 days of approval.
5. `launchkit mark chrome-web-store needs_human --note "needs built extension + $5 fee"`

## Make the listing perform
- Listings without a small promo tile are ranked after those that have one, so always supply it.
- Ranking uses ratings and usage. Ask early users for reviews (inside the extension, after real use, never gated).
- Put the main search keyword naturally in the title and first sentence of the description. Repeating a keyword more than 5 times or listing keywords is a policy violation.
- Verify the official URL to show the domain under the title. The Established Publisher badge comes automatically with identity verification and a clean record; the Featured badge can be nominated through the One Stop Support form once the listing follows the best-practice guide.
- A clean, text-light marquee tile is a prerequisite for the rotating homepage marquee.

## Gotchas
- Broad host permissions (`<all_urls>`) and remote code slow review or cause rejection.
- Blank description, missing icon or screenshots, unattributed testimonials and superlatives like "best" are rejection reasons.
- Promo images are reviewed separately and can sit in "Pending review" for up to a week.

## After submitting
- Status shows in the dev console item list. Once published, the listing lives at `chromewebstore.google.com/detail/<id>`; add it to `links` and reply to reviews from the Support hub.
