---
id: productivity-directory
name: "Productivity Directory"
url: https://productivity.directory/s/submit
category: Software Review Site
mode: form
pricing: Free/Paid
login: google
captcha: unknown
backlink_required: unknown
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# Productivity Directory

A curated list of productivity apps grouped into about 40 categories (to-do lists, project management, note-taking, calendar, AI tools, AI agents, CRM, habit trackers). Worth it only if the product is a productivity or work tool; anything else will be rejected or buried.

## Before you start
- `product.name`, `product.url`, `product.tagline`, `product.description_medium`, `assets.logo_square`, `assets.screenshots[0]`.
- Login: the submit page redirects to a sign-in screen whose only option is **Continue with Google** (`/user/google`). If `submission.preferred_login` is not google and the user hasn't allowed a Google login, mark `needs_human`.
- The form fields sit behind that login and were not confirmed. The field map below is based on what the public listing pages show (name, logo, one-line summary, category, link).

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product name | text | `product.name` |
| Website | URL | `product.url` |
| One-line summary (shown under the name on category pages) | about 100 chars, one sentence | `product.tagline`, or the first sentence of `product.description_short` |
| Description | free text | `product.description_medium` |
| Category | select | closest of their categories to `product.categories[0]` (e.g. "To-Do Lists", "Project Management", "Note-Taking Apps", "Calendar Apps", "Workflow Automation", "AI Tools", "AI Agents", "CRM") |
| Logo / icon | image | `assets.logo_square` |
| Screenshot | image | `assets.screenshots[0]` |
| Pricing | select or text, if shown | `product.pricing_model` (+ `product.pricing_details`) |

## Steps
1. Search the site (top search box) for `product.name`. If it is already listed, `launchkit mark productivity-directory live --listing-url <url>` and stop.
2. Open https://productivity.directory/s/submit. You'll land on `/user/signin`. Click **Continue with Google** and use the user's Google account.
3. After sign-in you return to `/s/submit`. Fill the fields per the field map. Record any field that isn't in the map in your notes.
4. If a paid or "featured" step appears, choose the free option (budget is $0 unless the user said otherwise).
5. Submit, screenshot the confirmation to `.launchkit/evidence/productivity-directory.png`.
6. `launchkit mark productivity-directory submitted --note "<confirmation text>"`

## Make the listing perform
- Category pages show each app as name + one-line summary, with a "Featured" tag on paid slots at the top. Your one-liner is all most visitors read, so make it say the job the app does ("A calm to-do app with no overdue tasks" style), not a slogan.
- Pick the narrowest category that fits. "AI Tools" is crowded; a specific category like "Habit Tracker" or "Meeting notes" style buckets gets more relative visibility.
- Featured placements are paid (the Advertise link in the footer). Skip unless the user has budget.

## Gotchas
- Google is the only login. No email/password option was visible.
- The Advertise page link returned 404 when checked, so paid pricing is unknown.

## After submitting
- Check the chosen category page and `/recent/list` after a few days to see if the listing went live, then `launchkit mark productivity-directory live --listing-url <url>`.
