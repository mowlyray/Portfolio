# Mowly — Portfolio

Personal portfolio of Mowly, a MERN Stack & Next.js Developer. Showcases
projects, technical skills, certificates, and a contact form, built with a
dark, animated "aurora" theme.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for animation
- [Nodemailer](https://nodemailer.com) for the contact form (Gmail SMTP)
- [Vitest](https://vitest.dev) for unit tests, [Playwright](https://playwright.dev) for end-to-end tests

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and fill in real values:

   ```bash
   cp .env.example .env
   ```

   | Variable     | Description                                                                     |
   | ------------ | -------------------------------------------------------------------------------- |
   | `EMAIL_USER` | Gmail address the contact form sends from/to.                                    |
   | `EMAIL_PASS` | A Gmail [App Password](https://myaccount.google.com/apppasswords) for that account (not your regular password). |

3. Run the dev server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command             | Description                                  |
| -------------------- | --------------------------------------------- |
| `npm run dev`         | Start the local dev server.                   |
| `npm run build`       | Production build.                             |
| `npm run start`       | Serve the production build.                   |
| `npm run lint`        | Run ESLint.                                   |
| `npm run test`        | Run Vitest unit tests.                        |
| `npm run test:e2e`    | Run Playwright end-to-end tests (starts its own dev server; run `npx playwright install chromium` once beforehand). |

## Project Structure

- `src/app` — routes (App Router), including `sitemap.ts`, `robots.ts`, and generated favicon/OG icons.
- `src/components` — page sections, organized by feature (`about/`, `projects/`, `contact/`, etc.).
- `src/lib` — shared utilities and hooks (e.g. `use-pointer-effects-enabled.ts`, `site-config.ts`).
- `e2e/` — Playwright end-to-end tests.
- `src/app/api/contact` — the contact form's API route and its validation logic (unit tested).

## Deployment

Not yet deployed. Once a production domain is live, update `siteUrl` in
[`src/lib/site-config.ts`](src/lib/site-config.ts) so SEO metadata, the
sitemap, and Open Graph tags point at the real URL.
