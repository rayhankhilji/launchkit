---
id: r-startups
name: "r/startups"
url: https://www.reddit.com/r/startups/submit
category: Reddit
mode: post
pricing: Free
login: google
captcha: unknown
backlink_required: no
review_time: "instant (comment in pinned Share your startup thread)"
verified: true
last_checked: "2026-10-12"
---

# r/startups

About 2.1 million members. "No direct sales, advertisements, or promotional posts of any kind." The only place to share your startup is the pinned **Share your startup - quarterly post** thread (the rules call it monthly, the current pinned post says quarterly). Standalone posts must be discussions that don't name your project or link to it.

## Before you start
- Default plan: one top-level comment in the Share your startup thread using its template.
- Optional second post: a discussion post about a lesson or problem, with no product name or URL. About 93% of recent posts carry the "I will not promote" flair and most put "(I will not promote)" in the title. Do both.
- Standalone posts need at least 250 characters of body.
- Reddit login (Google, Apple, or email/username). The post form needs a login.

## Field map (Share your startup comment, follow the thread template)

| Template line | Fill with |
|---|---|
| Startup Name / URL | `product.name` and `product.url` |
| Location of Your Headquarters | `company.city`, `company.country` |
| Elevator Pitch/Explainer Video | `product.description_short`, plus `links.demo_video` if there is one |
| More details: life cycle stage | Map `product.status`: idea/building -> Discovery, launched with early users -> Validation, growing -> Efficiency or Scaling |
| More details: your role | `founder.role` |
| Goals this month / how r/startups can help | 1-2 concrete asks the user approves (e.g. feedback on onboarding, intros to dentists). Never ask for money |
| Discount for r/startups subscribers | `product.deal_or_promo_code` if set, otherwise leave out |

**Discussion post (optional):** Post type Text. Title: clear and specific, ending "(I will not promote)". Flair: "I will not promote". Body: 250+ characters about a method, lesson or question, without naming the product.

## Steps
1. Open https://www.reddit.com/r/startups/ and open the pinned "Share your startup - quarterly post".
2. Write the comment following the template above.
3. `launchkit draft r-startups -` with the thread URL and comment (and the optional discussion post), then `launchkit mark r-startups drafted`.
4. Only if `allow_social_posting` is true and the user approved: post, then `launchkit mark r-startups submitted --listing-url <comment permalink>`.

## Make the listing perform
- Comment soon after a new thread goes up and reply to others in the thread. The rules suggest asking them to return the favour.
- A specific ask gets more replies than "check it out".
- Feedback requests and surveys belong in the weekly feedback thread, not the share thread.

## Gotchas
- Self-promotion includes anything you have a stake in, even a friend's company. Mods have the final say.
- Links in comments elsewhere must be to things you're not affiliated with. Affiliate links mean a ban.
- No "DM me" or "I sent you a DM". Blog links need prior mod approval. No AMAs without 2 weeks' notice to the mods.

## After submitting
- Check the comment in a logged-out window. Reply to everyone who answers.
