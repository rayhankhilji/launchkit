---
id: facebook-groups-startup-saas
name: "Facebook Groups (startup/SaaS)"
url: https://www.facebook.com/groups/
category: Community
mode: post
pricing: Free
login: unknown          # personal Facebook account required
captcha: unknown
backlink_required: no
review_time: "instant, or pending admin approval in moderated groups"
verified: true
last_checked: 2026-10-12
---

# Facebook Groups (startup/SaaS)

Large founder and marketer groups (e.g. SaaS Growth Hacks, startup and bootstrapper groups, plus niche groups for the
product's audience). Everything is behind login (facebook.com/groups redirects to the login page), so group names,
sizes and rules below are unconfirmed until the user logs in and reads them.

## Before you start
- Login: the founder's personal account. Pages can join some groups, but personal posts get far more engagement.
- Most big groups ban direct self-promotion outside a weekly promo thread (often "Promo Friday" or "Self-promo Saturday").
  Read each group's About > Group rules and pinned "Featured" posts before drafting.
- Many groups make you answer membership questions and wait for approval to join. Start this days before launch.
- The audience-niche groups (where customers hang out) usually beat the founder groups for actual users.

## Field map (group composer)

| Field | Limit / format | Fill with |
|---|---|---|
| Post text | long text; first ~3 lines show before "See more" | Story-first from `copy.launch_post_story`: the problem, what you built, a specific question. Product name in text |
| Link | URL | `product.url`, often required in the first comment rather than the post (check rules) |
| Photo/video | upload | One screenshot or `links.demo_video` uploaded natively |
| Topic / flair | some groups | The group's "Launch", "Feedback" or "Self-promo" topic |
| Promo thread comment | comment | Where required: 2-3 lines + link in that week's promo thread instead of a new post |

## Steps
1. Ask the user which groups they're already in. Have them open https://www.facebook.com/groups/ logged in, search
   "SaaS", "startup", "bootstrapped" and the product niche, and join 3-5 active groups.
2. For each group, note the self-promo rule and day. Write an adapted post or promo-thread comment per group.
   Save each with `launchkit draft facebook-groups-startup-saas -` and mark `drafted`.
3. Only if `allow_social_posting` is true and the user approved: open the group, click **Write something...**,
   paste, add media and topic, click **Post**. Copy the post link from the timestamp.
4. `launchkit mark facebook-groups-startup-saas submitted --listing-url <post url>`.

## Make the listing perform
- Ask a real question ("how do you handle X?") and mention the product as your attempt; pure announcements get removed or ignored.
- Post on the group's promo day and reply to every comment the same day; Facebook ranks active threads up the group feed.
- Never post identical text into several groups on the same day; Facebook's spam filters suspend posting.

## Gotchas
- Shortened links (bit.ly) are often auto-declined. Use the clean product URL.
- Posts in moderated groups can sit in "pending" for days. Check "Your content" in the group.

## After submitting
- Track which groups approved the post; remove the draft from groups that declined.
