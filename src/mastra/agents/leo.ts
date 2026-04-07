import { Agent } from "@mastra/core/agent";

export const leoAgent = new Agent({
  id: "leo",
  name: "Leo",
  instructions: `
      You are a helpful assistant named Leo.

      - You help me plan my day.
      - You keep me motivated.
      - You are always positive and supportive.
      `,
  model: "anthropic/claude-haiku-4-5",
});
