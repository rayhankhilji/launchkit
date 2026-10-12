---
id: product-hunt-deals
name: "Product Hunt Deals"
url: https://www.producthunt.com/launch
category: Deals / LTD
mode: form
pricing: Free
login: Product Hunt account
captcha: "Cloudflare Turnstile"
backlink_required: no
review_time: "none for drafts; you schedule the launch yourself"
verified: true
last_checked: 2026-10-12
---

# Product Hunt Deals

There is no separate deals submission. A Product Hunt exclusive deal is the **Promo code** field on the launch form, shown to visitors on launch day. The launch page sits behind a Cloudflare check, so the agent prepares a draft and the user schedules it.

## Before you start
- The user must have a Product Hunt account with `founder.name` as maker. Do not create it.
- Decide the offer with the user (for example "3 months free for PH users"). Without `product.deal_or_promo_code`, mark `needs_human` ("requires deal terms decision").
- Launch date and the Schedule click belong to the user. Never schedule or publish.
- Prepare: square thumbnail (240x240, GIFs under 3MB), at least 2 gallery images at 1270x760, optional YouTube URL.

## Field map
From Product Hunt's "How to post a product" help article, in form order:

| Field | Limit / format | Fill with |
|---|---|---|
| Product URL | direct link, no tracking | `product.url` |
| Name | product name only, no emoji or description | `product.name` |
| Tagline | short | `product.tagline_short` |
| Topics | a few relevant ones | from `product.categories` / `product.tags` |
| Links (download, App Store) | if applicable | only if the user gives one |
| Thumbnail | square, 240x240 | `assets.logo_square` |
| Pricing | Free / Paid / Paid with free trial or plan | from `product.pricing_model` and `product.free_trial` |
| Status | mark beta if not fully released | from `product.status` |
| Gallery | 1270x760, 2+ images | `assets.screenshots` |
| Video | full YouTube URL | `links.demo_video` if it is a YouTube URL |
| Interactive demo | link | skip unless in profile |
| Description | max 260 chars | `product.description_short` |
| Promo code | code + offer text | `product.deal_or_promo_code` |
| Makers | PH usernames | `founder.name` (user adds) |
| Twitter / X | handle | `links.twitter` |
| First comment | long text | `copy.maker_comment` |

## Steps
1. Open https://www.producthunt.com/launch. If the Cloudflare check appears, stop and ask the user to pass it and log in.
2. Paste `product.url`, then fill each tab from the map.
3. Put the deal in **Promo code**: code plus one plain line on what it gives and when it expires.
4. Click **Save draft**. Do not click Schedule.
5. Screenshot to `.launchkit/evidence/product-hunt-deals.png`; `launchkit mark product-hunt-deals needs_human --note "Draft saved with promo code; user picks date and schedules"`.

## Make the listing perform
- Days reset at 12:01 AM Pacific. Tuesday to Thursday has the most traffic and competition; weekends are easier to rank.
- Make the deal time-boxed and PH-only ("50% off year one, launch week only"). Mention it in the first comment, not in the tagline.
- First comment: who you are, why you built it, what is new, the PH offer, and one direct question to invite replies.
- Reply to every comment during the day. Do not ask people to upvote; Product Hunt penalizes vote solicitation.

## Gotchas
- Name field rejects taglines or emoji added to the name.
- Promo codes must work on launch day. Test the code before saving.

## After submitting
- After the user launches, update `launchkit` with the post URL and keep the code active for at least the launch week.
