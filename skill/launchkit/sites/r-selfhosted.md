---
id: r-selfhosted
name: "r/selfhosted"
url: https://www.reddit.com/r/selfhosted/submit
category: Reddit
mode: post
pricing: Free
login: google
captcha: unknown
backlink_required: no
review_time: "minutes (auto-held until you reply to the AI-disclosure bot)"
verified: true
last_checked: "2026-10-12"
---

# r/selfhosted

About 855k members who run their own servers (Docker, homelabs). A good fit only if the product can be self-hosted. Projects younger than 3 months (counted from first public commit or post) can only go in the weekly **New Project Megathread**. Older, production-ready projects with docs can get their own post with a Release flair.

## Before you start
- The product must be self-hostable (Docker image or install docs). Mobile apps only count as companions to a self-hosted backend. SaaS-only products: mark `skipped` with "not self-hostable".
- Check the age of the project: first commit or first public mention. Under 3 months means megathread only.
- Need `product.repo_url`, install docs (`links.docs`), and ideally a docker-compose example.
- Decide with the user how to describe AI involvement. Every post is auto-removed until the author replies to the bot saying how AI was involved, even if it wasn't.
- Reddit login (Google, Apple, or email/username). The post form needs a login.

## Field map

**New Project Megathread comment** (projects under 3 months, use the thread's template):

| Field | Fill with |
|---|---|
| Project Name | `product.name` |
| Repo/Website Link | `product.repo_url`, then `product.url` |
| Description | `product.description_medium`: what it does, what problem it solves, what it replaces (`product.competitors_alternatives`) |
| Deployment | Docker image, compose snippet, link to `links.docs` |
| AI Involvement | What the user tells you. Be transparent |

**Standalone post** (older projects):

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Title | 300 chars | "<name> v<version>: self-hosted <what it replaces>" |
| Flair | picker | "Release (No AI)" or "Release (AI)" for releases, "Product Announcement" for launches, or the topic flair (e.g. "Media Serving", "Personal Dashboard"). Any app written with AI must use an AI flair |
| Body | 40,000 chars | What it replaces, features, how to deploy, screenshots, licence, link to repo and docs |

## Steps
1. Open https://www.reddit.com/r/selfhosted/ and open the pinned "New Project Megathread - Week of ..." (new one each Friday, you can comment any day).
2. For a megathread comment, fill the template above. For a standalone post, open https://www.reddit.com/r/selfhosted/submit.
3. `launchkit draft r-selfhosted -` with the path, title/flair/body, then `launchkit mark r-selfhosted drafted`.
4. Only if `allow_social_posting` is true and the user approved: post it, reply to the AI-compliance bot comment straight away, then `launchkit mark r-selfhosted submitted --listing-url <url>`.

## Make the listing perform
- Lead with the hosted service it replaces ("self-hosted alternative to Google Photos"). That's how people here browse.
- Show the docker-compose snippet in the post. Low setup friction gets upvotes.
- Mention the licence, data storage, and whether it phones home. Commenters ask every time.
- Dashboards and tools for self-hosters that aren't self-hosted themselves are allowed only on Wednesdays, with the right flair.

## Gotchas
- Standalone posts for projects under 3 months are removed and pointed at the megathread.
- "Promoted apps must be production ready and have docs." No direct ads for hosting or VPS.

## After submitting
- Confirm the post was re-approved after replying to the bot. Check in a logged-out window.
