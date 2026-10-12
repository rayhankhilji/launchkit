---
id: there-s-an-ai-for-that
name: "There's An AI For That"
url: https://theresanaiforthat.com/launch/
category: AI Directory
mode: form
pricing: Paid
login: unknown
captcha: unknown
backlink_required: no
review_time: "1-2 days"
verified: true
last_checked: 2026-10-12
---

# There's An AI For That

The largest AI directory (TAAFT), with a big newsletter. Listings are paid one-time launches. It has the most traffic of any site in this chunk, but it costs money, so the user decides.

## Before you start
- Get the user's approval on a package. Prices seen on 2026-10-12:
  - Low traffic: $49 one-time. Permanent listing, 20-100 estimated clicks, basic analytics, $100 PPC bonus.
  - Maximum Exposure: $437 one-time. 700-10,000+ estimated clicks, priority review and support, more analytics, guaranteed newsletter placement, $300 PPC bonus.
  - Custom campaign: contact them.
- Free route: TAAFT runs a monthly thread on X where founders reply with their tool. One tool per thread may get picked. That is a `post` for the user, not this form.
- Payment is always `needs_human`.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Tool URL | URL, required | `product.url` |
| Schedule launch | checkbox, optional | check only if the user picked a launch date |
| Launch date and time | datetime | `product.launch_date`, 9:00 in the user's time zone |
| Timezone | select | the user's time zone |
| Number of launches | number | 1 |
| Prepaid code | text, optional | leave empty unless the user has one |
| Email | email | `submission.email` |

TAAFT pulls name, description and images from your site after you enter the URL. You review and edit them after the launch is published.

## Steps
1. Confirm package and launch date with the user.
2. Open https://theresanaiforthat.com/launch/. Enter `product.url`, then the schedule fields and email.
3. Pick the package. Stop at the payment step and hand off to the user. Don't enter card details.
4. Screenshot the package page to `.launchkit/evidence/there-s-an-ai-for-that.png`.
5. `launchkit mark there-s-an-ai-for-that needs_human --note "paid launch, user to pay"`

## Make the listing perform
- Your homepage title and meta description become the listing copy, so make sure they say the task in plain words ("AI for writing cover letters").
- TAAFT is organized by task. Listings rank on the task pages people search, so use the single most searched task name for your tool.
- The $437 package is the only one with guaranteed newsletter placement, which is where most clicks come from.

## Gotchas
- https://theresanaiforthat.com/submit/ shows a Cloudflare check. Use /launch/ instead. Don't solve challenges, hand them to the user.
- Rejected tools get a refund.

## After submitting
- Average processing is 1-2 days with manual review. They email when it's live.
- Editing after publication is free. Check the listing page and fix the description and screenshots.
