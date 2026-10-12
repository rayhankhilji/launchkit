---
id: r-rust
name: "r/rust"
url: https://www.reddit.com/r/rust/submit
category: Reddit
mode: post
pricing: Free
login: google
captcha: unknown
backlink_required: no
review_time: "instant (manual mod removal possible)"
verified: true
last_checked: "2026-10-12"
---

# r/rust

About 426k members. In October 2026 the mods banned "code dumps" (posts that are just a link to a repo or crate). A new project can now get its own post only if it's newsworthy, or it's a full write-up that meets the library rules below. Everything else goes in the weekly **What's Everyone Working on This Week?** thread (flair "activity megathread").

## Before you start
- The product must be written in Rust or be specifically useful to Rust developers. Otherwise mark `skipped` with "not Rust".
- Decide with the user which path fits:
  - **Weekly thread comment** (default): casual, any project, code link optional.
  - **Standalone post**: only if the library has been worked on regularly for 4+ months, the post is a full text post or article (a README doesn't count), it explains why the wider r/rust community should care, and it lays out trade-offs against similar popular crates.
- Commercial products face extra scrutiny. They pass if the code is open source under an OSI/FSF licence, or the post is a write-up of how and why you used Rust.
- Reddit login (Google, Apple, or email/username). The post form needs a login. Flairs below come from recent posts.

## Field map (standalone text post)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Community | picker | r/rust |
| Post type | Text or Link | Text, or Link to the founder's own article |
| Title | 300 chars | Name plus context, e.g. "Announcing libfoo 1.0: a library to foo your bars". The wiki says to add context even if the linked page title lacks it |
| Flair | picker | "🛠️ project" for a project, "🧠 educational" for a deep dive, "🗞️ news" for real news |
| Body | 40,000 chars | Rust-specific story: design decisions, ownership or async problems you hit, crates used, benchmarks, trade-offs. `product.repo_url` and crates.io link at the end |

## Steps
1. Open https://www.reddit.com/r/rust/ and check the pinned posts. For the weekly thread, filter by the "activity megathread" flair and open the newest one.
2. Weekly thread: post a top-level comment with what you're building, what was hard in Rust, and a link if you like.
3. Standalone: open https://www.reddit.com/r/rust/submit, write the text post, pick the flair.
4. `launchkit draft r-rust -` with the chosen path, title, flair and body, then `launchkit mark r-rust drafted`.
5. Only if `allow_social_posting` is true and the user approved: post it, then `launchkit mark r-rust submitted --listing-url <url>`.

## Make the listing perform
- Write about the Rust, not the product. "How we avoided Arc<Mutex> in our hot path" gets discussion. "I built a TUI for X" gets removed.
- Use text for code and errors, never screenshots.
- At most one self-promotional submission per week (wiki rule).

## Gotchas
- Removed: code dumps, memes, "slop", and anything that looks even partly AI-generated. The mods say this explicitly.
- Simple questions go in the stickied "Hey Rustaceans! Got a question?" thread.
- Don't link straight to issue trackers when criticising other projects. Use an archive link.

## After submitting
- Stay for comments. People here ask detailed questions about design choices and benchmarks.
