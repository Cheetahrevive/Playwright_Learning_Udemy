# Official Playwright image — includes Node.js and all browser binaries
FROM mcr.microsoft.com/playwright:v1.57.0-jammy

WORKDIR /app

# Install dependencies first (cached layer — only rebuilds when package files change)
COPY package*.json ./
RUN npm ci

# Copy the rest of the project
COPY . .

# Default command: run all tests in CI mode
CMD ["npx", "playwright", "test"]
