---
id: free-for-dev
name: "Free for Dev"
url: https://github.com/ripienaar/free-for-dev
category: Dev / Open Source
mode: pr
pricing: Free
login: github
captcha: none
backlink_required: no
review_time: "days to weeks"
verified: true
last_checked: 2026-10-12
---

# Free for Dev

A huge, actively maintained README of SaaS products with free tiers useful to developers, especially infra and
DevOps people (also served at free-for.dev). A merged entry sends a long tail of developer signups.

## Before you start
- Fit (PR template checklist): it's SaaS (not self-hosted), it has a free tier not just a trial, pricing is visible
  without signup, the entry says what's free, not already listed, the service has contact details and a privacy policy.
- Not accepted: cPanel-style PHP hosting, DNS frontends to Cloudflare, copies of other services, temporary email,
  generic browser "developer toolbox" sites (format converters, calculators). Submitting one gets you banned.
- **"If you open a Pull Request that was written using AI ... we will close it without reviewing it."** Draft the
  line for the user, but the user must write the final PR in their own words and open it. Mark `needs_human`.
- If `product.pricing_model` has no free tier, mark `skipped`.

## Field map (one README line)

| Item | Format | Fill with |
|---|---|---|
| Section | existing `##` heading | closest match, e.g. "APIs, Data, and ML", "Monitoring", "Email" |
| Line | `* [Name](url) - what is free` | `product.name`, `product.url` (or pricing page), then the free-tier limits from `product.pricing_details` (numbers: requests, seats, storage) |
| PR template | checkboxes | tick only what's true; it's the first thing reviewers read |

Example style from the list: `* [R2](https://developers.cloudflare.com/r2/) - 10 GB per month, 1 million Class A operations per month`.

## Steps
1. Search README.md for the product name and open PRs for duplicates.
2. Draft the line with exact free limits; `lk draft free-for-dev -`; mark `needs_human` ("human must open PR, AI PRs closed").
3. The user edits README.md on GitHub, adds the line in the right section, opens a PR, and fills the template.

## Make the listing perform
- Be specific about limits. "Free plan available" gets bounced; "Free: 3 projects, 10k events/month" gets merged.
- Link straight to the pricing page if it shows the free tier.

## Gotchas
- Arguing with maintainers or misrepresenting the free tier gets you blocked.

## After submitting
- Watch the PR. Once merged, mark `live` with the README anchor.
