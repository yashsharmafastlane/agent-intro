import { Mastra } from "@mastra/core";
import { leoAgent } from "./agents/leo";

export const mastra = new Mastra({
  agents: { leo: leoAgent },
});
