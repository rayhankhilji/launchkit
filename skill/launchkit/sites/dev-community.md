---
id: dev-community
name: "DEV Community"
url: https://dev.to/new
category: Dev / Open Source
mode: post
pricing: Free
login: github           # also Apple, Facebook, Google, MLH, X, or email + password
captcha: none
backlink_required: no
review_time: "instant (posts go live on publish)"
verified: true
last_checked: 2026-10-12
---

# DEV Community

dev.to, a Forem-based blogging community with about 4 million developer accounts. A well-written build story
tagged `#showdev` can get steady traffic and comments. Pure ads get ignored or flagged by moderators.

## Before you start
- Account: sign up at https://dev.to/enter (GitHub is quickest and shows your GitHub on the profile).
- Assets: a cover image (DEV shows it at 1000x420; use `assets.og_image` if it matches that ratio, else a
  screenshot cropped to it) and 1-3 inline screenshots or `assets.demo_gif`.
- Source copy: `copy.launch_post_story`. This is a `post` site: draft it, get the user's approval, post only if
  `launch_settings.allow_social_posting` is true.

## Field map (editor at /new, login required)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Cover image | image upload, 1000x420 shown | `assets.og_image` or a cropped screenshot |
| Post title | text, aim for under 70 chars | "I built `product.name`: <what it does>" or "How I built ..." in sentence case |
| Tags | up to 4 | `showdev` first, then 3 from `product.tags` that exist on DEV (e.g. `opensource`, `webdev`, `javascript`, `ai`, `productivity`) |
| Body | Markdown | Build story from `copy.launch_post_story`: problem, how it works (stack, one code snippet), what's next, link to `product.url` and `product.repo_url` near the end |

## Steps
1. Read the `#showdev` guidelines at https://dev.to/t/showdev (summarised below).
2. Write the draft (title, tags, body, cover) and save with `lk draft dev-community -`. Mark `drafted`.
3. After approval: open https://dev.to/new, upload the cover, paste title, add tags, paste the Markdown body.
4. Click **Preview** to check images and code blocks, then **Publish**.
5. `launchkit mark dev-community submitted --listing-url <post url>`

## Make the listing perform
- `#showdev` rules: "For showing off projects and launching products. Please make posts community-driven and
  not overly corporate or salesy." It's for projects, not tutorials you're proud of.
- Write in first person as the founder. Technical depth wins: architecture, a tricky bug, trade-offs, numbers
  from the profile. A 5-9 minute read is typical for posts that do well in the tag.
- Publish Tuesday to Thursday, morning US Eastern. Reply to every comment in the first few hours; comments and
  reactions push it into the home feed.
- Add an open question at the end inside the post body (e.g. which integration to build next) to start comments.
- Cross-post later to Hashnode/Medium using DEV's canonical URL setting if needed.

## Gotchas
- Don't post the same launch twice or spam multiple tags with near-identical posts; moderators can mark posts
  low quality and they drop out of feeds.
- Readers spot generic machine-written launch posts fast. Write in the founder's voice using only profile facts.

## After submitting
- Check the post's stats page after 24 hours. Answer comments only if the user asked you to stay on it.
