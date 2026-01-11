import { Download } from "lucide-react";
import "./App.css";
import bg from "@/assets/monasterbgc.webp";

function App() {
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
        <div className="text-center mb-12">
          <h1
            className="mb-4 text-6xl text-primary tracking-wider"
            style={{
              fontFamily: "'UnifrakturMaguntia', cursive",
            }}
          >
            Numerus Cisterciensis
          </h1>
          <p className="text-foreground tracking-wider text-lg">
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
              <label htmlFor="number-input" className="text-foreground">
                Enter a number (0–9999)
              </label>
              <input
                id="number-input"
                type="number"
                // value={number}
                // onChange={handleInputChange}
                placeholder="0"
                min="0"
                max="9999"
                className="text-center text-xl rounded-md border-2 w-full py-2 bg-input-bg border-border text-primary"
              />
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-center p-8 rounded-md text-center text-xl rounded-md border-2 w-full bg-input-bg border-border text-primary"></div>

            <div className="flex flex-col items-center gap-3 mt-4">
              <p className="text-center text-foreground text-sm">
                Arabic numeral: 3
              </p>

              <button className="transition-all bg-primary-dark text-primary font-semibold border-2 py-4 px-6 flex">
                <Download className="mr-2 h-5 w-5" />
                Download
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="w-32 h-1 rounded bg-primary" />
          </div>
        </div>

        <div className="mt-8 text-center text-foreground/60 text-sm">
          <p>A numeral system used by Cistercian monks in the Middle Ages</p>
        </div>
      </div>
    </div>
  );
}

export default App;
