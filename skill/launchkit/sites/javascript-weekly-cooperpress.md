---
id: javascript-weekly-cooperpress
name: "JavaScript Weekly (Cooperpress)"
url: https://cooperpress.com/
category: Dev / Open Source
mode: form
pricing: Free/Paid
login: none
captcha: none
backlink_required: no
review_time: "no reply unless included"
verified: true
last_checked: 2026-10-12
---

# JavaScript Weekly (Cooperpress)

Cooperpress publishes JavaScript Weekly, Node Weekly, React Status, Frontend Focus, Golang Weekly, Ruby Weekly, Postgres Weekly and others (450,000+ developers total, 35 to 60 percent open rates). Editorial links are free and picked by editors; sponsorship is paid and booked by quarter.

## Before you start
- Editorial works like a pitch: email `editor@cooperpress.com` with a link. Draft the email and get user approval before sending.
- Pick the right newsletter for the stack in `product.platforms` / `product.tags` (JavaScript Weekly, Node Weekly, React Status, Frontend Focus, Golang Weekly, Ruby Weekly, Postgres Weekly). Mention it in the subject.
- Editors prefer open-source libraries, tools, releases and technical articles. A closed SaaS with no technical angle rarely gets picked; still okay to try if there is a useful free tier or a tutorial.
- Sponsorship: contact form on https://cooperpress.com/advertise/ (Name, Email, Company, Your website, Message) or `sales@cooperpress.com`. Prices are in the media kit, not on the page. There's a waiting list and quarterly reservations. Only with explicit budget approval.

## Field map

| Field | Limit / format | Fill with |
|---|---|---|
| To | email | `editor@cooperpress.com` |
| Subject | short | "For <newsletter>: <product.name>, <product.tagline_short>" |
| Body line 1 | 1 sentence | what it is, from `product.description_short` |
| Body link | URL | `product.repo_url` if open source, else `product.url` or a technical post |
| Body detail | 2 to 3 sentences | what's technically new vs `product.competitors_alternatives`, license, version |
| From | email | `founder.email` |
| Sponsor form: Name / Email / Company / Your website / Message | text | `founder.name` / `founder.email` / `company.name` / `product.url` / which newsletter, timing, budget |

## Steps
1. Write the email in `.launchkit/drafts/javascript-weekly-cooperpress.md` and run `launchkit lint-copy` on it.
2. Show it to the user; send only after approval, from `founder.email`.
3. `launchkit mark javascript-weekly-cooperpress drafted --note "editor pitch drafted"`, then `submitted` when sent.
4. Sponsorship: only if approved, fill the advertise form and send. Mark `needs_human` for any booking or payment.

## Make the listing perform
- Editors write their own blurb, so give them the facts in the first two lines: name, what it does, license, link.
- A new major release, a benchmark, or a well-written tutorial is more likely to be picked than "we launched".
- Send when there is real news. One pitch per release, no follow-up nags.

## Gotchas
- No acknowledgement is normal. Check the next two issues.
- The advertise form has a hidden honeypot field ("Don't fill this out if you're human"). Leave it empty.

## After submitting
- Look for the link in the next issues on the newsletter's site archive and record it with `launchkit mark ... live`.
