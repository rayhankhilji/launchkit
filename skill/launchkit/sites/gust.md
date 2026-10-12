---
id: gust
name: "Gust"
url: https://gust.com/founder_onboarding
category: Startup Database
mode: form
pricing: "Freemium (free founder signup and profile; Gust Launch plans $450, $1,250, $3,500 per year)"
login: "Gust account (first name, last name, email, location, password)"
captcha: unknown
backlink_required: no
review_time: "Profile live on save"
verified: true
last_checked: 2026-10-12
---

# Gust

Founder platform used by accelerators and angel groups to collect applications, now centered on Gust Launch
(incorporation, equity, SAFEs, cap table). The founder onboarding at /founder_onboarding takes about three
minutes and asks for company information, personal investment, and which resources you want.

## Before you start
- Main value: accelerators and angel networks that accept applications through Gust. Ask the user if they plan to apply.
- Do not buy a Gust Launch plan (Start $450/yr, Accelerate $1,250/yr, Raise $3,500/yr) without the user.
- Use `submission.email`. The user sets the password.

## Field map
| Their field | Profile key / instruction |
|---|---|
| First name, last name | Split `founder.name` |
| Email | `submission.email` |
| Location | `company.city`, `company.country` |
| Password, verify password | User enters |
| Terms checkbox | User confirms |
| Company information: name | `product.name` |
| Company website | `product.url` |
| Company stage / status | `product.status`, `company.funding_stage` |
| Incorporation | Ask the user; leave unanswered if unknown |
| Personal investment | Only if the user provides it |
| Resources wanted | Ask the user; default to fundraising or accelerator applications |
| (Profile) Elevator pitch | `product.tagline` |
| (Profile) Description | `product.description_medium` |
| (Profile) Logo | `assets.logo_square` |
| (Profile) Team | `founder.name`, `founder.role`, `founder.bio_short` |

## Steps
1. Open https://gust.com/founder_onboarding.
2. Fill the sign-up fields; the user sets the password and accepts terms.
3. Answer the company information screens per the map.
4. Skip or close plan upsells.
5. Open the startup profile and add pitch, description, logo, and team.

## Make the listing perform
- Programs read the Gust profile as the application. A complete team section and a clear elevator pitch matter most.
- Add a pitch deck or demo video if the user has one (`links.demo_video`).
- Keep the profile current between applications so it does not look stale to reviewers.

## Gotchas
- The site pushes paid Launch plans hard; the free path is the founder signup and profile.
- Personal investment and incorporation details are sensitive. Never guess.

## After submitting
- `launchkit mark gust submitted --listing-url <profile url>`.
