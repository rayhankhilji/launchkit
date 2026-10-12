---
id: glassdoor-employer
name: "Glassdoor (Employer)"
url: https://www.glassdoor.com/employers/sign-up/?src=b2b-site-emp-brand
category: Startup Database
mode: form
pricing: "Freemium (free employer profile; paid Employer Branding plans, quote based)"
login: "Glassdoor employer account (work email)"
captcha: "bot protection blocked automated loads of the sign-up page"
backlink_required: no
review_time: "Employer verification of the work email; timing unknown"
verified: true
last_checked: 2026-10-12
---

# Glassdoor (Employer)

Free employer account that lets a company claim its Glassdoor profile, add mission and logo, request and respond
to reviews, and see basic analytics. Paid plans add branded content, insights, benchmarking, and the Employer
Branding Hub. The sign-up page's fields were hidden by bot protection during research, so they are unconfirmed.

## Before you start
- Worth doing once the company has employees or is hiring. For a solo founder with no team it adds little.
- Use a work email on the company domain (`submission.email` if it matches `product.url`). Glassdoor verifies employer accounts.
- Search glassdoor.com for the company. A profile may already exist from employee reviews; claim it rather than creating one.
- Do not solve any challenge. Mark `needs_human` if blocked.

## Field map
Unconfirmed sign-up and profile fields:
| Likely field | Profile key / instruction |
|---|---|
| Work email | `submission.email` on company domain |
| Name, job title | `founder.name`, `founder.role` |
| Company name / search | `product.name` or `company.legal_name` |
| Company website | `product.url` |
| Logo | `assets.logo_square` |
| Mission / description | `product.description_medium` |
| Headquarters | `company.city`, `company.country` |
| Company size | `company.team_size` |
| Industry | Closest to `product.categories[0]` |
| Founded | `company.founded_year` |

## Steps
1. Open https://www.glassdoor.com/employers/sign-up/?src=b2b-site-emp-brand.
2. The user enters their work email and completes verification.
3. Search and select the company, or create it if missing.
4. In the employer center, fill profile basics per the map and upload the logo.
5. Decline paid plan prompts.

## Make the listing perform
- Glassdoor's free tier highlights mission, logo, reviews, and updates. Fill all of them so the page does not look abandoned.
- Respond to reviews from the employer account, calmly and briefly. Responses are visible to candidates.
- Use the free review request feature to ask current team members for honest reviews. Never write reviews yourself.

## Gotchas
- Generic email domains (gmail.com) usually fail employer verification.
- Paid branding is a sales process. Do not book calls without the user.

## After submitting
- `launchkit mark glassdoor-employer submitted --listing-url <company overview url>` or `needs_human` if verification is pending.
