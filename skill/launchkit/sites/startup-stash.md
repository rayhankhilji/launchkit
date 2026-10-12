---
id: startup-stash
name: "Startup Stash"
url: https://startupstash.com/add-listing/
category: Launch Platform
mode: form
pricing: Paid
login: none
captcha: recaptcha
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# Startup Stash

Large curated directory of startup tools and resources, with editorial Top Tools, alternatives pages and a weekly newsletter. There is no public self-serve listing form; "Get listed" collects an email and the team follows up.

## Before you start
- The add-listing page has one field (email) and a reCAPTCHA. Do not solve the CAPTCHA; if it shows a challenge, hand it to the user.
- Listing terms and prices are not on the public page. Pricing is sent after contact; treat it as paid and ask the user before agreeing to anything.
- Their "How we review tools" page says editorial rankings are not sold. A paid listing does not buy a Top Tools rank.
- Have `submission.email`, `product.name`, `product.url`, `product.description_medium` and the best category ready for the follow-up email.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Your email address | email, max 400 chars, required | `submission.email` |
| reCAPTCHA | checkbox | user completes it if shown |

## Steps
1. Open https://startupstash.com/add-listing/.
2. Type `submission.email` into "Your email address".
3. If reCAPTCHA shows a challenge, stop and ask the user to finish it. Then click **Submit**.
4. Screenshot to `.launchkit/evidence/startup-stash.png`.
5. `launchkit mark startup-stash submitted --note "email lead sent, waiting for reply with terms"`
6. If the user prefers, email hello@startupstash.com instead with name, URL, one-line description and category.

## Make the listing perform
- Pick the single category where the product fits best (Development & DevOps, Design, Collaboration, Marketing & Email, eCommerce, Hiring & HRMS, Website Builders, Security, Remote Work).
- Alternatives pages (Zoom, Slack, Notion, Mailchimp alternatives) get search traffic. If `product.competitors_alternatives` matches one, ask to be added there.
- Top Tools lists are editorial: they weigh product quality, team background and community mentions such as Reddit and Hacker News.

## Gotchas
- This is a sales lead form, not a listing form. Nothing goes live until the team replies.
- The Advertise on Stash partner offer is separate from a listing.

## After submitting
- Watch `submission.email` for a reply with terms. Bring the price to the user before agreeing.
