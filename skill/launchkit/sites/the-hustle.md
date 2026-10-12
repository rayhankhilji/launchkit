---
id: the-hustle
name: "The Hustle"
url: https://thehustle.co/how-you-hustle-founder-startup-feature
category: Newsletter
mode: pitch
pricing: Free
login: none
captcha: recaptcha
backlink_required: no
review_time: "no confirmation; editors reach out if interested"
verified: true
last_checked: 2026-10-12
---

# The Hustle

A HubSpot-owned business and tech newsletter (about 1.5M readers). Its "How You Hustle" page is a free form where founders tell their story for a chance to be featured. Good fit for founder stories, side projects and small businesses with a clear origin story. Pure dev tools are a weaker fit.

## Before you start
- Needs a real founder story: `founder.name`, `company.legal_name` or `product.name`, a short origin story (from `copy.launch_post_story`), the problem, and whether it's a side hustle or full-time.
- The form is a HubSpot form with reCAPTCHA v2. If a CAPTCHA challenge shows, stop and mark `needs_human`.
- Only submit if pitch mode is enabled and the user approved the answers.

## Field map

Fields in order (from the live HubSpot form). Required ones marked *.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| First name * | text | first part of `founder.name` |
| Last name * | text | rest of `founder.name` |
| What's your email? * | email | `submission.email` |
| Best way for our audience to get in touch * | text (URL or handle) | `product.url` (or `founder.twitter` if the user prefers) |
| Name of your business * | text | `company.legal_name`, else `product.name` |
| Side hustle or full-time gig? * | radio: Side Hustle / Full-Time Gig | ask the user once; default from `company.team_size` (1 and part-time -> Side Hustle) |
| Elevator pitch * | textarea, "keep it snappy" | `product.description_short` |
| What problem are you trying to solve? * | text, one line | the problem sentence from `copy.press_pitch` |
| Origin story * | textarea | `copy.launch_post_story`, 3-5 sentences: when, how, what you did before |
| One truly innovative thing | text, optional | one concrete feature from `product.key_features` (write plainly, avoid the word "innovative") |
| Biggest win in the last year | text, optional | only a real fact from the profile; leave blank if none |
| One piece of advice | text, optional | ask the user for a one-liner, or leave blank |
| Conventional advice that is BS | text, optional | ask the user, or leave blank |
| Extra $1m to spend today | text, optional | ask the user, or leave blank |

## Steps
1. Open the URL. The form loads below the intro text (it can take a second to render).
2. Fill the required fields from the map. Ask the user for the opinion questions in one batch; the optional fields help the editors write a feature.
3. Click **Submit**. If reCAPTCHA asks for a challenge, stop and mark `needs_human`.
4. Screenshot to `.launchkit/evidence/the-hustle.png`, then `launchkit mark the-hustle submitted --note "editors reach out if picked"`. Without approval, save answers with `launchkit draft the-hustle -` and mark `drafted`.

## Make the listing perform
- The page says to fill as many questions as possible. The optional opinion answers are what turn a submission into a quotable feature, so get real ones from the founder.
- Make the origin story specific: a date, a moment, a number from the profile.
- Write for a general business reader. Skip jargon in the elevator pitch.

## Gotchas
- Don't invent wins or revenue. Leave optional fields empty rather than guessing.
- Hidden UTM fields exist in the form; leave them alone.

## After submitting
- No confirmation email is promised. Watch for an editor email at `submission.email` and keep reading The Hustle; features are not announced in advance.
