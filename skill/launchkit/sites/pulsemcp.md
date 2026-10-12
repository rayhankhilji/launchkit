---
id: pulsemcp
name: "PulseMCP"
url: https://www.pulsemcp.com/submit
category: AI Directory
mode: form
pricing: Free
login: none
captcha: recaptcha      # invisible reCAPTCHA on the submit page
backlink_required: no
review_time: "paused"
verified: false
last_checked: 2026-10-12
---

# PulseMCP

**Submissions are paused.** As of the live check, the submit page says PulseMCP is not accepting new MCP server or
client submissions or edits to existing listings, with no reopen date (notice last updated September 3, 2026).

PulseMCP is a large MCP server and client directory with "The Agentic Loop" newsletter. Only relevant if the product
is an MCP server or MCP client.

## Before you start
- Skip unless `product.categories` or `product.tags` show the product is an MCP server or client.
- PulseMCP says to publish to the Official MCP Registry instead (https://registry.modelcontextprotocol.io). They import
  from it automatically once they reopen. That needs a published package and the `mcp-publisher` CLI, so treat it as a
  manual suggestion for the user, not something to run.

## Steps
1. Open https://www.pulsemcp.com/submit. If it still says "submissions and changes are temporarily paused", run
   `launchkit mark pulsemcp skipped --note "submissions paused; publish to Official MCP Registry"`.
2. If the form is back: search https://www.pulsemcp.com/servers for `product.name` first, then fill the form with
   `product.name`, `product.repo_url` (or `product.url`), `product.description_short` and `submission.email`,
   and submit. Mark `needs_human` if the invisible reCAPTCHA escalates to a challenge.

## Make the listing perform
- Being in the Official MCP Registry with a clear name and description is what gets the server picked up here, so
  the registry entry's description should match `product.description_short`.
- Listings that include a public GitHub repo with a README showing tools and setup get more clicks.

## After submitting
- Re-check the submit page on later runs; the notice says it will reopen without warning.
