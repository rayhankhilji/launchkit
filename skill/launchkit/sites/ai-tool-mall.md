---
id: ai-tool-mall
name: "AI Tool Mall"
url: https://aitoolmall.com/submit/
category: AI Directory
mode: form
pricing: Free/Paid
login: none
captcha: unknown
backlink_required: unknown
review_time: unknown
verified: false
last_checked: 2026-10-12
---

# AI Tool Mall

**The submit page has no form.** On 2026-10-12, https://aitoolmall.com/submit/ ("AI Tools APP Submit") loaded, but it only showed an intro paragraph and a list of links, even after accepting the cookie banner. No form, no form iframe, and no pricing were found. The site is a WordPress aggregator with a lot of NSFW categories (AI nude generators, sex chatbots) in its sidebar. The only contact route listed is business@aitoolmall.com on https://aitoolmall.com/contact-us/ ("we will reply within 48 hours").

## Before you start
- Ask the user if they want to be listed next to NSFW tools. Many B2B founders won't.
- An email submission needs `product.name`, `product.url`, `product.description_short`, and `assets.logo_square`.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| (none on /submit/) | no form rendered | skip |
| Email to business@aitoolmall.com, only if the user approves | plain text | subject "Tool submission: `product.name`", body `product.description_short` + `product.url` + `product.pricing_model` |

## Steps
1. Open https://aitoolmall.com/submit/. Accept the CookieYes banner ("Accept All").
2. If a form now appears below the intro text, the site has fixed it. Fill name, URL and description from the profile, stop before any payment, and tell the user to update this guide.
3. If there's still no form, don't email on your own. Ask the user. With approval and `submission.inbox_access` set, send the email above from `submission.email`.
4. `launchkit mark ai-tool-mall skipped --note "no form on /submit/"`, or `submitted --note "emailed business@"` if you sent the email.

## Make the listing perform
- Its pages are built around "AI X Generator" keyword pages (AI GIF Generator, AI Song Generator). If you email, lead with the plain task keyword your tool solves so they can slot it into one of those pages.

## Gotchas
- /advertise/ returns a not found page. There's no public price list.
- Mixed SFW and NSFW content. That can matter to users who care about brand fit.

## After submitting
- Search the site for `product.name` after a week. If there's no reply after 48 hours, don't chase.
