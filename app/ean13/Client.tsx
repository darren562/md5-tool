"use client";
export {};
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function cleanDigits(s: string) {
  return s.replace(/\D+/g, "");
}
function ean13CheckDigit(base12: string): number {
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    const n = base12.charCodeAt(i) - 48;
    sum += (i % 2 === 0 ? 1 : 3) * n;
  }
  return (10 - (sum % 10)) % 10;
}
function validate(num: string): boolean {
  const d = cleanDigits(num);
  if (d.length !== 13) return false;
  const cd = ean13CheckDigit(d.slice(0, 12));
  return cd === d.charCodeAt(12) - 48;
}
function generate(base12: string): string {
  const d = cleanDigits(base12);
  if (d.length !== 12) return "";
  return d + String(ean13CheckDigit(d));
}

export default function EAN13Client() {
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
        <h1>EAN-13</h1>
        <SafetyNote kind="ean13" />
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
            mode === "validate" ? "Enter EAN-13..." : "Enter 12-digit base..."
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
            title="EAN-13 — FAQs"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "EAN-13", url: "https://www.hashkitly.com/ean13" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "UPC-A", url: "/upca" },
              { name: "EAN-8", url: "/ean8" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
