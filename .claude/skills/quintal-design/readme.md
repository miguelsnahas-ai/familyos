# Quintal Design System

The design language for **Quintal** — a parenting copilot for Brazilian families
with children aged 0 to 6, delivered entirely through WhatsApp. The product turns
what parents already know into small, practical daily decisions across four
pillars: sono, rotina, livre brincar, desenvolvimento.

> **Guiding principle:** confiança para a família, leveza para os pais, alegria
> para as crianças. Warm ground, one bright action, and never a word that adds
> weight to an already tired parent.

Product copy ships in **pt-BR**; this guide and the code are documented in
English for engineering.

---

## Sources

- The pre-launch landing page **https://familyos-fnnd.vercel.app** — read for
  value proposition, section structure and copy. All product copy in this system
  is quoted from it (verbatim, pt-BR).
- Brand exploration in this project: `Brand Directions.dc.html` (three colour +
  type + name directions) and `Quintal Design System.dc.html` (the chosen
  direction, documented as a single page). The name **Quintal** and direction
  **1C + Gabarito + Hanken Grotesk** were selected by the founder.
- A reference photo of pale pine toy blocks (`uploads/`), which set the material
  tones. An early wood-block shape kit was explored and removed at the founder's
  request.

**Logo.** The mark is a *portal com sol* — the gateway into the backyard with the
sun that is always there. Two shapes only, no illustration. Files in `assets/brand/`: the symbol as vector —
`quintal-mark.svg`, `quintal-mark-light.svg` — and the type-bearing versions as
3x PNG rendered in real Gabarito: `quintal-lockup.png`,
`quintal-lockup-on-dark.png`, `quintal-wordmark.png`,
`quintal-wordmark-on-dark.png`.
Wordmark is Gabarito 900, lowercase, tracking -3%; clear space equals the width of
the sun. Never tilt, stretch, shadow, or recolour the plum/butter pair. The wordmark ships as PNG because an SVG `<text>` logo would depend on the
webfont being present — have a designer outline the letterforms to a vector file
before print or third-party use.

---

## Brand in one minute

1. **Peach ground, plum ink.** Pages are `#FDF2EC`, never pure white; text is
   always plum `#3A2C43`.
2. **Butter is the only energy.** One primary action per screen. Text on butter
   is always plum.
3. **Lilac is the family's voice** — their chat bubbles, rest, sleep.
4. **Clay is a detail colour** — eyebrows, numerals, links. Never a large field.
5. **Display type is lowercase**, Gabarito 900, tight tracking, generous space
   around it.
6. **No emoji.** Warmth comes from colour, chalk marks and the tone of the
   sentences.

---

## Content fundamentals

- **Language:** pt-BR. Short, affirmative, present tense. Sentences end with a
  period — statements, not labels ("Você conta.", "O sistema aprende.").
- **Address:** speaks to the parent as *você*, with imperative verbs on buttons
  ("Entrar na lista", "Quero começar pelo Family Setup").
- **One decision per message.** The system suggests, never assigns. Every
  suggestion carries an easy way out ("Se hoje não der, tudo bem.").
- **Casing:** display and titles in sentence case, lowercase-friendly; eyebrows
  and meta in mono UPPERCASE with +16% tracking ("PASSO 01 — VOCÊ CONTA");
  labels in Hanken 600, 13px.
