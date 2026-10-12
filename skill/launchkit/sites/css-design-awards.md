---
id: css-design-awards
name: "CSS Design Awards"
url: https://www.cssdesignawards.com/submit
category: Design Gallery
mode: form
pricing: Paid
login: none            # step 1 form loads without login; final step unconfirmed
captcha: unknown
backlink_required: no
review_time: "nomination notice within 24 hours (not weekends)"
verified: true
last_checked: 2026-10-12
---

# CSS Design Awards (CSSDA)

A long-running web design award site judged by a panel of professionals. Each $50 entry competes for 8 awards: Special Kudos, UI Design, UX Design, Innovation, Website of the Day, Month and Year, and Designer of the Year. Good for design-led sites; a weak entry is $50 wasted.

## Before you start
- Paid only: $50 (USD) per site. With `launch_settings.budget_usd` below 50, mark `needs_human` with "CSSDA: $50 per entry" and stop.
- Pick the tier by team size: **Solo** (1 person + 1 collaborator), **Studio** (2-10), **Agency** (10+). Price is the same; it only sets the Designer of the Year bracket. Map from `company.team_size`.
- Screenshot: exactly 1068x646 px, JPG only, 150 KB max. Make it from the hero of `assets.screenshots[0]` and compress it.
- Templates are allowed but rarely win. Racist, pornographic, gambling or hate sites are refused.

## Field map
Step 1 form (`/submit-step1?type=s|f|a`), seen live:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Website title | 32 chars, required | `product.name` |
| Website URL | 100 chars, include http(s):// | `product.url` |
| Website description | 130 chars, required | `product.description_short`, trimmed to 130 |
| Website category | select, required | app (SaaS, mobile or web app), products, services, agency, education, web design/dev, other. Map `product.categories[0]` |
| Feature tags | up to 3 checkboxes | pick true ones from: animated, colorful, eCommerce, flat design, fullscreen, grid, illustrated, minimal, one page, parallax, photographic, responsive, scroll, SVG, typographic, video/sound, WebGL |
| Website screenshot | 1068x646 JPG, 150 KB | prepared hero JPG |
| Final step (unconfirmed) | email, credits, X handle, payment | `submission.email`, `founder.name` / `company.legal_name`, `founder.twitter` as backup contact; payment by the user |

## Steps
1. Search cssdesignawards.com for `product.name`. If listed, mark `live` with the URL and stop.
2. Get the user's approval for $50.
3. Open https://www.cssdesignawards.com/submit and click **Submit** under Solo, Studio or Agency.
4. Fill the step 1 form, upload the JPG, click **Go to final step**.
5. On the final step fill contact and credit fields, add `founder.twitter` in the X field (CSSDA uses it if the email bounces to spam), and hand payment to the user.
6. Screenshot the confirmation to `.launchkit/evidence/css-design-awards.png`, then `launchkit mark css-design-awards submitted --note "paid $50, nomination email within 24h"`.

## Make the listing perform
- Nominations come within 24 hours on weekdays, so submit Monday to Thursday.
- The 130-char description is shown on the card. Say what the site is and one design detail ("Scroll-driven product tour built in WebGL").
- Choose tags that match what judges will see in the first 10 seconds. "minimal" and "typographic" for clean SaaS pages, "WebGL" or "animated" only if true.
- Judges score UI, UX and Innovation separately. A clear UX story (fast, accessible, obvious flow) helps a product site more than effects.

## Gotchas
- Screenshot over 150 KB or not exactly JPG fails silently. Recompress to about 80% quality.
- Title is capped at 32 characters, shorter than most of our taglines.

## After submitting
- Watch `submission.email` (and spam) for the nomination notice. Nominees appear under Nominees, then voting and judging decide awards.
