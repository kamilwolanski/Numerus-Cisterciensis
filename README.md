# Numerus Cisterciensis (NCG)

**Cistercian Numeral System Number Generator** — a small React app that converts an Arabic number into a medieval Cistercian numeral (1–9999) and lets you download it as an SVG.

## Demo

- Type a number (1–9999)
- The Cistercian glyph is rendered as SVG
- Click **Download** to save the generated glyph as `"{number}-cistercian.svg"`

## Features

- ✅ Convert numbers from **1 to 9999**
- ✅ Live preview (SVG)
- ✅ Download generated numeral as **SVG**
- ✅ Clean, simple UI

## Tech Stack

- **React + TypeScript**
- **Vite**
- **lucide-react** (icons)
- SVG rendering (no canvas)

## How it works

A number is split into digits and mapped into place values:

- units (1–9)
- tens (10–90)
- hundreds (100–900)
- thousands (1000–9000)

Each place value has a predefined set of line segments (`LineDef[]`).  
The base shapes (`base1`–`base9`) are mirrored across axes to create tens/hundreds/thousands using simple transforms:

- `rotateY`: `(x, y) → (-x, y)`
- `rotateX`: `(x, y) → (x, -y)`

The final glyph is composed by rendering all matching line segments in a single `<svg>`.
