# Handling by mode

Each target has a `mode`. By default only `form` runs; the user turns others on in `launch_settings.modes`.

## `form`: directories, launch platforms, review sites, databases (~270)
Follow docs/03 fully. Notes:
- **Launch platforms** (Product Hunt, Uneed, Fazier, Microlaunch, Peerlist, TinyLaunch, DevHunt...): many
  have a *launch day* chosen at submission. Ask the user once for a preferred launch date or strategy and use the
  earliest free slot on or after it. For **Product Hunt**, prepare the draft (name, tagline, description, media,
  maker comment, topics) and save it, but **let the user pick the launch date and press the final Schedule button**,
  then mark `needs_human` with "PH draft ready, choose launch date". The rest of the launch is theirs to run.
- **Review sites** (G2, Capterra, TrustRadius...): create the free vendor listing only. Never post reviews.
- **Startup databases** (Crunchbase, Wellfound, F6S, Dealroom...): fill company facts exactly. Leave funding blank unless it's in the profile.
- **AI directories**: many charge for listings. Prefer the free option and skip paid-only ones (with budget 0).
- **Design galleries** only accept polished websites. If the user's site isn't design-led, mark `skipped` ("not a fit").
- **Deals / LTD** (AppSumo etc.) are a business decision. Mark `needs_human` with "requires deal terms decision"
  unless the profile has `product.deal_or_promo_code` and the user opted in.

## `post`: Reddit, HN, DEV, Hashnode, Medium, Indie Hackers, X, LinkedIn (~80)
1. Read the community's rules (sidebar/wiki, or HN guidelines). Note self-promo days such as "Showoff Saturday".
2. Write a post adapted to that community from `copy.*`: story first, value first, matching the community's tone.
   Never copy-paste the same text across subreddits.
3. Save it with `lk draft <id> -` (include the target URL, title, body, flair, and best time to post) and mark `drafted`.
4. **Post only if** `allow_social_posting` is true **and** the user approved that draft in this session. Then post it
   from the user's logged-in account, mark `submitted` with the post URL, and stay available to answer comments
   only if asked.
5. Pace posts: no more than 2–3 subreddits per day, and HN only once. Put the schedule in the drafts summary.

## `pitch`: press, newsletters, founder-interview sites (~50)
- Write a tailored email or form pitch from `copy.press_pitch` (≤ 150 words, a specific hook for that outlet)
  and find the right tips address or form on the site. Save it as a draft (`lk draft`) and mark `drafted`.
- Submit through a **web form** only if the user enabled `pitch` mode and approved it. Never send emails from
  the user's account without explicit approval.
- Newsletter "sponsor" pages are paid. Mark `skipped` unless the budget allows it, then `needs_human`.

## `pr`: GitHub awesome lists (4 + any relevant awesome-* lists you find)
- Check that the product fits the list's inclusion criteria (often open source, free tier, or a minimum star count).
- Prepare the exact line in the list's format and save it as a draft. Open a PR only if the user approved it and
  you have GitHub access, then mark `submitted` with the PR URL.

## `manual`: app stores, marketplaces, crowdfunding, accelerators, social video (~70)
These need a built artifact (extension, app, plugin, template) or a business process. Don't attempt them. At the
end, list the ones that are relevant for the user's product (e.g. Chrome Web Store for an extension) as suggestions.
Mark them `skipped` with "manual" only if the user asks to clear them.

## Custom sites
Add sites the user names with `lk add --name .. --url .. --category .. --mode form`.
