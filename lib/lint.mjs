const WORDS = ['revolutionize', 'revolutionary', 'game-changer', 'game-changing', 'cutting-edge', 'state-of-the-art', 'seamless', 'seamlessly', 'leverage', 'leverages', 'leveraging', 'utilize', 'utilizes', 'unlock', 'unlocks', 'unleash', 'empower', 'empowers', 'elevate', 'supercharge', 'harness', 'robust', 'streamline', 'streamlines', 'synergy', 'holistic', 'next-generation', 'next-gen', 'next-level', 'world-class', 'best-in-class', 'innovative', 'transformative', 'delve', 'tapestry', 'realm', 'effortless', 'effortlessly', 'all-in-one', 'one-stop', 'embark', 'foster', 'paramount', 'pivotal', 'myriad', 'plethora', 'bespoke', 'ever-evolving', 'fast-paced'];
const PHRASES = [
  [/in today's/i, '"In today\'s..." opener'],
  [/\bwhether you're an? .{1,40} or an? /i, '"Whether you\'re X or Y" pattern'],
  [/\bit'?s not just\b.{0,60}\bit'?s\b/i, '"It\'s not just X, it\'s Y"'],
  [/say goodbye to/i, '"Say goodbye to X"'],
  [/imagine a world/i, '"Imagine a world"'],
  [/take (it|your \w+) to the next level/i, '"next level" cliche'],
  [/\bthe future of\b/i, '"the future of" cliche'],
  [/\b(in summary|in conclusion|ultimately|overall),/i, 'summary closer'],
  [/\bintroducing\b/i, '"Introducing" opener'],
  [/ready to (transform|supercharge|take|boost)/i, 'question-to-reader closer'],
  [/\bboost(s)? productivity\b/i, '"boost productivity" cliche'],
];

export function lintCopy(text, { maxChars } = {}) {
  const issues = [];
  const lines = text.split('\n');
  lines.forEach((line, i) => {
    const at = (msg, kind = 'error') => issues.push({ line: i + 1, kind, msg });
    if (/[\u2014\u2013]/.test(line)) at('em/en dash: use " - ", a comma, or split the sentence');
    for (const w of WORDS) if (new RegExp(`\\b${w}\\b`, 'i').test(line)) at(`banned word "${w}"`);
    for (const [re, label] of PHRASES) if (re.test(line)) at(label);
    if (/!/.test(line.replace(/!\[|`[^`]*`/g, ''))) at('exclamation mark', 'warn');
    if ((line.match(/ - /g) || []).length > 1) at('more than one " - " in a line; split it up', 'warn');
    if (/,\s*\w+,\s*and\s+\w+[.!]?$/i.test(line) && line.split(' ').length < 12) at('possible rule-of-three padding', 'warn');
  });
  const sentences = text.split(/[.!?]\s/).filter((s) => s.trim().split(/\s+/).length > 2);
  const avg = sentences.length ? sentences.reduce((a, s) => a + s.trim().split(/\s+/).length, 0) / sentences.length : 0;
  if (avg > 22) issues.push({ line: 0, kind: 'warn', msg: `average sentence is ${avg.toFixed(0)} words; aim for 12-15` });
  if (maxChars && text.trim().length > maxChars) issues.push({ line: 0, kind: 'error', msg: `${text.trim().length} chars, limit ${maxChars}` });
  return { ok: !issues.some((x) => x.kind === 'error'), chars: text.trim().length, issues };
}

export function lintProfile(profile) {
  const fields = { 'product.tagline_short': 40, 'product.tagline': 60, 'product.description_short': 160, 'product.description_medium': 300, 'product.description_long': 1200 };
  const get = (o, k) => k.split('.').reduce((a, x) => (a ? a[x] : undefined), o);
  const out = {};
  for (const [k, max] of Object.entries(fields)) { const v = get(profile, k); if (v) out[k] = lintCopy(v, { maxChars: max }); }
  for (const k of ['maker_comment', 'show_hn_body', 'reddit_post', 'launch_post_story', 'press_pitch']) { const v = profile.copy?.[k]; if (v) out[`copy.${k}`] = lintCopy(v); }
  return { ok: Object.values(out).every((r) => r.ok), fields: out };
}
