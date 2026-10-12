---
id: yc-startup-directory
name: "YC Startup Directory"
url: https://www.ycombinator.com/companies
category: Startup Database
mode: manual
pricing: Free
login: none
captcha: none
backlink_required: no
review_time: "only after acceptance into a YC batch"
verified: true
last_checked: 2026-10-12
---

# YC Startup Directory

Y Combinator's public directory of every company funded by YC, filterable by batch, industry, region and hiring status. There is no submission form. Companies appear automatically once they are accepted into a YC batch and fill in their profile through YC's internal tools.

## Before you start
- Check whether the company is a YC company (ask the user, or check `company.funding_stage` notes). If not, skip.
- The only route in is applying to YC: https://www.ycombinator.com/apply. That is a multi-hour founder application with a video, not a directory submission.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| (none) | - | No public form; YC companies edit their profile through YC's internal tools after acceptance |

## Steps
1. If the company is not in YC: `launchkit mark yc-startup-directory skipped --note "YC companies only"`. Optionally tell the user the apply link.
2. If it is a YC company: open https://www.ycombinator.com/companies, search `product.name`, and confirm the profile exists.
3. If the profile is missing or out of date, mark `needs_human`: the founder updates it through YC's internal tools.
4. Record the URL: `launchkit mark yc-startup-directory live --listing-url <profile url>`

## Make the listing perform
- For YC companies, the profile's one-liner, long description, team bios and "Hiring" flag drive how it shows in directory filters and on Work at a Startup. Use `product.tagline` as the one-liner and keep founder LinkedIn links current.
- Turn on hiring status if the user is hiring; many visitors filter for it.

## Gotchas
- Never apply to YC on the user's behalf.

## After submitting
- Nothing to track for non-YC companies.
