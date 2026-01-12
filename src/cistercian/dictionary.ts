import { base1, base2, base3, base4, base5 } from "./bases";
import { rotateY } from "./transforms";
import type { LineDef } from "./types";

export const cistercianNumDictionary: Record<number, LineDef[]> = {
  1: base1,
  10: base1.map(rotateY),

  2: base2,
  20: base2.map(rotateY),

  3: base3,
  30: base3.map(rotateY),

  4: base4,
  40: base4.map(rotateY),

  5: base5,
  50: base5.map(rotateY),
};
