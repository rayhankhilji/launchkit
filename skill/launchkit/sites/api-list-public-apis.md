---
id: api-list-public-apis
name: "API List / Public APIs"
url: https://github.com/public-apis/public-apis
category: Dev / Open Source
mode: pr
pricing: Free
login: github
captcha: none
backlink_required: no
review_time: "weeks to months (large PR backlog)"
verified: true
last_checked: 2026-10-12
---

# API List / Public APIs

One of the most-starred repos on GitHub: a categorised table of free public APIs, plus a separate MCP Servers
section. Only relevant if the product exposes a documented public API (or an MCP server) with a free tier.

## Before you start
- Fit (from CONTRIBUTING): the API needs "full, free access or at least a free tier" and must not depend on buying
  a device or service. "This API list is not a marketing tool"; PRs that look like marketing are refused.
- Needs: public API docs URL (`links.docs`), auth type, HTTPS, CORS support. Optional: a Postman collection for
  the "Call this API" column. If there's no public API, mark `skipped` ("no public API").

## Field map (one table row)

| Column | Allowed values | Fill with |
|---|---|---|
| API | `[Name](docs link)` | `product.name` without "API" and without the TLD, linked to `links.docs` |
| Description | max 100 chars, no trailing punctuation | plain description of what the API returns, from `product.tagline` |
| Auth | `OAuth`, `apiKey`, `X-Mashape-Key`, `No`, `User-Agent` | ask the user if not obvious from the docs |
| HTTPS | `Yes` / `No` | `Yes` |
| CORS | `Yes`, `No`, `Unknown` | check the docs or ask; `Unknown` is allowed |
| Call this API | Run in Postman button or blank | only if a public Postman collection exists |

MCP servers use a different table: Name, Description, Auth, Transport (`stdio`, `HTTP`, `SSE`), Install (links to
existing Cursor / Anthropic / Glama listings separated by ` · `, or a single dash character if none, as in the existing rows). A 404 marketplace link gets the PR closed.

## Steps
1. Search open and closed PRs and issues for `product.name` to avoid duplicates.
2. Pick the single best category (e.g. an Instagram API goes under Social, not Photography).
3. Draft the row and PR text; `lk draft api-list-public-apis -`; mark `drafted`.
4. With approval: fork, branch, insert the row alphabetically in the section, pad each column with one space,
   squash to one commit (e.g. "Add Acme API to Business"), open a PR titled `Add Acme API` against `master`.
5. Tick the PR template boxes honestly and make sure the link-check build passes.
6. `launchkit mark api-list-public-apis submitted --listing-url <PR url>`

## Make the listing perform
- A clear 100-char description and a working docs link are what reviewers check. No adjectives.
- One API per PR. Squash any follow-up commits.

## Gotchas
- Never add a "new version" of an already listed API.
- Paid-only APIs, device-bound APIs and thin wrappers are rejected.

## After submitting
- Respond to review comments quickly. Merged rows appear in README.md; mark `live` with the README anchor.
