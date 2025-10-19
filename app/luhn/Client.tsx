"use client";
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function luhnCheck(num: string): boolean {
  let sum = 0;
  let alt = false;
  for (let i = num.length - 1; i >= 0; i--) {
    const ch = num[i];
    if (ch < "0" || ch > "9") continue;
    let n = ch.charCodeAt(0) - 48;
    if (alt) {
      n *= 2;
      if (n > 9) n -= 9;
    }
    sum += n;
    alt = !alt;
  }
  return sum % 10 === 0;
}
function luhnCompute(base: string): string {
  let sum = 0;
  let alt = true; // as if an extra digit at the end
  for (let i = base.length - 1; i >= 0; i--) {
    const ch = base[i];
    if (ch < "0" || ch > "9") continue;
    let n = ch.charCodeAt(0) - 48;
    if (alt) {
      n *= 2;
      if (n > 9) n -= 9;
    }
    sum += n;
    alt = !alt;
  }
  const check = (10 - (sum % 10)) % 10;
  return base + String(check);
}

export default function LuhnClient() {
  const [mode, setMode] = useState<"validate" | "generate">("validate");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    if (mode === "validate")
      setOutput(luhnCheck(input.replace(/\s+/g, "")).toString());
    else setOutput(luhnCompute(input.replace(/\s+/g, "")));
  };
  return (
    <div className="container">
      <div className="box">
        <h1>Luhn Check</h1>
        <SafetyNote kind="luhn" />
        <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
          <label>
            <input
              type="radio"
              checked={mode === "validate"}
              onChange={() => setMode("validate")}
            />{" "}
            Validate
          </label>
          <label>
            <input
              type="radio"
              checked={mode === "generate"}
              onChange={() => setMode("generate")}
            />{" "}
            Generate
          </label>
        </div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            mode === "validate"
              ? "Enter number..."
              : "Enter number (without check)..."
          }
        />
        <button className="btn" onClick={run} style={{ margin: "12px 0" }}>
          Run
        </button>
        {output !== "" && (
          <div className="result">
            <div className="row">
              <span>Result:</span>
              <span className="hash">{output}</span>
            </div>
          </div>
        )}
        <div className="intro">
          <LongTailSEO
            title="Luhn — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Luhn", url: "https://www.hashkitly.com/luhn" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "Verhoeff", url: "/verhoeff" },
              { name: "Damm", url: "/damm" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
