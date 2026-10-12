---
id: discord-niche-servers-showcase-channels
name: "Discord niche servers (#showcase channels)"
url: https://discord.com/
category: Community
mode: post
pricing: Free
login: email            # Discord account; many servers require phone verification
captcha: unknown        # Discord shows a captcha on risky signups/logins (not confirmed this run)
backlink_required: no
review_time: instant (some servers queue showcase posts for mod approval)
verified: true
last_checked: 2026-10-12
---

# Discord niche servers (#showcase channels)

Not one site but many servers, each with its own rules. Tool and framework communities (the server for the stack the
product is built on, or for the audience it serves) usually have a #showcase, #share-your-work or #self-promo channel.
Small, but members are exactly the target users and feedback is direct.

## Before you start
- Discord's own pages (support.discord.com) block plain fetches; server rules are only visible after joining, so all
  per-server details are unconfirmed until the user joins.
- Find servers: the official Discord of each tool in `product.tags` (framework, database, AI SDK...), audience servers
  (indie maker, SaaS, design communities), and links in the docs/README of related open source projects.
- Account: the user's own. Joining usually means accepting rules, sometimes phone verification or a wait (often 10 minutes).
- Many servers only allow showcase posts from members with a role earned by activity. Don't join and post the same minute.

## Field map (message in the showcase channel or forum post)

| Field | Limit / format | Fill with |
|---|---|---|
| Forum post title (forum channels) | 100 chars | "<product.name> - <tagline_short>" or the server's required format |
| Tags (forum channels) | channel tags | The server's closest tag (e.g. "Showcase", "Open source", "SaaS") |
| Message | 2,000 chars (4,000 with Nitro) | 3-6 lines from `product.description_short`: what it is, how it uses this server's tool, what feedback you want, `product.url` |
| Attachments | up to 10 files, ~10 MB each free | One screenshot or `assets.demo_gif` |

## Steps
1. With the user, pick 3-5 servers where the product is on-topic. Have the user join and read #rules / #announcements.
2. Write one message per server, mentioning how the product relates to that community (e.g. "built with X").
   Save each with `launchkit draft discord-niche-servers-showcase-channels -` naming server and channel; mark `drafted`.
3. Only if `allow_social_posting` is true and the user approved: open the server's showcase channel, paste the
   message, attach media, press Enter. Then copy the message link (right click > Copy Message Link).
4. `launchkit mark discord-niche-servers-showcase-channels submitted --listing-url <message link>`.

## Make the listing perform
- The best fit is the server of the tool you built on: maintainers often reshare good showcases in announcements or newsletters.
- Lead with what's interesting to that crowd (how you used their tool), not the pitch.
- Answer replies in thread; Discord moves fast and unanswered posts scroll away in hours.

## Gotchas
- Posting outside showcase/self-promo channels, cross-posting to many channels, or DMing members gets an instant ban.
- Never DM people to promote. It's against most server rules and Discord's spam policy.
- Invite links to the user's own server are banned in many showcase channels; check rules first.

## After submitting
- Note each server and message link in the draft log so the user can follow up on replies.
