---
id: betatesting-com
name: "BetaTesting.com"
url: https://betatesting.com/signup
category: Beta Testing / Feedback
mode: form
pricing: Paid
login: email
captcha: unknown
backlink_required: no
review_time: "account instant; free-credit offer is manually approved"
verified: true
last_checked: 2026-10-12
---

# BetaTesting.com

BetaTesting is a paid crowdtesting platform (ErliBird Nest, Inc.) that recruits testers from its own panel for
single-session tests, bug hunts, usability videos, multi-day betas and surveys. It is not a free listing site.
The only $0 path is their "5 free credits" offer for qualifying companies.

## Before you start
- Pricing seen on /pricing: Project plan $23-$39 per credit (volume based), Teams $3,588/year with 225 credits,
  Enterprise from $20K/year. Tester recruiting is included in credits.
- 5 free credits (help article "Get 5 free credits offer"): enough for a 5-user single-session test (30 min or less),
  a 5-user usability video test, a 5-user bug hunt, or two 30-minute interviews. Requirements:
  - sign up with a personal email on the company domain (no gmail.com, no info@);
  - a website for the company or product;
  - based in USA, Canada, Europe or Australia, or more than 100 employees elsewhere.
  - after designing your first test, contact them with full name, company name, location and product URL.
- If `submission.email` is not on the `product.url` domain, or `company.country` is outside those regions and the
  team is small, mark `skipped` ("no free path; paid only").
- Ask the user before creating the account. This is a sales-led product and they will follow up.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Which best describes you? | Company / Beta Tester | Company |
| Name | text | `founder.name` |
| Work email | email on company domain | `submission.email` |
| Company name | text | `company.legal_name`, else `product.name` |
| Website | URL | `product.url` |
| Password | text | browser password manager |
| Test type (after signup) | template | Single Session Beta Test for most software; Bug Hunt for QA; Usability video for onboarding |
| Test name / description | text | `product.name` + 2-3 sentences from `product.description_medium` |
| Tasks / survey questions | list | 3-5 tasks from `product.key_features`, then ease and intent questions |
| Target testers | demographics, devices | from `product.target_audience`, `product.platforms` |

Fields after the first "Company" step are behind signup and unconfirmed.

## Steps
1. Get the user's OK. Open https://betatesting.com/signup, choose **Company**, complete signup.
2. Draft a Single Session test with 5 testers. Do not buy credits.
3. Use the in-app chat (Intercom) to request the 5 free credits with full name, company, location and product URL.
4. Screenshot the draft test to `.launchkit/evidence/betatesting-com.png`.
5. `launchkit mark betatesting-com needs_human --note "draft test ready, free credits requested; launch after approval"`

## Make the listing perform
- There is no public listing. Value comes from the test design: keep a single-session test under 30 minutes, give
  testers one clear goal per task, and ask for bugs separately from opinions.
- Their screening surveys are worth using even on 5 testers: one question that matches `product.target_audience`.

## Gotchas
- Every test beyond the free credits costs money. Never check out with budget 0.
- They ask free-credit users for a G2 review or LinkedIn post afterwards. That's optional; leave it to the user.

## After submitting
- Results (surveys, bug reports, videos, AI summary) appear in the dashboard as testers finish. Tell the user where to find them.
