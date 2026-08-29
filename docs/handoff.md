# Handoff

Read this before changing this repo. Visual language: `docs/design-guide.md`.

This is the **ZBE Power Engineering and Trading** marketing site only. Next.js 16 + React 19 + Tailwind v4 + GSAP + Lenis. `pnpm` only. No database, no `.env`, no CMS.

This is not the Next.js in training data — read `node_modules/next/dist/docs/` before using APIs. Cursor Convex / Clerk / Postgres plugin rules do not apply.

---

## Run it

```bash
pnpm install
pnpm dev
```

[http://localhost:3000](http://localhost:3000)

Remote: `git@github.com:Contract-Jobs/zbe-website.git`

---

## What this site is

Public brochure for an electrical design-build contractor in Addis Ababa (Bole). Installation, ICT infrastructure, custom electronics. Live: [zbepowereng.com](https://zbepowereng.com). Sales: `sales@zbepowereng.com`.

Tone: confident, technical, short. Brand-blue on cool mist is **shipped on `main`**. Swap only `:root` in `app/globals.css` for palette experiments. Do not resurrect cream / butter-yellow / copper.

---

## Map

| Path | Role |
|---|---|
| `lib/content.ts` | All copy. Legal name includes “and Trading”. Projects come from the company profile. |
| `public/images/` | Photos |
| `app/globals.css` | Brand tokens |
| `app/icon.svg` | Favicon — white pulse on brand blue |
| `components/Logo.tsx` | Official badge + pulse lockup (SVG) |
| `lib/motion.ts` | Reduced-motion helpers |
| `components/MotionInit.tsx` | Declarative GSAP scan |
| `components/SmoothScroll.tsx` | Lenis |
| `components/Header.tsx` | Fixed chrome, official badge mark |
| `components/Footer.tsx` | Pulse lockup + badge |
| `components/*Illustration*.tsx`, `PanelCutaway`, `about/*` | Original CAD SVGs |

Pages: `/` `/services` `/projects` `/about` `/contact` `/quote` `/privacy` `/legal`.

**Home, in order:** Loader → Hero (Dashen Smart Banking sample) → Trust marquee → Difference (sticky Speed / Quality / Transparency — schematics stay visible on mobile) → How we work → Testimonial → Case studies → FAQ.

Quote / contact submit is `mailto:` to sales. Fine for now.

---

## Settled decisions (do not re-litigate)

- Official **badge mark** (blue ZBE / white “power engineering”). Footer uses the pulse lockup. Never mix-blend the logo. Never hover-only fill. Recreate as SVG in `components/Logo.tsx` — do not drop the source JPEGs onto the page.
- Schematics on the sticky difference cards at **all** breakpoints. Do not `hidden lg:block` them.
- `--yellow` is the accent token (official brand blue `#0072c3` on `main`). `--mark` is pure white for logo plates. Never hardcode hex in components.
- Honor `prefers-reduced-motion`. Skip Lenis and GSAP; show final states.
- No new dependencies without asking. No `console.log`. TypeScript strict, no `any`.

---

## Verify

Home + about + a sticky-card scroll on desktop **and** ~390px. A screenshot is not a test.
