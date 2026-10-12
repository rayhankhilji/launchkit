---
id: node-weekly
name: "Node Weekly"
url: https://nodeweekly.com/
category: Newsletter
mode: pitch
pricing: Free
login: none
captcha: none
backlink_required: no
review_time: "weekly (Thursdays); no reply unless included"
verified: true
last_checked: 2026-10-12
---

# Node Weekly

Cooperpress's free weekly Node.js newsletter, edited by Peter Cooper (643+ issues since 2013). It covers Node releases, npm packages, tools and in-depth articles. No web form. Each issue ends with "Got a link for us? Reply and tell us. We can't include everything but we'll look at anything you send." Great fit for npm packages, Node tooling, CLIs and backend dev tools.

## Before you start
- Fit check: the product must matter to Node.js developers (a package, CLI, SDK, hosting or observability tool, or an engineering post about Node). Otherwise mark `skipped`.
- Link something technical: the npm/GitHub page (`product.repo_url`), docs (`links.docs`) or a write-up.
- Route: reply to a Node Weekly issue (the user must be subscribed) or email editor@cooperpress.com (from cooperpress.com/contact).

## Field map

| Email part | Limit | Fill with |
|---|---|---|
| To | email | reply to the latest issue, or editor@cooperpress.com |
| Subject | short | "Link for Node Weekly: <product.name>" |
| Body line 1 | 1 sentence | what it does for Node devs, from `product.tagline` |
| Body line 2-3 | 2 sentences | specifics: Node version support, install command, license, notable features from `product.key_features` |
| Links | URLs | `product.repo_url` or npm page, then `product.url` |
| Sign-off | name | `founder.name`, `founder.github` |

## Steps
1. Open https://nodeweekly.com/latest and read the latest issue to see item format (bold headline, one-paragraph summary, author).
2. Write a 60-100 word email per the map.
3. `launchkit draft node-weekly -` and mark `drafted`. Send only with approval, from the user's email.

## Make the listing perform
- Open-source packages and practical articles get in most often; the "Tools, packages and releases" style section is short items, so one clear sentence on what it does is enough.
- Mention a concrete version number or release ("v1.0 just shipped"). They like news.
- Don't pitch the same link to JavaScript Weekly and Frontend Focus in the same week.

## Gotchas
- Paid route: sponsorship via kristina@cooperpress.com (in the issue footer) or 200-char classifieds at cooperpress.com/classifieds. Skip at budget 0.
- Issues sometimes skip a week (the 2026-10-08 issue noted a week off).

## After submitting
- No confirmation. Check nodeweekly.com/issues for the next two issues.
