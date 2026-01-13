import {
  base1,
  base2,
  base3,
  base4,
  base5,
  base6,
  base7,
  base8,
  base9,
} from "./bases";
import { rotateX, rotateY } from "./transforms";
import type { LineDef } from "./types";

export const cistercianNumDictionary: Record<number, LineDef[]> = {
  1: base1,
  10: base1.map(rotateY),
  100: base1.map(rotateX),
  1000: base1.map(rotateY).map(rotateX),

  2: base2,
  20: base2.map(rotateY),
  200: base2.map(rotateX),
  2000: base2.map(rotateY).map(rotateX),

  3: base3,
  30: base3.map(rotateY),
  300: base3.map(rotateX),
  3000: base3.map(rotateY).map(rotateX),

  4: base4,
  40: base4.map(rotateY),
  400: base4.map(rotateX),
  4000: base4.map(rotateY).map(rotateX),

  5: base5,
  50: base5.map(rotateY),
  500: base5.map(rotateX),
  5000: base5.map(rotateY).map(rotateX),

  6: base6,
  60: base6.map(rotateY),
  600: base6.map(rotateX),
  6000: base6.map(rotateY).map(rotateX),

  7: base7,
  70: base7.map(rotateY),
  700: base7.map(rotateX),
  7000: base7.map(rotateY).map(rotateX),

  8: base8,
  80: base8.map(rotateY),
  800: base8.map(rotateX),
  8000: base8.map(rotateY).map(rotateX),

  9: base9,
  90: base9.map(rotateY),
  900: base9.map(rotateX),
  9000: base9.map(rotateY).map(rotateX),
};
