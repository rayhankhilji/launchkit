---
id: gartner-peer-insights
name: "Gartner Peer Insights"
url: https://www.gartner.com/peer-insights/vendor-portal/overview
category: Software Review Site
mode: form
pricing: Free
login: email
captcha: hcaptcha       # hCaptcha terms are linked on the site; vendor portal is Cloudflare-protected
backlink_required: no
review_time: "team review; email replies within ~48 hours"
verified: true
last_checked: 2026-10-12
---

# Gartner Peer Insights

Gartner's enterprise review platform. Free listing via the vendor portal, but only for products sold to mid-size and large enterprises in an active Gartner market. Small-business and consumer tools are excluded by policy.

Checked 2026-10-12: the old URL `/peer-insights/vendors` is a live 404. The home page's **List Your Company** goes to the vendor portal overview (Cloudflare-gated). Requirements below are from the live Product Listing Guidelines.

## Before you start
- Fit check (from the guidelines): the product must be sold to mid to large enterprises, meet all mandatory capabilities of the market, and 50% of the other listed capabilities. If `product.target_audience` is SMB, solo or consumer, mark `skipped` with "GPI is enterprise only".
- Pick the GPI market from the market list (compare where `product.competitors_alternatives` are listed).
- Beta products must be named "Product name (beta)". Resellers can't list products they don't own.

## Field map (account + listing request; per the guidelines, form layout unconfirmed)

| Field | Limit / format | Fill with |
|---|---|---|
| Your name | text | `founder.name` |
| Job title / role | text | `founder.role` |
| Email | email | `submission.email` (company domain) |
| Company name | text | `company.legal_name` |
| Product name | text | `product.name` (add " (beta)" if `product.status` is beta) |
| Website URL describing the product | URL | `product.url` or a product page |
| GPI market | select | the matching Peer Insights market |
| How the product fits the market | text | 2-4 sentences from `product.key_features`, naming the market's capabilities |

## Steps
1. Search https://www.gartner.com/reviews/vendors for the company.
2. Open https://www.gartner.com/peer-insights/vendor-portal/overview. If Cloudflare or hCaptcha blocks you, mark `needs_human` with "GPI vendor portal check".
3. Create the vendor account, request the product listing with the fields above, submit.
4. Screenshot to `.launchkit/evidence/gartner-peer-insights.png`. `launchkit mark gartner-peer-insights submitted --note "listing request; team assesses market fit"`

## Make the listing perform
- Gartner decides the market. Make the fit text concrete and match their capability wording, or it lands in "Other".
- Voice of the Customer reports have a 3-month freeze; reviews in that window don't count for that report.
- Reviews come from verified enterprise users. Send the review link to customers at large companies only.

## Gotchas
- Listing decisions are final and at Gartner's discretion. Disputes go to peerinsights@gartner.com.

## After submitting
- Vendor portal login: https://www.gartner.com/peer-insights/vendor-portal/login. Vendor FAQ: gpivendorresources.gartner.com.
