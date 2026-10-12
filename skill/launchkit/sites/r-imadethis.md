---
id: r-imadethis
name: "r/IMadeThis"
url: https://www.reddit.com/r/IMadeThis/submit
category: Reddit
mode: post
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: instant
verified: true
last_checked: "2026-10-12"
---

# r/IMadeThis

About 50k members. A show-off sub for anything people made: crafts, art, apps, games, side projects. It has no subreddit-specific rules and no post flair, so a product post is fine. Engagement is low (most posts get under 10 upvotes), so it is a quick, low-risk extra post rather than a launch channel.

## Before you start
- A visual helps a lot: `assets.demo_gif`, `links.demo_video` or `assets.screenshots[0]`. Images and video posts are allowed.
- Reddit's site-wide rules still apply (spam, vote manipulation). Use an account with normal activity.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Post type tab | Text / Images & Video / Link | Images & Video if there is a GIF or video, otherwise Link to `product.url` |
| Title | 300 chars | first person, plain: "I made <what it does> because <short reason>" from `product.tagline` / `copy.launch_post_story` |
| Media | image or video upload | `assets.demo_gif` or `links.demo_video` (download the file), else `assets.screenshots[0]` |
| Link (Link tab) | URL | `product.url` |
| Body / first comment | Markdown | 3-5 sentences: why you built it, how it works, what's free, `product.url` |
| Flair | not enabled | none |

## Steps
1. Open https://www.reddit.com/r/IMadeThis/ and scan the top posts this week for the title style.
2. Draft the title and the first comment. Pick the media.
3. `launchkit draft r-imadethis -` with post type, title, media path, body/comment. `launchkit mark r-imadethis drafted`.
4. Only with posting allowed and user approval: create the post, add the explanation as the body or first comment with the link, Post. Screenshot to `.launchkit/evidence/r-imadethis.png`, `launchkit mark r-imadethis submitted --listing-url <url>`.

## Make the listing perform
- Titles that start "I made a free ... that ..." or "I got tired of X, so I built Y" do best here. Name the concrete thing it does.
- A short looping GIF of the product doing its job beats a landing page link.
- Post in the US morning. Reply to every comment, this sub is small enough that early replies matter.

## Gotchas
- Don't cross-post the identical text you used in other subs the same day. Reddit's spam filter catches repeated links and text.
- "Looking for testers" posts are allowed but get fewer clicks than a finished thing.

## After submitting
- Check the post is visible logged out (Reddit may silently filter new accounts). Answer questions.
