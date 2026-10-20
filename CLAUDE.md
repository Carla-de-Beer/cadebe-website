# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal portfolio website built with React 18, TypeScript, and SCSS, deployed to AWS S3. Uses React Router v6 for client-side routing and Bootstrap 5 / react-bootstrap for UI components. Bundled with Vite.

## Commands

```bash
# Development
npm start           # Dev server at http://localhost:3000 (runs vite)

# Build & Deploy
npm run build       # Production build to /dist (tsc + vite build)
npm run deploy      # Build + sync to AWS S3 (requires AWS credentials configured)
npm run preview     # Preview production build locally

# Testing
npm test                        # Vitest unit tests (watch mode)
npm test -- --run               # Run tests once (non-watch, for CI)

# Linting
npm run lint        # ESLint on src/**/*.tsx
npm run style       # Stylelint on **/*.scss

# E2E Tests (run from /cypress directory)
cd cypress
npm run e2e-open        # Open Cypress UI in Chrome
npm run e2e-headless    # Run headless in Chrome (requires app running on :3000)
```

## Architecture

### Routing (App.tsx)
Five routes: `/` (Home), `/projects`, `/news`, `/about`, `/skills`. `Footer` renders outside the `Routes` switch so it appears on every page. `ScrollToTop` (defined in `App.tsx`) resets scroll position on every route change via `useEffect` on `pathname`.

### Pre-commit Hooks
Husky + lint-staged run automatically on commit: ESLint + Prettier on `src/**/*.{ts,tsx}`, Stylelint + Prettier on `src/**/*.scss`. Fix any lint errors before committing or the commit will be blocked.

### Data Loading Pattern
`ProjectLoader` and `NewsLoader` import JSON data statically at build time from `src/data/projectData.json` and `src/data/newsData.json`. This is where project and news content is maintained, not in component code.

### Component Structure
- `src/components/pages/` — page-level components (home, about, projects, news, skills)
- `src/components/pages/projects/projectCardCreator/` — renders project cards from loaded data
- `src/components/pages/news/newsCardCreator/` — renders news cards from loaded data
- `src/components/banner/`, `header/`, `footer/` — layout components
- `src/model/` — TypeScript interface files (`IProjectDataProps`, `INewsDataProps`, etc.)
- `src/style/` — shared SCSS partials (`_colors.scss`, `_common.scss`, `_fonts.scss`)
- `src/utils/enums.ts` — `PageSize` enum for responsive breakpoints (SMALL=576, MEDIUM=824, LARGE=1025)

### Styling
SCSS with Bootstrap 5. Shared variables/mixins in `src/style/`. Each component has a co-located `.scss` file. Stylelint uses `stylelint-config-sass-guidelines`. News and project card layouts use pure flexbox (not Bootstrap row/col) to ensure consistent left alignment across all screen sizes.

### Linting
ESLint with Airbnb config + `@typescript-eslint`. JSX is allowed in `.ts` and `.tsx` files.

SonarLint (typescript:S6772) flags ambiguous spacing when punctuation or plain text appears directly adjacent to a closing JSX tag. Always wrap such characters in `{'...'}`, e.g.:
```tsx
// Bad
</a>
.

// Good
</a>
{'.'}
```

**After editing any `.tsx` file, scan every closing inline tag (`</a>`, `</strong>`, `</span>`, `</em>`, etc.) in that file and confirm no bare punctuation or plain text sits on the next line. Fix any found before finishing.**

Also watch for text nodes on a separate line immediately before an opening inline tag — e.g. bare text followed by a `<span>` on the next line also triggers S6772. The fix is to place them on the same line with no whitespace between, e.g.:
```tsx
// Bad
{'#cadebe'}
<span className="...">...</span>

// Good
{'#cadebe'}<span className="...">...</span>
```

### E2E Tests
Cypress tests live in `cypress/cypress/e2e/`. The app must be running locally on port 3000 before running e2e tests.
