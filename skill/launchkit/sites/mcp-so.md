---
id: mcp-so
name: "MCP.so"
url: https://mcp.so/submit?type=server
category: AI Directory
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: no
review_time: "free: manual review; paid: immediate"
verified: true
last_checked: 2026-10-12
---

# MCP.so

A large MCP marketplace (they show DR 72, 2.2M unique visitors a year, 266K monthly active users) listing MCP servers, remote servers, clients, CLIs, agent skills and agents. Only relevant if the user ships one of those. The page meta says "Choose free review or publish immediately with Premium"; Premium is $39 one-time.

## Before you start
- Artifact: a public GitHub repo for the server, client or agent (`product.repo_url`). If there isn't one, mark `skipped` ("no MCP project").
- The submit page has tabs: **MCP Server**, **Remote Server**, **MCP Client**, **AI Agent**. Pick the one that matches.
- Signed out, the page shows only the paid "Pay and submit automatically" button. The free review option appears to need sign-in (header "Sign In"). Many projects also submit for free by opening a "Submit MCP Server: <name>" issue on https://github.com/chatmcp/mcpso/issues; that is the fallback.
- $39 Premium gives immediate publish, verified badge, featured placement and a dofollow link. Skip at budget 0.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Type tab | Server / Remote Server / Client / Agent | per the product |
| Repository URL * | URL, GitHub | `product.repo_url` |
| Name | text, max 120 | `product.name` |

## Steps
1. Search mcp.so for `product.name` and the repo name. If listed, mark `live` and stop.
2. Open https://mcp.so/submit?type=server, choose the right tab, sign in, fill Repository URL and Name, and choose the free review option. Do not click "Pay and submit automatically".
3. If no free option shows after sign-in, draft a GitHub issue on chatmcp/mcpso titled "Submit MCP Server: <product.name>" with the repo URL and `product.description_short`, save with `lk draft mcp-so -`, and open it only with user approval and GitHub access.
4. Screenshot to `.launchkit/evidence/mcp-so.png` and `launchkit mark mcp-so submitted --note "free review"`.

## Make the listing perform
- The listing is built from the repo, so the README is the listing: first line says what the server does, then install/config JSON for Claude, Cursor and other clients, then the tool list.
- If the server has a hosted endpoint, submit it as a **Remote Server** too; remote servers have their own section with fewer entries.
- mcp.so also has Skills and Agents sections. If the product includes an agent skill, list it there separately.

## Gotchas
- The paid button submits and charges in one step. Never click it without approval.

## After submitting
- Free reviews take time. Check the server page later and mark `live` with its URL.
