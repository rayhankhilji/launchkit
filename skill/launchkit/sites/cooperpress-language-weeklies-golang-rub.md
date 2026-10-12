---
id: cooperpress-language-weeklies-golang-rub
name: "Cooperpress language weeklies (Golang/Ruby/etc.)"
url: https://cooperpress.com/classifieds/
category: Dev / Open Source
mode: form
pricing: Free/Paid
login: none
captcha: none          # contact forms use a honeypot field
backlink_required: no
review_time: "editorial picks weekly; ads booked by email"
verified: true
last_checked: 2026-10-12
---

# Cooperpress language weeklies

Cooper Press publishes JavaScript Weekly (170k+), Node Weekly, Frontend Focus, React Status, Golang Weekly, Ruby
Weekly, Postgres Weekly, StatusCode and others (450k+ subscribers combined, 30-60% open rates). Editorial links are
picked by the editors; the paid route is a 200-character classified ad, or a main sponsorship booked a quarter ahead.

## Before you start
- Pick the right title for the stack: JS/TS -> JavaScript Weekly or Node Weekly; React -> React Status; CSS/browser
  -> Frontend Focus; Go -> Golang Weekly; Ruby/Rails -> Ruby Weekly; Postgres -> Postgres Weekly; general dev/ops -> StatusCode.
- Free route (unconfirmed process): there is no public submission form on the newsletter sites. Editors pick from
  what they read; a link suggestion can go by replying to an issue email or via the contact form. Draft only.
- Paid route: classified (200 chars, built on the page) or sponsorship. Needs budget; mark `needs_human` if > 0.

## Field map (classified builder at /classifieds)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Classified ad text | 200 chars, bold/italic/link allowed | "**`product.name`** - `product.tagline`. <one concrete fact>." Link the name to `product.url` |
| Name | text | `founder.name` |
| Email | email | `founder.email` |
| Company | text | `company.legal_name` or `product.name` |
| Your website | URL | `product.url` |
| Message | text | which newsletter(s), preferred weeks, budget (ask user) |

## Steps
1. If budget is 0: draft a short link suggestion (what's new, link to repo or technical post) for the most
   relevant title, `lk draft cooperpress-language-weeklies-golang-rub -`, mark `drafted`. Stop.
2. If budget allows: open https://cooperpress.com/classifieds/, write the ad in the builder (watch the 0/200
   counter), fill the contact fields. Mark `needs_human` for the user to confirm price and send.

## Make the listing perform
- Editors favour releases, open source projects and technical articles, not product homepages. Link a repo or
  "how we built it" post.
- Classifieds: a concrete number or free tier in the first 80 chars; readers skim.

## Gotchas
- The contact form has a hidden "Don't fill this out if you're human" field. Leave it empty.
- Sponsorships have a waiting list; quote dates a quarter out.

## After submitting
- Check the relevant newsletter's latest issue page (e.g. javascriptweekly.com/latest) the following week.
