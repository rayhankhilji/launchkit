---
id: ai-tool-trek
name: "AI Tool Trek"
url: https://aitooltrek.com/submit
category: AI Directory
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: optional
review_time: "72 hours review, listed within 15 days (free); 24 hours (paid)"
verified: true
last_checked: 2026-10-12
---

# AI Tool Trek

An AI tools directory with a free tier that **requires a homepage backlink** and paid tiers that skip the queue. Paid submissions are reviewed first.

## Before you start
- Plans on 2026-10-12:
  - Free Pack: add their partner link to your homepage. Reviewed within 72 hours, listed within 15 days, removed if the backlink is removed.
  - Fast Track: $19.9 promo (list $29.9). Live within 24 hours, featured badge, 5+ dofollow backlinks, lifetime listing, one update within 7 days.
  - Unlimited Pack: $39.9/month promo (list $79.9). Unlimited normal submissions, no backlink. Only makes sense for agencies.
- The free plan needs the user's OK to put a link on the homepage, not just a subpage.
- /signin returned 404 on 2026-10-12. If the form asks for an account, follow `submission.allow_account_creation`.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Website Name | text | `product.name` |
| Website URL | URL | `product.url` |
| Plan | select | Free Pack if the user approves the homepage link, else ask about Fast Track |

## Steps
1. Ask the user: free with a homepage backlink, or $19.9 Fast Track.
2. For free, add the partner link shown on the page to the user's homepage and confirm it's live.
3. Open https://aitooltrek.com/submit. Fill Website Name and Website URL. Choose the plan.
4. Paid: stop at payment and hand off. Free: submit.
5. Screenshot to `.launchkit/evidence/ai-tool-trek.png`. `launchkit mark ai-tool-trek submitted --note "<plan>"`

## Make the listing perform
- Fast Track is the only tier with a featured badge and dofollow links, and it lets you edit the listing once within 7 days. Use that edit to fix any auto-written copy.
- Make sure the homepage title and meta description are clear. With only name and URL in the form, the listing text is built from your site.

## Gotchas
- Removing the backlink later gets a free listing removed.
- The free queue can take up to 15 days after the 72-hour review.

## After submitting
- Search aitooltrek.com for `product.name`. Keep the partner link while the listing is wanted.
