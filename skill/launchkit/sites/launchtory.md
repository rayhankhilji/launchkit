---
id: launchtory
name: "Launchtory"
url: https://launchtory.com/projects/new
category: Launch Platform
mode: form
pricing: Free/Paid
login: email
captcha: none
backlink_required: optional
review_time: "manual safety and quality review"
verified: true
last_checked: 2026-10-12
---

# Launchtory

A directory of niche websites and new projects (Ahrefs DR 61 per their homepage). Listings show domain age ("6 days old"),
a one-line pitch and the detected tech stack, grouped into topics and stack pages. Best for small web tools and side
projects; SaaS works too.

## Before you start
- Account: email sign-up at https://launchtory.com/signup (the form has a hidden honeypot field, leave it empty).
- Submission needs approval first. After approval there are **free publishing options**: community votes or website link
  verification (a link back from the user's site), chosen on the project status page. The paid option is
  **Featured Project Publishing, $19 one-time**, featured for one year. Ask before adding a link to the user's site.
- Assets: `assets.logo_square`, `assets.og_image` or a screenshot.

## Field map (form is behind login; inferred from listings, confirm on the page)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Project URL | URL | `product.url` (stack and domain age are detected from it) |
| Project name | text | `product.name` |
| One-line description | short | `product.tagline` |
| Description | text | `product.description_medium` |
| Topic | select | closest match to `product.categories[0]` |
| Logo / image | image | `assets.logo_square`, `assets.og_image` |

## Steps
1. Search the homepage for the domain. If listed, mark `live`.
2. Sign up at https://launchtory.com/signup with `submission.email`, then open https://launchtory.com/projects/new.
3. Fill the form and submit for review. Don't pay.
4. Screenshot to `.launchkit/evidence/launchtory.png`, then
   `launchkit mark launchtory submitted --note "awaiting review; free publish via votes or link verification"`.
5. When the approval email arrives, open the project status page. If the user approved a backlink, choose link
   verification; otherwise choose community votes.

## Make the listing perform
- The card shows only the domain, age and one line. Make the tagline say what the site does in plain words.
- Topic and stack pages are how people browse here, so pick the narrowest accurate topic.

## Gotchas
- They reject adult, gambling, phishing, scams, malware and misleading sites. Paying doesn't bypass review.
- The $19 upgrade doesn't promise traffic; their pricing page says so.

## After submitting
- Listing URL pattern: `https://launchtory.com/projects/<slug>`. Mark `live` once it's published.
