---
id: r-golang
name: "r/golang"
url: https://www.reddit.com/r/golang/submit
category: Reddit
mode: post
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: instant (mods remove after the fact)
verified: true
last_checked: "2026-10-12"
---

# r/golang

380k Go developers. Project posts are welcome, but only for things Go developers care about: Go libraries, Go apps that are open source, or dev tools aimed at Go developers. Closed-source or paid software that just happens to be written in Go is not allowed (Rule 9). The mods publish detailed project rules at /r/golang/wiki/project_requirements.

## Before you start
- Fit check: the product must be written in Go and open source (`product.open_source`, `product.repo_url`), or be a tool specifically for Go developers. Otherwise mark `skipped` ("not Go related").
- Decide where it goes. Projects with a few months of work, one contributor and no real users belong in the weekly **Small Projects** thread, not the front page. Proxies, web frameworks, cache, config, logging, TUI, job scheduler and LLM/MCP framework projects get extra scrutiny.
- Text and link posts only. Images and video are disabled.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Post type tab | Text or Link | Text, with the repo link in the body |
| Title | 300 chars | `<product.name> <version>: <plain description>` style that the sub uses, e.g. "gomponents v1.4.0 is out" or "go-dev-auth v0.3.1, zero-dependency auth for Go with passkeys" |
| Body | Markdown, "a couple of paragraphs" | purpose of the post (review, release, attention), what problem it solves, a short code example, what is done vs planned, link to `product.repo_url` |
| Flair | optional: show & tell, help | show & tell for a project post |
| Small Projects thread comment | Markdown | same content, shorter, posted as a comment in the pinned weekly thread |

## Steps
1. Open https://www.reddit.com/r/golang/ and look at the pinned **Small Projects** thread (new each Monday) and recent show & tell posts.
2. Decide front page vs Small Projects using the rule above. When in doubt, use Small Projects.
3. Draft from `copy.reddit_post` / `copy.show_hn_body`. State the purpose in the first line. If asking for code review, state how much AI coding was used.
4. `launchkit draft r-golang -` with target, title, body and flair. `launchkit mark r-golang drafted`.
5. Only with posting allowed and user approval: post, screenshot to `.launchkit/evidence/r-golang.png`, `launchkit mark r-golang submitted --listing-url <url>`.

## Make the listing perform
- Separate goals from results. "Used in production at X" only if the profile says so. Otherwise say it's early.
- Show a 5-15 line Go snippet of the API. Gophers judge a library by its API in seconds.
- Release posts with real changelogs do well (gomponents, Go releases). Weekday mornings US time.

## Gotchas
- Emoji in posts are blocked automatically. No "star the repo", "subscribe" or other engagement hooks.
- Rule 12: no AI-generated posts or comments, judged by appearance. Never paste a README or an LLM summary.
- Don't fake a story ("I had this problem and then I found...") for your own project. The wiki calls this out as deception.

## After submitting
- Reply to technical questions with real answers. Thank people for issues, link them to the issue tracker.
