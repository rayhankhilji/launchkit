---
id: slack-marketplace
name: "Slack Marketplace"
url: https://docs.slack.dev/slack-marketplace/slack-marketplace-review-guide/
category: App Store / Marketplace
mode: manual
pricing: Free
login: email           # Slack account with access to the app's config at api.slack.com/apps
captcha: none
backlink_required: no
review_time: "a few weeks (Slack advises planning several weeks)"
verified: true
last_checked: 2026-10-12
---

# Slack Marketplace

Slack's directory of apps installable into workspaces. Relevant if the product has a Slack app (bot, notifications, slash commands). Listing is free, but the bar is high and the app needs real usage first.

## Before you start
- Artifact: a distributed Slack app (OAuth, not Socket Mode only) with tested scopes. Coded workflows are not eligible.
- Minimum traction: apps installed on fewer than 10 active workspaces with fewer than 10 weekly active users aren't listed.
- Required pages: a public landing page made for the Slack app (not a PDF or repo) with install button and privacy link, a support page, a privacy policy, and a post-install success page.
- Assets: icon (high resolution), images at 1600x1000 (8:5), JPG/PNG under 2 MB, showing the app inside Slack. Video strongly recommended.

## Field map (Submit to the Slack Marketplace, in the app config)

| Field | Limit / format | Fill with |
|---|---|---|
| App name | text; "X for Slack", not "Slack X" | `product.name` |
| Short description | 10 words or fewer, no formatting | `product.tagline_short` |
| Long description | plain text with standard emoji codes | `product.description_medium` plus `product.key_features` |
| Icon | square, high res | `assets.logo_square` |
| Images / screenshots | 1600x1000, under 2 MB | screenshots of the app in Slack |
| Video | YouTube link | `links.demo_video` if it shows Slack |
| Categories | dropdown | closest to `product.categories[0]` |
| Pricing | Paid / Paid with free trial / Free and paid plans / Free / Included with service subscription | map `product.pricing_model` and `product.free_trial` |
| Landing, support, privacy URLs | URL | from the product site |
| Scope justifications | text per scope | what each scope is used for |
| Test instructions | text + test workspace/account | steps to reach every feature |

## Steps
1. Manual mode. Don't submit. Suggest it only if a Slack app exists and has 10+ active workspaces.
2. If the user wants help: they open their app at api.slack.com/apps, go to **Submit to the Slack Marketplace**, and complete the checklist. Draft the descriptions and scope reasons for them.
3. They enable **Install from Slack Marketplace** (direct install) on Basic Information.
4. They submit and reply to reviewer feedback.
5. `launchkit mark slack-marketplace needs_human --note "Slack app submission, needs 10+ active workspaces"`

## Make the listing perform
- The short description shows in search results and app cards; say the job in under 10 words ("Standups in Slack without the meeting").
- Screenshots must use realistic names, avatars and channels in a real Slack workspace. Low-quality or off-topic images get returned.
- Turn on direct install so people install from the listing without visiting the site.
- Ask only for scopes you need; extra scopes slow review and lower install rates.

## Gotchas
- Don't stuff keywords in the long description; Slack calls this out.
- Optional scopes used to make the install prompt look lighter will be rejected.

## After submitting
- Allow weeks before any launch date that depends on the listing.
