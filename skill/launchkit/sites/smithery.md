---
id: smithery
name: "Smithery"
url: https://smithery.ai/new
category: AI Directory
mode: manual
pricing: Free
login: github           # WorkOS login: email, Google or GitHub
captcha: none
backlink_required: no
review_time: "instant"
verified: true
last_checked: 2026-10-12
---

# Smithery

The largest MCP server registry (now part of Arcade.dev). Agents and MCP clients install servers from here, so it only
matters if the product ships an MCP server. Listing is free and self-serve; there is no editorial queue.

## Before you start
- Needs a real artifact, one of:
  - **URL**: a public HTTPS MCP server using Streamable HTTP transport (OAuth if auth is needed).
  - **Local (MCPB bundle)**: a `.mcpb` bundle for stdio servers.
- Account at smithery.ai (email, Google or GitHub). Prefer GitHub so the namespace matches `links.github`.
- Don't run this automatically. Suggest it in the wrap-up if `product.tags` include MCP or the repo has an MCP server.

## What the user needs to do
1. Go to https://smithery.ai/new and sign in.
2. Choose **URL** and paste the server's public HTTPS URL, or choose the MCPB bundle option and upload `server.mcpb`.
3. Complete the flow: pick the namespace `@<org>/<server>`, display name, description.
4. Smithery scans the server for tools, prompts and resources. Auth-protected servers prompt you to authenticate.
   If the scan cannot finish, serve a static card at `/.well-known/mcp/server-card.json` (`serverInfo` name and version,
   plus `tools`, `resources`, `prompts`).
5. CLI alternative: `smithery mcp publish "https://your-server.com/mcp" -n @your-org/your-server`.

| Field | Fill with |
|---|---|
| Namespace / qualified name | `@<github user or org>/<product slug>` |
| Display name | `product.name` |
| Description | `product.description_short` |
| Homepage / repo | `product.url`, `product.repo_url` |

## Make the listing perform
- Every tool needs a clear `description` and input schema; that is what users and agents read to decide.
- Make the scan succeed (or ship the server card) so the page lists tools. Servers with no detected tools look broken.
- Add a session config schema for API keys so users can install it in one click instead of editing JSON.
- Link the Smithery page from the README so GitHub visitors can install it directly.

## After submitting
- The server page is live right away at smithery.ai/servers/<namespace>. Record it with
  `launchkit mark smithery live --listing-url <url>` if the user publishes.
