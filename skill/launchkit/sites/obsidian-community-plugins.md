---
id: obsidian-community-plugins
name: "Obsidian Community Plugins"
url: https://community.obsidian.md/
category: App Store / Marketplace
mode: manual
pricing: Free
login: email           # Obsidian account, plus a linked GitHub account
captcha: unknown
backlink_required: no
review_time: "automated review on submit; human publish time unconfirmed"
verified: true
last_checked: 2026-10-12
---

# Obsidian Community Plugins

The in-app plugin browser for Obsidian (about 8,700 plugins). Worth it only if the product has, or could ship, an Obsidian plugin, for example a notes, AI, sync or publishing tool. Submission moved from a pull request on obsidianmd/obsidian-releases to the Obsidian Community directory at community.obsidian.md.

## Before you start
- Artifact: a public GitHub repo with `README.md`, `LICENSE` and `manifest.json` at the root, plus a GitHub release whose tag equals `manifest.json` `version` (x.y.z) with `main.js`, `manifest.json` and optional `styles.css` attached.
- Plugin `id` must be unique and can't contain "obsidian".
- Accounts: an Obsidian account and a GitHub account linked to it (used to prove repo ownership).
- Read the developer policies and plugin guidelines in docs.obsidian.md; no ads, no hidden telemetry, disclose network use and payments in the README.

## Field map

| Field | Limit / format | Fill with |
|---|---|---|
| Plugin name (`manifest.json` name) | short, no "Obsidian" | `product.name` |
| Description (`manifest.json` description) | one sentence, starts with a verb, ends with a period | `product.tagline_short` |
| Author / authorUrl | text / URL | `founder.name`, `founder.website` |
| fundingUrl | URL, optional | GitHub Sponsors or similar link, ask the user |
| Repository | GitHub URL | `product.repo_url` |
| README excerpt | Markdown, relative images allowed | `product.description_medium`, setup steps, `assets.screenshots` |
| Category | picked in directory | closest of Integrations, Files, AI, Sidebar, Editing, Visualization, Automation, Links |

## Steps
1. Manual mode. Don't sign in or submit for the user. Suggest it only if an Obsidian plugin exists.
2. If the user wants help: check the repo has the three root files and a matching release. Draft the manifest description and README intro.
3. The user signs in at community.obsidian.md, links GitHub, and adds the plugin. The directory reads `manifest.json` at HEAD of the default branch.
4. Automated review runs and lists fixes. Fix in the repo, publish a new release with a higher version, then click **Publish**.
5. `launchkit mark obsidian-community-plugins needs_human --note "plugin submitted via community directory"`

## Make the listing perform
- Name, author and description are what the in-app search indexes. Use the words people search ("kanban", "daily notes", "AI chat"), not a clever brand name alone.
- A GIF or screenshot at the top of the README shows on the listing page and drives installs.
- After it's live, post in the forum's Share & showcase category and in Discord `#updates` (needs the developer role).
- Before submitting, ship a public beta through the BRAT plugin to get early users and bug reports.

## Gotchas
- Old guides say "open a PR to community-plugins.json". That path is replaced by the directory; don't open PRs there.
- Tag must equal the manifest version exactly, no leading "v".

## After submitting
- Users get updates straight from GitHub releases; you only submit once.
