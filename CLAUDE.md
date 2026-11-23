# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

"Here to Help" (heretohelp.ir): a Persian (RTL, `lang='fa'`) directory of free crisis/support resources in Iran, plus a searchable list of free HIV test centers. Next.js (App Router) + Tailwind v4, deployed as a **static export** (`output: 'export'` in `next.config.ts`). Package manager is yarn; Node version in `.nvmrc`.

## Commands

```bash
yarn dev                 # next dev --turbopack (http://localhost:3000)
yarn build               # static export to out/
yarn lint
yarn generate-api        # regenerate public/api/*.json from data/*.ts
yarn test:e2e            # Playwright (chromium, firefox, webkit)
yarn playwright test tests/hiv-centers.spec.ts --project=chromium           # one file
yarn playwright test -g "filter centers by city" --project=chromium         # one test
```

- `next start` does **not** work with `output: 'export'`. Playwright config has no `webServer`, so something must already be listening on `:3000`: either `yarn dev`, or (as CI does) `yarn build && npx serve out -l 3000`. Test against the `out/` build before trusting results; a stale dev server on :3000 gives misleading passes/failures.
- Husky: pre-commit runs `yarn lint`; pre-push runs `yarn build` + `scripts/check-api-changes.sh`.
- Env vars (see `.env.example`): `NEXT_PUBLIC_BASE_URL`, `NEXT_PUBLIC_TG_BOT_URL`.

## Architecture

**`data/` is the single source of truth.** Content is plain TS, not a CMS or DB.
- `data/categories.ts`: home-page accordion sections and their resource cards.
- `data/freeHIVTestCenters.ts`: ~100 centers (`city`, `address`, `phoneNumbers`). A city can appear on several rows (e.g. تهران) and `سرباز` is duplicated; consumers group by slug.

Derived outputs that must stay in sync with `data/`:
- `public/api/*.json` are **generated and committed**. After editing anything in `data/`, run `yarn generate-api` and commit the JSON (`app/api/*/route.ts` also serve the data under static export).
- HIV pages: `/free-hiv-test-centers` (all centers, client-side city search in `components/CentersTable.tsx`) and `/free-hiv-test-centers/[city]` (one static page per city via `generateStaticParams`, `dynamicParams = false`). `utils/citySlug.ts` builds the Persian slug (parentheses dropped, words joined by `-`). The slug function is shared by the table links, the page's `generateStaticParams`, and `app/sitemap.ts`, so change it in one place only. Keep `citySlug` out of `data/` so client components don't bundle the whole dataset.
- `app/sitemap.ts` is generated from the same data.

**Global UI lives in `app/layout.tsx`**: background image, `EscapeButton` (quick-exit to google.com; also triggered by pressing Esc three times; shows a one-time driver.js tour gated by `localStorage.hasSeenEscapeButtonTour`), `Overlay` (shown during exit), `TelegramButton`, `BackToTop`, `Footer`, and `ServiceWorker`.

**Offline:** `public/sw.js` is a network-first runtime cache (only pages already visited work offline). It is registered only when `NODE_ENV === 'production'`, so it never runs under `yarn dev`.

**Styling:** Tailwind v4; shared component classes (`.resource-button`, `.category-title`, `.resource-card`, ...) are defined with `@apply` in `app/globals.css`. Font is self-hosted Vazirmatn.

## Conventions worth knowing

- User-facing Persian copy uses a warm, colloquial second-person register ("می‌تونین", "بنویسین"). Keep new text consistent, and don't invent claims (confidentiality, hours, "verified") that the data doesn't support.
- Resource data is third-party and unverified (the HIV list comes from doctoreto.com, which also lists paid private labs; those do not belong in the "free" list).

## Tests (`tests/*.spec.ts`)

- Every test starts a fresh browser context, so the first-visit tour popover appears; tests dismiss it with `page.locator('.driver-popover-next-btn').click()` in `beforeEach`. New page-level tests need the same.
- Some tests depend on exact copy: the link name `مشاهده لیست مراکز`, the HIV page having exactly one `h2` containing `لیست مراکز آزمایش رایگان ایدز`, the tour description containing `در صورت نیاز به خروج سریع`, and category headers being buttons (`aria-expanded`). Update the tests when changing that copy.
