# Design guide

Visual language for this marketing site. Tokens live in `app/globals.css`. Do not hardcode hex in components.

**Do not** copy another company’s photos, Lotties, videos, copy, or logos. Recreate the *system*, with original drawings and ZBE’s own words and pictures.

If you are building a different company’s site in this language, use the appendix.

---

## Tokens

`--yellow` is the **accent token** (official brand blue on `main`). Illustrations read `var(--yellow)`, `var(--black)`, `var(--ink)`, `var(--paper)`, `var(--white)`. `--mark` is pure white for the official logo plates.

```css
:root {
  --white: #f4f7fa;   /* page ground — cool mist, not pure white */
  --paper: #e4ebf2;   /* cool drawing paper */
  --yellow: #0072c3;  /* accent: CTAs, traces, selection — brand blue */
  --mark: #ffffff;    /* official logo white */
  --black: #0c1824;   /* deep navy — html bg, dark sections */
  --ink: #122436;     /* sticky cards, quote boxes */
  --raised: #1a3044;
  --grey-750: #3d5166;
  --grey-700: #5a7084;
  --grey-550: #7d92a3;
  --grey-350: #c5d0db;
  --grey-150: #e8eef3;
  --line: color-mix(in hsl, var(--ink) 18%, transparent);
  --line-strong: color-mix(in hsl, var(--ink) 55%, transparent);
  --line-light: color-mix(in hsl, var(--white) 18%, transparent);
}
```

`@theme inline` bridges these into Tailwind (`bg-white`, `text-yellow`, `bg-paper`, `bg-ink`).

**Rules**

- Body: `--white`. Dark chapters: `--ink` / `--black`.
- Selection: accent fill, `--mark` text.
- Scrollbar: accent on `--black`.
- Hairlines: 1px `--line` (or white/18% on dark).
- Alternate palettes: swap **only** `:root`. Branch as `theme/<accent>-<surface>`.

**Hard no:** drop shadows, gradients, glass, rounded-xl cards, Inter, purple SaaS chrome, stock circuit-board PNGs.

---

## Typography

**One family. Instrument Sans.** Weights 400 / 500 / 600 / 700 as `--font-instrument`. No second display font.

| Role | Spec |
|---|---|
| Body | 1rem / 1.5 / tracking `-0.01em` / antialiased |
| Display (H1) | `clamp(2.75rem, 6.4vw, 4.25rem)` / 1.1 / weight 400 / `-0.04em` |
| Display-md (H2/H3) | `clamp(2.4rem, 5.4vw, 4rem)` / 1.1 / 400 / `-0.04em` |
| Kicker | 1rem / 500 / 1.2 / `-0.01em` |
| Card titles | ~1.35rem, tight tracking |
| Quote | ~1.45rem / 500 / 1.3 / `-0.02em` |

Weight 400 for huge headlines. Medium (500) for kickers, nav, buttons. Headlines 2–5 words. Period at the end is allowed.

---

## Layout

- Site grid: `width: min(85rem, calc(100% - 3rem))`, centered. Below 720px: `calc(100% - 1.5rem)`.
- Two-column industrial splits: copy | drawing or photo. Vertical 1px rules. Uneven ratios (`[1.15fr_0.85fr]`, `[0.78fr_1.22fr]`) — never 50/50.
- **Sharp corners as default.** Radius 0 on logo plate, hamburger, photo frames, sticky cards. Exceptions: quote button `0.2rem`, nav pill `0.45rem`, form fields `0.2rem`.
- **No drop shadows. No gradients. No glass.** Depth = overlapping panels, sticky stacks, hairlines.
- Photos: documentary site/panel work, object-cover, full colour, no rounded masks. Case studies / projects: accent inset, name on a square black plate.
- Tech grids: CSS repeating 28–32px lines at 10–14% opacity.

---

## Chrome

**Loader.** Four full-viewport layers: white → paper → accent → white with a 28px grid and a 12px accent square. Wipe **up** (`yPercent: -101`), `duration: 1.8`, stagger `0.15` from the end, `power4.inOut`, delay `0.5`. Then unmount. z 80, `pointer-events: none`.

**Header.** Fixed. `pointer-events: none` on the bar, `auto` on controls. z-50. Left: official **badge mark** (`h-[3.15rem]`, blue ZBE over white “power engineering”). Never mix-blend; never hover-only fill. Right: navy nav pill + square hamburger + blue **Start your quote**. After ~100px scroll: hide text links, keep logo + hamburger + quote. Quote hover inverts to navy fill / white type.

**Footer.** Full navy. Slash-separated nav + legal, contact (hover to accent), pulse lockup. Rises `y: 40%` → `0` on enter (`power4.out`, 1.8s, once).

