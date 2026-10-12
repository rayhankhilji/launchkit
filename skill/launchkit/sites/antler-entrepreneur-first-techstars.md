---
id: antler-entrepreneur-first-techstars
name: Antler / Entrepreneur First / Techstars
url: https://apply.techstars.com/
category: Crowdfunding / Awards
mode: manual
pricing: Free
login: Techstars account (first name, last name, email); Antler and EF forms need no login to start
captcha: none seen on the public forms
backlink_required: no
review_time: Techstars usually replies in 60 to 90 days, or within about 4 weeks after a program deadline. Antler and EF vary by cohort.
verified: true
last_checked: 2026-10-12
---

# Antler / Entrepreneur First / Techstars

Three separate accelerator applications. None of them is a listing. A startup only appears in their portfolio after it is accepted and funded. Applying is free. Each one invests in exchange for equity, so this is a founder decision.

## Before you start
- Techstars: year-round application at https://apply.techstars.com/, about 30 to 60 minutes. Program deadlines are 11:59pm PST. Standard deal: $220,000 ($200,000 uncapped MFN SAFE plus $20,000 for 5% common stock). Techstars says it picks on team first, then market, progress and idea.
- Antler: short first form at https://www.antler.co/apply. For individuals and teams from idea to pre-seed, plus a separate track for Series A to C.
- Entrepreneur First: https://apply.joinef.com/ lists open cohorts (London, Bangalore, San Francisco Bridge Residency, US fellowships, experienced founders). No co-founder needed; EF helps people find one. Most programs are full time and in person. Bangalore Winter 2027 closes Nov 2, 2026.
- Pick the one that fits: Techstars for a team with a product, Antler or EF for a solo founder or idea stage.

## Field map
Antler first form (live, in order):
| Site field | Profile key / instruction |
|---|---|
| First name, Last name | `founder.name` split |
| Email | `founder.email` |
| LinkedIn (optional) | `founder.linkedin` |
| Stage (Idea to Pre-Seed / Series A to C) | from `product.status` and founder's funding |
| Region (APAC, Americas, Europe, MEA) and City | `company.city`, `company.country` |
| Consent checkbox | founder ticks it |
| Series A to C only: about the company, where based, website, pitch deck (optional, max 10MB) | `product.description_medium`, `company.city`, `company.country`, `product.url`, founder's deck |

Techstars (account step is live; the rest is behind login):
| Site field | Profile key / instruction |
|---|---|
| First name, Last name, Email | `founder.name`, `founder.email` |
| Program choice | founder picks from techstars.com/accelerators by location and industry |
| Company name, website, description | `company.legal_name`, `product.url`, `product.description_medium` |
| Team, traction, market, funding | founder-provided; `product.competitors_alternatives` for the market answer |
| Video (if asked) | founder records |

EF: pick a cohort on the hub, then a personal application about the founder (background, what they have built). Field order is behind the form start and unconfirmed.

## Steps
1. Open https://www.techstars.com/accelerators, https://www.antler.co/apply and https://apply.joinef.com/. Note open programs and deadlines.
2. Recommend one or two that fit the founder's stage, location and team.
3. Draft answers from the profile. Mark founder-only answers (traction, funding, background) as questions.
4. The founder creates accounts, fills forms and submits. Do not submit for them.

## Make the listing perform
- Techstars ranks the team first. Write team answers with concrete past work and why this team for this market.
- Apply to a Techstars program that matches the industry. Industry programs get fewer off-topic apps.
- Antler and EF bet on the person. The founder's own record matters more than the product copy.
- Submit before a program deadline. Techstars reviews rolling apps, but it batches them by program.

## Gotchas
- Accepting means giving equity. Show the terms to the founder before applying.
- EF and most Antler programs need the founder to relocate or attend in person full time.

## After submitting
- Log each application as `needs-human` until the founder confirms it was sent.
