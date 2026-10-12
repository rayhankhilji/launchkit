---
id: 10words
name: "10words"
url: https://portal.10words.io/auth/register
category: Launch Platform
mode: form
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# 10words

Newsletter and site (by @cjbeauchamp) that describes each startup in 10 words or less, no marketing fluff. Each accepted project goes into the daily (Mon-Fri) or weekly (Friday top picks) email, the website, X, the discover section and the browser extensions, all free.

## Before you start
- https://app.10words.io/submit sends you to https://portal.10words.io/auth/register. Account: email + password.
- The one thing that matters is a 10-word description. Write it before opening the site.

## Field map
Sign-up fields are confirmed. Project fields sit behind the account and are unconfirmed beyond name, URL and the 10 words.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Email address | email | `submission.email` |
| Password | text | browser-suggested strong password, never saved in launchkit files |
| Project name | text | `product.name` |
| URL | URL | `product.url` |
| Description | 10 words max | `product.tagline_short` trimmed to 10 words or fewer; plain words, what it does |

## Steps
1. Open https://portal.10words.io/auth/register, sign up with `submission.email`. Confirm the email if asked (needs `submission.inbox_access` or the user).
2. Open the submit form in the portal. Fill name, URL and the 10-word line.
3. Count the words before submitting. Submit, screenshot.
4. `launchkit mark 10words submitted`.

## Make the listing perform
- Write the 10 words as "verb + what + for whom": "Turns Figma frames into clean React code for frontend teams". No adjectives like "powerful" or "AI-powered" unless AI is the point.
- Readers vote via X sign-in on the site. Trending entries make the Friday weekly digest, so share the listing on X the day it runs.

## Gotchas
- Over 10 words will likely be cut or rejected. Count hyphenated words as one at most.

## After submitting
- Check https://app.10words.io/archives for the issue that includes the project.
