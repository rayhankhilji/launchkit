---
id: launch-llama
name: "Launch Llama"
url: https://tools.launchllama.co/submit-here
category: Launch Platform
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: no
review_time: "free listing about 4 weeks; badge route verified within 48 hours"
verified: true
last_checked: 2026-10-12
---

# Launch Llama

Newsletter for founders (launchllama.co) plus a tools directory (tools.launchllama.co). The directory is where products get listed; the newsletter features products for free if they add a badge.

## Before you start
- Directory submission needs an account at tools.launchllama.co (sign-in prompt on /submit-here).
- One free listing per account, reviewed in about 4 weeks, permanent once approved, and eligible for the weekly newsletter.
- Optional faster free route: add the Launch Llama badge to the site, then submit at https://launchllama.co/get-featured-for-free. They verify within 48 hours and give homepage placement plus a newsletter nomination. Check `launch_settings.add_badge_to_site`.

## Field map (directory form behind login; fields from their public submit page)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Website URL | URL | `product.url` (they can prefill from the site) |
| Name | text | `product.name` |
| Tagline | short | `product.tagline` |
| Description | long text | `product.description_long` |
| Categories | select | closest to `product.categories` |
| Media (logo, screenshots) | images | `assets.logo_square`, `assets.screenshots` |
| Plan | Free / Instant Launch $39 add-on | Free |

## Steps
1. Search https://tools.launchllama.co for `product.name`; if found, mark `live` and stop.
2. Open https://tools.launchllama.co/submit-here, sign in.
3. Paste the URL, review the prefilled data, fix the copy, add media and categories.
4. Choose the free listing, submit.
5. If the user approved the badge, also complete https://launchllama.co/get-featured-for-free.
6. Screenshot to `.launchkit/evidence/launch-llama.png`, `launchkit mark launch-llama submitted --note "free, ~4 week review"`.

## Make the listing perform
- The newsletter is the traffic source. Picks favour clear, founder-useful products, so a description that names the exact problem and audience helps.
- The badge route is the quickest way to the newsletter at no cost.

## Gotchas
- Featured ($29/week, $99/month), Instant Launch ($39), newsletter ads ($199, or $499 for three) and backlink packages ($99 to $199) are paid. Skip unless approved.
- launchllama.co has no product form itself; don't look for one there.

## After submitting
- Wait for the approval email (up to about 4 weeks). Log the listing URL as `live`.
