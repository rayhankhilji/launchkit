---
id: libhunt
name: "LibHunt"
url: https://www.libhunt.com/repo/submit
category: Dev / Open Source
mode: form
pricing: Free
login: unknown
captcha: none
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# LibHunt

LibHunt indexes open-source repos and ranks them by how often they are mentioned on Reddit, Hacker News and DEV. Project pages show "alternatives" and "X vs Y" comparisons, which rank well in Google for "<competitor> alternative" searches. Only worth doing if the product has a public GitHub repo.

## Before you start
- `product.repo_url` must be a public GitHub repo. No repo means no listing: mark `skipped` with "not open source".
- The main form only asks for the repo URL. LibHunt pulls name, description, stars, language and topics from GitHub, so set a clear GitHub description and topics on the repo first (ask the user).
- Language sub-sites (js.libhunt.com, python.libhunt.com, go.libhunt.com, selfhosted.libhunt.com and others) have their own "Submit" flow at `/contribute` that needs a LibHunt login. Use the one matching the repo's main language as an optional second step.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Repo URL (www.libhunt.com/repo/submit) | URL, `https://github.com/owner/repo` | `product.repo_url` |
| (next step, not confirmed) | | LibHunt may ask you to log in or confirm the repo after **Continue**. Fill anything it shows from the profile. |
| Sub-site: Library vs Resource | choice | **Library** for the repo itself, **Resource** for a launch blog post |
| Sub-site: category | dropdown | closest match to `product.categories[0]` |
| Sub-site: description | short text | `product.description_short` |

## Steps
1. Search www.libhunt.com for `product.name` and the repo slug. If a page exists, `launchkit mark libhunt live --listing-url <url>` and stop.
2. Open https://www.libhunt.com/repo/submit, paste `product.repo_url` into **Repo URL**, click **Continue**.
3. If a login screen appears, sign in with GitHub if `submission.preferred_login` allows it, otherwise mark `needs_human` with "LibHunt login needed".
4. Confirm whatever details it shows, submit, screenshot to `.launchkit/evidence/libhunt.png`.
5. Optional: on `<language>.libhunt.com/contribute`, submit the repo as a **Library** in the closest category.
6. `launchkit mark libhunt submitted --note "repo submitted, listing builds from GitHub data"`

## Make the listing perform
- Ranking is driven by mentions, not by the form. Every Reddit, HN or DEV post that links the GitHub repo URL (not only the website) counts toward the LibHunt score, so make sure launch posts link the repo.
- The repo's GitHub description becomes the LibHunt blurb. Make it one plain sentence that says what it does.
- Add GitHub topics that match the competitors in `product.competitors_alternatives`; that is how LibHunt builds its "alternatives" lists.
- Sub-site submissions are considered for that language's weekly newsletter.

## Gotchas
- Private repos and non-GitHub hosts are not accepted on the main form (placeholder shows GitHub only).
- Sponsored slots ("Become a sponsor") are paid ads. Skip.

## After submitting
- Check `https://www.libhunt.com/r/<repo-name>` after a few days. If it shows wrong data, use **Edit details** on the page.
