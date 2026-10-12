---
id: open-vsx
name: "Open VSX"
url: https://open-vsx.org/
category: Dev / Open Source
mode: manual
pricing: Free
login: github
captcha: none
backlink_required: no
review_time: instant
verified: true
last_checked: 2026-10-12
---

# Open VSX

The open extension registry run by the Eclipse Foundation. Cursor, Windsurf, VSCodium, Gitpod, Theia and other VS Code forks install extensions from here, not from Microsoft's Marketplace. If the product ships a VS Code extension, publish it here too.

## Before you start
- `manual` mode: explain the steps and mark `needs_human`, or `skipped` if there's no extension.
- Artifact: a packaged `.vsix` (the same one as for the VS Code Marketplace, built with `vsce package`).
- Accounts: log in to open-vsx.org with GitHub, plus an eclipse.org account with the **same GitHub username** in its profile, to sign the Publisher Agreement.
- Namespace: the `publisher` in `package.json` becomes the namespace. Create it with `npx ovsx create-namespace <publisher>`. To get the verified shield, claim ownership through an issue in the open-vsx.org repo.

## Field map (package.json, shared with VS Code)

| Field | Format | Fill with |
|---|---|---|
| name | lowercase id | `product.name` slug |
| displayName | text | `product.name` |
| description | one line | `product.tagline` |
| publisher | namespace id | company slug from `company.name` |
| version | semver | `0.1.0` |
| icon | PNG, 128x128 or larger | `assets.logo_square` as PNG |
| repository | URL | `product.repo_url` |
| license | SPDX id + LICENSE file | repo license (Open VSX needs a license) |
| categories / keywords | arrays | VS Code categories, `product.tags` |
| README.md, CHANGELOG.md | Markdown | usage with screenshots or GIF (`assets.demo_gif`) |

## Steps (for the user)
1. Create an eclipse.org account (fill the GitHub Username field).
2. On open-vsx.org: avatar, Settings, **Log in with Eclipse**, **Show Publisher Agreement**, **Agree**.
3. Settings, Access Tokens, **Generate New Token**. Keep it in a secret store, never in the repo.
4. `npx ovsx create-namespace <publisher> -p <token>`, then `npx ovsx publish <file>.vsix -p <token>`. Trusted Publishing from CI is also supported, so no token needs storing.
5. Check `https://open-vsx.org/extension/<publisher>/<name>`. `launchkit mark open-vsx submitted --listing-url <url>`.

## Make the listing perform
- Cursor and other forks search by name and keywords. Put the main job words in `displayName` and `description`.
- A GIF in the README is the best screenshot. Use https image URLs.
- Publish to Open VSX on every Marketplace release so fork users don't get a stale version.

## Gotchas
- Unverified namespaces show a warning; claim the namespace early.
- If the extension isn't published by the owner, someone else may publish it under a different namespace.

## After submitting
- Add the Open VSX link to the README next to the Marketplace link.
