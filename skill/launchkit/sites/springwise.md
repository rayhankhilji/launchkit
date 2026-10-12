---
id: springwise
name: "Springwise"
url: https://springwise.com/submit-an-innovation/
category: Press / Media
mode: pitch
pricing: Free
login: none
captcha: recaptcha
backlink_required: no
review_time: "editorial review; emailed when live"
verified: true
last_checked: 2026-10-12
---

# Springwise

Innovation database and newsletter focused on sustainability and social impact. Its signup box claims 35,000 subscribers. Readers are corporate innovation teams and impact investors. Submitting is free through a long web form. Only worth it if the product has an impact angle. Their FAQ says it "should align with at least one of our impact areas or SDGs".

## Before you start
- Decide the impact angle with the user. Pure dev tools with no sustainability, health or social benefit will not be approved. Mark them `skipped` ("not a fit").
- Have ready: `company.team_size`, `company.funding_stage`, `company.country`, `company.business_model`, plus 5 short answers (below).
- No account. reCAPTCHA at the end: if a challenge appears, stop and mark `needs_human`.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Full Name* | text | `founder.name` |
| Email* | email | `submission.email` |
| Job Title* | text | `founder.role` |
| Company name* | text | `company.legal_name` or `product.name` |
| Company size* | 1 / 2-10 / 11-50 / 51-250 / 251-1000 / 1001+ | from `company.team_size` |
| Company website* | URL | `product.url` |
| Company model* | checkboxes B2B / B2C / Non-Profit / Other | from `company.business_model` |
| Company locations | country select | `company.country` |
| Funding stage* | select | closest to `company.funding_stage` |
| Funding amount | select | from `company.funding_raised`, else leave blank |
| Product name | text | `product.name` |
| Product link | URL | `product.url` |
| Development stage | select | from `product.status` |
| Product availability | select | from `product.platforms` / `company.country` (global vs local) |
| Industries served* | select | closest to `product.categories[0]` |
| Impact area | checkboxes (Clean Energy, Conscious Consumers, Circular Economy, Diverse Nature, Sustainable Infrastructure, Responsible Connectivity, Healthy Society) with sub-options | the one that is honestly true; don't tick several |
| What is the problem being solved? | textarea | problem paragraph from `product.description_long` |
| What is the innovation, and how does it work? | textarea | `product.description_medium` + `product.key_features` in prose |
| What are the main benefits or impacts? | textarea | concrete outcomes from the profile only |
| Where and how is it being applied? | textarea | `product.use_cases`, `product.target_audience`, `company.country` |
| Future opportunities | textarea | one or two sentences, no hype |
| Anything else | textarea | `links.press_kit`, `links.demo_video` |

## Steps
1. Open https://springwise.com/submit-an-innovation/ and accept or dismiss the cookie banner.
2. Scroll to the form "Submit an innovation" and fill fields in the order above.
3. Complete the reCAPTCHA only if it's a checkbox the user can tick; never solve image challenges. Click **Submit**.
4. Screenshot the confirmation to `.launchkit/evidence/springwise.png`. `lk mark springwise submitted --note "Springwise editorial review"`.

## Make the listing perform
- Springwise writes short case-study articles. Answers that read like a journalist's notes get picked: who, where, what changed, numbers. Marketing copy does not.
- Pick a single impact area and SDG. A clear fit beats ticking everything.
- Approved entries can also go into their newsletter, reports and "pitch days". Keep the problem statement quotable.

## Gotchas
- The form is long. The textareas have no visible limits. Keep each to 80-150 words.
- To edit after sending, email info@springwise.com (from their FAQ).
- The contact form is separate and for members; don't use it for submissions.

## After submitting
- Springwise emails the submitter with a link once the innovation is live. Check `submission.email` and the database at https://springwise.com/innovation-database/.
