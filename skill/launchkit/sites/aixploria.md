---
id: aixploria
name: "AIxploria"
url: https://www.aixploria.com/en/featured-on-aixploria/
category: AI Directory
mode: form
pricing: Paid
login: unknown
captcha: unknown
backlink_required: no
review_time: "5 business days ($99), 2 business days ($299)"
verified: true
last_checked: 2026-10-12
---

# AIxploria

Multilingual AI directory claiming 500K monthly visitors. Free listings were discontinued; the cheapest option is $99, and all outbound links are nofollow. Skip at budget 0.

## Before you start
- Their FAQ: "We no longer offer free listings." Minimum is Fast Listing $99 one-time.
- Links are nofollow, so there's no SEO backlink value. Value is referral traffic only.
- Not accepted: affiliate or shortened URLs, non-AI sites, NSFW, duplicates, poorly designed sites. Full refund if rejected.

## Field map

The "Submit your website" buttons open a paid checkout flow (Stripe). The submission form itself wasn't opened (it starts the paid flow). From the plan descriptions:

| Field | Limit | Fill with |
|---|---|---|
| Tool name and URL | text, URL | `product.name`, `product.url` (no ref or affiliate params) |
| Description | 165 chars (Fast Listing) | `product.description_short` |
| Extra link | 1 URL (Fast), 3 URLs (Verified) | `links.pricing_page`, `links.docs`, `links.demo_video` |
| Long text | up to 1000 words (Verified only) | `product.description_long` |
| Media | video, audio, images (Verified only) | `links.demo_video`, `assets.screenshots` |

## Steps
1. Search AIxploria for `product.name`. If listed, mark `live` and stop. Use "Update AI" on the page to fix an existing listing.
2. At budget 0: `launchkit mark aixploria skipped --note "paid only, from $99, nofollow"`.
3. If the user approved the spend, open the page, click **Submit your website** under the chosen plan, fill the form, then mark `needs_human` for payment.

## Make the listing perform
- Plans (Oct 2026): Fast Listing $99 (published within 5 business days, "Latest AI" on home and Full AI List, 165-char description, 1 extra link), Verified Listing $299 (2 business days, blue check, 1000-word text, media, 60 days in "AIxploria Selection" on the homepage), Featured Ads $499 (3 days featured sitewide plus 7 days among the 8 homepage features).
- The 165-char description is the whole card. Lead with the task and the user ("Writes SQL from plain English for analysts") rather than the brand.
- A separate "Submit GPT" option exists for custom GPTs.

## Gotchas
- Featured slots sell out in advance. Book early if the user wants launch-week placement.
- Tools that later stop working get moved to a "RIP" category rather than removed.

## After submitting
- Check "Latest AI" on the homepage after the stated business days. Mark `live` with the tool URL.
