# Portfolio

Modern personal portfolio built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, framer-motion, Three.js, and TanStack Query.

## Getting Started

```bash
npm install
npm run dev
```

- App runs at `http://localhost:3000`
- Lint the project with `npm run lint`
- Create a production build with `npm run build`

## Project Structure

- `src/app` – Next.js App Router routes (`page.tsx`, `layout.tsx`, `resume/page.tsx`, `not-found.tsx`)
- `src/components` – Reusable UI, including hero background and shadcn/ui components
- `src/data/profile.json` – Portfolio data rendered on the home page
- `public` – Static assets such as resume PDF, favicon, and SVG placeholders

## Styling & UX

- Tailwind CSS powers the design system; global tokens live in `src/app/globals.css`
- Theme toggling handled by `next-themes`
- Custom Three.js background renders abstract wavy lines in the hero section
- Animations use `framer-motion`

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Create an optimized production build
- `npm run start` – Serve the production build
- `npm run lint` – Run Next.js linting

## Deployment

The app is fully compatible with Vercel or any Node.js hosting provider that supports Next.js 14+.