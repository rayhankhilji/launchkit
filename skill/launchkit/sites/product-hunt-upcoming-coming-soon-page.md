---
id: product-hunt-upcoming-coming-soon-page
name: "Product Hunt Upcoming (coming-soon page)"
url: https://www.producthunt.com/posts/new
category: Launch Platform
mode: form
pricing: Free
login: google
captcha: unknown
backlink_required: no
review_time: "page appears once the launch is scheduled"
verified: false
last_checked: 2026-10-12
---

# Product Hunt Upcoming (coming-soon page)

Product Hunt no longer has a separate "Upcoming" product. The coming-soon page is now the scheduled launch itself: once a
launch is scheduled (up to about a month ahead), its page is public with a **Notify me** button that collects followers
who get pinged on launch day. Product Hunt blocked automated reads on 2026-10-12, so details here are from the known flow,
not a fresh look.

## Before you start
- This shares the draft with the main `product-hunt` launch. Do both in one session, never two drafts.
- Login: Google, X, LinkedIn or email, on the founder's personal account (`founder.name`). No company accounts.
- **Never schedule or publish.** The user picks the date and clicks Schedule (see `05-site-types.md`).
- Assets: `assets.logo_square` 240x240, `assets.screenshots` at 1270x760, `links.demo_video` (YouTube).

## Field map (Product Hunt launch form)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product link | URL | `product.url` |
| Name | 40 chars | `product.name` |
| Tagline | 60 chars | `product.tagline_short` or `product.tagline` |
| Description | 500 chars | `product.description_medium` |
| Topics | up to 3 | from `product.categories` mapped to PH topics |
| Pricing | Free / Paid / Paid with free trial or plan | `product.pricing_model` |
| Thumbnail | square, 240x240 | `assets.logo_square` |
| Gallery | images 1270x760, video | `assets.screenshots`, `links.demo_video` |
| Makers | handles | founder and `company.team` |
| First comment | text | `copy.maker_comment` |
| Launch date | calendar | leave for the user |

## Steps
1. Sign in at https://www.producthunt.com/ and click **Submit** (or open /posts/new).
2. Fill each step from the map and save as a draft. Stop at the launch date screen.
3. `launchkit mark product-hunt-upcoming-coming-soon-page needs_human --note "PH draft ready, choose launch date"`
4. Tell the user: once they schedule, the page goes live as a coming-soon page; send them the link.

## Make the listing perform
- Schedule 2-4 weeks out so the coming-soon page has time to collect followers. Each follower gets a launch notification.
- Share the coming-soon link in the user's newsletter, X bio and waitlist emails. Ask for "Notify me", not upvotes.
- PH days start at 12:01 AM Pacific. Tuesday to Thursday are the most competitive days.

## Gotchas
- Old guides mention "Ship" or "Upcoming pages"; those are discontinued.
- Don't ask for upvotes in posts. PH penalizes vote requests.

## After submitting
- After the user schedules, the coming-soon page URL is the product's launch URL. Record it with `launchkit mark`.
