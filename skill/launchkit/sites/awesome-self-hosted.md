---
id: awesome-self-hosted
name: "Awesome Self-Hosted"
url: https://github.com/awesome-selfhosted/awesome-selfhosted-data
category: Dev / Open Source
mode: pr
pricing: Free
login: github
captcha: none
backlink_required: no
review_time: "merged at least ~1 week after approval"
verified: true
last_checked: 2026-10-12
---

# Awesome Self-Hosted

The main list of free software you can host yourself (awesome-selfhosted.net). Entries are YAML files in the
`-data` repo; the Markdown list and website are generated from them. High-value for self-hostable open source.

## Before you start
- Hard requirements (PR template): open source license from `licenses.yml`, actively maintained, **first release
  more than 4 months ago** (counted from a tagged release), working install instructions.
- Not accepted: software tied to one cloud provider, libraries/SDKs, PaaS/serverless platforms, generic container
  or deployment tools (go to awesome-sysadmin), Dockerised ports of existing apps, desktop/mobile/CLI apps that need
  a separate sync server.
- **"Machine/LLM-generated contributions are not allowed and will result in a ban."** Prepare the YAML as a draft
  for the user, but the user must review it, edit it in their own words and open the PR themselves. Mark `needs_human`.

## Field map (`software/<kebab-case-name>.yml`)

| Key | Format | Fill with |
|---|---|---|
| `name` | string | `product.name` |
| `website_url` | URL | `product.url` |
| `source_code_url` | URL | `product.repo_url` |
| `description` | under 250 chars, sentence case, no "open-source/free/self-hosted", no leading "A" | short factual line from `product.tagline`; append `(alternative to X, Y)` from `product.competitors_alternatives` |
| `licenses` | list of SPDX ids | from the repo LICENSE |
| `platforms` | list from `platforms/` dir | runtime/language needed to run it, e.g. `Docker`, `Nodejs`, `Go` |
| `tags` | list from `tags/` dir | first tag is where it appears in the single-page list; choose the best one first |
| `depends_3rdparty` | optional bool | `true` only if it needs an external service |
| `demo_url` | optional URL | interactive demo only (no videos); link credentials if needed |
| `icon_url` | optional URL | dashboardicons.com preferred, else `assets.logo_square` URL |

## Steps
1. Check the repo's issues and PRs (including closed) for the project, and that it's not already on awesome-sysadmin, staticgen, or dbdb.io.
2. Check the first tagged release date. If under 4 months, mark `skipped` with "resubmit after <date>".
3. Draft the YAML and PR text; `lk draft awesome-self-hosted -`; mark `needs_human` ("human must submit, LLM PRs banned").
4. The user creates the file via https://github.com/awesome-selfhosted/awesome-selfhosted-data/new/master/software,
   commit message `add <Name>`, chooses "Create a new branch ... and start a pull request", ticks the template boxes.

## Make the listing perform
- Pick the first tag carefully; it decides the section in the big list.
- Keep the description short and plain ("Minimalist text adventure game" style).

## Gotchas
- Projects with no activity for 6-12 months get removed later by automated checks.

## After submitting
- Once merged, the entry shows on awesome-selfhosted.net and in the README. Mark `live` with that link.
