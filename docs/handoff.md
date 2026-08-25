# Handoff

Read this before changing this repo. Visual language: `docs/design-guide.md`.

This is the **ZBE Power Engineering** marketing site only. Next.js 16 + React 19 + Tailwind v4 + GSAP + Lenis. `pnpm` only. No database, no `.env`, no CMS.

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

Tone: confident, technical, short. Copper-stone is **shipped on `main`**. `theme/navy-teal` is a palette experiment — swap only `:root` in `app/globals.css`. Do not resurrect cream / butter-yellow.

---

## Map

| Path | Role |
|---|---|
| `lib/content.ts` | All copy |
| `public/images/` | Photos |
| `app/globals.css` | Brand tokens |
| `lib/motion.ts` | Reduced-motion helpers |
| `components/MotionInit.tsx` | Declarative GSAP scan |
| `components/SmoothScroll.tsx` | Lenis |
| `components/Header.tsx` | Fixed chrome, square black wordmark plate |
| `components/*Illustration*.tsx`, `PanelCutaway`, `about/*` | Original CAD SVGs |

Pages: `/` `/services` `/about` `/contact` `/quote` `/privacy` `/legal`.

**Home, in order:** Loader → Hero (DIN-rail) → Trust marquee → Difference (sticky Speed / Quality / Transparency — schematics stay visible on mobile) → How we work → Testimonial → Case studies → FAQ.

Quote / contact submit is `mailto:` to sales. Fine for now.

---

## Settled decisions (do not re-litigate)

- Permanent **square black wordmark plate**. Never mix-blend the logo. Never hover-only fill.
- Schematics on the sticky difference cards at **all** breakpoints. Do not `hidden lg:block` them.
- `--yellow` is the accent token (copper on `main`). Never hardcode hex in components.
- Honor `prefers-reduced-motion`. Skip Lenis and GSAP; show final states.
- No new dependencies without asking. No `console.log`. TypeScript strict, no `any`.

---

## Verify

Home + about + a sticky-card scroll on desktop **and** ~390px. A screenshot is not a test.
