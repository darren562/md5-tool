"use client";
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

// Verhoeff algorithm tables
const d = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
  [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
  [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
  [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
  [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
  [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
  [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
  [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
];
const p = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
  [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
  [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
  [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
  [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
  [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
  [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
];
const inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];

function verhoeffCompute(base: string): string {
  let c = 0;
  const digits = base.replace(/\D+/g, "");
  for (let i = 0; i < digits.length; i++) {
    const num = digits.charCodeAt(digits.length - 1 - i) - 48;
    c = d[c][p[(i + 1) % 8][num]];
  }
  const check = inv[c];
  return digits + String(check);
}
function verhoeffValidate(num: string): boolean {
  let c = 0;
  const digits = num.replace(/\D+/g, "");
  for (let i = 0; i < digits.length; i++) {
    const numi = digits.charCodeAt(digits.length - 1 - i) - 48;
    c = d[c][p[i % 8][numi]];
  }
  return c === 0;
}

export default function VerhoeffClient() {
  const [mode, setMode] = useState<"validate" | "generate">("validate");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    if (mode === "validate") setOutput(verhoeffValidate(input).toString());
    else setOutput(verhoeffCompute(input));
  };
  return (
    <div className="container">
      <div className="box">
        <h1>Verhoeff Check</h1>
        <SafetyNote kind="verhoeff" />
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
            title="Verhoeff — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Verhoeff", url: "https://www.hashkitly.com/verhoeff" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "Luhn", url: "/luhn" },
              { name: "Damm", url: "/damm" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