---

## Motion

GSAP 3 + `@gsap/react` + ScrollTrigger + SplitText. Lenis (`lerp: 0.1`, `wheelMultiplier: 0.8`, `smoothWheel: true`) on `gsap.ticker` and `ScrollTrigger.update`. `html { scroll-behavior: auto }`.

Wait for `document.fonts.ready` before splitting text. Revert SplitText and GSAP context on pathname change. Desktop-only overlaps: `gsap.matchMedia("(min-width: 992px)")`. Reduced motion: skip Lenis and GSAP, show final states.

| Attr | Motion |
|---|---|
| `data-sa="block"` | opacity 0 + `y: 1rem` → in, 0.5s `power1.out`, start `top 97%`, once |
| `data-sa="lines"` | SplitText **lines**, `y: 1rem` + fade, 0.65s `expo.out`, stagger 0.1, start `top 92%`, once. Wrap in `.split-line { overflow: hidden }` |
| `data-sa="children"` | direct children, 0.4s, stagger 0.1 |
| `data-sa="parallax"` | `y: 2rem` → `-2rem`, scrub |
| `data-animate-line` | clip-path wipe, 1.4s `power4.out`, start `top 80%` |
| `data-clippath-cover` | desktop scrub: `inset(5%)` → `inset(0%)` |
| `data-overlap="reveal"` | desktop scrub: `y: -8rem` → 0 |
| `data-overlap="scale"` | desktop scrub: scale 0.92 → 1, origin `50% 100%` |

Hero title: SplitText **chars**, `yPercent: 110`, stagger `0.028`, 0.9s `power3.out`, delay `0.35`. FAQ: height `0` ↔ `auto`, 0.45s, one open at a time. Marquee: CSS 32s linear; off when reduced motion.

Sticky difference cards: three full-bleed `--ink` articles, `sticky; top: 0`, ≥ `70vh`. **Schematic visible on mobile** — stack title → drawing (`min-h-52`) → kicker → body.

Eases: `power2` / `power3` / `power4` / `expo.out` / `sine.inOut`. Heavy and precise, not bouncy.

---

## Illustrations

Hand-authored SVG only, stroked with CSS variables, `aria-hidden`. Electrical CAD / DIN rail / panel cutaway — not isometric 3D, not Lottie, not icon libraries.

Faint square grid. Traces via `getTotalLength()` then dash offset. Nodes: 4px accent circles. Glyphs (diode, resistor, capacitor) in a dashed rectangle. Labels like `PLC`, `BREAKERS` on the drawing.

Hero: black field, DIN-rail, breakers that bob. How we work: paper cutaway of a panel interior. About: looping schematic behind a photo.

---

## Copy

Short. Specific. Field language over adjectives. Primary CTA: **Start your quote**. Kickers like “The ZBE difference”, “How we work”. Headlines like “Power done right.”

---

## Quality bar

- Dark sections must keep the official badge readable (it carries its own blue/white plate).
- Schematics on all breakpoints for the sticky pillars.
- Missing photo → `--grey-150` or `--paper`, never a broken-image icon.
- Verify home + about + sticky-card scroll on desktop and ~390px.

---

## Appendix — prompt for another company

Copy everything below. Swap the bracketed bits.

# Build a high-end industrial marketing site

You are designing and building a production marketing website in the same visual and motion language as a premium industrial engineering site (the feel of [Podium Automation](https://www.podiumautomation.com/) / ZBE Power Engineering): cream-or-stone paper, a single loud accent, charcoal panels, one tight sans, original CAD-style SVG drawings, and GSAP + Lenis scroll motion.

**Client:** [COMPANY NAME]  
**What they do:** [1–2 sentences. Industry, city, services.]  
**Tone:** confident, technical, short. No startup fluff.  
**Do not** copy another company’s photos, Lotties, videos, copy, or logos. Recreate the *system*.

**Stack:** Next.js App Router, TypeScript strict, no `any`, Tailwind v4, `pnpm`, GSAP 3 + ScrollTrigger + SplitText, Lenis as above, Instrument Sans 400/500/600/700, copy in `lib/content.ts`, photos in `public/images/`, no Clerk/CMS/database unless asked. Honor reduced motion.

**Color:** One `:root` sheet. Never hardcode hex. `--yellow` is the accent token (it may not be yellow). Default copper-stone values are in the Tokens section above unless the client specifies otherwise.

Then follow Typography, Layout, Chrome, Motion, Illustrations, Copy, and Quality bar in this file. Primary CTA: **Start your quote** (or the client’s equivalent). Verify home + about + sticky-card scroll on desktop and ~390px.
