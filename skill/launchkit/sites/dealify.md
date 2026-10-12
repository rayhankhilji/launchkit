---
id: dealify
name: "Dealify"
url: https://dealify.com/pages/run-a-deal
category: Deals / LTD
mode: form
pricing: Free
login: none
captcha: "hCaptcha (invisible) loaded on the page"
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# Dealify

Lifetime-deal store (Shopify) for marketers, growth hackers and founders. The **Sell on Dealify** page (/pages/run-a-deal) says they have helped 100+ companies launch, offer flexible deal types (lifetime, annual, credit-based, or free) and charge "honest and fair commissions", with no percentage published. On 2026-10-12 the "Publish Your Deal on Dealify" buttons only scrolled to an empty embedded form block at the top of the page, so no application fields were visible.

## Before you start
- Business decision: mark `needs_human` ("requires deal terms decision") unless the user opted in to an LTD.
- The application form may not render. If it does not, this site needs the user to reach Dealify through the site's Contact page.

## Field map
Unconfirmed. If the embedded form at the top of /pages/run-a-deal loads, expect a short lead form. Fill with:

| Likely field | Fill with |
|---|---|
| Name | `founder.name` |
| Email | `founder.email` |
| Company / product | `product.name` |
| Website | `product.url` |
| Message / description | `product.description_short` plus the deal type the user prefers |

Do not use the footer email box. That is the newsletter signup, not the vendor form.

## Steps
1. Open https://dealify.com/pages/run-a-deal (header link **Sell on Dealify**).
2. Click **Publish Your Deal on Dealify**. Wait 10 seconds for the form at the top to load.
3. If fields appear, fill them from the map and submit; hand off if hCaptcha shows a challenge.
4. If no fields appear, `launchkit mark dealify needs_human --note "Vendor form did not render; contact Dealify via the site Contact page"`.
5. Screenshot either result to `.launchkit/evidence/dealify.png`.

## Make the listing perform
- Their store categories: AI, Business, Cloud, Creative, Developer Tools, E-Commerce, Productivity, SEO, Sales & Marketing, Social Media, Web & Hosting. Name one in your message.
- Case studies on the page highlight repeat launches (a second campaign for Black Friday). Ask about seasonal sale slots.
- Lead with the buyer and outcome in one line; their audience is marketers and founders.

## Gotchas
- The page loads several Shopify app scripts; the form block can stay blank. Do not report a submission without a confirmation message.

## After submitting
- Watch `founder.email` for a reply from Dealify about deal terms and launch timing.
