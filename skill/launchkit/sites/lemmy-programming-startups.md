---
id: lemmy-programming-startups
name: "Lemmy (programming/startups)"
url: https://programming.dev/
category: Community
mode: post
pricing: Free
login: email            # account on one Lemmy instance; can post to communities on any instance
captcha: unknown        # some instances use a captcha or application question at signup
backlink_required: no
review_time: instant
verified: true
last_checked: 2026-10-12
---

# Lemmy (programming/startups)

Federated Reddit alternative. The startup communities are nearly empty (lemmy.world/c/startups ~80 subscribers,
lemmy.ml/c/startups ~95), so post to the programming and open source ones instead. Audience is privacy-minded and
skeptical of commercial pitches; open source and self-hosted tools fit best.

## Before you start
- Best communities (subscriber counts from the instance APIs on 2026-10-12):
  - `programming@programming.dev` (~28.8k): anything programming related; cross-posting encouraged.
  - `opensource@lemmy.ml` (~49k) and `opensource@programming.dev` (~6.8k): open source projects and news.
  - `selfhosted@lemmy.world` (~63k): self-hostable software only. Rule 7: promotion needs an account at least 30 days old
    with active participation; F/LOSS without a paywall has exceptions; tags [CBH] or [AIP] are required (AI disclosure rules).
  - `webdev@programming.dev` (~5.9k): web development.
- Account: the user's own on any instance (programming.dev is the natural home). lemmy.world blocks posting from VPN/Tor.
- If the product is closed-source SaaS with nothing for developers, mark `skipped` ("not a fit").

## Field map (Create Post form)

| Field | Limit / format | Fill with |
|---|---|---|
| URL | optional | `product.repo_url` for open source, else `product.url` |
| Thumbnail / image | optional upload | Leave empty; Lemmy pulls the og image (`assets.og_image`) |
| Title | ~200 chars | Plain description, e.g. "I built <name>, an open source <thing> for <audience>". For selfhosted, match their tag rules |
| Body | Markdown | 2-3 short paragraphs from `copy.reddit_post`: why, how it works (stack), license, what feedback you want. Don't paste the whole README |
| Community | picker | One of the communities above, chosen per post |
| NSFW | checkbox | Off |
| Language | dropdown | English |

## Steps
1. Open the community page (e.g. https://programming.dev/c/programming) and read its sidebar rules.
2. Write one post per community, each adapted (never identical). Save each with `launchkit draft lemmy-programming-startups -`,
   noting the target community, and mark `drafted`.
3. Only if `allow_social_posting` is true and the user approved: click **Create Post**, choose the community, fill the
   fields, click **Create**. Use Lemmy's **Cross-post** button for a second community instead of reposting.
4. `launchkit mark lemmy-programming-startups submitted --listing-url <post url>`.

## Make the listing perform
- Lead with the license and self-hosting story if there is one. "Open source, no telemetry" is the strongest hook on Lemmy.
- Answer comments fast and technically; the threads are small, so early replies shape the votes.
- Post on weekdays, European daytime; much of the audience is in the EU.

## Gotchas
- New accounts posting only promotion get removed on selfhosted and reported elsewhere. Have the user comment around a bit first.
- AI-assisted projects or posts need disclosure in some communities (selfhosted rule 8).

## After submitting
- Posts federate to other instances within minutes; share the post URL from the home instance.
