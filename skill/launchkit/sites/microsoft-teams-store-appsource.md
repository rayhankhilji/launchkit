---
id: microsoft-teams-store-appsource
name: "Microsoft Teams Store / AppSource"
url: https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/deploy-and-publish/appsource/publish
category: App Store / Marketplace
mode: manual
pricing: Free
login: email           # Microsoft work account linked to a Partner Center company account
captcha: none
backlink_required: no
review_time: "1-3 weeks (validation rounds), then 1 business day to go live"
verified: true
last_checked: 2026-10-12
---

# Microsoft Teams Store / AppSource

The app store inside Microsoft Teams and Microsoft 365, published through Microsoft Marketplace (AppSource). Only relevant if the product ships a Teams app (bot, tab, message extension or meeting app). Good for B2B tools that sell into companies on Microsoft 365.

## Before you start
- Artifact: a Teams app package (manifest.json plus color icon 192x192 and outline icon 32x32), validated in the Teams Developer Portal.
- Account: a Partner Center account with the Microsoft 365 and Copilot program. Free to join. Publisher verification (Microsoft Entra) must be done before submitting.
- Must have: privacy policy, terms of use, support URL, and a test account with setup instructions or a demo video for the validators.
- To charge through Microsoft, the app must link a live SaaS offer on AppSource. Otherwise list it as free or "subscription required" and bill outside.

## Field map

| Field in Partner Center | Limit / format | Fill with |
|---|---|---|
| App name | must match manifest | `product.name` |
| Short description | short, must differ from other apps | `product.tagline` |
| Long description | up to 4,000 chars (about 1,000 recommended), Markdown | `product.description_medium` plus `product.key_features` as bullets |
| Category (up to 3) | dropdown | map `product.categories` to e.g. Productivity, Project management, Developer and IT |
| Industries | optional | from `product.target_audience` if specific |
| Search keywords | optional | `product.tags` |
| Marketplace icon | must match color icon in package | `assets.logo_square` at 192x192 |
| Screenshots | 1366x768 PNG/JPEG/GIF, max 1,024 KB each | `assets.screenshots`, shown inside Teams |
| Videos | YouTube/Vimeo URL | `links.demo_video` |
| Privacy / terms / support URLs | URL | from the product site |
| Test notes | text | test accounts, setup steps, demo video link |

## Steps
1. Manual mode. Don't create accounts or upload. Suggest it only if the user has, or plans, a Teams app.
2. If the user wants help: they validate the package in Teams Developer Portal, then in Partner Center go to **Marketplace offers**, create a new **Teams app** offer, upload the package and fill the listing.
3. Prepare the descriptions, keywords and test notes as paste-ready text.
4. They click **Review and publish**. A validation report arrives by email; they fix "Must fix" items and resubmit.
5. `launchkit mark microsoft-teams-store-appsource needs_human --note "Teams app, Partner Center submission"`

## Make the listing perform
- Teams search matches app name, publisher, short and long description, keywords and category. Put the job the user wants done in the short description.
- No "best", "top", or unverified claims, no comparisons with other apps, no links to AppSource in the text. Validators reject these.
- Screenshots should show the app inside Teams with realistic data, not your web app.
- Plan the onboarding first-run message carefully; validators test it and it drives retention metrics shown in Partner Center.

## Gotchas
- From July 2026, channel-enabled apps need manifest schema 1.25 or later.
- App name in the manifest and listing must match exactly.
- Changing functionality during validation restarts testing.

## After submitting
- Usage reports appear in Partner Center about a week after launch.
