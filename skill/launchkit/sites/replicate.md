---
id: replicate
name: "Replicate"
url: https://replicate.com/docs/guides/build/push-a-model
category: AI Directory
mode: manual
pricing: Free
login: github
captcha: none
backlink_required: no
review_time: "instant (public models)"
verified: true
last_checked: 2026-10-12
---

# Replicate

Replicate is a model hosting platform, not a directory. You "list" here by publishing a public model, which then
appears on replicate.com/explore and in search. Only relevant if the user ships their own ML model or a fine-tune.

## Before you start
- Needs a real artifact: a model packaged with Cog (open-source tool, `cog push r8.im/<user>/<model>`) or a
  fine-tune created on Replicate. Docker and a GPU-capable model are required for Cog models.
- Account: sign in at replicate.com (GitHub login). Publishing is free; running public models is billed to the caller
  by the second or per output. Private models are billed for all uptime, so publish it as public.
- Don't attempt this automatically. Add it to the wrap-up as a suggestion if the product is model-based.

## What the user needs to do
1. Create the model page at https://replicate.com/create (name, visibility Public, hardware).
2. Package with Cog and run `cog push r8.im/<username>/<model-name>` (docs: push-a-model guide in the url above).
3. On the model page, open **Settings** and write the description.
4. Run the model in the playground and click **Add to Examples** on a good output.

## Make the listing perform
- Description: plain words about the result, per Replicate's own guide ("Add captions to a video", not "Arbitrary
  Neural Style Transfer"). Use `product.tagline` rewritten around the model's output.
- Add at least one example. Pages with examples pre-fill the playground and get far more runs.
- Write clear input descriptions in `predict.py` (they show under each field and in the API docs).
- Link back: put `product.url` and `links.github` in the README so model visitors can find the product.
- Keep cold starts low (smaller weights, fast setup) since slow first runs hurt usage.

## After submitting
- The model is public immediately at replicate.com/<username>/<model-name>. Record that URL with
  `launchkit mark replicate live --listing-url <url>` if the user publishes it.
