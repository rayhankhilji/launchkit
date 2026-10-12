---
id: postman-api-network
name: "Postman API Network"
url: https://www.postman.com/explore
category: Dev / Open Source
mode: form
pricing: Free
login: email
captcha: none
backlink_required: no
review_time: "instant public, verification reviewed"
verified: true
last_checked: 2026-10-12
---

# Postman API Network

Postman's public catalog of APIs, browsed at postman.com/explore. You don't fill a web form: you publish a public workspace with a collection for your API from inside Postman, then request it to show on the API Network and get the verified badge. Only relevant if the product has a public API.

## Before you start
- Works like a `manual` site even though it is listed as a form: the user needs a Postman account and a team. Guide them; mark `needs_human`, or `skipped` if there's no public API.
- Artifact: a Postman collection for the API (import an OpenAPI spec, or build requests by hand) with an auth helper, example requests and saved responses, plus an environment with variables like `baseUrl` and `apiKey` (empty values only).
- Verification asks for team identity details (company name, domain, profile) and a review by Postman.
- Free on the free plan for a public workspace.

## Field map

| Item in Postman | Format | Fill with |
|---|---|---|
| Team name / profile | text, logo | `company.name`, `assets.logo_square` |
| Team public URL / domain | URL | `company.website` |
| Workspace name | text | "<product.name> API" |
| Workspace summary / overview | short text + Markdown | `product.description_short`, then a Get started section linking `links.docs` |
| Collection name | text | "<product.name> API" |
| Collection docs | Markdown per request | short description and examples for each endpoint |
| Environment variables | key/value, no secrets | `baseUrl` = API base URL, `apiKey` = empty |
| Workspace type | Personal / Private / Team / Public | **Public** |

## Steps (for the user)
1. In Postman, import the OpenAPI spec into a new workspace and tidy the collection (folders by resource, examples on every request).
2. Open **Workspace overview**, fill the summary and description.
3. Open **Settings**, under **Workspace type** click **Change**, pick **Public**, optionally **Submit Request** for admin approval, then **Save changes**.
4. Complete the verification checklist for the team and click **Submit for review** to get the verified badge and better placement on the Network.
5. `launchkit mark postman-api-network submitted --listing-url <public workspace url>`.

## Make the listing perform
- Postman's docs say a new user should get their first 200 response fast. Add a "Start here" request with auth already wired to the environment.
- Add "Run in Postman" / Fork buttons to the API docs; forks and watchers raise the workspace in search.
- Verified teams are favored in Explore and search results.
- Keep the collection in sync with the API (Postman can link to the spec in a repo).

## Gotchas
- Check every request and environment for real keys before going public. Postman scans for leaked secrets but don't rely on it.
- Changing a workspace to public may need team admin approval.

## After submitting
- Share the workspace link in the API docs and the launch posts.
