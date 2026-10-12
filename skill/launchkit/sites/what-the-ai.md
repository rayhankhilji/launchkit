---
id: what-the-ai
name: "What The AI"
url: https://whattheai.tech/submit
category: AI Directory
mode: form
pricing: Free/Paid
login: google           # Google or email magic link
captcha: unknown
backlink_required: no
review_time: "queue (free), 24 hours ($49 fast-track)"
verified: true
last_checked: 2026-10-12
---

# What The AI

Big free AI directory (claims 22,000+ tools and a 110K-subscriber newsletter, 81% US audience) with categories,
AI agents, founder stories, a blog and an Arabic version. Free submissions go into a review queue; paying skips it.

## Before you start
- **Submit Tool** redirects to /login when signed out: **Sign in with Google** or an email magic link. A magic link
  needs inbox access; if `submission.inbox_access` is "none", use Google or mark `needs_human`.
- Paid options (from /advertise): Featured Fast-Track Listing $49 (reviewed in 24 hours, featured badge, top of
  category, dofollow link), Guest Post $79, Newsletter Spotlight $350. Skip all at budget 0.
- The form is behind login, so the field map below is unconfirmed.

## Field map (unconfirmed, behind login)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Tool name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline | short text | `product.tagline` |
| Description | long text | `product.description_long` |
| Category | select | site categories include AI Developer Tools, AI Productivity Tools, AI Chatbot, AI Content Generator, AI SEO Assistant, AI Lead Generation, Copywriting; avoid "Other" |
| Pricing | select | `product.pricing_model` |
| Logo / screenshot | upload | `assets.logo_square`, `assets.screenshots[0]` |
| Tier | choice | free (the $49 option is /submit?tier=fast) |

## Steps
1. Search whattheai.tech for `product.name`. If listed, mark `live` and stop.
2. Open https://whattheai.tech/submit, sign in with Google.
3. Fill the form, keep the free tier, submit. Screenshot to `.launchkit/evidence/what-the-ai.png`.
4. `launchkit mark what-the-ai submitted --note "free queue"`

## Make the listing perform
- "Other" is the largest category (3,400+ tools) and the worst place to be. Pick the narrowest AI category that fits.
- The site writes "how to use X" guides and "alternatives" posts. A clear description with named use cases makes the
  tool easier to include in those.
- Founder Stories is an editorial section; if the user wants press, suggest pitching a story after the listing is live.

## After submitting
- Check search after a week. Paid fast-track listings promise 24 hours; free has no stated time.
