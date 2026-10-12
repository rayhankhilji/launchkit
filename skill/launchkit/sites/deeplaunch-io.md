---
id: deeplaunch-io
name: "DeepLaunch.io"
url: https://deeplaunch.io/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: yes
review_time: "up to 2 business days, then the next free daily slot you pick"
verified: true
last_checked: 2026-10-12
---

# DeepLaunch.io

AI and SaaS tool directory with daily scheduled publishing. The free listing gives a dofollow link only while their badge stays on your site. Worth it if the user is fine adding a badge.

## Before you start
- `product.description_long` must be 500 to 3000 characters (markdown allowed). Trim or extend before you open the form.
- `assets.logo_square` must be SVG, WEBP, PNG or JPG under 500 KB. Compress it first if needed.
- Up to 4 screenshots from `assets.screenshots`, each under 5 MB.
- Free listing requires their dofollow badge on the user's site and they re-check it. Check `launch_settings.add_badge_to_site`; if it's "ask", ask once.
- A **Sign In** is needed before submitting. The login method wasn't visible logged out; prefer `submission.preferred_login`.

## Field map

Step 1, "Tool Information":

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Tool URL * | URL | `product.url` |
| Tool Name * | text | `product.name` |
| Tagline * | 160 chars | `product.tagline` |
| Description * | 500-3000 chars, markdown | `product.description_long` (add a short feature list from `product.key_features` if under 500) |
| Logo * | SVG/WEBP/PNG/JPG, max 500 KB | `assets.logo_square` |
| Screenshots | up to 4, 5 MB each | `assets.screenshots` (best first) |
| Categories * | up to 3 | closest matches to `product.categories` from: AI, Directory, Image Generation & Editing, Video, Chatbots, Writing, Audio, Boilerplates, Design, Content Creators, Building Products, Social Media, Education, Automation, Health, Productivity, Translation, Games, Browser extensions, SEO, Daily Life, Advertising, Developer Tools, Marketing, No Code, Analytics |
| Pricing Model * | select | map `product.pricing_model` to the closest option (free, freemium, paid) |
| Platforms * | multi-select | `product.platforms` |
| Discount Code | optional | `product.deal_or_promo_code` |
| Founded Year | optional | `company.founded_year` |
| YouTube Demo Video | optional URL | `links.demo_video` if it's a YouTube link |
| Founder's Twitter | optional URL | `founder.twitter` |
| Affiliate Program | optional | leave blank unless the profile mentions one |

Step 2, "Submission Type": choose **Free Listing**.

## Steps
1. Open https://deeplaunch.io/submit. Search the homepage for `product.name` first; if listed, mark `live` and stop.
2. Sign in when prompted.
3. Fill step 1 as above, click **Next**.
4. On "Submission Type" pick **Free Listing**. Copy the badge embed (Dark, Light or Transparent) and give it to the user to add to their site, unless they already approved it and you have site access.
5. After badge verification, pick an available publication date (5 free slots per day) on or after `product.launch_date`.
6. Submit, screenshot to `.launchkit/evidence/deeplaunch-io.png`, then `launchkit mark deeplaunch-io submitted --note "free slot <date>, badge required"`.
7. If the badge can't be added yet, mark `needs_human` with "badge needed for free listing".

## Make the listing perform
- Listings publish at 09:00 Washington, DC time (13:00 or 14:00 UTC). Pick a weekday slot so the user can share it that day.
- The tagline field allows 160 chars but the cards show it short. Lead with the verb and outcome in the first 60 chars.
- Three well-chosen categories means three category pages. Put the most specific one first (e.g. "Developer Tools" before "AI").
- Add a discount code if the profile has one; the form highlights it to their community.

## Gotchas
- Removing the badge later turns the link to nofollow. Tell the user to keep it.
- Paid options (One-Time Pro $19.90 lifetime, Featured $29.90/month, Ultimate $199/year) skip the queue and the badge. Skip unless `launch_settings.budget_usd` covers it and the user approved.
- A description under 500 characters blocks the form.

## After submitting
- They say they review within 2 business days. The listing appears at `https://deeplaunch.io/product/<slug>` on the chosen date.
- Approved listings can be edited from the dashboard.
