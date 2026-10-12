---
id: f6s
name: "F6S"
url: https://www.f6s.com/
category: Startup Database
mode: form
pricing: Free
login: "F6S account (email, or social sign in)"
captcha: unknown
backlink_required: no
review_time: "Profile live on save"
verified: true
last_checked: 2026-10-12
---

# F6S

Startup network for accelerator and grant applications, funding opportunities, software deals, and jobs.
Membership is free. A company profile is created after signing up, at /company/create, and the same profile is
reused for every program application. The create form was not visible without login, so fields are unconfirmed.

## Before you start
- The user needs an F6S account. Use `submission.preferred_login` if offered.
- Search f6s.com for the company. Programs and users sometimes create company pages; join that one instead.
- F6S sends a lot of email. Use `submission.email`.

## Field map
Unconfirmed. Public F6S company pages show these fields:
| Likely field | Profile key / instruction |
|---|---|
| Company name | `product.name` |
| Website | `product.url` |
| One-liner | `product.tagline` |
| Description | `product.description_medium` |
| Logo | `assets.logo_square` |
| Location | `company.city`, `company.country` |
| Markets / tags | `product.categories`, `product.tags` |
| Stage | `product.status` and `company.funding_stage` |
| Team members | `founder.name`, `founder.role` (invite others only with permission) |
| Founded | `company.founded_year` |
| Social links | `links.twitter`, `links.linkedin` |
| Video | `links.demo_video` |

## Steps
1. Open https://www.f6s.com and have the user log in or sign up.
2. Search the company name. If a page exists, request to join it.
3. Otherwise open https://www.f6s.com/company/create and fill fields per the map.
4. Save and copy the company URL.
5. Do not apply to programs unless the user asks; list relevant open programs in the report instead.

## Make the listing perform
- Programs screen applicants by the company profile. A full profile with team, stage, and a demo video helps applications more than the directory listing itself.
- Pick markets carefully. F6S recommends programs and deals by market and location.
- Check the Deals section for free credits that match the user's stack and mention them in the report.

## Gotchas
- F6S has a history of heavy email and auto-invites. Do not import contacts.
- Some programs listed are paid or low quality. Do not apply without the user.

## After submitting
- `launchkit mark f6s submitted --listing-url <url>`.
