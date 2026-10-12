---
id: earlyhunt
name: "EarlyHunt"
url: https://earlyhunt.com/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: yes
review_time: "24-48 hours, then launches the chosen Monday"
verified: true
last_checked: 2026-10-12
---

# EarlyHunt

Weekly AI and startup launch competition. Projects go live Monday 08:00 UTC for 7 days of homepage time and upvotes. Same network as IndieHunt (shared Premium Launcher), so the form and rules match.

## Before you start
- Login: email, Google or GitHub. Use `submission.preferred_login`.
- Free launch needs **any link to earlyhunt.com** on the user's site (badge or plain text link, footer is fine). Their checker reads the page source before the launch can be scheduled. Ask the user if `add_badge_to_site` is "ask".
- Full description must be at least 200 words (400+ recommended). Prepare it from `product.description_long` + `product.key_features` + `copy.faq`.
- Need a logo and a preview image (use `assets.og_image` or the best screenshot).

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Website URL | URL | `product.url` (paste first: AI autofill pulls logo, preview, name, categories, description) |
| Project name | text | `product.name` |
| Short description | 10-200 chars | `product.tagline` or `product.description_short` |
| Full description | 200+ words | rewrite autofill using `product.description_long`; keep sections: what it does, who it's for, pricing, key features, FAQ |
| Maker name | text | `founder.name` |
| Categories | 1-3 of 40+ | closest to `product.categories` |
| Logo | upload or URL | `assets.logo_square` |
| Preview image | image | `assets.og_image` or `assets.screenshots[0]` |
| Screenshots | up to 5, optional | `assets.screenshots` |
| Video URL | optional | `links.demo_video` |
| X handle | optional | `founder.twitter` |
| Location, bio | optional | `company.city`, `company.country`; `founder.bio_short` |
| Launch type | Free / Premium $19 | Free |
| Launch week | calendar | first Monday with a free slot on or after `product.launch_date` |
| Backlink verification | step | run after the link is on the site |

## Steps
1. Search https://earlyhunt.com for `product.name`; if found, mark `live` and stop.
2. Open https://earlyhunt.com/submit and sign in.
3. Paste `product.url`, let autofill run, then replace any autofill copy that breaks the human-writing rules (it tends to write SEO filler).
4. Fill the rest, choose **Free**, pick the week (15 free slots per week).
5. On "Backlink Verification", give the user the badge code. Verify once it's live.
6. Submit, screenshot to `.launchkit/evidence/earlyhunt.png`, `launchkit mark earlyhunt submitted --note "free, week of <date>"`.

## Make the listing perform
- The week runs Monday to Sunday; you get the full 7 days whatever you do, but upvotes on Monday decide the early ranking. Tell the user to share the link Monday morning UTC.
- Free links are nofollow unless the project finishes top 3 for the week, which also earns a winner badge and a Hall of Fame spot.
- Every launch gets a launch blog post on /launches built from your description, so a specific, well-structured full description pays off twice.
- Post `copy.maker_comment` as the first comment.

## Gotchas
- Premium is $19 one-time (40% off codes appear often). Skip with budget 0.
- Rejections usually come from a broken URL or thin info; you can fix and resubmit. Support: hi@earlyhunt.com.

## After submitting
- You'll get emails when it's approved and scheduled. Project page: `https://earlyhunt.com/project/<slug>`.
