---
id: saas-ai-tools
name: "SaaS AI Tools"
url: https://saasaitools.com/select-listing-type/
category: AI Directory
mode: form
pricing: Free/Paid
login: email            # email + password account on saasaitools.com
captcha: unknown
backlink_required: unknown
review_time: "3 business days (featured)"
verified: true
last_checked: 2026-10-12
---

# SaaS AI Tools

AI and SaaS tools directory run by Bren Kinfa, with a Facebook community and a newsletter (claims 15,000+ monthly
visitors). The **+ Submit** button needs an account. At the live check, logged-out users were sent to
/signup/, which returned "page not found", so new accounts may not be possible right now.

## Before you start
- Login is email + password at https://saasaitools.com/signin/ ("Sign up now" link). Use `submission.email` and a
  browser-generated password. If sign-up 404s, mark `needs_human` ("signup page broken").
- The listing form and the free vs paid choice are behind the login, so the field map below is unconfirmed.
- Featured is $67/month (top 12 homepage spot, badge, highlighted box, Facebook group post). Skip at budget 0.

## Field map (unconfirmed, behind login)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Listing type | choice | the free option; never the featured one at budget 0 |
| Tool name | text | `product.name` |
| Website | URL | `product.url` |
| Tagline | short text | `product.tagline` (cards show one line, e.g. "Your AI sales agent for Instagram DMs.") |
| Description | long text | `product.description_long` |
| Category | select | map to: Writing, Social Media, Research, Logo Design, Music, Studying, Image Editing, Image Generating, Design, Development, Chatbot, Email, Avatar |
| Pricing | select | `product.pricing_model` |
| Logo / image | upload | `assets.logo_square`, `assets.screenshots[0]` |

## Steps
1. Open https://saasaitools.com/ and search for `product.name`. If listed, mark `live` and stop.
2. Click **Login / Signup**, then **Sign up now**. If the page says "Sorry, the page you were looking for was not found",
   mark `needs_human` with "SaaS AI Tools signup broken, retry later" and stop.
3. Once logged in, click **+ Submit** (goes to /select-listing-type/). Pick the free listing type.
4. Fill the form with the field map, submit, screenshot to `.launchkit/evidence/saas-ai-tools.png`.
5. `launchkit mark saas-ai-tools submitted --note "<confirmation>"`

## Make the listing perform
- Cards show only name plus one line. A concrete one-liner that names the user and task wins clicks here.
- Category pages are titled "Best AI X Tools" and rank in Google, so the right category matters more than tags.
- The community tab (Facebook group, forum threads) accepts discussion posts; don't post promo there unless the user wants it.

## Gotchas
- /advertise returns 404; the real paid page is /get-featured/.
