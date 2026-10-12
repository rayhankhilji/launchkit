---
id: apple-app-store
name: "Apple App Store"
url: https://appstoreconnect.apple.com/
category: App Store / Marketplace
mode: manual
pricing: Paid
login: email
captcha: none
backlink_required: no
review_time: "usually 1-2 days per build"
verified: true
last_checked: 2026-10-12
---

# Apple App Store

Apple's store for iPhone, iPad, Mac, Watch, TV and Vision Pro apps, managed in App Store Connect. Only relevant if the user has a native (or wrapped) iOS app built in Xcode.

## Before you start
- A signed build uploaded from Xcode or Transporter. No build, no listing; suggest it and stop.
- Apple Developer Program membership, $99 per year. Sign in with an Apple Account that has two-factor auth on. Organisations need a legal entity (no DBAs), a D-U-N-S number, a domain email and a live website; individuals publish under their legal name.
- Privacy policy URL, support URL, age rating answers, App Privacy "nutrition label" answers, and a demo account for reviewers if the app has login.
- Screenshots: 1-10 per device size, JPEG or PNG. iPhone 6.9" (1320x2868 or 1290x2796) and, if the app runs on iPad, 13" (2064x2752 or 2048x2732).

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name | 2-30 chars | `product.name` |
| Subtitle | 30 chars | `product.tagline_short` |
| Primary / secondary category | dropdown | closest to `product.categories`; most B2B tools fit Productivity, Business or Developer Tools |
| Promotional text | 170 chars, editable without review | current launch message or offer from `product.deal_or_promo_code` |
| Description | 4000 chars, plain text | `product.description_long` then `product.key_features` |
| Keywords | 100 bytes, comma separated | `product.tags` and `product.use_cases` terms, no spaces after commas, no brand names, don't repeat the app name |
| Support URL | URL | `links.docs` or `product.url` |
| Marketing URL | URL, optional | `product.url` |
| Privacy policy URL | URL, required | user's privacy page |
| Copyright | "2026 Company" | `company.founded_year` or current year + `company.legal_name` |
| Screenshots / app previews | see above | `assets.screenshots` re-shot at device size; preview video from `links.demo_video` |
| Price / In-app purchases | tiers | map `product.pricing_model`: free/freemium -> Free with IAP, paid -> price tier |
| App Review notes | 4000 bytes | test account + how to reach the main feature |

## Steps
1. Manual. Never enrol, pay, or upload on the user's behalf.
2. In the wrap-up, suggest it if `product.platforms` includes iOS. Offer to draft the metadata above into a file the user can paste into App Store Connect > Apps > + New App.
3. `launchkit mark apple-app-store needs_human --note "needs iOS build + $99/yr program"`

## Make the listing perform
- Search ranks heavily on name, subtitle and keywords. Use all 30 + 30 + 100 without repeating words between them.
- The first three screenshots show in search results. Lead with the core outcome and add a short caption on each.
- Use promotional text for launches; it changes instantly without a new review.
- Apple editors pick features. Submit a featuring nomination in App Store Connect a few weeks before a launch or major update; design quality, accessibility and localisation are what they say they weigh.
- Ask for ratings with `SKStoreReviewController` after a success moment, not on first launch.

## Gotchas
- Guideline 4.2 rejects thin web wrappers. Guideline 3.1.1 requires IAP for digital goods in many regions.
- Account deletion must be possible inside the app if it supports sign-up.
- The name is locked once the version is submitted; changes need a new version.

## After submitting
- Track status in App Store Connect (Waiting for Review, In Review, Ready for Distribution). Add the `apps.apple.com` link to the profile and launch pages.
