---
id: smol-launch
name: "Smol Launch"
url: https://smollaunch.com/signup?intent=submit_product&return_to=/dashboard/products/new
category: Launch Platform
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: optional
review_time: "24-48 hours, then launches on the chosen week"
verified: true
last_checked: 2026-10-12
---

# Smol Launch

Weekly launch board (Monday to Sunday) for small products. Winners are announced Monday at 8:00 AM PT, top 3 get gold, silver and bronze badges. The free plan needs a badge and waits in a queue; paid plans pick any open week.

## Before you start
- Account needed: Google, or email with first name, last name, email and a password of 12+ characters with upper case, lower case and a number. Create an account only if `submission.allow_account_creation` is true.
- Have `product.url`, `product.tagline`, `product.description_medium`, `assets.logo_square`, `assets.screenshots`, `links.demo_video`, `founder.avatar`, `founder.bio_short`, `founder.twitter` ready. Profile and page completeness add to the vote total.
- Plans: Free Verified $0 (badge required, first launch only, 50 verified slots per week, queue can be weeks long), Premium $19 per launch (any open week, permanent dofollow, no badge), Premium+ $39 (adds one week Featured Spot, newsletter feature, priority review). Launch Everywhere ($99+) is a separate directory service. Ask the user before any paid plan.

## Field map
Public docs describe the browser flow; exact order after sign-in is unconfirmed.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product URL | URL, prefills the rest | `product.url` |
| Name | text (prefilled) | `product.name` |
| Tagline | short text (prefilled) | `product.tagline` |
| Description | long text (prefilled) | `product.description_medium` |
| Logo | image (prefilled from site) | replace with `assets.logo_square` |
| Screenshots | images | `assets.screenshots` |
| Demo video | URL | `links.demo_video` |
| Plan | Free Verified / Premium / Premium+ | Free Verified unless the user approved a paid plan |
| Launch week | week picker | `product.launch_date` week, or the next week offered |

## Steps
1. Open the signup URL above. Sign in or sign up, and it returns you to `/dashboard/products/new`.
2. Paste `product.url` and wait for the prefill. Overwrite name, tagline and description with the profile values; replace the logo.
3. Add screenshots and the demo video.
4. Pick the plan and launch week. For Free Verified, add the badge to the site only if `launch_settings.add_badge_to_site` is true.
5. Submit. Screenshot to `.launchkit/evidence/smol-launch.png`.
6. `launchkit mark smol-launch submitted --note "review 24-48h, launch week <date>"`

## Make the listing perform
- Votes decide the winners, plus documented bonus points: maker profile up to 4 (image, bio, social link), product page up to 6 (screenshots, demo video, verified badge), participation up to 2 (reply to comments, vote on others). Fill all of these before launch week.
- Ties go to early momentum and unique engaged voters, so share the page on Monday morning PT.
- Post `copy.maker_comment` on launch day and reply to every comment.
- Paid tiers do not add votes. Premium+ only buys the Featured Spot and newsletter.

## Gotchas
- Free Verified is for the first launch only, and the queue can push the launch many weeks out.
- Their MCP `prepare_launch` makes a draft link valid 24 hours; a human still signs in and submits.
- Every launch is reviewed (AI plus human) before going live.

## After submitting
- Check the dashboard for review status. On launch week, return daily to reply to comments. Winners post Monday 8:00 AM PT.
