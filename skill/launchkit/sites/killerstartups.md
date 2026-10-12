---
id: killerstartups
name: "KillerStartups"
url: https://www.killerstartups.com/submit-startup/
category: Launch Platform
mode: form
pricing: Free/Paid
login: none
captcha: unknown
backlink_required: no
review_time: "editorial; no stated timeline"
verified: true
last_checked: 2026-10-12
---

# KillerStartups

Long-running startup reviews site, now run by Brown Brothers Media and focused mostly on finance and investing content. The submit page is a two-part flow: first you join their community newsletter, then a second form collects startup details and your story for possible coverage in the newsletter, site and socials.

## Before you start
- Step 1 is a newsletter signup (beehiiv embed). Use `submission.email`. Tell the user this subscribes them to the KillerStartups newsletter.
- The second form only appears after step 1, so its exact fields were not seen (read-only check). Expect: startup name, URL, description, founder name and the story behind the startup.
- Coverage is not guaranteed. Tips email for follow-up: tips@killerstartups.com.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Email (newsletter step) | email | `submission.email` |
| Startup name | text | `product.name` |
| Website | URL | `product.url` |
| Founder name / role | text | `founder.name`, `founder.role` |
| Short description | text | `product.description_short` |
| Your story | long text | `copy.launch_post_story` (trim to the problem, why you built it, traction) |
| Category / industry (if asked) | select | closest to `product.categories[0]` |
| Logo / images (if asked) | upload | `assets.logo_square`, `assets.screenshots[0]` |

## Steps
1. Search the site for `product.name`; if covered, mark `live` and stop.
2. Open https://www.killerstartups.com/submit-startup/, enter `submission.email` in the signup box and continue.
3. If a CAPTCHA appears, stop and mark `needs_human`.
4. On the second form fill the details above.
5. Submit, screenshot to `.launchkit/evidence/killerstartups.png`, `launchkit mark killerstartups submitted --note "editorial, newsletter signup done"`.

## Make the listing perform
- They feature startups with a story. Lead the story field with the founder's reason for building and one concrete number (users, revenue, growth).
- Finance, fintech and money-saving products fit their current readership best. For other niches, keep expectations low.

## Gotchas
- Sponsored articles are sold separately. Don't buy.
- If the second form never appears, send a short note to tips@killerstartups.com only with user approval (that's a pitch).

## After submitting
- No confirmation timeline. Check the site and newsletter in a few weeks.
