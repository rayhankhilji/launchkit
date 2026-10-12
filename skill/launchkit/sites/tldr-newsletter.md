---
id: tldr-newsletter
name: "TLDR Newsletter"
url: https://advertise.tldr.tech/
category: Dev / Open Source
mode: form
pricing: Paid
login: none
captcha: turnstile
backlink_required: no
review_time: "sales reply by email"
verified: true
last_checked: 2026-10-12
---

# TLDR Newsletter

TLDR runs 14 daily tech newsletters (TLDR Tech, AI, Dev, DevOps, InfoSec, IT, Data, Product, Design, Marketing, Fintech, Founders, Crypto, Hardware) and claims 8 million+ readers. Editorial picks are not pitchable through a form; getting in is a paid sponsorship.

## Before you start
- Paid only, with custom proposals ("Tell us your goals and budget"). No public price list. Skip unless the user approved a real budget; mark `skipped` with "paid sponsorship only".
- Pick the audience: TLDR Dev (about 1.15 million subs per the page listing) for developer tools, TLDR AI for AI products, TLDR DevOps or InfoSec for infra and security. Flagship TLDR Tech is about 1.6 million.
- Placements: **Quick Links** (bottom, up to 30 words, 1 CTA), **Secondary** (middle, up to 50 words, 2 CTAs), **Primary** (top, logo, up to 100 words, 3 CTAs). Max 3 advertisers per issue. TLDR's team writes the copy and sends reports.
- The site sits behind Cloudflare; a bot check may appear. Hand off if so.

## Field map

The enquiry form was not readable without passing Cloudflare, so these fields are unconfirmed. Expect a standard B2B lead form:

| Field | Limit / format | Fill with |
|---|---|---|
| Name | text | `founder.name` |
| Work email | email | `founder.email` |
| Company | text | `company.name` |
| Website | URL | `product.url` |
| Budget | range or number | the amount the user approved, never more |
| Newsletters / goals | text or checkboxes | chosen TLDR newsletter(s) and goal (signups, awareness) |

## Steps
1. Get the budget and target newsletter from the user.
2. Open https://advertise.tldr.tech/ and click the "get started" / contact button.
3. Fill the form from the map. If a challenge appears, mark `needs_human`.
4. `launchkit mark tldr-newsletter submitted --note "sponsorship enquiry"`. Never accept a proposal or pay.

## Make the listing perform
- Readers skim. Give TLDR's writers one concrete claim and one number from the profile (`product.key_features`), plus a free tier or trial link.
- Quick Links is the cheapest way to test; move up only if clicks convert.
- Land the click on a page that matches the ad, with UTM tags.

## Gotchas
- Big programs book weeks ahead and run seasonal packages.
- The public tldr.tech homepage form is a subscribe box, not an ad form.

## After submitting
- Forward the proposal to the user for a decision.
