---
id: canva-apps
name: "Canva Apps"
url: https://www.canva.dev/docs/apps/submitting-apps/
category: App Store / Marketplace
mode: manual
pricing: Free
login: google
captcha: unknown
backlink_required: no
review_time: "varies; tracked in a Jira Service Desk ticket"
verified: true
last_checked: 2026-10-12
---

# Canva Apps

The Canva Apps Marketplace, built with the Canva Developers SDK (apps run inside the Canva editor). Free to publish. Good fit for products that generate or import images, video, text or data into designs; Canva says apps reach 135M+ users.

## Before you start
- A built app: a JavaScript bundle uploaded in the Developer Portal ("Your apps"). Sign in with a Canva account (Google, email and other options).
- UI strings uploaded for translation (Canva translates for free), light and dark theme tested, App UI Kit used.
- If the app uses login, reviewer test credentials and docs on how the platform works.
- Listing assets: app icon, featured image, written content, support and privacy links (sizes are given on the Developer Portal listing pages; not confirmed here).
- Paid hosting for any backend; Canva rejects apps on free servers that sleep.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| App name | text, public | `product.name` (no copycat names) |
| Short / long description (Release > App listing details > Text) | text, no external links | `product.tagline`, then `product.description_medium` written for Canva users |
| Tags / category | selection | closest to `product.categories` |
| App icon (Media) | image | `assets.logo_square` |
| Featured image (Media) | image | product shown inside a Canva design |
| Support, privacy, terms (Links) | URLs | `links.docs`, privacy page, terms page |
| Testing instructions | text + login details | demo account and steps |

## Steps
1. Manual. Don't create apps or submit.
2. Suggest it if the product makes visual or written content. Explain that the user builds a Canva app with the SDK first.
3. When ready, the user uploads the bundle, fills Release > App listing details, adds testing instructions, then Release > App status > **Submit for review**.
4. `launchkit mark canva-apps needs_human --note "needs Canva SDK app"`

## Make the listing perform
- Canva recommends making the app free to use; low-friction apps (no paywall, no login wall) get tried more and spread inside teams.
- Copy should be plain, typo-free and about what the user can make in Canva. No external links in the text.
- Unique apps get approved and surfaced; clones of existing apps or native Canva features are rejected.
- Monetise later through the Premium Apps Program or external payment links rather than gating the first experience.

## Gotchas
- A submitted app is locked; cancel the submission to edit. Max 5 submissions per day.
- High API error rates can get a live app disabled.

## After submitting
- All communication happens on the JSD ticket. After approval the owner releases it on demand from App status.
