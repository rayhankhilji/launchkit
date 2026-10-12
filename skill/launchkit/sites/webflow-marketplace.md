---
id: webflow-marketplace
name: "Webflow Marketplace"
url: https://webflow.com/marketplace
category: No-Code
mode: manual
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: "apps 10-15 business days; templates 3-5 days"
verified: true
last_checked: 2026-10-12
---

# Webflow Marketplace

Webflow's marketplace of Apps, Libraries, Templates, Certified Partners and Made in Webflow projects. For a SaaS product the useful paths are a **Webflow App** (integration installed into Webflow sites) or, for a design-led team, a **template**. Listing costs nothing, but both need real build work and a strict review.

## Before you start
- **App path:** register an app in a Webflow Workspace (Data Client, Designer Extension or hybrid), OAuth 2.0 only, HTTPS everywhere, production redirect URI. 2FA must be on to publish extension versions. Bundle max 5MB, no source maps inside it.
- **Template path:** a paid Workspace plan, the Webflow Way Validator snippet at a 100% pass on all pages, required Style Guide, Licenses (/licenses) and Changelog pages, images under 150KB, no brand logos or premium stock.
- Ask the user which path, if either, fits. Most SaaS products should build an app only if their users run Webflow sites.

## Field map

App submission form (Marketplace Submission Guide):

| Field on the site | Limit / format | Fill with |
|---|---|---|
| App name | text, English | `product.name` |
| App logo | logomark, 900x900 px, 1:1 | square mark from `assets.logo_square` (not a text logotype) |
| Short description | English | `product.tagline` |
| Detailed description | English, specific | `product.description_long`, stating any non-English UI language |
| Feature list | bullets | `product.key_features` |
| Screenshots | images | `assets.screenshots` showing the app inside the Designer |
| Demo video (private) | 2-5 min, Loom/YouTube/Drive | install, setup, core use, plus OAuth approve and deny for Data Clients |
| Support and privacy links | URLs | `links.docs`, privacy page |
| Demo account / review notes | text | test credentials for reviewers |
| Source map artifact | ZIP | for Designer Extensions only |

Template submission: name (1-2 words, no keywords or brand), up to 2 categories, page count type, main and hover thumbnails with no badges, logos or sales text.

## Steps
1. This is `manual`. Explain the two paths and the review time.
2. Apps: build, upload the bundle (Workspace settings > Apps & Integrations > Develop > **Publish extension version**), test with **Launch App**, then submit the Marketplace form. Webflow emails a decision, aiming for 10-15 business days.
3. Templates: submit from the .webflow.io staging URL once the validator passes. Review takes 3-5 days; templates with requirement issues get one chance to fix.
4. `launchkit mark webflow-marketplace submitted --note "<app|template> review"`

## Make the listing perform
- OAuth scopes must match the listed features; extra scopes cause rejection.
- Host support docs on a Webflow site (Webflow recommends this).
- Use the "Marketing your App" guide after approval, and add Made in Webflow if the product's own site is built in Webflow.

## Gotchas
- Templates sold elsewhere use fulfillment links; the Marketplace listing still needs approval first.
- help.webflow.com blocks plain HTTP clients (403). Use the browser.

## After submitting
- Watch App Metrics in the dashboard after approval and answer support emails.
