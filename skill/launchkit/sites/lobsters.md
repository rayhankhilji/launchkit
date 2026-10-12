---
id: lobsters
name: "Lobsters"
url: https://lobste.rs/stories/new
category: Dev / Open Source
mode: post
pricing: Free
login: email
captcha: none
backlink_required: no
review_time: "instant, community-moderated"
verified: true
last_checked: 2026-10-12
---

# Lobsters

A small, invite-only link aggregator narrowly about computing. Members are senior engineers who dislike marketing. A good technical post about your own work can do well; a product announcement usually gets flagged as spam.

## Before you start
- You can't sign up. Accounts come only from an invite by an existing member. If the user has no account, mark `skipped` with "invite-only, no account". Don't ask strangers for invites on their behalf.
- Users are "new" for their first 70 days. New users can't submit links to domains not seen before, can't resubmit seen links, and **can't use the `show` tag** (or meta, rant, announce, satire, job, ask and others). A brand new account cannot post a `show` story about a new domain.
- Self-promotion rule from the about page: authors are welcome, but not as a write-only tool for announcements. Self-promo should be less than a quarter of one's stories and comments. Check the account's history before posting.
- Always post mode: draft only, user approves and posts.

## Field map

| Field on /stories/new | Limit / format | Fill with |
|---|---|---|
| URL | URL | a technical write-up or `product.repo_url`. Avoid the pricing/landing page |
| Title | text, the real title of the page | the article's actual title, no marketing. Don't add "Show:" to the title |
| Tags | from fixed list, at least one | `show` for your own project (only for non-new users) plus topic tags such as programming, web, release, python, rust, javascript, go, devops, ai, security |
| Text | optional | leave empty for a link; or a short note on what is technically interesting |
| Author checkbox ("I am the author of the story at this URL") | checkbox | tick, since it's the user's own work |

## Steps
1. Confirm the user has a Lobsters account older than 70 days with real participation. If not, mark `skipped`.
2. Pick the best URL: a deep technical post (Hashnode/blog) or the repo, not the homepage.
3. Draft title, tags and optional text in `.launchkit/drafts/lobsters.md` and run `launchkit lint-copy` on it.
4. Show the draft to the user. They submit at https://lobste.rs/stories/new with the author box ticked.
5. `launchkit mark lobsters drafted`, later `submitted --listing-url <story url>`.

## Make the listing perform
- Write-ups about design decisions, performance work, or a hard bug beat "we launched X". Members upvote things they learn from.
- Accurate tags matter: users filter tags out, and a wrong tag draws "off-topic" flags.
- The author should answer technical questions in the thread and avoid sales talk.

## Gotchas
- Flags for "spam" or "off-topic" sink a story fast and hurt the account.
- Off-topic list includes business news, productivity, and self-help style content.
- Don't post again after a miss; resubmitting seen links is restricted.

## After submitting
- Watch the comments for a day and reply. Note the story URL with `launchkit mark`.
