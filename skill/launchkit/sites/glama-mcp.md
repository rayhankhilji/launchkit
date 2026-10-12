---
id: glama-mcp
name: "Glama MCP"
url: https://glama.ai/mcp/servers
category: AI Directory
mode: manual
pricing: Free
login: email
captcha: recaptcha
backlink_required: no
review_time: "automatic indexing, timing varies"
verified: true
last_checked: 2026-10-12
---

# Glama MCP

The largest MCP server registry (about 97,600 servers listed on 2026-10-12), with search across every tool each server exposes, quality scores, an in-browser inspector and one-click hosted "connectors". Only relevant if the user ships an MCP server with a public GitHub repo.

## Before you start
- Artifact needed: a working open-source MCP server in a public GitHub repo (`product.repo_url`), with a README that shows install and config. If `product.open_source` is false or there is no MCP server, mark `skipped` ("not an MCP server").
- Glama crawls GitHub and adds most public MCP repos on its own. First search for the repo; it may already be listed.
- The **Add Server** button opens a sign-up wall: name, email and an "I'm not a robot" check, or social sign-in. CAPTCHA means this is a `needs_human` step if the server isn't already indexed.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Sign-up: Name | text | `founder.name` |
| Sign-up: Email | email | `submission.email` |
| Add Server: GitHub repository URL | URL | `product.repo_url` (form seen only after sign-up; unconfirmed) |

## Steps
1. Search https://glama.ai/mcp/servers for `product.name` and the repo name. If found, open the listing, mark `live` with its URL, then do step 4.
2. If not found: tell the user Glama needs an account with a CAPTCHA, mark `needs_human` with "Glama: sign up and click Add Server with <repo_url>".
3. After they add it, the listing appears once Glama has indexed the repo.
4. Advise the user to claim the listing as maintainer so they can edit it and get the "claimed" filter (6,993 claimed servers on the day checked). Claiming is commonly done by adding a `glama.json` file with the maintainers' GitHub usernames to the repo root; confirm the current method on the listing page before committing anything.

## Make the listing perform
- Glama scores servers and ranks by score, stars and recency. Its blog describes a Tool Definition Quality Score (TDQS): clear tool names, specific descriptions and typed input schemas score higher. Tighten the server's tool descriptions before listing.
- Add a license file and a Dockerfile or clear run command so Glama can build and inspect the server; servers it can introspect show their tool list, which is what users search.
- Pick the right category tags (e.g. "Developer Tools", "Design Tools"). Official vendor servers get an "official" label, so publish from the company's GitHub org if possible.

## Gotchas
- Don't create the account yourself if a CAPTCHA appears. Hand it to the user.
- Listings mirror the GitHub README. Fix the README, not the Glama page.

## After submitting
- Re-check the listing a day later for score, tool list and any build errors shown on the page.
