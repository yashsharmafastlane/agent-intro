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
