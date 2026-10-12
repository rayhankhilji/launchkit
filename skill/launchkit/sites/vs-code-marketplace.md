---
id: vs-code-marketplace
name: "VS Code Marketplace"
url: https://marketplace.visualstudio.com/manage
category: Dev / Open Source
mode: manual
pricing: Free
login: email
captcha: none
backlink_required: no
review_time: minutes
verified: true
last_checked: 2026-10-12
---

# VS Code Marketplace

Microsoft's extension store for VS Code. Only VS Code itself installs from here; forks like Cursor and VSCodium use Open VSX. Worth it if the product has an editor integration.

## Before you start
- `manual` mode: explain and mark `needs_human`, or `skipped` with "no VS Code extension".
- Artifact: an extension project with `package.json`, built and packaged with `vsce` (`npm install -g @vscode/vsce`, then `vsce package` produces a `.vsix`).
- Account: sign in at https://marketplace.visualstudio.com/manage with a Microsoft account and create a publisher (ID, display name). Publishing used Azure DevOps Personal Access Tokens; global PATs are retired on Dec 1 2026, so set up Microsoft Entra ID based publishing (workload identity federation) for CI, or upload the `.vsix` by hand in the manage page.
- Verified publisher badge needs a verified domain linked to the publisher.

## Field map (package.json)

| Field | Format | Fill with |
|---|---|---|
| name | lowercase id | `product.name` slug |
| displayName | text | `product.name` plus the job, e.g. "Acme: SQL formatter" |
| description | one line | `product.tagline` |
| publisher | publisher ID | the ID created on the manage page |
| version / engines.vscode | semver | `0.1.0`, minimum VS Code version |
| icon | PNG, 128x128 min, no SVG | `assets.logo_square` as PNG |
| galleryBanner | color, theme | brand color from the logo |
| categories | from fixed list | e.g. Programming Languages, Linters, Formatters, AI, Chat, Other |
| keywords | up to 30 | `product.tags` |
| repository, homepage, bugs | URLs | `product.repo_url`, `product.url`, `<repo>/issues` |
| README.md / CHANGELOG.md | Markdown, https images only | features, GIF (`assets.demo_gif`), settings, link to `links.docs` |

## Steps (for the user)
1. Create the publisher at https://marketplace.visualstudio.com/manage.
2. `vsce package` and test the `.vsix` locally with "Install from VSIX".
3. Publish with `vsce publish` (Entra ID auth) or drag the `.vsix` into **New extension > Visual Studio Code** on the manage page.
4. Wait for the scan to finish, then open the listing.
5. `launchkit mark vs-code-marketplace submitted --listing-url https://marketplace.visualstudio.com/items?itemName=<publisher>.<name>`.

## Make the listing perform
- Search weighs displayName, description and keywords; installs and ratings drive the sort order.
- Lead the README with a GIF of the main action, then a 3 step quick start.
- Ask early users to rate it; ratings show on the search card.
- Publish the same `.vsix` to Open VSX.

## Gotchas
- vsce refuses SVG icons, SVG images in the README (except trusted badges) and non-https image URLs.
- Extensions are malware-scanned; obfuscated code or bundled binaries can be held.

## After submitting
- Link the listing from the docs and the repo README.
