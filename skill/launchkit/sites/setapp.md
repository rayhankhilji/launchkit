---
id: setapp
name: "Setapp"
url: https://setapp.com/developers
category: App Store / Marketplace
mode: manual
pricing: Free
login: email           # contact form; Setapp then emails a one-time link to developer.setapp.com
captcha: unknown
backlink_required: no
review_time: "curation decision varies; technical review about 24 hours"
verified: true
last_checked: 2026-10-12
---

# Setapp

MacPaw's curated app subscription for Mac, iOS and web apps. Users pay one monthly fee for a catalog; developers earn by usage (Membership, 70% share, up to 90% with the partner program) or sell single apps (85% of subscriptions, 75% of one-time purchases). Good for polished, mature Mac apps. Not for early betas.

## Before you start
- Fit check: native macOS 13+, iOS/iPadOS 12+, or web apps. Gaming, gambling and dating are excluded. No trial or demo builds, no license keys or own update frameworks, no niche apps with low demand.
- Applying is free. Setapp limits slots and picks apps that fill catalog gaps.
- Developer must pass KYC identity checks and live in a supported payout country.
- macOS artifact (after approval): notarized `.app` in a `.zip` (max 1 GB, no `__MACOSX`), Setapp bundle ID pattern, `AppIcon.png` at 1024x1024 next to the bundle, Setapp Framework integrated.

## Field map (Get in touch form, partly unconfirmed)

| Field | Limit / format | Fill with |
|---|---|---|
| Name | text | `founder.name` |
| Email | email | `founder.email` |
| App name | text | `product.name` |
| App website / App Store link | URL | `product.url` |
| Platforms | macOS / iOS / web | from `product.platforms` |
| Short pitch | text | `product.description_short` plus why it fills a gap in Setapp's catalog |
| Model | Membership / Single-app | ask the user |

## Steps
1. Manual mode. Don't send the form for the user. Suggest it only for Mac or iOS apps with real users and good reviews.
2. If the user wants to apply: open setapp.com/developers and click **Get in touch**. Draft a short pitch (what it does, who uses it, current traction from the profile only).
3. If accepted, Setapp emails a one-time link to developer.setapp.com. The user integrates the Setapp Framework, uploads the build, and submits for technical review.
4. `launchkit mark setapp needs_human --note "applied via Get in touch, waiting on curation"`

## Make the listing perform
- Setapp says a new app gets about 30k unique impressions in its first days. Launch with the description and screenshots final, not placeholders.
- Membership pays by usage, so apps people open daily (menu bar, utilities, writing) earn most.
- Use the partner program link and "Available on Setapp" badge on the product site to earn the extra 20%.
- Answer user reviews and bug reports inside Setapp; Setapp curators watch them.

## Gotchas
- Setapp builds can't include Sparkle or other updaters.
- Archives zipped from Finder often include `__MACOSX` and get rejected; use `ditto`.

## After submitting
- Check app status and statistics in developer.setapp.com.
