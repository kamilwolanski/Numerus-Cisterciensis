import type { LineDef } from "./types";

// (x,y)→(−x,y)
export const rotateY = (line: LineDef): LineDef => ({
  ...line,
  x1: -line.x1,
  x2: -line.x2,
});

// (x,y)→(x,−y)
export const rotateX = (line: LineDef): LineDef => ({
  ...line,
  y1: -line.y1,
  y2: -line.y2,
});
