---
id: shopify-app-store
name: "Shopify App Store"
url: https://shopify.dev/docs/apps/launch/app-store-review/submit-app-for-review
category: App Store / Marketplace
mode: manual
pricing: Free
login: email           # Shopify Partner / Dev Dashboard account
captcha: unknown
backlink_required: no
review_time: "several days to a few weeks (Draft, Submitted, Reviewed, Published)"
verified: true
last_checked: 2026-10-12
---

# Shopify App Store

Where Shopify merchants find apps. Only relevant if the product is an embedded Shopify app or a service merchants connect to their store. Developers keep 100% of the first $1M in lifetime app revenue (from 1 Jan 2025) and 85% above that, with a 2.9% processing fee.

## Before you start
- Artifact: a public Shopify app with OAuth install, compliance webhooks, Shopify Billing API for charges, and tested on a development store. Beta apps get rejected.
- Account: free Shopify Partner account. Registering for the revenue share plan may involve a one-time fee; confirm in the Partner Dashboard.
- Assets: app icon 1200x1200 JPG/PNG, feature image or video 1600x900, 3 to 6 desktop screenshots at 1600x900 with alt text, a demo screencast for reviewers, and test credentials.
- URLs and emails must not contain "Shopify" or "Example".

## Field map (App Store listing form)

| Field | Limit / format | Fill with |
|---|---|---|
| App name | 30 chars, same as TOML config | `product.name` plus a distinct term if generic |
| App icon | 1200x1200 | `assets.logo_square` |
| App card subtitle | short, benefit-led | `product.tagline` |
| Feature media | 1600x900 image or video | `assets.og_image` or `links.demo_video` |
| Demo store URL | URL | a dev store showing the app |
| Screenshots | 1600x900, 3-6 | `assets.screenshots` |
| App introduction | 100 chars | merchant benefit from `product.description_short` |
| App details | 500 chars | `product.description_medium` trimmed |
| Feature list | short items | `product.key_features` |
| Integrations | list | tools from `product.tags` the app works with |
| Pricing plans | Free / recurring / one-time / usage | map `product.pricing_model`: freemium -> Recurring charge with one plan marked Free |
| Search terms | up to 5 | `product.tags` |
| Primary category / tags | dropdown | closest Shopify category to `product.categories[0]` |
| Contact, support, privacy | email / URL | `founder.email`, support URL, privacy URL |
| Testing instructions + screencast | text / video | steps and test login |

## Steps
1. Manual mode. Don't create accounts or submit. Suggest only if the product serves Shopify merchants.
2. If the user wants help: in the Dev Dashboard they open the **Shopify App Store review** page, fill Configuration (URLs, webhooks, icon, emergency contact), create the listing, and run the automated checks until they pass.
3. Draft every listing field for them within the limits.
4. They click **Submit your app** and watch the app submission email (allow noreply@shopify.com).
5. `launchkit mark shopify-app-store needs_human --note "Shopify app, user submits from review page"`

## Make the listing perform
- Search weight runs roughly: app name, subtitle, search terms, introduction, details. Put the merchant's search phrase ("upsell", "reviews", "pre-order") in the subtitle.
- No stats, "best", "first", or guarantees anywhere in the listing, and no pricing in images. These are explicit rejection reasons.
- Mark one plan Free if there's a free tier; listings show "Free plan available" in search.
- Early reviews matter most. Prompt merchants in-app after they get value, never with incentives.
- Aim for Built for Shopify status later; it adds a badge and ranking boost.

## Gotchas
- Two rounds of ignored reviewer feedback can get the app temporarily suspended from review.
- Protected customer data access can't be requested while the app is in review.

## After submitting
- Status moves Draft, Submitted, Reviewed (reply needed), Published. Approved listings are visible by default.
