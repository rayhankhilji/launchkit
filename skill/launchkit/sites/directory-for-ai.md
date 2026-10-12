---
id: directory-for-ai
name: "Directory for AI"
url: https://directoryforai.com/submit-tool/
category: AI Directory
mode: form
pricing: Free/Paid
login: google
captcha: unknown
backlink_required: unknown
review_time: unknown
verified: false
last_checked: 2026-10-12
---

# Directory for AI

**Parked / pivoted.** As of 2026-10-12 the homepage is "Free helpful tools for everyone" (its own file converters and viewers), not an AI tools directory. The `ai_tool` sitemap holds only about 10 third-party listings, the newest from May 2026. A `/submit-tool/` page still exists behind a Google sign-in, but there is no public listing grid, pricing page or review promise. Not worth the time.

## Before you start
- Default: skip. `launchkit mark directory-for-ai skipped --note "site pivoted to own utilities, ~10 listings"`.
- Only continue if the user explicitly wants every possible backlink. It needs a Google account (`submission.preferred_login` must be google).

## Field map

Unconfirmed: the form is behind Google sign-in and was not seen.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Tool name | text | `product.name` |
| Website | URL | `product.url` |
| Description | text | `product.description_medium` |
| Category | select | closest to `product.categories[0]` |
| Logo | image | `assets.logo_square` |

## Steps
1. Open https://directoryforai.com/ and check whether a tools directory is back (a browsable list of third-party AI tools). If not, mark `skipped` as above and stop.
2. If it is back: open https://directoryforai.com/submit-tool/, click **Continue with Google**, fill the form, take the free option, screenshot to `.launchkit/evidence/directory-for-ai.png`, then `launchkit mark directory-for-ai submitted`.

## Make the listing perform
- Nothing to optimise while the directory is dormant. Existing listings live at `/ai-tool/<slug>/` and get little internal linking.

## Gotchas
- The homepage "Featured On" strip shows launch badges from other directories; that is the site's own promotion, not a sign it accepts listings.

## After submitting
- If you did submit, re-check in a month via `https://directoryforai.com/ai_tool-sitemap.xml` for your slug.
