---
name: human-writing
description: Write launch copy, directory descriptions, posts, pitches and replies that read like a real founder wrote them. No AI slop, no em dashes, no hype words. Use whenever you write text that will be published under the user's name, including every launchkit field.
---

# Human writing

Everything you write for a listing goes out under the user's name. Readers, moderators and directory
editors spot machine-written copy within a sentence, and once they do, they stop trusting the product. Write
like a busy founder explaining the product to a smart friend.

## The hard rules

1. **No em dashes (—) and no en dashes (–).** Use a plain hyphen with spaces ( - ), a comma, a full stop or
   brackets instead. Better still, split the sentence. At most one " - " per paragraph.
2. **No banned words or phrases** (list below). If one slips in, rewrite the whole sentence. Don't just swap in a synonym.
3. **Facts only from the profile.** No invented numbers, users, awards or quotes. Vague beats fake.
4. **Say what it does in the first sentence.** "Acme turns your Figma files into React components." Never open with
   "In today's fast-paced world" or "Introducing".
5. **Concrete over abstract.** Name the user, the task and the result: "Freelancers send invoices in 30 seconds",
   not "streamlines financial workflows".
6. **Short sentences, plain words.** Aim for a 12-15 word average and vary the length. Write "use", not "leverage" or "utilize".
7. **No emoji** unless the site's culture expects them (e.g. Product Hunt maker comments allow one or two). Never use emoji bullets.
8. **No rule-of-three padding.** "Fast, simple, and powerful" says nothing. Pick the one thing that's true and prove it.
9. **Sentence case for titles.** Don't Capitalise Every Word unless the site requires it.
10. **No exclamation marks** in descriptions. You can use one in a maker comment if it sounds natural.

## Banned words and patterns

Words: revolutionize, revolutionary, game-changer, game-changing, cutting-edge, state-of-the-art, seamless(ly),
leverage, utilize, unlock, unleash, empower, elevate, supercharge, harness, robust, streamline, synergy, holistic,
next-generation, next-level, world-class, best-in-class, innovative, transformative, delve, tapestry, realm,
landscape (as metaphor), journey (as metaphor), effortless(ly), intuitive (unless backed by a reason), all-in-one,
one-stop, powerful (on its own), boost productivity, take it to the next level, the future of, embark, navigate
(as metaphor), foster, paramount, pivotal, myriad, plethora, bespoke, in today's, ever-evolving, fast-paced.

Patterns:
- "Whether you're a X or a Y, ..." openers
- "It's not just X, it's Y"
- "Say goodbye to X and hello to Y"
- "Imagine a world where..."
- Ending with a question to the reader ("Ready to transform your workflow?")
- Colon-led title formulas ("Acme: The Ultimate Solution for ...")
- Stacked adjectives ("a sleek, modern, intuitive interface")
- Every bullet starting with a bolded noun phrase followed by a colon
- Closing summary paragraphs that restate the opening ("In summary", "Overall", "Ultimately")

## Voice by format

| Format | Voice |
|---|---|
| Tagline | Verb-led or outcome-led, under 60 chars. "Turn Figma files into clean React code" |
| Short description | One sentence on what it is, one on who it's for and why it matters |
| Long description | 3 short paragraphs: the problem in the user's words, what the product does (specifics), who's using it or how to start. No headings |
| Maker comment | First person, a bit personal: why you built it, one honest limitation, one specific question for feedback |
| Reddit / HN | First person, modest, story-first, specific technical details. Put the link at the end. Never sound like an ad |
| Press pitch | Three sentences of news, one line on why now, then the link and your name. No attachments in the first email |

## Before / after

> ❌ Introducing Acme — the revolutionary, AI-powered platform that seamlessly empowers teams to unlock their full potential!
>
> ✅ Acme writes the first draft of your weekly team update from your Linear and GitHub activity.

> ❌ Whether you're a solo founder or a growing team, Acme streamlines your workflow with robust, intuitive tools.
>
> ✅ Built for teams of 2-20 who hate writing status reports. Connect Linear, pick a channel, done.

## Self-check before you save any copy

1. Run `launchkit lint-copy <file>` (or `lint-copy -` with stdin). It flags dashes, banned words, patterns,
   exclamation marks and length overruns. Fix everything it reports.
2. Read it aloud in your head. If a founder wouldn't say it out loud to a friend, rewrite it.
3. Check every claim against the profile. If you can't point to the field, delete the claim.
