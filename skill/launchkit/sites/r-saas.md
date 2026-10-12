---
id: r-saas
name: "r/SaaS"
url: https://www.reddit.com/r/SaaS/submit
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

# r/SaaS

About 825k SaaS founders and operators. Lessons, metrics and teardown posts do well; launch announcements and naked
links get removed. Promotion is limited by a hard rule: at most 1 mention or 3 links per 60 days, with the affiliation
disclosed.

## Before you start
- A Reddit account owned by the user, logged in already in the browser. Reddit's login page offers phone, Apple, email one-time link or username/password. Don't create an account for them: a brand-new account posting a link gets filtered almost everywhere.
- An angle that gives value on its own: what you learned building or selling `product.name`, numbers if real, a
  mistake, a pricing decision. The product is context, not the point.
- Check the product category: r/SaaS bans promotion of tools for advertising, outreach, lead detection, or
  ad/content generation (including Reddit reply/DM tools). If the product is one, mark skipped.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Community | picker | already set by the URL; check it reads the right sub |
| Post type tab | Text / Images & Video / Link / Poll | Text |
| Title | 300 chars (Reddit limit) | lesson- or number-led title, e.g. `What 40 customer calls taught me about pricing a B2B tool` (numbers only if true) |
| Body | markdown editor | lessons post adapted from `copy.launch_post_story`; product mentioned once with "I built this" disclosure at the start or end; full direct URL |
| Flair | picker | flair picker is enabled; pick the closest (e.g. a build/lessons type flair). Not confirmed while logged out |
| Tags | NSFW / Spoiler (and Brand affiliate if shown) | leave NSFW and Spoiler off; turn on Brand affiliate if Reddit offers it |

Text, Link, Image and Video posts are allowed. Use Text.

## Steps
1. Open https://www.reddit.com/r/SaaS/submit. Text tab.
2. Write the body: the lesson first (3-5 short paragraphs), then one line such as "Disclosure: I'm the founder of
   <product.name> (<product.url>)". Don't paste a feature list.
3. Use the full `product.url`. No shorteners, UTM tags or affiliate links (auto-removed, can get the URL blacklisted).
4. Save the draft: `launchkit draft r-saas -` with title, body, flair, the target URL and the best time to post. Then `launchkit mark r-saas drafted`.
5. Only if `launch_settings.allow_social_posting` is true and the user approved this exact draft in this session: open https://www.reddit.com/r/SaaS/submit, pick the tab, paste title and body, set flair, click **Post**. Copy the post URL.
6. `launchkit mark r-saas submitted --listing-url <post url>`. Screenshot the live post to `.launchkit/evidence/r-saas.png`.

## Make the listing perform
- Posts with specific numbers and honest failures get the most comments here. "How I got my first 10 customers" style.
- Weekdays, 13:00-16:00 UTC. Stay and answer questions; disappearing after posting is listed as bad behaviour.
- Don't offer free audits or reviews, and don't ask for testers or emails: both are banned.

## Gotchas
- 60-day limit applies across the user's accounts. Record the post date so the user doesn't post again too soon.
- AI-written text is explicitly banned. Rewrite in the founder's voice and run `launchkit lint-copy`.
- Surveys and polls need mod approval first via modmail.

## After submitting
- Check it shows on https://www.reddit.com/r/SaaS/new logged out.
