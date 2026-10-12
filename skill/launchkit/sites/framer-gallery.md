---
id: framer-gallery
name: "Framer Gallery"
url: https://www.framer.com/community/gallery/
category: Design Gallery
mode: form
pricing: Free
login: email           # Framer account (Google or email sign-in at framer.com/r/login)
captcha: unknown
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# Framer Gallery

Framer's community gallery of sites built with Framer ("Get inspired by creative websites and submit your own"), with Trending and Recent tabs and category pages. Only relevant if the user's site is built and published on Framer.

## Before you start
- Fit check: the site must be a published Framer site. If `product.url` isn't built on Framer, mark `skipped` ("not built on Framer").
- Needs a Framer account, ideally the one that owns the site. Sign in at https://framer.com/r/login with `submission.preferred_login`.
- The submit control only appears when logged in; the fields below are from public listing pages and are unconfirmed.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Site | pick from your Framer projects or paste URL | `product.url` |
| Title | text | `product.name` |
| Category | select (e.g. Startup, SaaS, AI, Portfolio, Agency, Blog) | map `product.categories[0]` |
| Thumbnail | image (unconfirmed; may be auto-captured) | hero crop of `assets.screenshots[0]` or `assets.og_image` |
| Description | short text, if shown | `product.tagline` |

## Steps
1. Open https://www.framer.com/community/gallery/ and search for `product.name`. If listed, mark `live`.
2. Sign in to Framer. Mark `needs_human` if the user has no Framer account or sign-in needs a code.
3. Return to the gallery and look for the submit button (header or "My" area once logged in). Pick the site and fill the fields above.
4. Submit, screenshot to `.launchkit/evidence/framer-gallery.png`, `launchkit mark framer-gallery submitted`.

## Make the listing perform
- Trending is sorted by engagement, so share the gallery URL once it's live.
- Use a clean, readable title (the product name), not the domain. Many listings show raw domains and look weaker.
- Pick the narrowest true category; broad ones like Portfolio are crowded.

## Gotchas
- The old /gallery/ URL redirects to /community/gallery/.
- Guessing paths like /community/gallery/submit returns "Site unavailable". Use the in-page button.

## After submitting
- Listings get their own page at framer.com/community/gallery/<slug>/. Check Recent.
