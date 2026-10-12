---
id: easy-with-ai
name: "Easy With AI"
url: https://easywithai.com/submit-tool/
category: AI Directory
mode: form
pricing: Paid
login: none
captcha: unknown
backlink_required: no
review_time: "usually within 24 hours"
verified: true
last_checked: 2026-10-12
---

# Easy With AI

An older AI directory (since 2022) that says it gets 500K-1M monthly visitors and DA around 60. Listing costs **$125 one-time** for a permanent dofollow listing. The exception: free or open-source tools in education or academic research are listed at no cost (paid tools in those areas get 50% off) by emailing admin@easywithai.com.

## Before you start
- At budget 0: skip unless the product is a free/open-source education or research tool. Then use the email route below instead of the form.
- No account needed. Payment is Stripe after the form (PayPal by email).
- Text only on the form; they pick the cover image themselves (you can email a different one later).

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Tool Name * | text | `product.name` |
| Tool Category * | free text ("Marketing, Image Generator, Email, etc...") | 1-2 of their category names that match `product.categories` (e.g. "Coding Tools", "Productivity Tools", "Educational Tools") |
| Tool Description | textarea, optional ("Leave empty to auto-generate") | `product.description_medium` plus pricing and platforms. Always fill it; don't let them auto-generate |
| Website * | URL | `product.url` |
| Pricing Model | checkboxes: Paid / Free Trial / Free | free -> Free; freemium -> Free + Paid; paid with trial -> Paid + Free Trial; paid -> Paid |
| Button | "Submit Tool - $125" | leads to payment |

## Steps
1. Search the homepage real-time search for `product.name`. If listed, mark `live` and stop.
2. If the product is a free/open-source education or research tool: draft an email to admin@easywithai.com from `copy.press_pitch` style (name, URL, one paragraph, why it qualifies), save with `lk draft easy-with-ai -`, mark `drafted`. Send only with user approval.
3. Otherwise, at budget 0: `launchkit mark easy-with-ai skipped --note "paid only, \$125"`.
4. If the user approves the $125: fill the form above, click **Submit Tool - $125**, and mark `needs_human` at the Stripe step so the user pays.

## Make the listing perform
- Their homepage and category pages are randomised for every visitor, so position is luck; the description and name drive clicks. Their own tip: a unique tool name and relevant keywords improve click-through.
- Pick the primary category carefully; the paid "category feature" pins tools to the top of that category page, and the category is where most browsing happens.
- Homepage feature (7 days) and category feature are extra paid upsells. Skip at budget 0.

## Gotchas
- NSFW tools are allowed only with no explicit content or names.
- Edits go by email with subject "Update tool listing - <tool name>".

## After submitting
- Listings usually appear within 24 hours. Search the homepage the next day and mark `live`.
