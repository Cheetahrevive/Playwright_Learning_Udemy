# Playwright Learning - Udemy Course

[![Playwright](https://img.shields.io/badge/Playwright-v1.57.0-45ba4b?logo=playwright)](https://playwright.dev)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green?logo=node.js)](https://nodejs.org)
[![License](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE)

This repository contains sample tests and exercises from the Playwright automation course on Udemy. It demonstrates best practices for end-to-end testing using Playwright with JavaScript.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Docker](#docker)
- [VS Code Setup](#vs-code-setup)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Available Scripts](#available-scripts)
- [Documentation](#documentation)

## Features

- **Multi-Browser Testing**: Chromium, Firefox, WebKit
- **Mobile Testing**: Pixel 5, iPhone 12 emulation
- **Parallel Execution**: Fast test execution
- **CI/CD Ready**: Optimized for continuous integration
- **Smart Artifacts**: Screenshots & videos on failure
- **Multiple Reporters**: HTML, JSON, and console
- **Best Practices**: Following Playwright guidelines

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18 or higher
- **npm**: Version 9 or higher

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Cheetahrevive/Playwright_Learning_Udemy.git
cd Playwright_Learning_Udemy
```

1. Install dependencies:

```bash
npm install
```

1. Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

### Basic Test Execution

```bash
# Run all tests
npm test

# Run tests with visible browser
npm run test:headed

# Run tests in debug mode
npm run test:debug
```

### Browser-Specific Tests

```bash
# Run on Chromium only
npm run test:chromium

# Run on Firefox only
npm run test:firefox

# Run on WebKit only
npm run test:webkit

# Run on mobile browsers
npm run test:mobile
```

### Interactive Mode

```bash
# Open Playwright UI mode
npm run test:ui

# Generate test code
npm run codegen
```

### View Reports

```bash
# View HTML test report
npm run report
```

## Docker

Run tests inside a container without installing browsers locally:

```bash
# Run all browsers
docker compose up playwright

# Run a specific browser
docker compose up playwright-chromium
docker compose up playwright-firefox
docker compose up playwright-webkit
```

Test results and HTML reports are written to `./test-results` and `./playwright-report` on your host machine via volume mounts.

## VS Code Setup

This repository ships with a full `.vscode/` configuration. When you open the project VS Code will prompt you to install the recommended extensions.

### Recommended Extensions

| Extension | Purpose |
| --------- | ------- |
| Playwright Test for VS Code | In-editor test runner, trace viewer, codegen |
| Docker | Dockerfile and docker-compose support |
| ESLint | JavaScript linting |
| Prettier | Code formatting |
| Path Intellisense | Auto-complete file paths |
| Code Spell Checker | Catch typos in tests and comments |

### Running Tests from VS Code

Use `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`) and type **Tasks: Run Task** to access all configured tasks:

- **Test: All Browsers** — default test task (`Ctrl+Shift+B` on Mac)
- **Test: Chromium / Firefox / WebKit** — single-browser runs
- **Test: Headed** — watch the browser as tests run
- **Test: UI Mode** — interactive Playwright UI
- **Docker: Build Image** — build the Docker image
- **Docker: Run All Tests** — run tests in a container

### Debugging Tests

Open the **Run and Debug** panel (`Ctrl+Shift+D`) and choose a configuration:

- **Debug: All Tests** — runs all tests with Playwright Inspector
- **Debug: Current File** — debugs the file open in the editor
- **Debug: Chromium / Firefox / WebKit** — single-browser debug

## Project Structure

```text
Playwright_Learning_Udemy/
├── .vscode/
│   ├── extensions.json      # Recommended extensions
│   ├── launch.json          # Debug configurations
│   ├── settings.json        # Workspace settings
│   └── tasks.json           # Run/build tasks
├── e2e/
│   └── sample.spec.js       # Sample test file
├── .dockerignore            # Docker build exclusions
├── .gitignore               # Git exclusions
├── docker-compose.yml       # Docker services (all browsers)
├── Dockerfile               # Container image definition
├── playwright.config.js     # Playwright configuration
├── package.json             # Dependencies and scripts
├── package-lock.json        # Dependency lock file
└── README.md                # This file
```

## Configuration

The project uses an optimized Playwright configuration (`playwright.config.js`) with:

- **Test Directory**: `./e2e`
- **Timeout**: 30 seconds per test
- **Retries**: 2 retries in CI, 0 locally
- **Parallel Execution**: Enabled
- **Screenshots**: On failure only
- **Videos**: On failure only
- **Trace**: On failure (retained)

## Available Scripts

| Command | Description |
| ------- | ----------- |
| `npm test` | Run all tests |
| `npm run test:headed` | Run tests with visible browser |
| `npm run test:debug` | Run tests in debug mode |
| `npm run test:chromium` | Run tests on Chromium |
| `npm run test:firefox` | Run tests on Firefox |
| `npm run test:webkit` | Run tests on WebKit |
| `npm run test:mobile` | Run tests on mobile browsers |
| `npm run test:ui` | Open Playwright UI mode |
| `npm run report` | View HTML test report |
| `npm run codegen` | Generate test code |

## Documentation

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)

## Contributing

This is a learning repository. Feel free to fork and experiment!

## License

ISC License

## Author

Cheetahrevive

---

If you find this repository helpful, please consider giving it a star!
