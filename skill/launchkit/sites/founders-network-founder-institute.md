---
id: founders-network-founder-institute
name: "Founders Network / Founder Institute"
url: https://fi.co/
category: Community
mode: post
pricing: Paid
login: email            # application forms on each site
captcha: unknown
backlink_required: no
review_time: "Founders Network: reviewed within 48 hours; FI: per cohort deadline"
verified: true
last_checked: 2026-10-12
---

# Founders Network / Founder Institute

Two separate paid programs grouped in one row. Neither is a place to post a launch; both are applications the founder
makes personally. The agent should only explain the options and costs.

- **Founder Institute (fi.co)**: pre-seed accelerator with local chapters/cohorts worldwide (the "FI Agentic Program":
  10 sessions plus Demo Day, mentor feedback). Apply at https://fi.co/apply for a chapter. Cost: an entrance fee that
  varies by chapter (the FAQ showed $0 for the cohort our browser was geolocated to), plus a pledge of 2.5% of future
  equity to the FI Equity Collective as a warrant. Top performers can be reviewed for Founder Capital's $25,000 first checks.
- **Founders Network (foundersnetwork.com)**: invite-only peer mentorship community for full-time tech founders.
  Request an invitation at https://foundersnetwork.com/request/ (form "takes less than 2 minutes", reviewed within 48 hours).
  Dues billed annually: Launch $75/mo (pre-revenue to $10K, up to $100K raised), Scale $134/mo ($10K-$1M revenue),
  Lead $249/mo ($1M+ revenue). Strict "no selling" rule.

## Before you start
- Both cost money or equity; launchkit's default budget is $0. Never apply or pay for the user.
- Founders Network excludes service firms; FI wants founders willing to do weekly deliverables.

## Field map (what the founder will need)

| Form | Fill with |
|---|---|
| FI application | `founder.*`, `product.description_medium`, `company.city`/`country` (chapter), team, stage; FI also runs an aptitude-style assessment |
| FN invitation request | `founder.name`, `founder.email`, `founder.linkedin`, `product.url`, `company.funding_stage`, `funding_raised` |

## Steps
1. Open https://fi.co/faq (cost and equity for the local chapter) and https://foundersnetwork.com/benefits/ (dues) to confirm current terms.
2. Write a two-line summary of each option with price for the user and save with `launchkit draft founders-network-founder-institute -`.
3. `launchkit mark founders-network-founder-institute needs_human --note "paid programs: FI (fee + 2.5% equity), FN ($75-249/mo)"`.

## Make the listing perform
- Neither gives launch traffic. Value is mentors and peers; recommend FI only for pre-seed founders planning to raise,
  FN for founders who want a peer group and can afford the dues.

## Gotchas
- FI cohort dates and fees differ by city; the site localizes by IP, so read the page for the founder's own chapter.
