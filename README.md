# Lumberworks.dev Website

Marketing site for Lumberworks, built with React, TypeScript, and Vite.

## Tech Stack

- React 19
- TypeScript
- Vite
- Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ (or current LTS)
- `pnpm` (recommended)

### Install dependencies

```bash
pnpm install
```

Or with npm:

```bash
npm install
```

### Start development server

```bash
pnpm dev
```

Or with npm:

```bash
npm run dev
```

The app runs at `http://localhost:5173` by default.

### Build for production

```bash
pnpm build
```

Or with npm:

```bash
npm run build
```

### Preview production build

```bash
pnpm preview
```

Or with npm:

```bash
npm run preview
```

## Project Structure

```text
.
├── public/assets/           # Images and static assets
├── src/
│   ├── components/          # Section and UI components
│   ├── App.tsx              # Page composition + locale detection
│   ├── content.ts           # English/Korean copy and content model
│   ├── main.tsx             # App entry point
│   └── styles.css           # Global site styles
├── vite.config.ts
└── package.json
```

## Localization

The website currently supports:

- `en` (English)
- `kr` (Korean)

Locale content lives in `src/content.ts`. The app auto-detects locale using browser language, timezone, and location/IP signals, then falls back to English.

## Content and Styling Updates

- Update marketing copy, nav items, pricing, and footer content in `src/content.ts`.
- Update layout, spacing, and visual styles in `src/styles.css`.
- Update section behavior or composition in `src/App.tsx` and `src/components/*`.

## Notes

- This project is a frontend-only site.
- No environment variables are currently required to run it locally.
