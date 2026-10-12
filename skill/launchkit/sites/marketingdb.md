---
id: marketingdb
name: "MarketingDB"
url: https://marketingdb.live/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: yes
review_time: "free: queue of 7 a day, exact date shown after submit; editor decides most within 24h"
verified: true
last_checked: 2026-10-12
---

# MarketingDB

"See what people just shipped": a weekly launch board plus a permanent directory (756 products, 2,000+ founders on the
newsletter). Every listing gets a structured-data page and an AI-readable `.md` twin. Run by one founder who reviews by hand.

## Before you start
- Free plan needs the **MarketingDB badge on the user's site**. The link is dofollow only while the badge stays; they
  re-check every two weeks and switch it to nofollow if it's removed. Ask the user (per `add_badge_to_site`).
- Paid: Premium $19 (live today, no badge, newsletter + X post), Premium+ $39 (3 dofollow links plus a review article).
  Only with user approval.
- Sign in from the header ("Sign in"); the method isn't visible without opening the dialog.
- Assets: real screenshots are required (placeholder art is rejected). `assets.logo_square`, `assets.screenshots`.

## Field map (from their "about 3 minutes" submit description)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name | text | `product.name` |
| Link | URL | `product.url` (they pull logo and screenshots from it; replace with ours if they look wrong) |
| Tagline | one line | `product.tagline` |
| Category | select | SaaS, AI & ML, Analytics, API & Backend, Chrome Extension, Design, Development, E-commerce, Entertainment, Finance, Marketing, Mobile App, Productivity, Tool/Utility, Other. Map from `product.categories[0]` |
| Tags | chips | 2-3 from `product.tags` (lowercase, as on existing listings) |
| Pricing label | select | `product.pricing_model`: free -> Free, freemium -> Freemium, trial -> Free trial, paid -> Paid |
| Screenshots | images | `assets.screenshots` (best first) |
| Launch plan | Free / Premium / Premium+ | Free unless approved |

## Steps
1. Search with the header search (cmd+K) for `product.name`. If found, mark `live`.
2. If the user approved the badge, add it from https://marketingdb.live/badges to the product's site footer first.
3. Open https://marketingdb.live/submit, sign in, fill the fields. The draft autosaves as you type.
4. Choose **Free**. The workspace then shows the queue position and exact go-live date. Record it.
5. Screenshot to `.launchkit/evidence/marketingdb.png`, then
   `launchkit mark marketingdb submitted --note "free queue, live on <date>, badge on site"`.

## Make the listing perform
- The weekly board ranks by votes, and votes from founders with long daily streaks count up to 6x. Tell the user that
  regular MarketingDB users carry the board, so a few real visits on launch day matter more than outside traffic.
- Editors may ask for a clearer screenshot or better category before approval. A sharp first screenshot avoids the delay.
- Category pages, "alternatives" and "compare" pages pull from your category and tags, so pick them for how buyers search.

## Gotchas
- They reject link farms, affiliate redirect sites, duplicates and undisclosed AI-generated claims.
- "Done for you" and "SEO review" ($99) are upsells. Skip.

## After submitting
- Listing URL: `https://marketingdb.live/project/<slug>`. Check the approval email, then mark `live`.
- Keep the badge on the site or the link turns nofollow at the next check.
