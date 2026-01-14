# Playwright Learning - Udemy Course

[![Playwright](https://img.shields.io/badge/Playwright-v1.57.0-45ba4b?logo=playwright)](https://playwright.dev)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green?logo=node.js)](https://nodejs.org)
[![License](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE)

This repository contains sample tests and exercises from the Playwright automation course on Udemy. It demonstrates best practices for end-to-end testing using Playwright with JavaScript.

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Available Scripts](#available-scripts)
- [Documentation](#documentation)

## ✨ Features

- ✅ **Multi-Browser Testing**: Chromium, Firefox, WebKit
- ✅ **Mobile Testing**: Pixel 5, iPhone 12 emulation
- ✅ **Parallel Execution**: Fast test execution
- ✅ **CI/CD Ready**: Optimized for continuous integration
- ✅ **Smart Artifacts**: Screenshots & videos on failure
- ✅ **Multiple Reporters**: HTML, JSON, and console
- ✅ **Best Practices**: Following Playwright guidelines

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18 or higher
- **npm**: Version 9 or higher

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/Cheetahrevive/Playwright_Learning_Udemy.git
cd Playwright_Learning_Udemy
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## 🧪 Running Tests

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

## 📁 Project Structure

```
Playwright_Learning_Udemy/
├── e2e/
│   └── sample.spec.js       # Sample test file
├── playwright.config.js     # Playwright configuration
├── package.json            # Dependencies and scripts
├── package-lock.json       # Dependency lock file
└── README.md              # This file
```

## ⚙️ Configuration

The project uses an optimized Playwright configuration (`playwright.config.js`) with:

- **Test Directory**: `./e2e`
- **Timeout**: 30 seconds per test
- **Retries**: 2 retries in CI, 0 locally
- **Parallel Execution**: Enabled
- **Screenshots**: On failure only
- **Videos**: On failure only
- **Trace**: On first retry

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
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

## 📚 Documentation

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)

## 🤝 Contributing

This is a learning repository. Feel free to fork and experiment!

## 📄 License

ISC License

## 👤 Author

**Cheetahrevive**

---

⭐ If you find this repository helpful, please consider giving it a star!
