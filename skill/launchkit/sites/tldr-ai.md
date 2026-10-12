---
id: tldr-ai
name: "TLDR AI"
url: https://advertise.tldr.tech/
category: Newsletter
mode: pitch
pricing: Paid
login: none
captcha: unknown
backlink_required: no
review_time: "custom proposal; sales-led"
verified: true
last_checked: 2026-10-12
---

# TLDR AI

A free daily (weekdays) AI newsletter with about 1.1M subscribers, part of TLDR's 14 newsletters (8M+ readers total). It's dense and engineering-focused: model releases, research papers and developer tools. The reader page https://tldr.tech/ai has only a subscribe form; there is no public "submit a link" page (tldr.tech/submit and /ai/submit are 404). Product placement is paid through https://advertise.tldr.tech/.

## Before you start
- With budget 0: mark `skipped` ("paid only").
- With budget: the user picks the placement and dates. Mark `needs_human`.
- Have ready: `product.name`, `product.url`, `product.description_short`, `assets.logo_square` (for Primary).

## Field map

The advertise page ends in an "Interested in advertising with TLDR?" contact form (anchor `#talk-tldr`); its fields were not visible in the read-only check, so treat them as unconfirmed (expect name, work email, company, budget, goals). Placements per the FAQ:

| Placement | Limit | Fill with |
|---|---|---|
| Quick Links (bottom) | up to 30 words, 1 CTA | `product.description_short` cut to 30 words |
| Secondary (middle) | up to 50 words, 2 CTAs | `product.description_medium` cut to 50 words |
| Primary (top) | logo + up to 100 words, 3 CTAs | `assets.logo_square` + `product.description_medium` |

TLDR's copy team rewrites ads in its own voice, so send facts, not polished copy.

## Steps
1. Open https://advertise.tldr.tech/ and read the FAQ for formats.
2. Budget 0: `launchkit mark tldr-ai skipped --note "paid placements only"`.
3. With budget: draft a 30-word Quick Links line and a 50-word Secondary version, save with `launchkit draft tldr-ai -`, and mark `needs_human` with "user to request a proposal at advertise.tldr.tech".

## Make the listing perform
- The audience is engineers and researchers. Lead with what the tool does technically and one hard number from the profile (latency, model support, open source). No hype; it reads like the editorial items.
- Quick Links is the cheapest way to test; each issue caps at 3 advertisers.
- Free editorial pickup does happen for open source releases and research that spread on GitHub and X; a strong `product.repo_url` launch is the free path, not an email.

## Gotchas
- The reader page has a hidden "website" field (a honeypot) next to the email box. Don't fill it.
- TLDR Founders, TLDR Dev and others are separate lists; pick TLDR AI only for AI products.

## After submitting
- Nothing to check unless the user books. Log the issue date and the performance report they send.
