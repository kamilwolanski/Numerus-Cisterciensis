import { Download } from "lucide-react";
import "./App.css";
import bg from "@/assets/monasterbgc.webp";
import { useRef, useState } from "react";
import { cistercianNumDictionary } from "@/cistercian/dictionary";
import Glyph from "@/cistercian/Glyph";

function App() {
  const [value, setValue] = useState("");
  const [number, setNumber] = useState<number | null>(null);

  const [error, setError] = useState<string>("");

  const svgRef = useRef<SVGSVGElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);

    if (value === "") {
      setError("");
      setNumber(null);
      return;
    }

    const num = Number(value);

    if (Number.isNaN(num)) {
      setError("Enter a number");
      setNumber(null);
      return;
    }

    if (num < 1 || num > 9999) {
      setError("Enter a number between 1 and 9999");
      setNumber(null);
      return;
    }

    setError("");
    setNumber(num);
  };

  const generate = (num: number) => {
    const digits = String(num).split("").map(Number);
    const values = digits.map((d, i) => d * 10 ** (digits.length - i - 1));

    return (
      <svg width="200" height="200" viewBox="-30 -30 260 260" ref={svgRef}>
        <g transform="translate(100 100)">
          {values.map(
            (v) =>
              v > 0 &&
              cistercianNumDictionary[v] && (
                <Glyph key={v} lines={cistercianNumDictionary[v]} />
              )
          )}
        </g>
      </svg>
    );
  };

  const downloadSvg = () => {
    const svgEl = svgRef.current;
    if (!svgEl) return;

    const clone = svgEl.cloneNode(true) as SVGSVGElement; // cloned it to change the stroke color to black

    clone.querySelectorAll("line").forEach((line) => {
      line.setAttribute("stroke", 'black');
    });

    const svgString = new XMLSerializer().serializeToString(clone);
    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${number}-cistercian.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-8 relative"
      style={{
        background: "linear-gradient(to bottom, #3d2817, #1a0f08)",
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          opacity: 0.25,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(29, 16, 8, 0.7), rgba(29, 16, 8, 0.9))",
        }}
      />

      <div className="w-full max-w-2xl relative z-10 mb-20">
        <div className="text-center mb-8 md:mb-12">
          <h1
            className="mb-4 text-5xl md:text-6xl text-primary tracking-wider"
            style={{
              fontFamily: "'UnifrakturMaguntia', cursive",
            }}
          >
            Numerus Cisterciensis
          </h1>
          <p className="text-foreground tracking-wider md:text-lg">
            Cistercian Numeral System Number Generator
          </p>
        </div>

        <div
          className="rounded-lg p-8 shadow-2xl border-3 border-border"
          style={{
            background: "linear-gradient(to bottom, #4a3425, #2d1f15)",
            boxShadow:
              "0 10px 40px rgba(0,0,0,0.8), inset 0 1px 0 rgba(212, 175, 55, 0.2)",
          }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-32 h-1 rounded bg-primary" />
          </div>

          <div className="space-y-6 mb-8">
            <div className="space-y-2">
              <label htmlFor="number-input" className="text-foreground text-sm md:text-base">
                Enter a number (1–9999)
              </label>
              <input
                id="number-input"
                type="number"
                autoFocus
                value={value}
                onChange={handleInputChange}
                placeholder="Try 2026"
                min="0"
                max="9999"
                className="text-center md:text-xl rounded-md border-2 w-full py-2 bg-input-bg border-border text-primary"
              />
              {error && (
                <p className="text-red-400 text-xs md:text-sm text-center">{error}</p>
              )}
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-center h-[200px] rounded-md text-center text-xl rounded-md border-2 w-full bg-input-bg border-border text-primary">
              {number && generate(number)}
            </div>

            <div className="flex flex-col items-center gap-3 mt-4">
              {number && (
                <p className="text-center text-foreground text-sm">
                  Arabic numeral: {number}
                </p>
              )}

              <button
                className="transition-all bg-primary-dark text-primary font-semibold border-2 py-4 px-6 flex cursor-pointer"
                onClick={downloadSvg}
              >
                <Download className="mr-2 h-5 w-5" />
                Download
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="w-32 h-1 rounded bg-primary" />
          </div>
        </div>

        <div className="mt-8 text-center text-foreground/80 text-xs md:text-sm">
          <p>A numeral system used by Cistercian monks in the Middle Ages</p>
          <p className="mt-2">
            More information on:{" "}
            <a
              className="text-primary underline"
              href="https://en.wikipedia.org/wiki/Cistercian_numerals"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cistercian numerals
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
