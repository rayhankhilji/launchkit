---
id: intercom-app-store
name: "Intercom App Store"
url: https://developers.intercom.com/docs/publish-to-the-app-store/listing-your-app
category: App Store / Marketplace
mode: manual
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: "up to 7 business days"
verified: true
last_checked: 2026-10-12
---

# Intercom App Store

Intercom's integration directory (`intercom.com/app-store`), used by support, sales and marketing teams on Intercom. Free to list; listed apps join the App Partner Program automatically. Only relevant if the product has an Intercom integration (OAuth app, Messenger or Inbox Canvas Kit app).

## Before you start
- A public app built in a free development workspace in the Developer Hub, with OAuth set up.
- Test credentials or setup steps for reviewers, plus a required screen recording that shows OAuth install, the full app experience and uninstall (with `client_id` and state visible in the OAuth URL).
- A start guide, help doc URL, support email, terms and privacy URLs, pricing page if paid.
- Assets: 512x512 PNG icon with no Intercom logo; listing images at least 1600x1000 (8:5) PNG under 21MB, in marketing format (cropped screenshots with captions, not raw screenshots).

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| App icon | 512x512 PNG | `assets.logo_square` |
| App name | 40 chars, unique, no "Intercom" | `product.name` |
| Short description | short, no trailing full stop | job-to-be-done line from `product.tagline` |
| Company name | text | `company.legal_name` or `product.name` |
| Terms / Privacy URL | URL | legal pages |
| Pricing model | options | map `product.pricing_model`; paid needs `links.pricing_page` |
| Help doc URL | URL | `links.docs` |
| Support email | email | `submission.email` |
| Teammate avatars workspace ID | text | user's Intercom workspace ID (optional) |
| Website | URL | `product.url` |
| Long description | 2-3 short paragraphs | benefit + use case, more use cases, one line linking to a landing page |
| Images | 1600x1000+ | marketing images from `assets.screenshots` (Intercom has a Figma template) |
| Categories | 1-2 | closest to `product.categories` |
| Installation status | from App Store / from your site | direct install URL that starts OAuth |
| App description + video (Submit for review) | text + video | how it works with Intercom, test account |

## Steps
1. Manual. Don't create workspaces or submit.
2. Suggest it if the product touches customer support, sales or onboarding and could integrate with Intercom.
3. User flow: Developer Hub > App Store listing > Start guide > App Partner Program form > Submit for a review. After approval the app is public but unlisted; tick **List in App store** to go live.
4. `launchkit mark intercom-app-store needs_human --note "needs Intercom OAuth app + review video"`

## Make the listing perform
- Write for Intercom customers (B2B and B2C support teams) and about the integration, not the general product.
- Raw full-size screenshots are the most common rejection; use annotated, cropped images.
- After approval, Intercom suggests a blog post, a targeted email to existing customers who use Intercom, and a Product Hunt launch, and wants to hear about it in the Intercom Community.

## Gotchas
- Broken install or learn-more links cause rejection.
- Requesting scopes the video doesn't justify gets sent back.

## After submitting
- Review feedback arrives in the Intercom Messenger inside the Developer Hub. Once listed, add the App Store link to `links`.
