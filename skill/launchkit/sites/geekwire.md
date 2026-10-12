---
id: geekwire
name: "GeekWire"
url: https://www.geekwire.com/tips/
category: Press / Media
mode: pitch
pricing: Free
login: none
captcha: recaptcha
backlink_required: no
review_time: "tips: no reply unless covered; Startup List: human review"
verified: true
last_checked: 2026-10-12
---

# GeekWire

Seattle-based tech news site covering the Pacific Northwest (Amazon, Microsoft, startups, AI, science). Two routes: the news tip form and the free GeekWire Startup List database.

## Before you start
- Fit: strongest for companies in Washington, Oregon, Idaho or British Columbia. The Startup List only accepts those regions and rejects others.
- Startup List rules: founded less than 15 years ago, privately owned (no subsidiaries, public companies or PE-majority), no service providers or agencies. Address is verified by a human.
- Logo for the list: jpg/png/gif, at least 300 px wide, horizontal preferred. Use `assets.logo_wide`.

## Field map
Tip form (https://www.geekwire.com/tips/):

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name (optional) | text | `founder.name` |
| Email (optional) | email | `founder.email` |
| Subject (required) | text | the news in one line |
| Message (required) | textarea | `copy.press_pitch` adapted with the PNW angle, links to `product.url` and `links.press_kit` |
| CAPTCHA | reCAPTCHA | user solves it |

Startup List (https://www.geekwire.com/submit-startup/):

| Field | Fill with |
|---|---|
| Company Name, Street Address, City, State/Province, ZIP, Country | `company.legal_name` or `product.name`, address from the user (not in profile, ask) |
| Category | dropdown, closest to `product.categories[0]` (options include Artificial Intelligence, SAAS, Developer Tools, Enterprise Software, Consumer Internet, Mobile, E-commerce, Health & Wellness...) |
| Logo | `assets.logo_wide` |
| Website | `product.url` |
| Facebook / Twitter / LinkedIn | Twitter: handle only, no URL and no "@". LinkedIn: full company URL from `links.linkedin` |
| Founded Year | `company.founded_year` |
| Number Employees / Annual Revenue | `company.team_size`; leave revenue blank unless the user gives it |
| Contact Name / E-mail / Position (not displayed) | `founder.name`, `founder.email`, `founder.role` |
| Update to existing listing? | No |

## Steps
1. Tip: draft subject and message, `launchkit draft geekwire -`, mark `drafted`. Submit only with `pitch` mode on and approval; the reCAPTCHA needs the user, so mark `needs_human` if it appears.
2. Startup List (form mode, PNW companies only): fill every field, ask the user to solve any CAPTCHA, submit, screenshot to `.launchkit/evidence/geekwire.png`, `launchkit mark geekwire submitted --note "startup list + tip draft"`.

## Make the listing perform
- Being on the Startup List makes the company eligible for the monthly GeekWire 200 ranking. Don't submit a separate GeekWire 200 entry.
- Funding rounds, Amazon/Microsoft alumni founders and local customer wins are what GeekWire covers most. Put that fact in the subject line.
- Email alternative for tips: tips@geekwire.com.

## Gotchas
- Plain HTTP requests get blocked; use the real browser.
- "Partner With Us" and GeekWire Studios are paid. Skip.

## After submitting
- List entries are reviewed by a person. Check geekwire.com/startup-list/ for the company after a couple of weeks.
