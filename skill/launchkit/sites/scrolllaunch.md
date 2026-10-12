---
id: scrolllaunch
name: "ScrollLaunch"
url: https://www.scrolllaunch.com/dashboard/products/new
category: Launch Platform
mode: form
pricing: Free/Paid
login: google
captcha: none
backlink_required: optional
review_time: "launches on the chosen ISO week (Mon-Sun)"
verified: true
last_checked: 2026-10-12
---

# ScrollLaunch

Weekly launch board run by a solo founder. Products compete Monday to Sunday (ISO week) on upvotes, and every product keeps a permanent page with reviews. Worth it for a free permanent page; the dofollow link needs a badge or the $39 Premium plan.

## Before you start
- Login is Google OAuth only. Their `/auth.md` says there is no headless sign-up path, so hand the Google sign-in to the user if `submission.preferred_login` is not google or no session exists.
- Have `product.url`, `product.tagline`, `product.description_medium`, `assets.logo_square` and 1 to 3 `assets.screenshots` ready. The form can prefill from the URL with AI; check every prefilled field.
- Decide with the user: free (25 free slots per ISO week, dofollow only while a ScrollLaunch badge or link stays on the site, rechecked weekly) or Premium $39 one-time (always dofollow, gold verified badge, priority placement, Monday Substack mention, a ~1,800-word blog post with 4+ dofollow links).
- Pick the launch week. Monday gives the full 7 days of voting.

## Field map
The product form sits behind Google sign-in, so the exact order is unconfirmed. Public docs show these fields:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Website URL | URL, triggers AI prefill | `product.url` |
| Product name | text | `product.name` |
| Tagline | short text | `product.tagline` |
| Description | long text | `product.description_medium` |
| Category | select (Productivity, AI, Marketing, SaaS, DevTool, Ecommerce, Gaming, Other, ...) | closest match to `product.categories[0]`, otherwise "Other" |
| Logo | image | `assets.logo_square` |
| Screenshots / gallery | images | `assets.screenshots` |
| Launch week | week picker | `product.launch_date` week, or next open Monday |
| Plan | Free / Premium | Free unless the user approved $39 |

## Steps
1. Open https://www.scrolllaunch.com/dashboard/products/new. You land on `/auth/signin`; click **Continue with Google** and let the user finish the Google step if needed.
2. Paste `product.url` into the URL field and wait for the AI prefill.
3. Replace prefilled name, tagline and description with the profile values. Pick the category.
4. Upload the logo and screenshots. Pick the launch week.
5. Choose Free. If `launch_settings.add_badge_to_site` is true, copy the badge snippet shown for later.
6. Click **Submit** / **Schedule launch**. Screenshot the confirmation to `.launchkit/evidence/scrolllaunch.png`.
7. `launchkit mark scrolllaunch submitted --note "scheduled for ISO week <n>"`

## Make the listing perform
- Ranking is total upvotes for the week, with engagement as tie-breaker. Launch on a Monday and share the product page that day.
- Post `copy.maker_comment` as the first comment on launch day and answer every comment; comments and upvotes also build the site's daily streaks, which keeps makers coming back to your page.
- Ask early users to leave a review on the product page. Makers cannot review their own product.
- Choose a narrow category over "Other"; category pages are where most non-launch-day traffic lands.

## Gotchas
- Free slots cap at 25 per ISO week. If the week is full, pick the next week instead of upgrading without approval.
- The free link turns nofollow if the badge is removed. Tell the user before removing it.
- Ad slots ($19/week center, $29/week sidebar) and newsletter ads ($49 per issue) are separate upsells. Skip them.

## After submitting
- The product shows in the dashboard and on the board for the chosen week. Check the public page on launch Monday.
- If the badge was added, confirm the page later shows a dofollow link.
