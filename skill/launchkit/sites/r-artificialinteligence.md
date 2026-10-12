---
id: r-artificialinteligence
name: "r/ArtificialInteligence"
url: https://www.reddit.com/r/ArtificialInteligence/submit
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

# r/ArtificialInteligence

About 1.96M members, "the high-signal hub for AI". Builder posts are allowed under rule 3 if they carry real
educational value on their own: disclose affiliation, explain the technical approach, benchmarks, limitations or
lessons, link a repo/demo/docs, and no calls to action. Limit: 1 self-promotional post per author per 14 days.
Open-source projects with a public repo get lighter review.

## Before you start
- A Reddit account owned by the user, logged in already in the browser. Reddit's login page offers phone, Apple, email one-time link or username/password. Don't create an account for them: a brand-new account posting a link gets filtered almost everywhere.
- A technical story about how the product works (model choice, evals, failures). If the post loses its value once the
  link is removed, it will be deleted.
- `product.repo_url` if `product.open_source` is true.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Community | picker | already set by the URL; check it reads the right sub |
| Post type tab | Text / Images & Video / Link / Poll | Text |
| Title | 300 chars (Reddit limit) | lead with the signal, under 120 chars, e.g. `Built a local meeting summarizer on a 3B model: what worked, what failed (open source)` |
| Body | markdown editor | disclosure line ("I built this"), the approach, benchmarks or results if real, limitations, lessons; repo/demo/docs link; no waitlist, pricing or "subscribe" |
| Flair | picker | `🛠️ Project / Build` (unflaired posts can be removed after 30 minutes) |
| Tags | NSFW / Spoiler (and Brand affiliate if shown) | leave NSFW and Spoiler off; turn on Brand affiliate if Reddit offers it |

All post types are allowed. Use Text.

## Steps
1. Check no other promotional post went out from this account in the last 14 days.
2. Open https://www.reddit.com/r/ArtificialInteligence/submit. Text tab. Title under 120 characters, no caps or clickbait.
3. Body: disclosure first, then the technical breakdown, then the link.
4. Flair: `🛠️ Project / Build`.
5. Save the draft: `launchkit draft r-artificialinteligence -` with title, body, flair, the target URL and the best time to post. Then `launchkit mark r-artificialinteligence drafted`.
6. Only if `launch_settings.allow_social_posting` is true and the user approved this exact draft in this session: open https://www.reddit.com/r/ArtificialInteligence/submit, pick the tab, paste title and body, set flair, click **Post**. Copy the post URL.
7. `launchkit mark r-artificialinteligence submitted --listing-url <post url>`. Screenshot the live post to `.launchkit/evidence/r-artificialinteligence.png`.

## Make the listing perform
- Honest limitations and real numbers are what this sub rewards. Comparisons need sources.
- Open source with a public repo is reviewed more lightly and gets more goodwill.
- Weekday mornings US time.

## Gotchas
- Waitlists, lead generation and repeat promotion lead to permanent bans.
- If you post a link instead of text, a top-level summary comment is required within 30 minutes.

## After submitting
- Check https://www.reddit.com/r/ArtificialInteligence/new logged out.
