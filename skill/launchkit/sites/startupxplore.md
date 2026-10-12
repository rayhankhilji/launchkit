---
id: startupxplore
name: "Startupxplore"
url: https://startupxplore.com/en/startups-funding
category: Startup Database
mode: manual
pricing: Free
login: email
captcha: recaptcha
backlink_required: no
review_time: unknown
verified: false
last_checked: 2026-10-12
---

# Startupxplore

**No longer a free startup directory.** Startupxplore is now a CNMV-regulated investment platform (registration #18) where its team selects startups for funding rounds and corporate bonds and presents them to 40,000+ investors. There is no "add your startup" listing. The only way in for a startup is to apply for a round. Only relevant if the user is actively raising in Europe (mostly Spain).

## Before you start
- Ask the user whether they are raising a round. If not, skip this site.
- The application is a business process (pitch deck, financials, cap table, due diligence), not a directory form. Treat it as `manual`.

## Field map
Only the first registration step is public (https://startupxplore.com/en/register):

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Full name | text, required | `founder.name` |
| E-mail | email, required | `founder.email` |
| Investor or startup? | toggle | Startup |
| Accept terms | checkbox, required | only with the user's consent |
| reCAPTCHA | - | hand to the user |

Later steps (company data, round size, documents) are behind the account and unconfirmed.

## Steps
1. Confirm with the user that they want to raise through Startupxplore.
2. If yes, mark `needs_human` with "Startupxplore is a funding application (reCAPTCHA + due diligence), founder must apply at https://startupxplore.com/en/startups-funding".
3. If no, `launchkit mark startupxplore skipped --note "now an investment platform, no free listing"`.

## Make the listing perform
- Their selection criteria page lists pre-seed, seed, early and scale-up stages with minimum company ages (seed 6 months, early 9 months). Apply only if the company fits a stage.
- They say rounds close in about 30 days and that they co-invest. A clean deck with traction metrics matters more than copy.

## Gotchas
- reCAPTCHA on registration: never solve it for the user.
- Old guides call this a European startup and investor network with free profiles. That directory is gone.

## After submitting
- Nothing to track unless the founder applies; then follow their email instructions.
