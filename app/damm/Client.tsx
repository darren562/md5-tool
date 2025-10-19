"use client";
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

// Damm algorithm (quasigroup table)
const qg = [
  [0, 3, 1, 7, 5, 9, 8, 6, 4, 2],
  [7, 0, 9, 2, 1, 5, 4, 8, 6, 3],
  [4, 2, 0, 6, 8, 7, 1, 3, 5, 9],
  [1, 7, 5, 0, 9, 8, 3, 4, 2, 6],
  [6, 1, 2, 3, 0, 4, 5, 9, 7, 8],
  [3, 6, 7, 4, 2, 0, 9, 5, 8, 1],
  [5, 8, 6, 9, 7, 2, 0, 1, 3, 4],
  [8, 9, 4, 5, 3, 6, 2, 0, 1, 7],
  [9, 4, 3, 8, 6, 1, 7, 2, 0, 5],
  [2, 5, 8, 1, 4, 3, 6, 7, 9, 0],
];
function dammValidate(num: string): boolean {
  let interim = 0;
  const digits = num.replace(/\D+/g, "");
  for (let i = 0; i < digits.length; i++) {
    interim = qg[interim][digits.charCodeAt(i) - 48];
  }
  return interim === 0;
}
function dammCompute(base: string): string {
  let interim = 0;
  const digits = base.replace(/\D+/g, "");
  for (let i = 0; i < digits.length; i++)
    interim = qg[interim][digits.charCodeAt(i) - 48];
  return digits + String(qg[interim][0]);
}

export default function DammClient() {
  const [mode, setMode] = useState<"validate" | "generate">("validate");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    if (mode === "validate") setOutput(dammValidate(input).toString());
    else setOutput(dammCompute(input));
  };
  return (
    <div className="container">
      <div className="box">
        <h1>Damm Check</h1>
        <SafetyNote kind="damm" />
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
            title="Damm — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Damm", url: "https://www.hashkitly.com/damm" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "Luhn", url: "/luhn" },
              { name: "Verhoeff", url: "/verhoeff" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
