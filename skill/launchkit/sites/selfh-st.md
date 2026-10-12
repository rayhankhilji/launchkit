---
id: selfh-st
name: "Selfh.st"
url: https://selfh.st/submit/
category: Dev / Open Source
mode: form
pricing: Free
login: none
captcha: none
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# Selfh.st

selfh.st runs a directory of self-hosted apps (selfh.st/apps) and the Self-Host Weekly newsletter read by the homelab crowd. The directory only takes established projects; new launches go to the newsletter's "Project Launch" section instead.

## Before you start
- Only for products users can self-host (Docker image, binary, or source). If not, mark `skipped` with "not self-hostable".
- The form says: "Newly launched projects will not be considered for the directory." If the product is new (see `product.launch_date`, `product.status`), submit to **Self-Host Weekly (Newsletter)** as a project launch instead of the directory.
- The form asks whether the project uses AI to assist development. Ask the user; don't guess.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Which publication | radio | **selfh.st/apps (Directory)** for established projects, **Self-Host Weekly (Newsletter)** for new launches |
| Category (directory path) | radio | **Suggest an App** |
| Project Name * | 50 chars | `product.name` |
| Link * | 200 chars, URL | `product.repo_url` if open source, else `product.url` |
| Question on AI-assisted development * | Yes / No / I'm not sure | the user's answer |
| Description * | 200 chars | `product.description_short`, trimmed to 200, mention the license and how it's deployed (e.g. "Docker") |
| Email | email | `submission.email` (if asked) |

The newsletter path has its own questions that were not opened during research. Map them the same way and use `product.tagline` for any one-liner.

## Steps
1. Search https://selfh.st/apps/ for `product.name`. If listed, mark `live` and stop.
2. Open https://selfh.st/submit/ (a Formbricks form embedded on the page).
3. Choose the publication, then **Suggest an App**, fill the fields, click **Submit**.
4. Screenshot the thank-you state to `.launchkit/evidence/selfh-st.png`.
5. `launchkit mark selfh-st submitted --note "directory suggestion"` (or "newsletter launch submission").

## Make the listing perform
- Readers care about license, Docker support, and whether there's telemetry or a paid tier. Put the license and deploy method in the 200 characters.
- Link the repo, not a marketing page. The directory shows GitHub stars and activity.
- Self-Host Weekly goes out on Fridays; a launch that lands there gets a burst of homelab traffic, so have install docs ready.

## Gotchas
- 200 character description limit is strict.
- Sponsorship is a separate paid page. Skip.

## After submitting
- Watch the next Self-Host Weekly issues and the apps directory for the listing.
