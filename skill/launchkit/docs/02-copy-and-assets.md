# Phase 2: Copy variants and assets

Directory forms have different length limits. Write every variant once, store it in the profile, and
reuse it verbatim. Never write fresh copy per site (it's slower and less consistent).

## Copy to generate (save under `product.*` and `copy.*`)

| Field | Limit | Use |
|---|---|---|
| `product.tagline_short` | ≤ 40 chars | Tight title fields |
| `product.tagline` | ≤ 60 chars | Product Hunt-style tagline |
| `product.description_short` | ≤ 160 chars | Meta-style short description, most forms |
| `product.description_medium` | ≤ 300 chars | "Short description" on stricter sites |
| `product.description_long` | 500–1000 chars | Full description; plain text, short paragraphs |
| `product.key_features` | 3–6 bullets, ≤ 80 chars each | Feature fields |
| `product.use_cases` | 3–5 | Use-case fields |
| `product.tags` | 5–10 single words | Tag inputs |
| `copy.maker_comment` | ~150 words | First comment on launch platforms: who you are, why you built it, ask for feedback |
| `copy.show_hn_title` / `copy.show_hn_body` | HN rules | "Show HN: X – plain description", no marketing words |
| `copy.reddit_post` | ~200 words | Story-first; the link at the end; no hype |
| `copy.launch_post_story` | 400–800 words | DEV/Hashnode/Medium/IH write-up |
| `copy.press_pitch` | ≤ 150 words | Email pitch: hook, what's new, why now, link, founder contact |
| `copy.faq` | 5 Q/A | Some directories ask |

Style: concrete, specific, no buzzwords ("revolutionary", "game-changing"), and no claims the profile
doesn't support. Make sure the product name is spelled exactly the same everywhere.

Show the user the tagline, short description, and long description for approval before you submit anything.

## Assets checklist (`.launchkit/assets/`)

- `logo-512.png` square (also make a 240×240 copy; many forms want ≤ 1 MB)
- `logo-wide.png` (e.g. 1200×300) if they have a wordmark
- `screenshot-1..5.png` (1270×760 or 1920×1080; under 2 MB each)
- `og.png` 1200×630
- `demo.gif` (≤ 5 MB) or a YouTube/Loom URL in `links.demo_video`

To produce missing assets, use the browser to screenshot the live site at 1440×900, and image tools
already on the machine (`sips` on macOS, ImageMagick `magick`, or Python Pillow) to resize. Ask before installing anything.
