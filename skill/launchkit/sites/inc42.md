---
id: inc42
name: "Inc42"
url: https://inc42.com/contact/
category: Press / Media
mode: pitch
pricing: Free
login: none
captcha: recaptcha
backlink_required: no
review_time: "no stated SLA"
verified: true
last_checked: 2026-10-12
---

# Inc42

India's largest startup news site (funding, policy, startup spotlights, DataLabs research). Relevant only for Indian startups or products built for India.

## Before you start
- Gate: `company.country` is India or the product mainly serves India. Otherwise mark `skipped` ("India-only").
- The contact form requires a phone number. The profile has no phone field, so ask the user or use the email route.
- Their contact page says: to write a guest column or share your startup story, email editor@inc42.com. Share PR/news for publishing at the same address.

## Field map
Contact form:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| First Name / Last Name | required | split `founder.name` |
| Email | required | `founder.email` |
| Phone Number | required | ask the user |
| Designation | required | `founder.role` |
| Seniority | required dropdown | Founder (options: Founder, CXO, Partner, VP/Senior Management, Junior Management, Others, Student) |
| Company Name | required | `company.legal_name` or `product.name` |
| Company Website | optional | `product.url` |
| Inquiry Type | required dropdown | "News Tip" for news, "Guest Post" for a column (others: General, Advertise With Us, Inc42 Plus, DataLabs by Inc42) |
| Message | required | pitch below |
| Captcha | reCAPTCHA | user solves it |

Email route: To editor@inc42.com, subject with the news, body from `copy.press_pitch` (under 150 words) with city, funding stage, product link and press kit.

## Steps
1. Draft the pitch and decide route (form or email). Save with `launchkit draft inc42 -`; mark `drafted`.
2. With `pitch` mode on and approval: fill the form at https://inc42.com/contact/, have the user solve the reCAPTCHA, submit, screenshot to `.launchkit/evidence/inc42.png`.
3. `launchkit mark inc42 submitted --note "contact form, News Tip"`. Emails only with explicit approval.

## Make the listing perform
- Funding news is the main beat. Include amount, round, lead investor and use of funds, all from the profile.
- Early-stage startups fit their startup spotlight style profiles: founder background, problem in Indian terms, early traction. Put the founding city and year up front.
- A guest column (founder lessons, sector data) is a realistic route for pre-funding companies.

## Gotchas
- Inc42 Plus, courses, events and BrandLabs are paid products. Not needed for coverage.
- Don't pick "Advertise With Us" as inquiry type; it goes to sales.

## After submitting
- Search inc42.com for `product.name`. If covered, Inc42 may also create a company page on its DataLabs database.
