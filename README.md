# Lakshya Bhaintwal Portfolio

Minimal, typography-driven personal portfolio for Lakshya Bhaintwal. The site presents selected engineering work, experience, skills, and contact information through a polished editorial interface.

Live demo: `https://your-vercel-url.vercel.app`

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Vercel

## Local Setup

Install dependencies:

```bash
npm ci
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://127.0.0.1:3000
```

## Quality Checks

Run lint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Environment Variables

This project currently does not require environment variables.

If environment variables are added later, document them in `.env.example`, create a local `.env.local`, and add the same keys in Vercel under:

```text
Project Settings -> Environment Variables
```

Never commit real secrets.

## Deployment

This project is optimized for Vercel. Vercel will install dependencies with `npm ci` and build with `npm run build`.

Recommended settings:

- Framework Preset: `Next.js`
- Install Command: `npm ci`
- Build Command: `npm run build`
- Output Directory: `.next`

## GitHub Actions

The workflow in `.github/workflows/ci.yml` runs on pushes and pull requests to `main`.

It verifies:

- Dependency installation
- ESLint
- Production build

## Project Structure

```text
app/                     Next.js app routes and global styles
components/              Reusable UI, motion, site, and section components
lib/                     Portfolio data and utilities
public/                  Static assets, including the resume PDF
.github/workflows/       CI workflow
```

## Updating Portfolio Content

Most portfolio content lives in:

```text
lib/profile.ts
```

Update this file to edit:

- Name and positioning
- Navigation
- Skills
- Experience
- Education
- Achievements
- Selected work
- Contact links

## License

Personal portfolio project. All rights reserved.
