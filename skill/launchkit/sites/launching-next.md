---
id: launching-next
name: "Launching Next"
url: https://www.launchingnext.com/submit/
category: Launch Platform
mode: form
pricing: Free/Paid
login: none
captcha: none
backlink_required: no
review_time: "free: reviewed daily, no fixed date; $99: considered within 1 business day"
verified: true
last_checked: 2026-10-12
---

# Launching Next

Long-running startup showcase (45,000+ startups, since 2013) with a weekly founder newsletter. Simple no-login form, worth a quick free submission.

## Before you start
- No account needed. Only text fields, no uploads.
- The $99 upgrade (shown on the next page) only speeds up review to 1 business day. Skip it with budget 0.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Startup Name | 100 chars | `product.name` |
| Startup URL | 100 chars | `product.url` |
| Your headline | 5-8 words, 100 chars | `product.tagline_short` or `product.tagline` cut to 8 words |
| Full startup description | 2,500 chars | `product.description_long` (trim to fit) |
| Tags | 5-10, comma separated, 500 chars | `product.tags` plus `product.categories`, lower case |
| Which best describes your submission? | radio | side project / bootstrapped startup / investor funded startup / none: use `company.funding_stage` (empty or bootstrapped -> bootstrapped; any raise -> investor funded; hobby -> side project) |
| Marketing spend next 90 days | radio | `$0` unless the user says otherwise (not published) |
| Your Name | 100 chars | `founder.name` (not published) |
| Your Email Address | 100 chars | `submission.email` (not published) |
| Newsletter opt-in | checkbox | leave unticked |
| Quick Check: What is 2+3? | text | a plain human-check question. If `launch_settings.attended`, ask the user to type the answer; otherwise mark `needs_human` |

## Steps
1. Search launchingnext.com for `product.name`. If listed, mark `live` and stop.
2. Open https://www.launchingnext.com/submit/ and fill every field above.
3. Click **Submit**. On the next page decline the $99 upgrade.
4. Screenshot the confirmation to `.launchkit/evidence/launching-next.png`.
5. `launchkit mark launching-next submitted --note "free queue, email if published"`.

## Make the listing perform
- The headline is the card title. Make it concrete in 5-8 words: "Turn Figma files into React code".
- Use the full 2,500 characters: three short paragraphs (problem, what it does, who it's for). Long descriptions get indexed.
- Tags drive the browse pages. Use specific ones ("invoicing", "figma") over generic ("startup").

## Gotchas
- They only email if they publish. No email means not selected.

## After submitting
- Check the Browse and Trending pages after a week or two; the email has the listing link.
