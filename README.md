# ZBE website

Marketing site for [ZBE Power Engineering](https://zbepowereng.com) in Addis Ababa. Next.js + Tailwind + a bit of GSAP.

## Run it

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000). That’s it — no `.env`, no database.

## Pages

`/` · `/services` · `/about` · `/contact` · `/quote`

Copy lives in `lib/content.ts`. Photos are in `public/images/`. Colors are the `:root` tokens at the top of `app/globals.css`.

## Color experiments

We’re trying palettes so we don’t ship a 1:1 clone of the reference site.

| Branch | Look |
|---|---|
| `main` | Copper on warm stone |
| `theme/navy-teal` | Teal on navy |

```bash
git checkout theme/navy-teal
```

To try another palette: branch as `theme/<accent>-<surface>` from `main` and only change those `:root` values.

## Quote form

The contact/quote form opens a mailto to `sales@zbepowereng.com`. Fine for now.
