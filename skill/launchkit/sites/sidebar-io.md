---
id: sidebar-io
name: "Sidebar.io"
url: https://sidebar.io/submit
category: Newsletter
mode: pitch
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: "editor picks 5 links per weekday; no confirmation"
verified: true
last_checked: 2026-10-12
---

# Sidebar.io

"The five best design links, every weekday." A design newsletter run by UX Collective (maintained by Fabricio Teixeira, created by Sacha Greif) with about 40k email subscribers and a homepage of ~1.5k uniques a day. Anyone with an account can submit a link; editors pick five per day. It suits design-led products, free design tools, and good case studies. Plain SaaS pages rarely make it.

## Before you start
- Read the guidelines at https://sidebar.io/about. They say: high effort content (case studies, tutorials), new content only (a few months old at most), **no paid products** unless there is a free or demo version that is useful on its own, and nothing that needs a heavy download (app store links, PDFs, videos are rarely featured).
- Decide what to submit. Best: a write-up or case study about building the product (a blog post), or the product URL if it has a useful free tier. If neither exists, mark `skipped` ("not a fit").
- Account: `/submit` says "Please log in or sign up first." Sign-up at https://sidebar.io/log-in uses email and password. Only create it if `submission.allow_account_creation` is true.

## Field map

The submit form only shows after login, so fields below are unconfirmed beyond URL and title.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| URL | URL | the case study / blog post URL, or `product.url` if it has a free tier |
| Title | short, sentence case | the article title, or `product.name` + " - " + `product.tagline_short` |
| Category | select (if shown) | see https://sidebar.io/categories; pick the closest design category, e.g. Tools, UX, Typography |
| Description / body | optional | one plain sentence from `product.description_short` |

## Steps
1. Open https://sidebar.io/about and confirm the item passes the four guidelines above.
2. Go to https://sidebar.io/log-in, sign up with `submission.email` (browser password manager), and confirm email if asked.
3. Open https://sidebar.io/submit, fill URL and title, pick the category, and click **Submit**.
4. Screenshot to `.launchkit/evidence/sidebar-io.png`, then `launchkit mark sidebar-io submitted --note "editor review, check daily issue"`. If pitch mode is not enabled or the user hasn't approved, save the drafted URL and title with `launchkit draft sidebar-io -` and mark `drafted`.

## Make the listing perform
- Submit a piece of content, not an ad. "How we designed X" with screenshots and process gets picked; a pricing page does not.
- Submit within days of publishing. Older links are rejected under "new content only".
- Use the article's real title in sentence case. No taglines, no emoji.
- Free design tools (icon sets, color tools, Figma plugins with a free tier) are a strong fit.

## Gotchas
- Paid-only products are explicitly avoided. Don't submit them.
- Sponsored links are a separate paid product: $950 per sponsorship (discounts for bootstrapped teams) via https://sidebar.io/sponsor. Skip at budget 0.
- Don't submit the same product twice in a short window.

## After submitting
- Check the homepage and the next few daily emails, or the archive at https://sidebar.io/archives. If picked, mark `submitted` with the archive link.
