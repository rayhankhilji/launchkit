---
id: google-workspace-marketplace
name: "Google Workspace Marketplace"
url: https://developers.google.com/workspace/marketplace/how-to-publish
category: App Store / Marketplace
mode: manual
pricing: Free
login: google
captcha: none
backlink_required: no
review_time: "several days, plus OAuth verification (can take weeks)"
verified: true
last_checked: 2026-10-12
---

# Google Workspace Marketplace

Google's store for add-ons and apps that extend Gmail, Calendar, Drive, Docs, Sheets, Slides, Chat, Meet and Classroom. Free to list. Only relevant if the product integrates with Google Workspace; admins install apps for whole domains here.

## Before you start
- The app must extend at least one Workspace application (add-on, Chat app, Drive app, or web app with Google sign-in).
- A Google Cloud project with the OAuth consent screen configured. Public apps using sensitive or restricted scopes need OAuth verification, and restricted scopes need a paid CASA security assessment.
- Enable the Google Workspace Marketplace SDK in that project; configure visibility (public vs private is permanent), install settings and integrations.
- Assets: icons 32x32 and 128x128 (web apps also 96x96 and 48x48), a 220x140 card banner, 1-10 screenshots at 1280x800 showing the Google integration, optional YouTube video.
- Terms of service, privacy policy and support URLs.

## Field map (Store Listing page)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Language | dropdown | primary language |
| Application name | 50 chars, must match OAuth consent screen | `product.name` (no "Google") |
| Short description | 200 chars | `product.description_short` about the Workspace use |
| Detailed description | under 16,000 chars | `product.description_long` |
| Category | dropdown | closest to `product.categories[0]` |
| Pricing | Free / Free trial / Free with paid features / Paid | free -> Free of charge; freemium -> Free with paid features; paid + `product.free_trial` -> Free trial; else Paid |
| Application icons | 32x32, 128x128 | `assets.logo_square` |
| Card banner | 220x140 | from `assets.logo_wide` |
| Screenshots | 1-10, 1280x800 | `assets.screenshots` showing the app inside Gmail/Docs/etc |
| YouTube promo videos | URLs | `links.demo_video` |
| Terms / Privacy / Support / Setup / Admin config | URLs | legal pages, `links.docs` |
| Distribution | regions | All regions unless told otherwise |

## Steps
1. Manual. Don't create Cloud projects or submit.
2. Suggest it if the product touches Gmail, Docs, Sheets, Drive or Chat. Warn about OAuth verification timelines.
3. User flow: Cloud console > Marketplace SDK > App configuration, then Store Listing > **Publish**. Status moves Unpublished -> Under review -> Approved.
4. `launchkit mark google-workspace-marketplace needs_human --note "needs Workspace add-on + OAuth verification"`

## Make the listing perform
- Screenshots must show the integration with Google services; generic product shots get flagged.
- Request the narrowest scopes. Admins look at the permission list before installing domain-wide.
- Google features apps in "Editor's choice" and "Recommended for Google Workspace" (an application programme). The CASA independent security badge appears on the listing and in the Admin console and helps with IT buyers.
- "Works with" categories are assigned from the manifest, so declare every Workspace app you truly support.

## Gotchas
- App name must match the OAuth consent screen exactly or review fails.
- Public/private can't be changed after the first save.

## After submitting
- Review results arrive by email with a review document if work is needed. Add the listing link and an "Install from Google Workspace Marketplace" button on `product.url`.
