---
id: saas-discovery
name: "SaaS Discovery"
url: https://saasdiscovery.com/contact/
category: Software Review Site
mode: form
pricing: Free/Paid
login: none
captcha: unknown
backlink_required: no
review_time: "6-8 weeks (free)"
verified: true
last_checked: 2026-10-12
---

# SaaS Discovery

A WordPress "alternatives" site listing apps by category (Business, Communication, Education, Games...). Free submissions are accepted through the contact form but take 6-8 weeks and every outbound link is nofollow. Low value; do it only because it's quick.

## Before you start
- There is no submit form. Free listings go through the contact page. The Sponsored Listing page says submissions are always free, wait time 6-8 weeks.
- Paid options (skip with budget 0): one-time $99 "Paid Permanent Listing" (near-instant after review), or "Top Sponsored Spot" from $49/month per alternatives page.
- If the contact form shows a CAPTCHA, stop and mark `needs_human`.

## Field map (contact form)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Your Name (required) | 400 chars | `founder.name` |
| Your Email (required) | email | `submission.email` |
| Subject | 400 chars | "Free listing request: " + `product.name` |
| Your Message | 2,000 chars | see template below |

Message template (plain text, under 2,000 chars):
```
Hi, please consider adding <product.name> to SaaS Discovery.
URL: <product.url>
Category: <closest of Business / Communication / Education / Computer & Internet / Finance ...>
What it is: <product.description_short>
Alternatives to: <product.competitors_alternatives, comma separated>
Pricing: <product.pricing_model> (<product.pricing_details>)
Logo: <public URL of assets.logo_square if available>
Thanks, <founder.name>
```

## Steps
1. Search the site (top search) for `product.name`. If listed, mark `live`.
2. Open https://saasdiscovery.com/contact/ and fill the form per the map.
3. Click **Send**. Screenshot the "Thank you" notice to `.launchkit/evidence/saas-discovery.png`.
4. `launchkit mark saas-discovery submitted --note "free queue 6-8 weeks, nofollow"`

## Make the listing perform
- Pages are "X alternatives" pages, so the best placement is next to a known competitor. Always name 2-3 well-known `product.competitors_alternatives` in the message.
- Keep the message short and factual; they say most requests are spam.

## Gotchas
- They refuse sponsored articles and any request for dofollow links. Don't ask for one.

## After submitting
- Check the competitor's alternatives page after 6-8 weeks.
