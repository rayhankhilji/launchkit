---
id: launch-directories-meta-list
name: "Launch Directories (meta list)"
url: https://launchdirectories.com/
category: Launch Platform
mode: form
pricing: Paid
login: none
captcha: unknown
backlink_required: no
review_time: "n/a"
verified: true
last_checked: 2026-10-12
---

# Launch Directories (meta list)

**Not a place to list a startup.** launchdirectories.com is a database of 100+ launch directories with DR, traffic and dofollow info. Its /submit page sells a done-for-you submission service, and /add-directory is only for directory owners. Use it as a research source, then mark this id `skipped`.

## Before you start
- Nothing to submit for the user's product. Don't create an account.
- /submit is a paid service (live plans at check time: Starter $99 for 30+ directories, Pro $149 for 60+, Premium $199 for 100+; prices on the page change). launchkit already does this work, so never buy it.
- /add-directory (free with DR 25+ and a badge; Premium $59, Featured $129) is for people who run a directory. Only relevant if the user's product is itself a directory.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| none for startups | - | skip |
| /add-directory: directory name, URL, description (only if the product is a launch directory) | text | `product.name`, `product.url`, `product.description_short` |

## Steps
1. Open https://launchdirectories.com and scan the list.
2. Compare it against `data/` site ids in launchkit (read only). Note any directory with decent DR that launchkit lacks.
3. Report those names to the user as suggestions; don't submit to them from this guide.
4. `launchkit mark launch-directories-meta-list skipped --note "meta list, no startup listing; paid service only"`.
5. If the product is a launch directory and the user wants it listed, fill /add-directory (free tier, badge needed) and mark `submitted`.

## Make the listing perform
- Useful filters: sort by DR and dofollow to spot high-value targets for the user's category.
- Use it to check whether a directory in the queue is still alive before spending time on it.

## Gotchas
- The "Get listed on 100+ directories" buttons all go to the paid service.

## After submitting
- Nothing to track for the product itself.
