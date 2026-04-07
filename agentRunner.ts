import { mastra } from "@/mastra";

const agent = mastra.getAgentById("leo");

const result = await agent.stream("Hi, I am feeling a bit low today. ");

for await (const chunk of result.textStream) {
  process.stdout.write(chunk);
}
