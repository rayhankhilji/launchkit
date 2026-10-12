---
id: toolpilot
name: "ToolPilot"
url: https://www.toolpilot.ai/pages/submit-your-ai-tool
category: AI Directory
mode: form
pricing: Free/Paid
login: none
captcha: none
backlink_required: yes   # mandatory for the free listing
review_time: "up to 60 days (free), 7 days (paid)"
verified: true
last_checked: 2026-10-12
---

# ToolPilot

Shopify-based AI tools directory with categories, coupon codes, "Top/Free/New AI tools" lists and user reviews.
The submission form is an embedded Jotform. Free listing needs a backlink to toolpilot.ai.

## Before you start
- Tiers (radio at the end of the form): **Free With Backlink** (up to 60 days), **Priority** $99 one-time (live in
  7 days), **Premium** $199 first month then $39/month (featured in categories and homepage). Payment is via PayPal
  (billed as House Tech Ads Ltd). At budget 0 choose Free With Backlink.
- Free needs a ToolPilot badge or logo on your site first (from their "badges or logos" link on the page). Check
  `launch_settings.add_badge_to_site`; if not allowed, mark `needs_human` ("ToolPilot badge required").
- No uploads: no logo or screenshot fields.

## Field map (Jotform 231772738321053, in order)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Your Name (First, Last) | required | `founder.name` split |
| Company | required | `company.legal_name` or `product.name` |
| Email | required | `submission.email` |
| Backlink URL | URL, 200 chars, https:// | page on `product.url` that shows the badge |
| AI Tool Name | required | `product.name` |
| URL | required, https:// | `product.url` |
| Tagline | required, textarea | `product.tagline` |
| Description | required, textarea | `product.description_medium` |
| Overview ("In-Depth Overview") | required, textarea | `product.description_long` |
| Top features #1 to #5 | 300 chars each | `product.key_features[0..4]` |
| API / extra availability | Available / Not Available | answer from the profile; leave unknown ones as Not Available |
| Platforms | checkboxes: Windows, MacOS, Linux, Android, iOS, Web-Based, Cross Platforms... | map `product.platforms` (web -> Web-Based) |
| Integrations | long checkbox groups (ChatGPT, Claude, Slack, Notion, GitHub, Zapier, Stripe...) | tick only integrations stated in the profile |
| Pricing model | Free / Paid / Paid with Freemium Option / Paid with Free Trial Option | free -> Free, freemium -> Paid with Freemium Option, paid + `product.free_trial` -> Paid with Free Trial Option, else Paid |
| Billing | Monthly, Annually, Weekly, Buy Credits, Pay-Per-Use, One-Time Payment | from `product.pricing_details` |
| Subscription Packages | 1-10 | number of plans in `product.pricing_details` |
| Lowest Price Option | required, USD | cheapest paid price, or 0 |
| Twitter, Tiktok, Instagram, Facebook, Youtube, Linkedin, Pinterest, Telegram | URLs | `links.twitter`, `links.youtube`, `links.linkedin`; leave others blank |
| Promotion | text | `product.deal_or_promo_code` |
| Affiliate Program URL | URL | leave blank unless the user has one |
| Listing type | radio | Free With Backlink |
| Terms & Conditions | checkbox | tick |

## Steps
1. Search toolpilot.ai for `product.name`. If listed, mark `live` and stop.
2. Confirm the badge is live on the site.
3. Open the submit page (or the form directly at https://form.jotform.com/231772738321053), fill in order, pick
   **Free With Backlink**, tick the terms, submit.
4. Screenshot to `.launchkit/evidence/toolpilot.png`; `launchkit mark toolpilot submitted --note "free w/ backlink, up to 60 days"`.

## Make the listing perform
- Fill all five features with concrete, distinct items; they render as the feature list on the tool page.
- Filters on the site use price, platform and API fields, so wrong answers hide the tool from filtered views.
- Adding a promo code puts the tool on the Coupon Codes page, a separate traffic source.

## After submitting
- Keep the badge up. Removing it can void the free listing.
