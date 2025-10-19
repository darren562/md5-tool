"use client";
export {};
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function cleanDigits(s: string) {
  return s.replace(/\D+/g, "");
}
// For EAN-8: base is 7 digits; weights 3,1,3,1,3,1,3 (from left)
function ean8CheckDigit(base7: string): number {
  let sum = 0;
  for (let i = 0; i < 7; i++) {
    const n = base7.charCodeAt(i) - 48;
    const w = i % 2 === 0 ? 3 : 1;
    sum += n * w;
  }
  return (10 - (sum % 10)) % 10;
}
function validate(num: string): boolean {
  const d = cleanDigits(num);
  if (d.length !== 8) return false;
  const cd = ean8CheckDigit(d.slice(0, 7));
  return cd === d.charCodeAt(7) - 48;
}
function generate(base7: string): string {
  const d = cleanDigits(base7);
  if (d.length !== 7) return "";
  return d + String(ean8CheckDigit(d));
}

export default function EAN8Client() {
  const [mode, setMode] = useState<"validate" | "generate">("validate");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    setOutput(
      mode === "validate" ? validate(input).toString() : generate(input)
    );
  };
  return (
    <div className="container">
      <div className="box">
        <h1>EAN-8</h1>
        <SafetyNote kind="ean8" />
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
            mode === "validate" ? "Enter EAN-8..." : "Enter 7-digit base..."
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
            title="EAN-8 — FAQs"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "EAN-8", url: "https://www.hashkitly.com/ean8" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "EAN-13", url: "/ean13" },
              { name: "UPC-A", url: "/upca" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
