import type { GlyphProps } from "./types";

const Glyph = ({ lines }: GlyphProps) => (
  <>
    {lines.map((l, i) => (
      <line
        key={i}
        x1={l.x1}
        y1={l.y1}
        x2={l.x2}
        y2={l.y2}
        stroke="white"
        stroke-linecap="round"
        strokeWidth={3}
      />
    ))}
  </>
);

export default Glyph;
