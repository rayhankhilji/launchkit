---
id: aihuntlist
name: "AIHuntList"
url: https://aihuntlist.com/submission/new
category: AI Directory
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: yes
review_time: "about 1 week (free), 24 hours (paid)"
verified: true
last_checked: 2026-10-12
---

# AIHuntList

AI products directory run by Crownbyte Ltd, with many fine-grained categories (e.g. "AI Ad Generator", "AI API Design"). Free listings need a badge or text link back; paid tiers skip the queue.

## Before you start
- Login required: email magic link, Google or GitHub (https://aihuntlist.com/login). Magic link needs inbox access (`submission.inbox_access`); otherwise use Google/GitHub.
- Free plan requires an AIHuntList badge or text link on the user's site. Check `launch_settings.add_badge_to_site`.
- Content policy bans adult content, deepfakes, gambling and illegal material.

## Field map

The form is behind login; fields unconfirmed. Expect a standard directory form:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline / short description | short text | `product.tagline` |
| Description | long text / markdown | `product.description_long` |
| Category | select | the most specific of their "AI ... Assistant / Generator" categories matching `product.categories[0]` |
| Tags | chips | `product.tags` |
| Pricing | select | map `product.pricing_model` |
| Logo | upload | `assets.logo_square` |
| Screenshot | upload | `assets.screenshots[0]` |
| Plan | Free / Fastpass / Featured / Sponsored | Free |

## Steps
1. Search the site for `product.name`. If listed, mark `live` and stop.
2. Add the badge or text link to the user's site if approved.
3. Open https://aihuntlist.com/submission/new (redirects to login first). Sign in, fill the form, pick **Free**, submit.
4. Screenshot to `.launchkit/evidence/aihuntlist.png`. `launchkit mark aihuntlist submitted --note "free queue ~1 week"`

## Make the listing perform
- Categories are very specific (hundreds under /tool/categories). Browse them first and pick the exact one; a narrow category puts the tool near the top of a short list.
- Plans (Oct 2026): Free $0 (queue about a week), Fastpass $6.9 (24h review, no backlink), Featured $9.9 (highlighted in categories for at least a month), Sponsored $69.9 (blog coverage). If the user wants one cheap upgrade, Featured is the best value here.
- Tool pages show related tools; good tags put it on competitors' pages.

## Gotchas
- `/tool/submit` is a 404. The real path is `/submission/new` (header "Submit" button).
- Paid listings rejected under the content policy get a refund; accepted ones don't.

## After submitting
- Track status under /submission in the account. Mark `live` with the tool URL once published.
