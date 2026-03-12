# Esrom Basazinaw | 3D Portfolio

Personal portfolio website built with React, Vite, Tailwind CSS v4, GSAP, and React Three Fiber.

## Overview

This project includes:

- A hero section with animated text and interactive 3D scene.
- Project showcase cards with scroll-triggered GSAP animations.
- Experience, skills, testimonials, and contact sections.
- EmailJS-powered contact form with client-side validation.
- Unit/component tests using Vitest + React Testing Library.
- GitHub Actions CI for lint, test, and build verification.

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Three.js (`three`, `@react-three/fiber`, `@react-three/drei`, `@react-three/postprocessing`)
- GSAP (`gsap`, `@gsap/react`)
- EmailJS (`@emailjs/browser`)
- Testing: Vitest, JSDOM, React Testing Library

## Prerequisites

- Node.js 20+ recommended
- npm 10+

## Getting Started

```bash
npm install
npm run dev
```

Vite will print the local URL in terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev`: Start development server.
- `npm run build`: Build production output to `dist/`.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint.
- `npm run test`: Run Vitest in CI mode.
- `npm run test:watch`: Run Vitest in watch mode.
- `npm run check`: Run lint + build.

## Environment Variables

Create a `.env` file in the project root and add these variables:

```bash
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Notes:

- `.env` files are gitignored by default.
- If service/template IDs are missing, the contact form shows a friendly configuration error.

## Testing

Current test setup:

- Framework: Vitest
- Environment: JSDOM
- Utilities: `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`
- Setup file: `src/test/setup.js`

Current tests:

- `src/component/Button.test.jsx`
- `src/section/Footer.test.jsx`

Run tests:

```bash
npm run test
```

## CI

GitHub Actions workflow is configured at `.github/workflows/ci.yml`.

It runs on push and pull requests to `main` and `master`:

1. `npm ci`
2. `npm run lint`
3. `npm run test`
4. `npm run build`

## Build and Deploy

Production build:

```bash
npm run build
```

Deploy the generated `dist/` folder to any static host:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

### Deploy to Vercel

This repo includes a `vercel.json` configured for Vite output (`dist/`) and SPA fallback rewrites.

Vercel Dashboard flow:

1. Import this GitHub repository into Vercel.
2. Framework preset: `Vite`.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. In Project Settings -> Environment Variables, add:
	`VITE_APP_EMAILJS_SERVICE_ID`, `VITE_APP_EMAILJS_TEMPLATE_ID`, `VITE_APP_EMAILJS_PUBLIC_KEY`.
6. Deploy.

Vercel CLI flow:

```bash
npm i -g vercel
vercel
vercel --prod
```

After deployment, test the contact form in production to confirm EmailJS environment variables are set correctly.

Recommended pre-deploy check:

```bash
npm run check
npm run test
```

## Project Structure

```text
.
├── public/
│   ├── images/
│   │   ├── logos/
│   │   └── textures/
│   ├── models/
│   └── ...
├── src/
│   ├── component/
│   │   ├── HeroModels/
│   │   └── model/tech-logos/
│   ├── constant/
│   ├── section/
│   ├── test/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .github/workflows/ci.yml
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

## Notes

- Vite build uses manual chunking for `three` and `gsap` in `vite.config.js`.
- Large `three` bundle warnings are expected with 3D-heavy content and can be optimized later with lazy loading.
