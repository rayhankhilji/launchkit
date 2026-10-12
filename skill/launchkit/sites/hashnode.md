---
id: hashnode
name: "Hashnode"
url: https://hashnode.com/
category: Dev / Open Source
mode: post
pricing: Free
login: email
captcha: none
backlink_required: no
review_time: "instant on publish"
verified: true
last_checked: 2026-10-12
---

# Hashnode

A blogging platform for developers. You get a free blog (subdomain or custom domain) and posts also show in the hashnode.com feed under tags. For a launch, the useful output is a technical write-up: what you built, how, and what broke, not a product ad.

## Before you start
- This is `post` mode: write the post as a draft and get the user's approval before publishing. Never publish on their behalf without a yes.
- The user needs a Hashnode account and a publication (blog). Account creation is theirs to do; if they have none, mark `needs_human` with "create Hashnode blog".
- The editor is behind login, so the field list below comes from Hashnode's public editor and docs, not a logged-in session. Confirm labels in the editor.
- A paid Pro plan exists (custom features, Hashnode CLI and some AI tools need it). The free plan is enough for a launch post.

## Field map

| Field in the editor | Limit / format | Fill with |
|---|---|---|
| Cover image | wide image, about 1600x840 | `assets.og_image` or a product screenshot from `assets.screenshots` |
| Title | text | a build-story title, e.g. "How we built <product.name> to <job>", not `product.tagline` alone |
| Subtitle | optional text | `product.tagline` |
| Body | Markdown | `copy.launch_post_story`, adapted: problem, approach, technical details, results, link to `product.url` and `product.repo_url` |
| Tags | up to 5 | pick from `product.tags`; prefer existing Hashnode tags (javascript, python, webdev, devops, ai, opensource) |
| Article slug | URL slug | short version of the title |
| Canonical URL ("originally published at") | URL | the post URL on the company blog if it was published there first, else empty |
| SEO title / description | optional | title, plus `product.description_short` |

## Steps
1. Ask the user to log in to Hashnode and open their blog dashboard.
2. Click **Write** (or **New draft**). Fill the fields above.
3. Save as draft. Run `launchkit lint-copy` on the body text. Show the draft link to the user and wait for approval.
4. After approval, the user clicks **Publish** (or you do, if they say so). Screenshot to `.launchkit/evidence/hashnode.png`.
5. `launchkit mark hashnode drafted --note "draft awaiting approval"`, then `submitted --listing-url <post url>` once published.

## Make the listing perform
- Feed reach comes from tags. Use one broad tag (webdev, ai, opensource) and three or four specific ones that match the stack.
- Hashnode readers reward code, diagrams, numbers and honest tradeoffs. Posts that read like landing pages get ignored.
- Publish Tuesday to Thursday morning US time, then share the post link (not the homepage) on X, LinkedIn and relevant communities.
- Reply to every comment in the first day; comments help a post stay in the feed.

## Gotchas
- Set the canonical URL when cross-posting so the company blog keeps the SEO credit.
- Don't stuff all five tags with near duplicates.
- Hashnode's MCP server and CLI can publish drafts, but the CLI needs Node 20 and a Pro publication.

## After submitting
- Check the post renders on the user's blog and appears under its tags. Record the URL with `launchkit mark`.
