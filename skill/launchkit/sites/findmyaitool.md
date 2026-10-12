---
id: findmyaitool
name: "FindMyAITool"
url: https://findmyaitool.com/pricing
category: AI Directory
mode: form
pricing: Paid
login: unknown
captcha: unknown
backlink_required: no
review_time: "manual review, no stated ETA"
verified: true
last_checked: 2026-10-12
---

# FindMyAITool

An AI tools directory with category, industry, "AI Agents" and "GPT Store" sections. There is no free listing: you pay first, then get an emailed link to submit details. Plans are one-time: Basic $79.99, Featured $99.99, Standard $149.99, Premium $499.99 (plus a $9.99 "Verification Badge" add-on). All include a permanent dofollow link.

## Before you start
- At budget 0: skip. `launchkit mark findmyaitool skipped --note "paid only, from \$79.99"`.
- If the user approves a plan: payment happens first, then the details form arrives by email, so you need inbox access or the user forwards the link.
- Separate flow for agents at https://findmyaitool.com/submit-agent (same paid model).

## Field map

The details form is only sent after payment and was not seen. Typical fields, unconfirmed:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Tool name | text | `product.name` |
| Website | URL | `product.url` |
| Short description | text | `product.description_short` |
| Long description | text | `product.description_long` |
| Category | select | closest to `product.categories[0]` |
| Industry | select | from `product.target_audience` |
| Pricing | select | `product.pricing_model` |
| Logo / screenshots | images | `assets.logo_square`, `assets.screenshots` |
| Contact email | email | `founder.email` |

## Steps
1. Search the site for `product.name`. If listed, mark `live` and stop.
2. At budget 0, mark `skipped` as above.
3. With an approved budget: open https://findmyaitool.com/pricing, sign in with "Continue with Login", pick the approved plan, and mark `needs_human` at checkout so the user pays.
4. When the emailed submission link arrives, fill the fields, screenshot to `.launchkit/evidence/findmyaitool.png`, then `launchkit mark findmyaitool submitted`.

## Make the listing perform
- Basic gets a permanent listing and appears on relevant "alternatives" pages, so list real competitors from `product.competitors_alternatives` if the form asks.
- Top-of-category (7 days) only comes with Standard or higher; Basic listings sit in normal order.
- If the product is an agent, the agent section is smaller and less crowded than the tools section.

## Gotchas
- They refund in full if the tool fails their criteria.
- Changes go to info@findmyaitool.com with subject "Update listing - <Tool Name>".

## After submitting
- They email when the listing is live. Mark `live` with the URL.
