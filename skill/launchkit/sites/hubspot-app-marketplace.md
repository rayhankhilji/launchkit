---
id: hubspot-app-marketplace
name: "HubSpot App Marketplace"
url: https://developers.hubspot.com/docs/apps/developer-platform/list-apps/listing-your-app/listing-your-app
category: App Store / Marketplace
mode: manual
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: "initial review within 10 business days; up to 60 days total"
verified: true
last_checked: 2026-10-12
---

# HubSpot App Marketplace

HubSpot's integration marketplace, browsed by HubSpot customers looking for CRM, marketing and sales add-ons. Free to list. Only relevant if the product has a HubSpot integration built on HubSpot's developer platform.

## Before you start
- A public app in a HubSpot developer account using OAuth as its only auth method, requesting only the scopes it uses.
- At least 3 active installs from unrelated HubSpot production accounts in the last 30 days. Without these the listing is rejected.
- Super Admin rights on the developer account; agree to the Technology Partner Program Agreement.
- Public setup documentation specific to the HubSpot integration, live support, terms and privacy URLs. Allowlist the "HubSpot Crawler" user agent so URL checks pass.
- 800x800 icon (no text, fills the square), up to 8 screenshots with alt text, a demo video.

## Field map (listing wizard, 7 tabs)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Public app name | text, no "HubSpot"/"Hub" in it | `product.name` |
| Company name | text | `company.legal_name` |
| Tagline | text | `product.tagline` reworded for HubSpot users |
| Install experience | Seamless / Login via partner site / No install button | Seamless if OAuth install works in-app |
| Icon | 800x800 JPG/PNG | `assets.logo_square` without wordmark |
| Categories | up to 2 | closest to `product.categories` |
| Search terms / URL path | text | `product.tags` |
| Demo video | upload | integration walkthrough from `links.demo_video` |
| Screenshots | up to 8 + alt text | screenshots of the integration in HubSpot |
| App overview | text | what the integration does and why install it |
| Shared data | object sync table | from the app's scopes; read + write = bi-directional |
| HubSpot features / other tools | up to 10 / up to 6 | from the integration |
| Pricing plans | up to 5, must match website | `product.pricing_details`, only plans that include the integration |
| Pricing page URL | 250 chars | `links.pricing_page` |
| Support email, languages, website | required | `submission.email`, `product.url` |
| Setup docs, ToS, Privacy | URLs | `links.docs` setup page, legal pages |

## Steps
1. Manual. Don't create developer accounts or submit.
2. Suggest it if the product syncs with a CRM or marketing stack. Check the 3-install rule first.
3. User flow: Development > App Listings > **Create listing**, fill the tabs, fix errors in Review info, **Submit for review**.
4. `launchkit mark hubspot-app-marketplace needs_human --note "needs HubSpot OAuth app + 3 installs"`

## Make the listing perform
- HubSpot wants listing copy specific to the integration, not the general product. Lead with the business problem it solves inside HubSpot.
- Feature discovery cards and in-app how-to guides surface the app inside customers' HubSpot portals after install.
- Translate the listing (auto-translation is available) to reach non-English portals.
- Reviews on the listing heavily influence ranking; ask happy customers after setup.

## Gotchas
- Only one app can be in review at a time; extra submissions are auto-rejected.
- Pricing that doesn't match the public pricing page, dead URLs or inaccurate shared data push the listing back to draft.

## After submitting
- HubSpot's Ecosystem Quality team replies by email. Once live, add the marketplace link to `links` and the user's integrations page.
