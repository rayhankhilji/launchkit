# Phase 1: Interview and knowledge base

Goal: a complete, accurate `.launchkit/profile.json` that answers every question a directory form can ask,
so the submission loop never has to stop and ask the user.

## Step 1: research before asking

Before asking anything, collect what you can find:

1. If you're in the product's repo, read `README`, `package.json` / `pyproject`, landing page source, `/public`
   (logos, OG images), pricing config, and docs.
2. Ask for the product URL if you don't have it, then open it in the browser. Read the homepage, pricing,
   about, and docs pages, and the footer social links. Note the exact product name capitalisation.
3. Look for existing listings (Product Hunt, Crunchbase, G2, GitHub) to reuse wording and avoid duplicates.

Pre-fill the profile from what you found (`lk profile set '<json>'`, or edit the file) and mark guesses
so you can confirm them.

## Step 2: confirm and fill gaps, in batches

Show the user a short summary of what you pre-filled, then ask only for what's missing or uncertain.
Ask **at most 5–6 questions per message**, grouped by theme. Offer sensible defaults so they can answer "yes".
Avoid long questionnaires. Use multiple-choice where your tool supports it.

Batch A: product
- Product name, URL, one-line tagline (under 60 characters), and who it's for.
- The 3–6 key features and the main problem it solves.
- Categories/tags (suggest 3–5 based on research, e.g. "Developer Tools", "AI", "Productivity").
- Top 3 competitors or alternatives (powers "alternative to X" listings).
- Pricing model (free / freemium / paid / open source), price points, free trial?
- Current stage: idea / waitlist / beta / live. Launch date if not live yet.

Batch B: company and founder
- Founder name, role, short bio (1–2 sentences), avatar image.
- Public contact email, plus **the email to use for directory sign-ups** (suggest a dedicated alias such as launch@).
- Company legal name (or "none yet"), country/city, founded year, team size, funding stage/amount (or "bootstrapped").
- Social links: X, LinkedIn, GitHub, Discord, YouTube/demo video.

Batch C: assets
- Square logo (PNG, at least 512×512), wide logo, favicon, 3–5 screenshots (1270×760 is a good default), demo GIF/video.
- If they don't have these, offer to make them: screenshot the site with the browser, crop or resize with
  available tools, and export the logo from SVG in the repo. Save everything in `.launchkit/assets/`.

Batch D: run preferences (save to `launch_settings`, see docs/04)
- Concurrency: 1 (default, light on the machine) or N parallel browser workers.
- Modes: `form` directories only (default), plus drafting community posts (`post`), press/newsletter pitches (`pitch`), awesome-list PRs (`pr`)?
- Budget for paid listings (default $0 → paid-only sites are skipped).
- May I create accounts on sites with the sign-up email? Can you sign into that inbox in this browser
  so I can click verification links (`submission.inbox_access`: none / browser / user)?
- Many free directories require a badge/backlink on your site. Add badges: yes / no / ask each time?
- Attended (you're nearby to solve CAPTCHAs live) or background (I queue blockers for later)?

## Step 3: write and confirm

1. Save everything into `.launchkit/profile.json` (schema: `templates/profile.json`). Keep the keys; add
   extra keys if useful. Asset paths are relative to the project root or absolute.
2. Run `lk validate` and fix anything it reports as missing. Warnings about length need short variants.
3. Show the user a compact readable summary (not raw JSON) and get an explicit "looks good".
4. Write `.launchkit/profile.md`, a human-readable copy, so the user can edit it later. If they edit it,
   sync the change back to `profile.json`.

Never invent facts. If something is unknown, leave it blank and the loop will skip fields that are optional.
