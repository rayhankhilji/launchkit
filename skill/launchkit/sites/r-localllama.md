---
id: r-localllama
name: "r/LocalLLaMA"
url: https://www.reddit.com/r/LocalLLaMA/submit
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

# r/LocalLLaMA

847k people running AI models on their own hardware. One of the best places on Reddit for open-source or local-first AI tools, and one of the harshest for cloud-only AI wrappers. Self-promotion is allowed within the 1-in-10 guideline, with affiliation disclosed.

## Before you start
- Fit check: the product must run models locally, ship open weights, or work with local backends (Ollama, llama.cpp, LM Studio, vLLM). A hosted API-only product is off-topic (Rule 2), mark `skipped`.
- The account needs at least 5 karma in r/LocalLLaMA to post (and 5 Reddit karma to comment). Bots and fresh accounts are a known problem here, so mods watch new accounts closely.
- Collect the hard facts: license, model sizes, VRAM or RAM needed, hardware tested, tokens per second, repo link (`product.repo_url`).

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Post type tab | Text / Images & Video / Link | Text, or Images & Video with a short demo (`links.demo_video` / `assets.demo_gif`) |
| Title | 300 chars | what it is and the concrete number, e.g. "Whistle: speech to text in 16.9 MB". No hype |
| Body | Markdown | first line discloses affiliation ("I'm the dev"). Then what it does, how it runs locally, hardware and benchmarks, license, limitations, `product.repo_url` then `product.url` |
| Flair | Discussion, Resources, News, New Model, Question \| Help, Tutorial \| Guide, Other, I Built A Thing | **I Built A Thing** for your own tool; **Resources** for a free open-source release; **New Model** only for model weights |

## Steps
1. Open https://www.reddit.com/r/LocalLLaMA/ and search the sub for the product category to see what already exists (Rule 1).
2. Draft from `copy.reddit_post` / `copy.show_hn_body`, rewritten for this crowd: specs first, pitch never.
3. `launchkit draft r-localllama -` with title, body, flair and media. `launchkit mark r-localllama drafted`.
4. Only with posting allowed and user approval: post, screenshot to `.launchkit/evidence/r-localllama.png`, `launchkit mark r-localllama submitted --listing-url <url>`.

## Make the listing perform
- Numbers win: model size, VRAM, context length, speed on named GPUs. Posts like "Every model that runs on 10-16GB VRAM ranked" and "OpenMed 3.0, Apache-2.0, runs fully local" hit hundreds of upvotes.
- Say plainly what does not work yet. This crowd tests things the same day and will call out gaps.
- Mention the license in the title or first line if it is permissive (MIT, Apache-2.0).
- Post on a weekday or Sunday US morning, and stay to answer setup questions.

## Gotchas
- Rule 3 bans posts that are mainly LLM-written. Keep it terse and human. If the founder used an LLM to translate, they must say so.
- "I found this cool tool" for your own product is called out as undisclosed promotion (Rule 4).
- Telemetry or a cloud fallback that isn't disclosed will dominate the comments. State it up front.

## After submitting
- Expect bug reports in comments. Point them to GitHub issues and thank people.
