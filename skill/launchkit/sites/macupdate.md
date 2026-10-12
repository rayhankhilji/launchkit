---
id: macupdate
name: "MacUpdate"
url: https://www.macupdate.com/content/submit
category: Software Review Site
mode: form
pricing: Free
login: google           # "Continue with Google", email magic link, or password
captcha: unknown
backlink_required: no
review_time: "unknown (editorial approval)"
verified: true
last_checked: 2026-10-12
---

# MacUpdate

Mac software catalog running since 1997 (30,000+ apps). Developers add apps through **Add App** in the header. Only relevant if the product ships a downloadable macOS app.

## Before you start
- Fit check: `product.platforms` must include mac (a native or Electron app with a download link). Web-only SaaS: mark `skipped` with "MacUpdate lists downloadable Mac apps only".
- Needed: direct download or Mac App Store URL, current version number, minimum macOS version, file size. Ask the user for whatever the profile doesn't have.
- Account: sign in with Google, an email "Quick Sign In Link", or email + password.

## Field map (behind login, unconfirmed)

| Field | Limit / format | Fill with |
|---|---|---|
| App name | text | `product.name` |
| Developer | text | `company.legal_name` |
| Version | text | from the user / changelog (`links.changelog`) |
| Short description | 1 line | `product.tagline` |
| Description | text | `product.description_long` |
| What's new | text | latest release notes from `links.changelog` |
| Category | select | AI, Business, Developer Tools, Productivity, System Utilities, etc. closest to `product.categories[0]` |
| Price / license | select | `product.pricing_model`: free -> Free, freemium -> Free (with in-app purchases), paid -> price from `product.pricing_details` |
| Download URL | URL | the user's direct download link |
| Requirements | text | minimum macOS, Apple Silicon/Intel |
| Icon / screenshots | images | `assets.logo_square`, `assets.screenshots` (Mac screenshots only) |

## Steps
1. Search macupdate.com for `product.name`. If listed, the developer can claim/update it instead.
2. Open https://www.macupdate.com/content/submit (it redirects to sign-in). Sign in with `submission.preferred_login`.
3. Fill the app form from the map and submit.
4. Screenshot to `.launchkit/evidence/macupdate.png`. `launchkit mark macupdate submitted --note "app submitted for approval"`

## Make the listing perform
- MacUpdate's home page and "updated" lists are driven by new versions. Submit an update each time the app ships a release.
- Use real Mac screenshots at full resolution; iOS or web screenshots look off here.
- Choose the narrow subcategory (e.g. Developer Tools -> IDE Software) for better placement in its list.

## Gotchas
- Requires a working public download. Waitlists and TestFlight links get rejected.

## After submitting
- App URL pattern: `https://www.macupdate.com/app/mac/<id>/<slug>`. Reply to user reviews on the app page.
