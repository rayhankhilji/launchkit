---
id: r-claudeai
name: "r/ClaudeAI"
url: https://www.reddit.com/r/ClaudeAI/submit
category: Reddit
mode: post
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: "instant (AutoModerator or mods may remove it later)"
verified: true
last_checked: "2026-10-12"
---

# r/ClaudeAI

About 1.19M members, Claude and Claude Code users. Rule 7 welcomes project showcases if: the project was built with
Claude or Claude Code (or for Claude) by you; the post explains what was built, how Claude helped in detail and what it
does; it is free to try and says so (paid tiers OK); promotional language is minimal; no referral links. Posting on the
feed requires more than 100 karma.

## Before you start
- A Reddit account owned by the user, logged in already in the browser. Reddit's login page offers phone, Apple, email one-time link or username/password. Don't create an account for them: a brand-new account posting a link gets filtered almost everywhere.
- Fit: the product must have been built with Claude/Claude Code, or be a tool for Claude. Otherwise mark skipped
  ("not built with Claude").
- The user's account needs 100+ karma. If not, mark `needs_human` with "needs 100+ karma for r/ClaudeAI".
- Facts about how Claude was used must come from the user; ask if the profile doesn't say.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Community | picker | already set by the URL; check it reads the right sub |
| Post type tab | Text / Images & Video / Link / Poll | Text |
| Title | 300 chars (Reddit limit) | what you built and that Claude built it, e.g. `I built a self-hosted invoice tool with Claude Code in two weekends: what it got right and wrong` |
| Body | markdown editor | what it does, how Claude helped (workflow, prompts, where it struggled), free-to-try statement, link to the project; no referral links |
| Flair | picker | `Built with Claude` (others seen: Claude Code, Claude Code Workflow, Productivity, Coding) |
| Tags | NSFW / Spoiler (and Brand affiliate if shown) | leave NSFW and Spoiler off; turn on Brand affiliate if Reddit offers it |

All post types allowed. Use Text, optionally with a screenshot.

## Steps
1. Confirm fit and karma.
2. Open https://www.reddit.com/r/ClaudeAI/submit. Text tab.
3. Body: "Free to try" line, then the build story with concrete Claude details, then the link.
4. Flair: `Built with Claude`.
5. Save the draft: `launchkit draft r-claudeai -` with title, body, flair, the target URL and the best time to post. Then `launchkit mark r-claudeai drafted`.
6. Only if `launch_settings.allow_social_posting` is true and the user approved this exact draft in this session: open https://www.reddit.com/r/ClaudeAI/submit, pick the tab, paste title and body, set flair, click **Post**. Copy the post URL.
7. `launchkit mark r-claudeai submitted --listing-url <post url>`. Screenshot the live post to `.launchkit/evidence/r-claudeai.png`.

## Make the listing perform
- `Built with Claude` is one of the most-used flairs on top posts. Detail on workflow (CLAUDE.md, subagents, where
  it failed) is what readers value.
- Open source repos get more trust. Weekday mornings US time.

## Gotchas
- Performance complaints and bug reports belong in the megathreads, not your launch post.
- Competitor comparisons need evidence and sources.

## After submitting
- Check https://www.reddit.com/r/ClaudeAI/new logged out.
