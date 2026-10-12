---
id: echo-js
name: "Echo JS"
url: https://www.echojs.com/
category: Dev / Open Source
mode: post
pricing: Free
login: email           # username + password account on the site (no email check seen)
captcha: none
backlink_required: no
review_time: "instant"
verified: true
last_checked: 2026-10-12
---

# Echo JS

A small Hacker News-style link site for JavaScript, HTML5 and front-end news (Lamer News engine). Low traffic
(top posts have a handful of votes) but quick, free, and read by JS developers. Fits open source JS projects only.

## Before you start
- Rules from /about: JavaScript-related content only, English only, "No commercial content or libraries (even with
  free demo)", no newsletters or summaries (link original content), no URL shorteners, no tracking codes.
  If the product is commercial, mark `skipped` ("Echo JS bans commercial content").
- Best link: `product.repo_url` or a technical post about the JS project.
- Account: open https://www.echojs.com/login, use "create account" (username + password).

## Field map (submit form)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Title | text | the article or repo title only: "`product.name`: `product.tagline`" style used on the front page, no blog name, no trailing period, write "JavaScript" with correct case |
| URL | URL | `product.repo_url` without any `?ref=` or UTM params |
| Text | alternative to URL | leave empty when posting a link |

## Steps
1. Open https://www.echojs.com/login (use https; the "submit" link redirects to http://www.echojs.com/login which
   returned a 404 on 2026-10-12). Sign in or create an account.
2. Draft title + URL; `lk draft echo-js -`; mark `drafted`.
3. After approval and `allow_social_posting`: open https://www.echojs.com/submit, fill Title and URL, submit.
4. `launchkit mark echo-js submitted --listing-url <news url>`

## Make the listing perform
- Front-page titles look like "Supapower - A sync engine that keeps a local PGlite database in sync with Supabase".
  Name plus a concrete one-line description works.
- Post on a weekday; the front page moves slowly so a post can stay visible for days.
- Add a first comment with the why and the stack.

## Gotchas
- Tag older articles with the year, e.g. "(2024)".
- Repeat self-posting gets noticed in a community this small.

## After submitting
- Check the "latest" page. Answer comments if the user wants.
