---
id: github-awesome-lists
name: "GitHub Awesome Lists"
url: https://github.com/sindresorhus/awesome
category: Dev / Open Source
mode: pr
pricing: Free
login: github
captcha: none
backlink_required: no
review_time: "days to months, depends on each list's maintainer"
verified: true
last_checked: 2026-10-12
---

# GitHub Awesome Lists

sindresorhus/awesome is the index of curated `awesome-*` lists. You don't add a product to the index itself
(that's only for whole lists). You find 2-5 topic lists that fit the product and open one PR per list. Merged
entries bring steady developer traffic and a GitHub backlink.

## Before you start
- Fit: most lists expect open source or a genuinely free tool. Check `product.open_source`, `product.repo_url`
  and `product.pricing_model`. Paid-only SaaS usually gets rejected.
- Find lists: search the index README for the product's topic (language, framework, category), plus GitHub
  search `awesome <topic>` sorted by stars. Prefer lists with commits in the last 6 months and merged PRs from outsiders.
- Many maintainers reject AI-written PRs (the main index says "Fully AI-generated pull requests are not accepted").
  Draft the line and PR text, but the user should review it and open the PR from their own account.

## Field map (per list)

| Item | Format | Fill with |
|---|---|---|
| Section | existing heading in the list | closest match to `product.categories[0]` |
| Entry line | usually `- [Name](url) - Description.` | `product.name`, `product.repo_url` (or `product.url`), and a short objective description from `product.tagline` |
| Description style | per list: often starts uppercase, ends with a dot, no marketing | rewrite `product.tagline` as a plain fact: "Self-hosted invoicing for freelancers." |
| PR title | often `Add <Name>` | `Add product.name` |
| PR body | 2-3 lines | what it is, why it fits this list, license if open source |

## Steps
1. For each candidate list, open its `contributing.md` and PR template. Note ordering (alphabetical or append to
   bottom), description rules, and minimum requirements (stars, age, license).
2. Check the product isn't already listed and there's no open PR for it.
3. Write the exact line and PR text, save all of them in one draft: `lk draft github-awesome-lists -`. Mark `drafted`.
4. With approval and GitHub access: open the list's README on GitHub, click the pencil icon (forks automatically),
   insert the line in the right place, commit to a new branch, open the PR with the drafted title and body.
5. `launchkit mark github-awesome-lists submitted --listing-url <PR url>` (list all PR URLs in the note).

## Make the listing perform
- Match each list's formatting exactly; maintainers close PRs that break `awesome-lint` or alphabetical order.
- Keep descriptions neutral and short. "The best X" or emoji get rejected.
- One product per PR, one PR per list. Don't mass-PR 20 lists on the same day.
- After merge, the project may add the "Mentioned in Awesome" badge to its README (optional, from awesome.re).

## Gotchas
- Adding a new list to the main index has heavy requirements (list 30+ days old, CC0 license, review 4 other PRs).
  That's not what we're doing here.
- Some lists have gone stale; an unmerged PR from 2 years ago is a sign to skip that list.

## After submitting
- Watch PRs for review comments and fix them promptly; stale PRs get closed.
