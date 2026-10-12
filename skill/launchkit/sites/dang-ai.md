---
id: dang-ai
name: "Dang.ai"
url: https://dang.ai/pricing
category: AI Directory
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: optional
review_time: "up to 4 weeks (free)"
verified: true
last_checked: 2026-10-12
---

# Dang.ai

One of the larger AI directories (they claim 270K+ monthly visitors, 7,000+ tools and an 8,700-reader newsletter). `/submit` redirects to the pricing page. The free path works but is slow and needs a crawlable backlink to dang.ai.

## Before you start
- Assets: `assets.logo_square`, `assets.screenshots` (at least one), `product.description_short`, `product.description_long`. Image size limits are not shown before login.
- Login: email magic link only ("No password needed. We'll email you a secure link"). This needs inbox access (`submission.inbox_access`). If you can't read the inbox, mark `needs_human` with "click the Dang.ai sign-in email".
- Tiers: Free ($0, backlink required, 1 category, up to 4 weeks review, no Featured badge), Basic ($49, no backlink, 2 categories, ~4 days, Featured badge), Pro ($30 setup + $19/mo, 4 categories, newsletter feature, deals). At budget 0 use Free.
- Free needs a crawlable (normal `<a href>`, not nofollow-only JS) link to `https://dang.ai` on the user's site. Ask the user first.

## Field map

The listing form is behind login. Confirmed from the public pages: one category on Free, logo and images are uploaded before checkout, deals/discount codes are Pro-only. Other fields below are the usual Dang.ai listing fields and are unconfirmed.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Tool name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline / short description | short text | `product.tagline` |
| Description | long text | `product.description_long` |
| Category | 1 on Free | the most specific match to `product.categories[0]` from their list (e.g. "AI Code Writers & Generator Tools" beats "AI Productivity Tools") |
| Pricing | select | `product.pricing_model`: free -> Free, freemium -> Freemium, trial -> Free trial, paid -> Paid |
| Platforms / integrations | multi-select if shown | `product.platforms` (Chrome, Mac, API...) and integrations named in `product.key_features` |
| Logo | image | `assets.logo_square` |
| Images | images | `assets.screenshots` |
| Backlink page URL | URL | page on the user's site that links to dang.ai |

## Steps
1. Search dang.ai for `product.name`. If listed, mark `live` and stop.
2. Open https://dang.ai/pricing and click **Submit for free**. Enter `submission.email`, click **Continue with email**, open the magic link.
3. Fill the listing details and images, save them.
4. Confirm the backlink is live on the user's site (only if approved), then complete the free submission. Don't enter card details.
5. Screenshot the saved/submitted state to `.launchkit/evidence/dang-ai.png`.
6. `launchkit mark dang-ai submitted --note "free, backlink verification, up to 4 weeks"`

## Make the listing perform
- With only one category on Free, choose the narrowest one that matches how people search. Their busiest pages are image, video, productivity, marketing and writing, but a niche category with fewer tools gets you nearer the top.
- Dang.ai also has integration pages (GitHub, Slack, Gmail, Zapier, Shopify...) and platform pages (Chrome, Mac, API). Fill every integration and platform that is true; each is another page you can appear on.
- Free listings get "Baseline" ranking. Good screenshots and a clear first sentence are the only levers you have.

## Gotchas
- Keep the backlink in place. Free submissions are verified by crawling it.
- There is a separate NSFW pricing track; don't select it.

## After submitting
- Check the dashboard weekly. When published, mark `live` with the tool URL.
