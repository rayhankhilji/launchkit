---
id: launchvoid
name: "LaunchVoid"
url: https://www.launchvoid.com/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: unknown
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# LaunchVoid

A small startup launch directory ("The void where great startups launch") with a "Launched Today" feed, a badge
generator and a built-in AI page generator called LaunchForge. The site is a single-page app with little visible
traffic or listings. Low priority: submit only if it takes a few minutes.

## Before you start
- The submit page and pricing page are client-rendered; plan names, prices and exact fields could not be read without
  running the app. Expect a simple form plus an optional paid tier, and confirm on the page.
- They offer a "Listed on LaunchVoid" badge. Don't add it unless the free plan requires it and the user agreed.
- Assets: `assets.logo_square`.

## Field map (unconfirmed; check the live form)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Startup name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline | one line | `product.tagline` |
| Description | text | `product.description_medium` |
| Category | select | closest match to `product.categories[0]` |
| Logo | image | `assets.logo_square` |
| Email | email | `submission.email` |

## Steps
1. Open https://www.launchvoid.com/ and search for `product.name`. If listed, mark `live`.
2. Click **Submit Startup** (header). Sign in if it asks.
3. Fill the form from the map. Choose any free option; skip paid tiers with budget 0.
4. Ignore the LaunchForge AI prompts; they are a separate tool.
5. Submit, screenshot to `.launchkit/evidence/launchvoid.png`, mark `submitted` with the confirmation text.
6. If the form demands payment with no free path, mark `skipped` with "paid only".

## Make the listing perform
- The homepage shows a "Launched Today" row. Submit close to the user's launch date so the product appears there while
  they're promoting elsewhere.
- Keep the tagline short and literal; the feed is a plain list.

## Gotchas
- The marketing copy claims "thousands" of visitors; treat it as a small site and don't spend money here.

## After submitting
- Check the homepage feed a day later and record the listing URL with `launchkit mark launchvoid live --listing-url <url>`.
