---
id: built-in
name: "Built In"
url: https://builtin.com/
category: Startup Database
mode: form
pricing: "Freemium (free basic company profile; paid employer branding and job plans, quote based)"
login: "Built In SSO (email or Continue with Google)"
captcha: "Google reCAPTCHA on login"
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# Built In

US tech jobs and company profile site organized by US city hubs. The companies directory shows "Add company profile" and "Can't find your company? Create a
company profile". /node/add/company redirects to Built In SSO, so the profile form was not seen.

## Before you start
- Best fit for US companies that are hiring or will hire. Skip for non-US companies with no US office.
- Search builtin.com/companies for the company first to avoid duplicates.
- Login uses email or Google with reCAPTCHA. The user should log in themselves; do not solve the CAPTCHA.
- Built In is employer focused. Expect sales follow-up about paid employer branding plans.

## Field map
The post-login form is unconfirmed. Public company profiles show these sections:
| Likely field | Profile key / instruction |
|---|---|
| Company name | `product.name` (or `company.legal_name` if that is the brand) |
| Website | `product.url` |
| Logo | `assets.logo_square` |
| Headquarters / office locations | `company.city`, `company.country` (US city that matches a Built In hub if possible) |
| Industry | Closest match to `product.categories` |
| Employees | `company.team_size` |
| Year founded | `company.founded_year` |
| Company description | `product.description_medium` |
| Work contact email | `submission.email` on the company domain |

## Steps
1. Open https://builtin.com/companies and search the company name.
2. If not found, click "Create a company profile".
3. Let the user sign in through Built In SSO. Mark `needs_human` if reCAPTCHA blocks.
4. Fill the company form per the map. Decline paid plan upsells.
5. Submit and record what the confirmation says about review.

## Make the listing perform
- Built In ranks companies that hire. If the user has open roles, listing them is what puts the profile in front of candidates.
- Choose the city hub where the team actually sits. Profiles appear in that city's directory.
- Write the description for job seekers: what the product does, who uses it, and what the team is like.

## Gotchas
- Fields, review time, and whether the free profile is still offered without a sales call were not confirmed.
- Paid plans are quote based. Do not book demos without the user.

## After submitting
- `launchkit mark built-in submitted --listing-url <url>` or `needs_human` if routed to sales.
