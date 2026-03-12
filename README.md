# 3D Portfolio

A personal portfolio web app built with React, Vite, Tailwind CSS v4, GSAP, and React Three Fiber.

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Three.js with `@react-three/fiber` and `@react-three/drei`
- GSAP
- EmailJS for the contact form

## Local Development

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm run lint
npm run test
npm run build
npm run check
```

`npm run check` runs lint + production build.
Use `npm run test:watch` during local development.

## Environment Variables

Create a `.env` file in the project root using `.env.example`:

```bash
cp .env.example .env
```

Required variables:

- `VITE_APP_EMAILJS_SERVICE_ID`
- `VITE_APP_EMAILJS_TEMPLATE_ID`
- `VITE_APP_EMAILJS_PUBLIC_KEY`

## Deployment

This is a static Vite app, so you can deploy the `dist/` output to Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

### Generic deploy flow

```bash
npm ci
npm run check
npm run build
```

Publish the generated `dist/` folder.

## Notes

- Keep `.env` out of version control. `.gitignore` already excludes it.
- If contact form env vars are missing, the UI now fails gracefully with a message instead of attempting an invalid request.
