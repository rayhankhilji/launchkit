---
id: aidirectori-es
name: "AIDirectori.es"
url: https://www.aidirectori.es/dashboard/submit-ai-tool
category: AI Directory
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: yes
review_time: "72 hours (free)"
verified: true
last_checked: 2026-10-12
---

# AIDirectori.es

Two things in one: a paid done-for-you submission service ($99-$199) and its own AI tools directory (about 1,800 tools, claims DR 70 and 73K monthly visitors). We only want the directory listing. The free tier needs a backlink.

## Before you start
- Login required (https://www.aidirectori.es/auth/signin). The "Submit Your Tool" button on /ai-tools redirects to sign-in, then to `/dashboard/submit-ai-tool`. Sign-in options weren't visible without starting a session (unconfirmed; likely email or Google).
- Free tier requires a backlink or their badge on the user's homepage or footer, and the tool must have DR above 10. Check `launch_settings.add_badge_to_site`.
- Ignore the "Directory submissions" plans (Starter $99, Pro $149, Premium $199). Those are a service that does what launchkit already does.

## Field map

The dashboard form is behind login; field list unconfirmed. Expect:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Tool name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline / short description | short text | `product.tagline` or `product.description_short` |
| Description | long text | `product.description_long` |
| Category | select | closest of Business, AI, Marketing, Image, Video, Writing, Design, SEO, Development, Data, Personal Life |
| Pricing | select | map `product.pricing_model` |
| Logo / image | upload | `assets.logo_square`, `assets.og_image` |
| Plan | Free / Pro / Monthly | Free |

## Steps
1. Search https://www.aidirectori.es/ai-tools for `product.name`. If listed, mark `live` and stop.
2. Add the backlink or badge to the user's site if approved (badge link is on the pricing page, "Tool submission" tab).
3. Open https://www.aidirectori.es/dashboard/submit-ai-tool, sign in, fill the form, choose **Free**, submit.
4. Screenshot to `.launchkit/evidence/aidirectori-es.png`. `launchkit mark aidirectori-es submitted --note "free with backlink, ~72h"`

## Make the listing perform
- Tool listing tiers (Oct 2026): Free (backlink required, listed within 72 hours), Pro $49 one-time (was $99; homepage feature, listed instantly, one newsletter mention, no backlink), Monthly $9.99 (same as Pro, removed on cancel).
- The tools page sorts by "Most recent" and category. Pick the narrowest category; "Business" and "AI" are crowded.
- Founder profiles show published tools and reviews. Fill the founder bio from `founder.bio_short` so the profile page isn't empty.

## Gotchas
- The NSFW category exists on this site. Make sure the product isn't miscategorised next to it.
- Don't buy a submission plan by accident; the "Get Started" buttons on the default pricing tab are for the service.

## After submitting
- Check the dashboard for status, then the listing under /ai-tools. Mark `live` with the URL.
