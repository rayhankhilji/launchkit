---
id: r-devops
name: "r/devops"
url: https://www.reddit.com/r/devops/submit
category: Reddit
mode: post
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: instant (AutoModerator and mods remove after the fact)
verified: true
last_checked: "2026-10-12"
---

# r/devops

About 517k engineers talking about CI/CD, Kubernetes, cloud and on-call life. Product posts in the main feed are not allowed. Self-promotion goes in the stickied **Weekly Self Promotion Thread** (a new one each Monday). Only worth the time for tools that DevOps, SRE or platform engineers actually use.

## Before you start
- Fit check: skip unless `product.categories` / `product.target_audience` is DevOps, infra, CI/CD, observability, security or developer tooling.
- The user's Reddit account (email, Apple, phone or Google login at reddit.com). Check it has some normal comment history. Accounts that only post their own product get removed.
- `copy.reddit_post` and `product.repo_url` / `links.docs` if they exist. Engineers here trust a repo or docs over a landing page.
- No URL shorteners anywhere (Rule 7).

## Field map

Default path is a **comment** in the weekly thread, not a new post.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Comment box in "Weekly Self Promotion Thread" | Markdown | 3-6 sentences: what it does for an ops engineer, how it works (stack, where it runs), what it replaces, pricing from `product.pricing_details`, then `product.url` or `product.repo_url` |

Main feed post (only for a genuine technical write-up, see below):

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Post type tab | Text (images allowed, video off) | Text |
| Title | 300 chars | plain description of the problem or finding, no product slogan |
| Body | Markdown | first line `Disclosure: I build <product.name>.` then the technical content, link at the end |
| Flair | Discussion, Tools, Architecture, Observability, Vendor / market research, Ops / Incidents | Tools for a tool write-up, Architecture for a design post |

## Steps
1. Open https://www.reddit.com/r/devops/ and click the pinned **Weekly Self Promotion Thread** under "Community highlights". Read the top comments to match tone.
2. Draft the comment from `copy.reddit_post` following skill/human-writing. Lead with the ops problem, give one concrete technical detail, state pricing, link last.
3. `launchkit draft r-devops -` with the thread URL, the comment text and a note to post Monday or Tuesday while the thread is fresh. Then `launchkit mark r-devops drafted`.
4. Only if `launch_settings.allow_social_posting` is true and the user approved this draft: post the comment, screenshot to `.launchkit/evidence/r-devops.png`, `launchkit mark r-devops submitted --listing-url <comment permalink>`.

## Make the listing perform
- Post in the weekly thread on the day it goes up (Monday). By Thursday it has 80+ comments and new ones get no views.
- Write like an engineer. Name the stack, where it runs (SaaS, self-hosted, CLI), and the exact pain ("GitHub Actions minutes", "drift between Terraform and prod").
- A main-feed post only survives if it stands alone as useful content: a migration story, an incident write-up, a benchmark. Mention the product once, with disclosure at the top. Posts flaired Tools that read like product pitches sat at 0 points during research.
- Surveys and "would you use this" validation posts need mod approval first (Rule 6). Don't post them.

## Gotchas
- Rule 5 removes anything that reads like AI output or "stealth marketing". Keep it short and specific.
- Link posts need a 3-5 sentence submission statement and the article's exact title. Don't link to the user's blog as a traffic funnel (Rule 4).
- Job posts go to r/devopsjobs.

## After submitting
- Check the comment is visible while logged out. If it vanished, AutoModerator probably caught it. Don't repost, tell the user.
- Answer technical questions in the thread if the user asks you to. Don't argue with critics.
