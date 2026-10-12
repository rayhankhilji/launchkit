---
id: tracxn
name: "Tracxn"
url: https://tracxn.com/a/s/myclaims
category: Startup Database
mode: form
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# Tracxn

Tracxn is a private-company database used by VCs, corp dev teams and banks. Profiles are created by Tracxn's analysts from public data; founders cannot publish a new profile directly but can claim an existing one and submit updates, which analysts review.

## Before you start
- Search https://tracxn.com/ for `product.name` first. The claim flow only works for companies that already have a profile.
- Claiming needs a free Tracxn account, ideally on a company-domain email (`founder.email`). Account creation only if `submission.allow_account_creation` is true.
- Have company facts ready: `company.legal_name`, `company.founded_year`, `company.city`, `company.country`, `company.team_size`, and funding only if `company.funding_raised` is set.

## Field map
The claim and edit forms are behind login and unconfirmed. Public profiles show these fields, which is what an update can touch:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Company name / legal name | text | `product.name`, `company.legal_name` |
| Website | URL | `product.url` |
| Short description | text | `product.description_short` |
| Founded year | year | `company.founded_year` |
| Location | city, country | `company.city`, `company.country` |
| Employee count | range | `company.team_size` |
| Founders | names, LinkedIn | `founder.name`, `founder.role`, `founder.linkedin` |
| Funding rounds | date, amount, investors | only from the profile; leave blank otherwise |
| Business model / sector | select | `company.business_model`, closest to `product.categories[0]` |
| Social links | URLs | `links.linkedin`, `links.twitter` |

## Steps
1. Search tracxn.com for the company and open its profile.
2. If no profile exists, mark `needs_human` with "No Tracxn profile yet; analysts add companies from public sources. Founder can ask via the claim page once signed in". Stop.
3. If it exists, open https://tracxn.com/a/s/myclaims (or the profile's "Claim this profile" banner) and sign up or sign in.
4. Follow the claim steps (expect company-email verification), then edit fields from the map.
5. Submit, screenshot to `.launchkit/evidence/tracxn.png`.
6. `launchkit mark tracxn submitted --note "claim pending Tracxn review"`

## Make the listing perform
- Tracxn surfaces companies to investors through sector feeds and "emerging startups" lists. Accurate sector and business model tags decide which feeds the company lands in.
- Add every funding round with a press source; announced rounds trigger their coverage and newsletters.
- Keep the description factual: what it does and for whom, in one sentence.

## Gotchas
- Personal email domains may not pass company verification.
- Tracxn sells subscriptions and demos on the same pages; those forms are not profile edits.

## After submitting
- Edits appear after analyst review. Recheck the public profile in a week or two.
