---
id: hacker-news-ask-hn-launch-hn
name: "Hacker News: Ask HN / Launch HN"
url: https://news.ycombinator.com/submit
category: Community
mode: post
pricing: Free
login: email            # HN username + password; email is optional
captcha: recaptcha      # shown on some signups/logins, not on every submit
backlink_required: no
review_time: "instant (Launch HN: HN team replies within ~2 weeks)"
verified: true
last_checked: 2026-10-12
---

# Hacker News: Ask HN / Launch HN

Two text-post formats on HN. **Ask HN** is a question to the community (open to anyone). **Launch HN** is a curated
front-page launch reserved for YC companies, arranged with the HN team. For a normal "here is my product" post use the
separate `hacker-news-show-hn` guide instead. Use this one only if the user has a real question to ask, or is YC-backed.

## Before you start
- HN rules that change how launchkit works here: "Don't post generated text or AI-edited text" and "please don't automate
  posting". So: draft notes and an outline only, have the user rewrite it in their own words, and **the user posts it
  themselves** from their own account. Never post on HN from the agent, even if `allow_social_posting` is true.
- Account: an established personal account (not named after the company). Green usernames mark new accounts and get less trust.
- Ask the user: are they a YC company (`company.funding_stage` / notes)? If not, Launch HN is off the table.
- Only one HN post per launch. If they're also doing Show HN, pick one and space any other HN post by weeks.

## Field map (Ask HN, via https://news.ycombinator.com/submit)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| title | 80 chars, must start `Ask HN: ` | A real, specific question from the founder's problem space, e.g. "Ask HN: How do you handle X when Y?" No product name, no hype, no caps or "!" |
| url | leave **blank** | Text posts can't carry a link, and links in the text box are not clickable |
| text | plain text, `*italics*`, blank line = paragraph | 2-4 short paragraphs in the user's own voice: context, what they tried, the question. Mention their product only if it's the honest context |

## Field map (Launch HN, YC only)

| Step | Fill with |
|---|---|
| Form | The Launch HN form linked from https://news.ycombinator.com/yli.html (YC founder account) |
| title | `Launch HN: <product.name> (YC <batch>) - <neutral tagline>`, 80 chars max. Use `product.tagline_short` toned down |
| text | Built from `copy.show_hn_body` / `copy.launch_post_story`, following the yli.html template (see below) |

## Steps
1. Read https://news.ycombinator.com/newsguidelines.html and https://news.ycombinator.com/yli.html.
2. Ask HN: draft a title and outline, save with `launchkit draft hacker-news-ask-hn-launch-hn -` (include "post from your own
   account, rewrite in your own words, best time below"), then `launchkit mark hacker-news-ask-hn-launch-hn drafted`.
3. Launch HN (YC only): don't fill the form yourself. Mark `needs_human --note "YC: fill Launch HN form at news.ycombinator.com/yli.html; HN team picks the day"`.
4. Not YC and no genuine question: `launchkit mark hacker-news-ask-hn-launch-hn skipped --note "use hacker-news-show-hn"`.

## Make the listing perform
- Ask HN posts that do well are genuine questions where the founder knows the area. "Ask HN: Would you use my app?" gets flagged.
- Launch HN text template (from HN): introduce yourselves, one clear sentence on what the company does, the problem and why
  it's hard, how you came to it, the solution with technical details, what's different, then a warm open invitation for
  feedback. No feature lists, no single-sentence paragraphs, no superlatives. Say how you make money and show pricing.
- Remove signup walls for the day if possible. HN readers expect to try the product.
- Post on a weekday morning US Pacific time (roughly 7-10am PT) so the post has a full US day on /newest and /ask.
- The user must stay in the thread for the first few hours and answer every comment calmly, agreeing with something in each critique first.

## Gotchas
- Asking anyone for upvotes or comments gets the post and account penalized. HN detects voting rings. Don't share the link asking for votes.
- Don't delete and repost. Reposts are only OK if the first one got no attention.
- Ask HN posts only reach /ask after a small points threshold. Many sit on /asknew and die quietly; that's normal.
- Comments close after two weeks.

## After submitting
- The user pastes the item URL (`news.ycombinator.com/item?id=...`); mark `submitted --listing-url <url>`.
- Check `showdead` in profile settings if the post vanished; if it's [dead] unfairly, email hn@ycombinator.com.
