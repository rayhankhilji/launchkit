---
id: shinylaunch
name: "ShinyLaunch"
url: https://shinylaunch.com/submit
category: Launch Platform
mode: form
pricing: Free
login: google
captcha: unknown
backlink_required: unknown
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# ShinyLaunch

Small community launch site with a weekly lineup ranked by votes and a weekly winners page. Submissions are free and reviewed. Low effort if the user already has a Google login.

## Before you start
- Login is Google only. Both `/login` and the sign-up page show just "Continue with Google". If no Google session exists, hand the sign-in to the user.
- Have `product.name`, `product.url`, `product.tagline`, `product.description_medium`, `assets.logo_square` and `assets.screenshots` ready.
- No paid tier was visible on the public pages. The FAQ says there are no paid promotions, although a featured/sponsor area exists.

## Field map
The submit form is behind Google sign-in, so the fields and their order are unconfirmed. Expect a standard launch form:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline | short text | `product.tagline` |
| Description | long text | `product.description_medium` |
| Category | select | closest of: AI Assistants, APIs, Analytics & Data, Automation, Boilerplates & Templates, Business & Finance, Chatbots, Chrome Extensions, Content Creation, Customer Support, Design Tools, Dev Tools, Directories, E-commerce, Education & Learning, HR & Recruiting, Marketing, Mobile Apps, Productivity & Management; map from `product.categories[0]` |
| Pricing | select (Free / Freemium / Paid) | map `product.pricing_model`: free -> Free, freemium -> Freemium, paid -> Paid |
| Logo | image | `assets.logo_square` |
| Screenshots | images | `assets.screenshots` |
| Launch date / week | picker, if shown | `product.launch_date` or next open week |

## Steps
1. Open https://shinylaunch.com/submit. It shows "Log in to Submit"; click **Log in with Google**.
2. After sign-in, return to **Submit** in the header.
3. Fill the fields above in the order they appear. Note any field that is not in this map in the run log.
4. Upload logo and screenshots, then click **Submit**.
5. Screenshot the confirmation to `.launchkit/evidence/shinylaunch.png`.
6. `launchkit mark shinylaunch submitted --note "free, awaiting review"`

## Make the listing perform
- Rankings and the weekly winners list come from community votes only. Share the listing on launch day and ask a few real users to vote.
- Pick the most specific category from the list above; broad ones like Productivity & Management are crowded.
- Write the tagline as a plain statement of what it does. Short taglines read better on the weekly lineup cards.

## Gotchas
- Without Google the user cannot submit at all.
- Review time is not published. Do not resubmit if the listing is not live after a few days.

## After submitting
- Check the dashboard or the weekly lineup for the listing. Check `/winners` after the week ends.
