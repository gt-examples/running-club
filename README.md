# Stride Club (Running Club)

A running club app with race tracking, countdown timers, elevation profiles, training plans, and a leaderboard — fully internationalized with General Translation.

**[Live Demo](https://running-club.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

Stride Club is a demo running club application that showcases how to internationalize a feature-rich Next.js app using General Translation's `gt-next` library. It includes race listings with detailed course maps, a countdown timer, elevation charts, structured training plans, a sortable leaderboard, and a pace calculator — all fully translated across five languages.

## GT Features Used

- `<T>` — JSX translation with wide wrapping
- `<Branch>` — Conditional rendering (terrain types, workout types, day names)
- `<Plural>` — Pluralization (members, races, runners, finishers)
- `<Num>` — Locale-aware number formatting
- `<DateTime>` — Date/time formatting
- `<Var>` — Dynamic values inside translated content
- `<LocaleSelector>` — Language picker
- `getGT` / `useGT` — String translations for attributes and callbacks
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/running-club.git
cd running-club
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
- [Recharts](https://recharts.org)
