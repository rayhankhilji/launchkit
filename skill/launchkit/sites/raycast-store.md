---
id: raycast-store
name: "Raycast Store"
url: https://developers.raycast.com/basics/publish-an-extension
category: App Store / Marketplace
mode: manual
pricing: Free
login: github
captcha: none
backlink_required: no
review_time: "days to a few weeks (PR review, varies)"
verified: true
last_checked: 2026-10-12
---

# Raycast Store

The extension store for Raycast, the Mac launcher. Top extensions have hundreds of thousands of installs. Worth it if the product has an API or something people want to search or trigger from the keyboard (dev tools, SaaS with search, AI tools). Store browsing is at raycast.com/store.

## Before you start
- Artifact: a Raycast extension in TypeScript/React built with `@raycast/api`. Publishing opens a pull request against github.com/raycast/extensions.
- Accounts: a Raycast account (its username goes in `author`) and GitHub.
- `package.json`: `license` must be MIT, use npm and commit `package-lock.json`, latest API version, `platforms` set correctly.
- Assets: 512x512 PNG icon that works in light and dark themes (default Raycast icon is rejected), screenshots at 2000x1250 PNG (16:10) in a `metadata` folder, max 6.

## Field map (`package.json` and repo files)

| Field | Limit / format | Fill with |
|---|---|---|
| title | Apple title case, noun-first | `product.name` plus context, e.g. "Acme Search" |
| description | one sentence | `product.tagline_short` |
| icon | 512x512 PNG | `assets.logo_square` adapted |
| author | Raycast username | ask the user |
| categories | Title Case, at least one | map `product.categories`: Developer Tools, Productivity, Communication, Design Tools, Finance, Media, Data, Documentation, Security, System, Web, Applications, News, Fun, Other |
| commands[].title | verb + noun, no articles | "Search Projects", "Create Task" |
| commands[].subtitle | service name only | `product.name` |
| README.md | needed if setup is required | API token steps from `links.docs` |
| CHANGELOG.md | dated entries | "Initial version" |
| metadata/*.png | 2000x1250 | screenshots of real commands |

## Steps
1. Manual mode. Don't publish for the user. Suggest it only if `product.platforms` includes macOS or the product has a public API.
2. If the user wants help: draft titles, descriptions, command names and README. They run `npm run build` and `npm run lint` with no errors.
3. They run `npm run publish`, sign in with GitHub, and the script opens the PR. More commits go up by running it again.
4. They answer reviewer comments on the PR. Merge means it's live in the Store.
5. `launchkit mark raycast-store needs_human --note "Raycast extension PR opened by user"`

## Make the listing perform
- Name it by what it does if it has one command ("Notion Search", not "Notion"). Store search matches title, subtitle and description.
- The first screenshot should show the main command with results, on a clean contrasting background (Raycast Wallpapers work).
- After merge, copy the store link from Manage Extensions (cmd+opt+.) and share in the Raycast Slack community and on X.
- Keep commands fast; slow extensions get uninstalled.

## Gotchas
- Using yarn or pnpm, a missing lockfile, or a non-MIT license will fail CI.
- If someone else contributes, run `npx @raycast/api@latest pull-contributions` before publishing again.

## After submitting
- Watch the PR for review comments. Updates go through the same PR flow.
