---
id: trend-hunter
name: "Trend Hunter"
url: https://www.trendhunter.com/submit
category: Press / Media
mode: pitch
pricing: Free
login: email
captcha: recaptcha
backlink_required: no
review_time: "about 1 day (per FAQ) for posted trends"
verified: true
last_checked: 2026-10-12
---

# Trend Hunter

Large trend and innovation site where contributors ("Trend Hunters") post short articles about new products, and editors also take tips. Good for consumer products, design-led launches and novel business ideas; it has Tech and Business categories. Two free routes: post a trend yourself from a free contributor portfolio, or send a tip to the editors.

## Before you start
- Search Trend Hunter for the product first. Their FAQ says duplicates are the main reason posts never reach the front page.
- Posting a trend needs a free contributor account (the submit flow is "I'm ready to submit" after login; the exact form was not viewed because it is behind login). If `submission.allow_account_creation` is false, use the tip route.
- Image: one strong product photo or `assets.og_image` / `assets.screenshots[0]`. They resize automatically.
- The contact form uses reCAPTCHA. If a challenge shows up, stop and mark `needs_human`.

## Field map

Tip route (contact form at https://www.trendhunter.com/contact):

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Your email* | email | `submission.email` |
| Subject* | select: Tips, Article Corrections..., Future Festival, Advertising, Innovation Assessment, Technical Issues, Other | "Tips" |
| How can we help?* | textarea, 1000 chars | 2-3 sentences on what's new, `product.url`, link to an image or `links.press_kit` |

Post-a-trend route (after login, unconfirmed fields): headline, one or two paragraphs, image upload, category, source link. Fill with a sentence-case headline from `product.tagline`, body from `product.description_medium` written in third person, category Tech or Business, link `product.url`.

## Steps
1. Open https://www.trendhunter.com/submit. Use the search box to check for duplicates.
2. Tip route: click "No, I just want to send a tip" (or go to /contact), fill the form, choose "Tips".
3. Post route: click **I'm ready to submit**, sign in or create an account with `submission.email`, then write the trend.
4. `lk draft trend-hunter -` and mark `drafted`. Submit only with approval. Then `lk mark trend-hunter submitted --note "tip" or "posted trend"`.

## Make the listing perform
- Trend Hunter's front page drives most traffic (FAQ). Posts get featured when they are original, well written and not duplicates.
- Write it like a trend article, not an ad: what it is, what makes it different, who it's for. Two short paragraphs.
- Visual products win. A clean photo on a plain background beats a dashboard screenshot.

## Gotchas
- Content you post "becomes property of Trend Hunter Inc." per their terms. Mention this to the user.
- Plans, keynotes and Innovation Assessment are paid services, unrelated to coverage.
- tips@trendhunter.com works too, but the site says the form is faster.

## After submitting
- Posted trends appear in your portfolio after review (about a day). Tips have no confirmation.
