# cadebe.dev

![build status](https://github.com/Carla-de-Beer/cadebe-website/actions/workflows/build.yml/badge.svg?event=push)

Personal portfolio website showcasing projects, skills, news and blog posts.

- Live site: [https://cadebe.dev](https://cadebe.dev)
- Repository: https://github.com/Carla-de-Beer/cadebe-website

## Requirements

- Node.js (LTS recommended)
- npm

## Quick start

```bash
git clone https://github.com/Carla-de-Beer/cadebe-website.git
cd cadebe-website
npm install
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Tech stack

- React + TypeScript
- Vite
- React Router
- React-Bootstrap + SCSS
- Vitest + Testing Library
- Cypress (E2E)
- ESLint + Stylelint + Husky/lint-staged

## Available scripts

| Command             | Description                        |
|---------------------|------------------------------------|
| `npm start`         | Start Vite dev server              |
| `npm run build`     | Build production assets to `dist/` |
| `npm run preview`   | Preview production build locally   |
| `npm test`          | Run unit tests in watch mode       |
| `npm test -- --run` | Run unit tests once (CI-friendly)  |
| `npm run lint`      | Run ESLint on TypeScript/TSX files |
| `npm run style`     | Run Stylelint on SCSS files        |
| `npm run deploy`    | Build and deploy `dist/` to S3     |

## E2E tests

E2E tests live in `tests/` and run with Cypress.

```bash
# Terminal 1 (keep this running)
npm start

# Terminal 2
cd tests
npm install

npm run e2e-open
npm run e2e-headless
```

## Deployment through AWS S3

The deploy script expects an environment variable named `S3_BUCKET`.

```bash
export S3_BUCKET=bucket-name
npm run deploy
```

Prerequisites:

- AWS CLI installed
- Credentials configured (`aws configure` or environment variables)
- IAM permissions for S3 object upload/delete in the bucket

To use CloudFront, invalidate the distribution cache after deployment.

## Certificate renewal and CloudFront configuration

For TLS certificate renewal, DNS validation, and CloudFront certificate configuration, see
[INFRASTRUCTURE.md](INFRASTRUCTURE.md).

## Contributor notes

- Pre-commit hooks run automatically via Husky + lint-staged.
- For architecture and coding conventions, see `CLAUDE.md`.
