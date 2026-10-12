---
id: seedtable
name: "Seedtable"
url: https://seedtable.com/contribute
category: Startup Database
mode: form
pricing: Free
login: none
captcha: unknown
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# Seedtable

Seedtable is a startup database with funding rounds, "Seedtable Score" signals and curated lists that investors and job seekers browse. You can't create a profile yourself; instead you contribute information on the Contribute page and their researchers plus an AI fact-checker verify it before it goes live.

## Before you start
- No account is needed for a basic contribution. Signing in unlocks a guided structured form and gets your contribution prioritized, but don't create an account unless `submission.allow_account_creation` is true.
- Have one public source URL that proves the facts (launch post, press release, funding announcement, LinkedIn page).

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Paste anything (company, funding round, news, LinkedIn, correction) | free text, required | a short factual block: `product.name`, `product.url`, one-line `product.description_short`, `company.city`, `company.country`, `company.founded_year`, `founder.name` + `founder.linkedin`, and `company.funding_stage` / `company.funding_raised` only if set |
| Source URL | URL, optional | public page backing the facts (e.g. `links.linkedin` or a press link) |

## Steps
1. Open https://seedtable.com/contribute (no login).
2. Paste the fact block into the large text area. Plain lines like "Company: X / Website: Y / Founded: 2025 / HQ: Berlin, Germany / Founder: Name (LinkedIn URL)" work best.
3. Add the source URL.
4. Click **Submit**. Screenshot the confirmation to `.launchkit/evidence/seedtable.png`.
5. `launchkit mark seedtable submitted --note "verified by Seedtable research team"`

## Make the listing perform
- Seedtable ranks companies on signals like funding, hiring and growth. A contribution that includes a funding round with date, amount and investors carries the most weight; send round news the day it is announced.
- Corrections to an existing profile go to suggest@seedtable.net; new deals and companies can also be emailed to deals@seedtable.net with the source link.
- Keep facts identical to Crunchbase and LinkedIn so the fact-checker can match them.

## Gotchas
- Unsourced claims are less likely to pass verification. Always include the Source URL.
- No marketing copy: the text is read by researchers, not shown as-is.

## After submitting
- Search seedtable.com for `product.name` after a couple of weeks. No confirmation email is promised for anonymous submissions.
