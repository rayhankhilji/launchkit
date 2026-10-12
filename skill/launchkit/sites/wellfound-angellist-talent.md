---
id: wellfound-angellist-talent
name: "Wellfound (AngelList Talent)"
url: https://wellfound.com/onboarding/recruit
category: Startup Database
mode: form
pricing: "Freemium (free profile and job posts; Job Ads from $200 per ad; paid sourcing seats)"
login: "Wellfound personal account (email or Google)"
captcha: unknown
backlink_required: no
review_time: "Company profile live after onboarding; claims of existing profiles take a few business days"
verified: true
last_checked: 2026-10-12
---

# Wellfound (AngelList Talent)

Startup jobs marketplace with public company profiles that candidates and investors browse. /recruit now
redirects to /recruit/source. New companies go through https://wellfound.com/onboarding/recruit after creating a
personal login. Fields below come from the live pricing page and Wellfound support docs.

## Before you start
- The user needs a personal Wellfound login first. The company profile hangs off it.
- Search wellfound.com for the company. If a community-generated profile exists, claim it via the "contact us"
  link in Wellfound support instead of creating a new one (processed every few business days).
- Free job posts must include compensation. Do not create a job unless the user wants to hire.
- Have `assets.logo_square` (square) ready.

## Field map
Onboarding plus company profile editor, in order. Exact limits unconfirmed.
| Their field | Profile key / instruction |
|---|---|
| Company name | `product.name` |
| Website | `product.url` |
| High concept / one-liner | `product.tagline` (short, plain) |
| Square logo | `assets.logo_square` |
| Company size | Bucket from `company.team_size` |
| Markets | 2 to 4 picks from `product.categories` and `product.tags` |
| Locations | `company.city`, `company.country`; add "Remote" only if the user hires remotely |
| Company type | "Startup" |
| Profile URL slug | lowercase `product.name` |
| Blog URL, Twitter, LinkedIn, Facebook | `links.blog`, `links.twitter`, `links.linkedin` if present |
| Overview | `product.description_medium` |
| People | `founder.name`, `founder.role` |
| Culture | Ask the user; skip if no answer |
| Funding | Only from `company.funding_stage` / `company.funding_raised`; otherwise leave empty |

## Steps
1. Ask the user to log in at https://wellfound.com/login.
2. Search the company name. If it exists, stop and help the user send the claim request.
3. Open https://wellfound.com/onboarding/recruit and follow the onboarding screens with the field map.
4. Open the company profile editor and fill Overview, People, Culture, and Funding.
5. Save. Do not post jobs or buy Job Ads without the user.

## Make the listing perform
- Wellfound's own guidance: keep the profile current and transparent, and explain the interview process and culture.
- Add the founder under People with a real photo. Candidates and investors look at founders first.
- Pick precise markets. Search and job alerts filter on them.
- If the user is hiring, a free job post with clear salary and equity ranges brings the profile into job search.

## Gotchas
- Job Ads start at $200 each; Reach sourcing seats are $135 or $199 per seat per month. Skip unless budget allows.
- Duplicate company profiles confuse candidates. Always search and claim first.

## After submitting
- Record wellfound.com/company/<slug> with `launchkit mark wellfound-angellist-talent submitted --listing-url <url>`.
