---
id: product-hunt-daily
name: "Product Hunt Daily"
url: https://www.producthunt.com/newsletters
category: Newsletter
mode: pitch
pricing: Free
login: none
captcha: none
backlink_required: no
review_time: "no reply guaranteed; editors pick daily"
verified: true
last_checked: 2026-10-12
---

# Product Hunt Daily

Product Hunt now runs three newsletters from https://www.producthunt.com/newsletters (the old /newsletter URL redirects there): **The Leaderboard** (every weekday morning, lists the top launches of the previous day), **The Roundup** (Sundays, a weekly recap with "tools you may have missed") and **The Frontier** (Tuesdays, AI and tech news). About 1.5M readers. There is no submission form. Products get in by ranking well on Product Hunt itself, or by pitching the editorial team.

## Before you start
- The real lever is the Product Hunt launch (`product-hunt` guide). Do that first; the newsletter follows the leaderboard.
- For a pitch: `copy.press_pitch`, `product.url`, `product.tagline`, `founder.name`, and the Product Hunt launch URL if it exists.
- Ask the user before any email is sent. The address is printed in the latest Roundup issue: `editorial@producthunt.co` ("Launching soon? We'd love to hear about it").

## Field map

There is no form. The pitch email should contain:

| Part of the email | Limit / format | Fill with |
|---|---|---|
| To | email | `editorial@producthunt.co` |
| Subject | under 70 chars | "Launching on PH [date]: " + `product.tagline_short` |
| Line 1 | 1 sentence | what it does, from `product.description_short` |
| Line 2-3 | 2 sentences | why now (launch date `product.launch_date`, one fact from `product.key_features`) |
| Link | URL | Product Hunt launch page if live, otherwise `product.url` |
| Sign-off | name, role | `founder.name`, `founder.role` |

## Steps
1. Open https://www.producthunt.com/newsletters and read the latest Leaderboard and Roundup to see what kind of product gets a line (one sentence, playful tone, "Top launches" row with 3 products).
2. Write a pitch under 120 words from `copy.press_pitch`. Lead with the launch date and one concrete, slightly surprising detail (the Roundup likes quirky tools).
3. `launchkit draft product-hunt-daily -` with the email, then `launchkit mark product-hunt-daily drafted --note "email editorial@producthunt.co, send around launch week"`.
4. Only if the user approves, the user sends it from their own inbox (a few days before the PH launch).

## Make the listing perform
- The Leaderboard's "Top launches" row is the top 3 of the previous day. Finishing top 3 on launch day is the most reliable way in, so the launch timing and first-hour support matter more than the pitch.
- The Roundup picks "five tools you may have missed" from the week. A product that launched mid-week with a good story but missed the top 3 is the best fit for a pitch.
- The Frontier is news-led (Tuesdays). Only pitch it if the product has a real AI or tech news angle.
- Match the tone: short, funny, specific. One odd concrete detail beats a feature list.

## Gotchas
- The page sits behind Cloudflare bot checks; plain HTTP fetches get a 403, a normal browser works.
- The "Advertise" link in the header is paid sponsorship. Skip it at budget 0.
- No reply is normal. Don't follow up more than once.

## After submitting
- Watch the Leaderboard issue the morning after launch and the following Sunday Roundup. If featured, note the issue URL with `launchkit mark product-hunt-daily submitted --note "<issue url>"`.
