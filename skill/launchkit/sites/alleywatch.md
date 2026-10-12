---
id: alleywatch
name: "AlleyWatch"
url: https://www.alleywatch.com/tell-us-about-your-startup/
category: Press / Media
mode: pitch
pricing: Free
login: none
captcha: none
backlink_required: no
review_time: "no reply unless they feature you"
verified: true
last_checked: 2026-10-12
---

# AlleyWatch

New York City startup news site, known for founder interviews and funding stories. Coverage is strictly limited to companies founded, based and headquartered in the five NYC boroughs.

## Before you start
- Hard gate: `company.city` must be New York City (Manhattan, Brooklyn, Queens, Bronx, Staten Island). A local office is not enough per their editorial guidelines. Otherwise mark `skipped` ("NYC-only").
- They don't cover service providers (agencies, legal, accounting, coworking, recruiting, payroll, crowdfunding platforms and similar). Skip if `company.business_model` is a service business.
- Read https://www.alleywatch.com/alleywatch-editorial-guidelines/ once. The national funding roundups are data-driven, so pitching does not get you into them.

## Field map
The form is a Typeform embed ("AW_Tell us about your startup"), one question per screen.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Company Name | short text | `product.name` (or `company.legal_name` if the product name differs) |
| Industry | short text | `product.categories[0]` in plain words, e.g. "Fintech" |
| Website | URL | `product.url` |
| Twitter | short text | `links.twitter` |
| Founder(s') name(s) | short text | `founder.name` plus co-founders if the profile lists them |
| Email | email | `founder.email` |
| Brief summary of what the company does and how it fits into the NYC ecosystem | long text | 3-5 sentences from `product.description_medium`, plus one line on the NYC angle (NYC customers, NYC team, local problem) |
| Founded, based, and headquartered in New York City? | yes / no | Yes. If the honest answer is No, stop and mark `skipped` |

## Steps
1. Open the URL and scroll to the embedded Typeform. If it doesn't render, open https://form.typeform.com/to/iLJ5FN directly.
2. Draft all answers first and save with `launchkit draft alleywatch -`; mark `drafted`.
3. Only with `pitch` mode on and user approval: press **Start**, answer each screen, press **Submit** on the last one. Screenshot the thank-you screen to `.launchkit/evidence/alleywatch.png`.
4. `launchkit mark alleywatch submitted --note "typeform"`.

## Make the listing perform
- Their main startup format is a founder Q&A (what you do, how you started, the NYC angle, funding, what's next). Write the summary so an editor can see the interview story: who the founder is, the problem, the traction.
- Funding news gets covered most. If the user has a fresh round in `company.funding_raised`, put the amount, lead investor and date in the first sentence.
- For breaking news (a round closing this week), also draft a short email to tips@alleywatch.com with the same facts.

## Gotchas
- Answer the NYC question truthfully. Non-NYC companies are excluded by policy and a false Yes wastes the founder's credibility.
- No file upload. Put press kit and logo links inside the summary.

## After submitting
- No confirmation email beyond the Typeform thank-you. Check alleywatch.com/category/startups/ after a few weeks.
