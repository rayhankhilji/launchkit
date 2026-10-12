---
id: ai-toolz-dir
name: "AI Toolz Dir"
url: https://www.aitoolzdir.com/submit
category: AI Directory
mode: form
pricing: Free/Paid
login: none
captcha: none
backlink_required: yes
review_time: "48 hours free (with backlink), 24 hours paid"
verified: true
last_checked: 2026-10-12
---

# AI Toolz Dir

Small indie AI directory that sells itself on a DR 63 dofollow backlink. The free listing is only granted if the user's site links back to aitoolzdir.com, and the listing stays only while that link stays.

## Before you start
- Free tier needs this link on the user's site before submitting: `<a href="https://www.aitoolzdir.com" target="_blank">AI Toolz Dir</a>`. Check `launch_settings.add_badge_to_site`. If it's "ask", ask the user. If "no", skip this site at budget 0.
- Logo is a URL, not an upload. You need a public URL for `assets.logo_square` (e.g. the logo on the user's site or `assets.og_image` if square).
- No login.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Tool Name | text | `product.name` |
| Tool URL | URL | `product.url` |
| Logo URL | URL to a square image | public URL of `assets.logo_square` |
| Category | dropdown | one of: Text Generation, Image Generation, Audio Generation, Video Generation, Chat Bots, Agents, Copilots. Map `product.categories[0]`: writing/content -> Text Generation, assistants inside other tools -> Copilots, autonomous workflows -> Agents, chat products -> Chat Bots |
| Short Description | 200 chars | `product.description_short` |
| Full Description | 500 chars | trimmed `product.description_medium` |
| Your Email | email | `submission.email` |

## Steps
1. Browse the matching category page for `product.name`. If listed, mark `live` and stop.
2. Confirm the backlink is live on the user's homepage or footer (curl the page and grep for `aitoolzdir.com`).
3. Open https://www.aitoolzdir.com/submit and fill the fields above.
4. Click **Get listed for free** (not "Get listed for $25"). Screenshot the confirmation to `.launchkit/evidence/ai-toolz-dir.png`.
5. `launchkit mark ai-toolz-dir submitted --note "free with backlink, ~48h review"`

## Make the listing perform
- Only 7 categories, so most tools land in Agents or Copilots. Pick by what the user actually searches for, not by what sounds impressive.
- The 500-char full description is the whole page body. Use it for concrete use cases from `product.use_cases`, not a repeat of the short description.
- Paid option (Oct 2026): $25 one-time, no backlink needed, listed within 24 hours. Skip at budget 0.
- The homepage has a single "Featured Tool" slot and a "Free Tools" filter. If the product has a free tier, say so in the short description.

## Gotchas
- Removing the backlink later can get the free listing removed.
- Logo URL must be a direct image link; a page URL breaks the card.
- Full description hard-stops at 500 characters.

## After submitting
- They email `submission.email` on approval. Check the category page after 48 hours and mark `live`.
