---
id: featured-com
name: "Featured.com"
url: https://featured.com/signup
category: Press / Media
mode: form
pricing: Freemium
login: google
captcha: unknown
backlink_required: no
review_time: "depends on each journalist request"
verified: true
last_checked: 2026-10-12
---

# Featured.com

PR platform where founders answer journalist requests, podcast invites and other media opportunities to get quoted. It now also runs HARO (helpareporter.com says "Powered by Featured"). Earned mentions, not a directory listing.

## Before you start
- Plans seen on https://featured.com/pricing: Free ($0, roughly 2-3 opportunities a week with a daily allowance), Lite ($29/mo billed annually, $348/yr), Pro ($79/mo billed annually, $948/yr). Use Free unless `launch_settings.budget_usd` covers a paid plan and the user agrees.
- Sign-up: **Continue with Google**, or Name + Email with a magic sign-in link (needs `submission.inbox_access`). Only create an account if `submission.allow_account_creation` is true.
- Every answer is published under the founder's name. Each one needs the user's approval.

## Field map
Sign-up (seen):

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Continue with Google | OAuth | use if `submission.preferred_login` is google |
| Name | text | `founder.name` |
| Email | email | `submission.email` |

Expert profile and answer forms (behind login, not confirmed). Expect:

| Field | Fill with |
|---|---|
| Headshot | `founder.avatar` |
| Title / company | `founder.role`, `product.name` |
| Bio | `founder.bio_short` |
| Website / social | `product.url`, `founder.linkedin`, `founder.twitter` |
| Expertise topics | `product.categories`, `product.tags`, `product.target_audience` |
| Answer to a request | 80-200 words, first person, one concrete example |

## Steps
1. Open https://featured.com/signup, sign in with the preferred method.
2. Complete the expert profile with the fields above. Screenshot to `.launchkit/evidence/featured-com.png`.
3. Search opportunities for the product's topics. Pick 2-3 that fit and draft answers with `launchkit draft featured-com -`.
4. `launchkit mark featured-com submitted --note "profile created, N answers drafted"`. Submit answers only after the user approves each one.

## Make the listing perform
- Answer early. Journalists pick from the first useful replies.
- Give one specific, quotable insight with a number or a short story. Don't pitch the product; the byline link does that.
- Pick requests where the founder is a credible source (their industry, their customer type), not general "business tips" requests.

## Gotchas
- The AI chat on the home page drafts pitches for you. Rewrite anything it produces with skill/human-writing rules before using it.
- Free tier limits are daily credits. Don't burn them on poor-fit requests.

## After submitting
- Answers that get used show up as published mentions. Ask the user to check the dashboard weekly for 2-3 new opportunities.
