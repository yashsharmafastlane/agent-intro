# Agent Intro

A simple AI agent built with [Mastra](https://mastra.ai). Meet **Leo** — a friendly assistant that helps you plan your day and keeps you motivated.

## Setup

```bash
npm install
```

Create a `.env` file with your API key:

```
ANTHROPIC_API_KEY=your_key_here
```

## Usage

**Run the agent directly:**

```bash
npx tsx agentRunner.ts
```

**Start the Mastra dev server:**

```bash
npm run dev
```

## Project Structure

```
├── agentRunner.ts          # CLI runner with streaming output
├── src/
│   └── mastra/
│       ├── index.ts        # Mastra instance configuration
│       └── agents/
│           └── leo.ts      # Leo agent definition
├── package.json
└── tsconfig.json
```

## Tech Stack

- [Mastra](https://mastra.ai) — AI agent framework
- TypeScript + ESM

## Contributing

Contributions are welcome! To propose a change:

1. For substantial changes, open an issue first to discuss the approach.
2. Fork the repository (or create a branch) and make your change.
3. For code changes, run `npm install` and verify with `npx tsc --noEmit` before submitting.
4. Open a pull request against `main` with a clear description of what changed and why.
