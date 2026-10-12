---
id: discord-app-directory
name: "Discord App Directory"
url: https://discord.com/developers/applications
category: App Store / Marketplace
mode: manual
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: "verification takes days to weeks; listing appears within 24h of enabling discovery"
verified: true
last_checked: 2026-10-12
---

# Discord App Directory

Discord's searchable directory of bots and activities, also shown in the in-chat App Launcher. Free. Only relevant if the user has a Discord app (bot, slash commands or an Activity).

## Before you start
- A working Discord app in the Developer Portal (Discord login).
- App Verification: the team owner completes identity verification and the app meets the criteria listed under App Verification in the portal. Discord's long-standing rule is that bots can apply once in 75+ servers and must verify before 100; confirm in the portal because the article could not be fetched.
- Then Discovery > Discovery Status lists the remaining eligibility checks (content rules, privacy policy and terms URLs, a support server).
- Images and GIFs of the app working in a server, optional video.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Description (General Information) | 400 chars | `product.description_short`, shown on the bot profile |
| Summary (Discovery Settings) | 200 chars | problem-first one-liner from `product.tagline` + `description_short` |
| Expanded description | Markdown | value first, then how to get started (from `product.description_long`) |
| Tags | up to 5 | `product.tags` that users would type |
| Category | dropdown | closest to `product.categories[0]` |
| Images / video | uploads | screenshots of commands in a real server |
| Support server | invite link | `links.discord` |
| Privacy policy / Terms URLs | URL | user's legal pages |
| Website | URL | `product.url` |

## Steps
1. Manual. Don't create apps or submit verification.
2. Suggest it if `product.platforms` mentions Discord or the product has a bot.
3. The user verifies the app, fills Discovery Settings, then clicks **Enable Discovery**. Search the App Directory after up to 24 hours.
4. `launchkit mark discord-app-directory needs_human --note "needs verified Discord app"`

## Make the listing perform
- Search ranks by relevance and usage, so the summary and tags matter most. Open the summary with the problem the bot solves, not "a multipurpose bot".
- Show the top commands in images; many people skip the video.
- A busy support server linked on the page builds trust; post updates there and keep the description in sync.

## Gotchas
- Using in-app purchases or ads adds labels on the page; disclose them correctly.
- Verification is per team owner identity; use the founder's real details.

## After submitting
- Share the directory link (`discord.com/discovery/applications/<id>`) in launch posts and on `product.url`.
