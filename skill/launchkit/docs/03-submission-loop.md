# Phase 4: The submission loop

Run this loop until `lk next` returns `"claimed": []`. One iteration = one site.

```
loop:
  r = lk next --worker <your-worker-id>         # JSON: { claimed: [target], remaining }
  if r.claimed is empty: break
  t = r.claimed[0]                              # { id, name, url, category, pricing, mode, notes }
  handle t according to t.mode (docs/05-site-types.md)
  lk mark t.id <status> --note "<what happened>" [--listing-url ..] [--evidence ..]
```

At the start of a run (and if a previous run crashed), call `lk release-stale --minutes 30`.
Every 10 sites, print a one-line progress update for the user (`lk status`).

## Handling a `form` target, step by step

1. **Open** `t.url` in the browser. If it's a homepage rather than a submit page, look for links or buttons labelled
   Submit, Add tool, List your product, Launch, Get listed, Add startup, or Advertise, usually in the header, footer, or
   pricing page. `t.notes` often says where to look.
2. **Check for an existing listing** with the site's search for the product name. If you find one, mark it `live`
   with the listing URL and move on.
3. **Sign in if needed** (in this order of preference):
   a. The browser is already signed in → continue.
   b. "Continue with Google/GitHub" using the user's existing browser session (`submission.preferred_login`).
   c. Email sign-up with `submission.email`, only if `allow_account_creation` is true. Use the browser's
      password manager or suggested strong password, and never write the password to any file.
   d. For email verification: if `inbox_access` is `browser`, open the inbox in a new tab and click the link.
      Otherwise mark `needs_human` with the note "verify email at <site>" and continue with the next site.
4. **Fill the form** from the profile. Choose the copy variant that fits each field's limit. For category dropdowns,
   pick the closest match to `product.categories`. For pricing, use `product.pricing_model`. Upload files from
   `assets.*`. Leave optional fields blank rather than guessing. For a "how did you hear about us" field, choose "Other"
   or "Search".
5. **Pricing gates.** If the only path is paid and `budget_usd` is 0, mark `skipped` with "paid only ($X)".
   If there's a free queue and a paid fast-track, always choose free. If the budget allows it and the user pre-approved
   this site, stop at checkout anyway and mark `needs_human` with "approved paid listing, payment needed: $X".
6. **Badge/backlink requirement.** If free listing requires a badge on the user's site:
   `add_badge_to_site: "yes"` → copy the badge HTML into the note and set `--badge-required`. Edit the user's site
   only if you're in its repo and they agreed. `"no"` → skip. `"ask"` → mark `needs_human` with the badge HTML.
7. **Submit.** Wait for the confirmation. Save a screenshot to `.launchkit/evidence/<id>.png` if your tool supports it.
8. **Mark the result**:
   - `submitted`: form accepted (pending review). Add `--listing-url` if you got one.
   - `live`: listing is publicly visible now.
   - `needs_human`: blocked by CAPTCHA, email verification, payment, 2FA, phone verification, or an ambiguous legal checkbox.
     Say exactly what's needed in `--note`.
   - `failed`: site broken, form errors you couldn't fix, or a dead domain. Note the reason. `lk next --retry` retries once later.
   - `skipped`: paid only, irrelevant category, rules forbid it, or the site requires something the product doesn't
     have (e.g. a mobile app).

## Time box

Spend at most `launch_settings.max_minutes_per_site` (default 10) on a site. If you're stuck, mark it `failed` or
`needs_human` with a precise note and move on. Momentum matters more than any single directory.

## Browser hygiene

- Use one tab per worker for the target and close extra tabs when done.
- Don't accept browser notification or location prompts. Dismiss cookie banners with the least-permissive option.
- If the site detects automation and blocks you, don't try to evade it. Mark `needs_human`.

## After the loop

1. `lk report` writes `.launchkit/report.md`.
2. Tell the user, in short form: how many were submitted, live, or skipped; the `needs_human` items grouped by
   type (CAPTCHAs, email verifications, payments, badge approvals) with links; and the drafts waiting for approval.
3. Offer to run `lk next --retry` for failures, or to switch on the next mode (e.g. `post` drafts).
