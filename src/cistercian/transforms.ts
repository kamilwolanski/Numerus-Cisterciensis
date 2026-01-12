import type { LineDef } from "./types";

// (x,y)→(−x,y)
export const rotateY = (line: LineDef): LineDef => ({
  ...line,
  x1: -line.x1,
  x2: -line.x2,
});