- **Numbers:** one per screen, framed as a promise ("100 famílias", "a partir de
  R$ 500"), never a dashboard of metrics.
- **Never:** guilt, infinite task lists, clinical language, alarm words,
  diagnostic claims. The product states plainly what it is not.
- **Emoji:** none.

---

## Visual foundations

- **Colour.** Plum `#3A2C43` and peach `#FDF2EC` carry everything. Lilac
  `#C9B6E4` marks calm and the family's own voice; clay `#E0836C` is a small
  accent; butter `#FBD87F` is the single CTA colour. States are sober: positive
  `#2F7D5B`, attention `#C1553D`, resting lilac. **Text on butter and on lilac is
  always plum** — white fails AA on both.
- **Type.** Gabarito (display, 700/900) with Hanken Grotesk (text, 400–700) and
  JetBrains Mono for eyebrows and meta. All three are open source.
- **Spacing & layout.** 4px base (4/8/12/16/24/32/48/64), container max 1120px,
  page padding `clamp(24px, 5vw, 72px)`, controls 44px tall. Whitespace is the
  main carrier of lightness — when a screen feels heavy, remove, don't rearrange.
- **Backgrounds.** Flat peach; plum full-bleed blocks for hero, "como funciona"
  and CTA bands. No gradients.
- **Borders & dividers.** 1px `#EBD9CF` preferred over shadow.
- **Radii.** 8px fields, 14px cards, 20px blocks, pill for buttons, chips and
  avatars.
- **Elevation.** `sm 0 1px 2px rgba(58,44,67,.07)`; `md 0 10px 28px
  rgba(58,44,67,.12)` on hover only.
- **Cards.** White surface, 1px border, 14px radius, `sm` shadow; interactive
  cards lift 2px to `md`.
- **Hover / press.** Filled buttons `brightness(0.95)`; outline and ghost take a
  tinted fill; press is `translateY(1px)`.
- **Focus.** Always a visible 2px clay ring (`--focus-ring`). Never removed.
- **Transparency / blur.** Only the sticky header (peach at 92% + 6px blur) and
  faint white washes on plum. No glassmorphism.
- **Motion.** 150–180ms ease-out. Fades and small translations only; no bounce,
  no looping decoration.
- **Imagery.** Real photography of Brazilian families, warm and unstaged, 20px
  corners. **Sunlight is always present** — window light, varanda, backyard, late
  afternoon. Nobody looks at the camera; a gesture is happening (stacking,
  serving, carrying a child). Simple wooden toys in frame, a lived-in home, never
  a perfect set. Warm temperature, soft shadows; no cool filters, no black and
  white, no generic stock. Text over a photo only inside a solid colour block.
  No photos are shipped: `guidelines/photography.card.html` holds drop slots for
  the real ones, and `<image-slot>` (`assets/image-slot.js`) is the placeholder
  to use in new layouts.
- **Textures.** Three, used sparingly and never behind running text: chalk
  marginalia on plum (the brand's one decorative device), felt, and torn paper.
  Pale pine tones exist for illustration only. At most one textured moment per
  screen.

---

## Iconography

- **Line icons, 1.8px stroke, rounded caps.** Shipped as the `Icon` component
  with **Lucide** (MIT) glyphs inlined as SVG paths so the system works offline.
  > **Substitution flag:** Quintal has no icon set of its own. Lucide is the
  > closest match to the intended weight and style — swap it when a set is
  > chosen, by extending `PATHS` in `components/icon/Icon.jsx`.
- Pillar mapping: sono → `moon`, rotina → `clock`, livre brincar → `sparkle`,
  desenvolvimento → `blocks`.
- **Chalk marks** (`ChalkMark`) are decoration, not iconography: suns, waves,
  stars, arrows and underlines on plum surfaces. Never draw characters, products
  or interface icons in chalk.
- **No emoji, no unicode glyphs as icons.** Status is a coloured dot plus a word.

---

## Index

**Root** — `styles.css` (the single entry point: `@import`s only), `readme.md`,
`SKILL.md`.

- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`,
  `radius-elevation.css`, `base.css`.
- `guidelines/` — 15 foundation specimen cards (Colors, Type, Spacing, Brand),
  including the logo sheet and the photography direction with drop slots.
- `assets/brand/` — logo files. `assets/image-slot.js` — photo placeholder.
- `components/`
  - `buttons/` — **Button**, **IconButton**
  - `forms/` — **Input**, **Switch**, **Chip**
  - `data/` — **Card**, **PillarCard**, **ChatBubble** (+ **ChatThread**),
    **ChildProfileCard**, **StepItem**, **HighlightStat**
  - `icon/` — **Icon**
  - `marks/` — **ChalkMark** (+ **ChalkDefs**)
- `ui_kits/landing/` — the waitlist landing page, rebuilt on the system.
- `Brand Directions.dc.html`, `Quintal Design System.dc.html` — the exploration
  and the one-page brand document these files were distilled from.

**Intentional additions:** no prior component library existed, so the inventory
was authored from the landing page's real surfaces. `Icon` wraps a substituted
glyph set; `ChalkMark` exists because the chalk motif is brand-defining and
needs a single implementation.

---

## Using the system

```html
<link rel="stylesheet" href="styles.css" />
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const NS = window[Object.keys(window).find(k => /^DesignSystem_/.test(k))];
  const { Button, PillarCard, ChatThread } = NS;
</script>
```

Consume tokens as `var(--ameixa)`, `var(--manteiga)`, `var(--radius-card)`,
`var(--shadow-sm)`.
