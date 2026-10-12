---
id: ai-top-tools
name: "AI Top Tools"
url: https://aitoptools.com/claim-your-tool/
category: AI Directory
mode: form
pricing: Paid
login: email
captcha: unknown
backlink_required: no
review_time: "instant after payment; 2-5 business days for standard review"
verified: true
last_checked: 2026-10-12
---

# AI Top Tools

AITopTools, one of the older AI directories (11,000+ tools, user reviews, says 1.4M users). Submission is a two-step flow that drafts the listing from your URL with AI, shows a preview, then asks you to pick a paid package. A free path is not visible on the current site.

## Before you start
- The visible packages are paid: Instant Listing $59 one-time, or $9.99/month while subscribed. A $249 done-for-you package also exists. The help page still mentions "standard submissions reviewed within 2-5 business days", but no free button was visible (unconfirmed, because the flow only shows packages after the preview step).
- At budget 0, go as far as the preview and stop if every option is paid.
- Needs `assets.logo_square` (JPEG/PNG/WebP/GIF, max 5 MB) and three short use cases.
- If the tool was listed on the old WordPress site, use **Claim Your Listing** (https://aitoptools.com/claim-your-tool/claim/) instead; it emails a link to the original submitter address.

## Field map

Step 1: Tool URL, Your email, then **Create My Listing** (AI fills a draft). Step 2 (editable draft):

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Tool URL | URL, required | `product.url` |
| Your email | email, required | `submission.email` |
| AI Tool Name | 120 chars | `product.name` |
| Category | select, required | closest of their ~94 categories (Analytics, Assistant, Customer Service, ...) to `product.categories[0]` |
| Tool Logo / Screenshot | image, 5 MB | `assets.logo_square` |
| Short Description | 300 chars | `product.description_short` |
| Tool Description | rich text | `product.description_long` (replace the AI draft, it's generic) |
| Use Case 1-3 | 160 chars each | first three `product.use_cases`, each verb-led ("Turn blog posts into videos") |
| Price | 60 chars, e.g. "$29/Month" | starting price from `product.pricing_details` |
| Pricing Model | Freemium / Free / Paid / Free Trial / Contact for Pricing | map `product.pricing_model`; free_trial true with paid -> Free Trial |

## Steps
1. Search the header box for `product.name`. If found and unclaimed, mark `needs_human` with "claim existing listing" and stop.
2. Open https://aitoptools.com/claim-your-tool/, enter URL and email, click **Create My Listing**.
3. Overwrite every AI-drafted field with profile copy. Click **View Preview**.
4. On the package step, if there is no free option and the budget is 0: `launchkit mark ai-top-tools skipped --note "paid only: $59 one-time or $9.99/mo"`. Otherwise mark `needs_human` for the payment.

## Make the listing perform
- Rankings combine user review scores, review count and traffic. Ask the user to get two or three real customers to leave a review after it's live. Never post reviews yourself.
- New listings join the homepage "New AI Tools" feed and get an announcement on the AITopTools X account. Have the user repost it.
- The three use cases show prominently and match search intent. Write them as tasks people search for.
- The owner dashboard shows daily listing views, useful to judge whether a paid upgrade is worth it.

## Gotchas
- `/submit-tool/` is a 404 now; use `/claim-your-tool/`.
- The AI draft invents marketing copy. Replace it, or it will break the human-writing rules.
- The $9.99/month option removes the listing if the subscription stops.

## After submitting
- Paid listings go live right after Stripe confirms. Edits go through the owner dashboard and a short review.
