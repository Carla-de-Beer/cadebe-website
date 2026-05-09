# cadebe.dev

![example event parameter](https://github.com/Carla-de-Beer/cadebe-website/actions/workflows/build.yml/badge.svg?event=push)

Personal portfolio website showcasing development projects, certifications, and blog posts. Built with React 18, TypeScript, and SCSS, bundled with Vite, and deployed on AWS S3.

## Requirements

* Node.js v22
* npm v10

## Available Scripts

### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000). The page reloads automatically on edits.

### `npm test`

Runs unit tests with Vitest in interactive watch mode.

### `npm run build`

Builds the app for production to the `dist` folder. Bundles and optimises React for best performance.

### `npm run preview`

Serves the production build locally for review before deployment.

### `npm run lint`

Runs ESLint across all TypeScript source files.

### `npm run style`

Runs Stylelint across all SCSS files.

### `npm run deploy`

Builds the project and syncs the `dist` folder to AWS S3.

Ensure your AWS credentials are configured before running:

```bash
npm run deploy
```

## E2E Tests

End-to-end tests use Cypress and are located in the `tests/` directory. The development server must be running on port 3000 before executing the tests.

```bash
# Start the dev server
npm start

# In a separate terminal, from the tests/ directory:
cd tests
npm run e2e-open        # Open Cypress UI in Chrome
npm run e2e-headless    # Run headless in Chrome
```
