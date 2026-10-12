---
id: zoom-app-marketplace
name: "Zoom App Marketplace"
url: https://marketplace.zoom.us/
category: App Store / Marketplace
mode: manual
pricing: Free
login: email           # Zoom account; build apps at marketplace.zoom.us/develop
captcha: unknown
backlink_required: no
review_time: "varies; weeks for functional + security review"
verified: true
last_checked: 2026-10-12
---

# Zoom App Marketplace

Zoom's directory of integrations and in-meeting apps. Relevant for tools that connect to Zoom (meeting notes, scheduling, CRM sync, recording). Listing is free, but public apps pass a functional review and a security review.

## Before you start
- Artifact: a Zoom app built in the build flow (General app with OAuth) using only the scopes it needs, with production credentials.
- Required: Technical Design Document in the build flow, Terms of Use, Privacy Policy, self-serve docs and a Support URL, plus a test plan and test account.
- Assets: app icon 160x160 (light and dark versions allowed), 2-3 gallery images at 1200x780 (JPG/PNG/GIF), optional video up to 40 MB MP4, optional cover image 1824x176.

## Field map (Production > App Listing)

| Field | Limit / format | Fill with |
|---|---|---|
| App icon | 160x160 | `assets.logo_square` |
| App name | 50 chars, distinct, no Zoom trademarks misuse | `product.name` |
| Short description | 150 chars, 1-2 sentences | `product.description_short` |
| Long description | no limit | `product.description_medium` then a short feature list from `product.key_features`; language or region notes in bold at the top |
| App gallery | 1200x780 images, 1 video | `assets.screenshots`, `links.demo_video` |
| Cover image | 1824x176, optional | built from `assets.logo_wide` |
| Company name | text | `company.legal_name` |
| Developer contact | monitored email | `founder.email` |
| Categories / segment | dropdowns | closest to `product.categories`, segment from `product.target_audience` |
| Privacy, terms, support, docs URLs | URL | from the product site and `links.docs` |

## Steps
1. Manual mode. Don't create the app or submit. Suggest only if the product integrates with Zoom.
2. If the user wants help: in marketplace.zoom.us **Develop > Build App**, they switch to **Production**, fill App Listing and Technical Design, and beta test with an authorization URL.
3. Draft the short and long description and the test plan for them. They click **Preview Your App Listing Page** to check it.
4. They submit. Marketplace Operations reviews metadata and usability, then the Security team audits scopes and runs OWASP-style tests.
5. `launchkit mark zoom-app-marketplace needs_human --note "Zoom app submitted for review"`

## Make the listing perform
- The short description shows in search results; name the meeting task ("Sends Zoom meeting notes to Notion").
- Apps get rejected when the long description lacks feature detail. Be specific about what happens in the meeting.
- A clear test plan and tight scopes are what shorten review, per Zoom.
- No ads or marketing data collection inside the app; it fails usability review.

## Gotchas
- Unused scopes will be flagged; remove them before submitting.
- Changing descriptive fields on a published app may need a new submission.

## After submitting
- Zoom sends a remediation report if it fails; fix every item and resubmit.
