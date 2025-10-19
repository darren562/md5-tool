"use client";
export {};
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function cleanDigits(s: string) {
  return s.replace(/\D+/g, "");
}
// UPC-A: 11 data digits + check digit. Weights from left: positions 1..11 use 3 for odd, 1 for even.
function upcaCheckDigit(base11: string): number {
  let sumOdd = 0;
  let sumEven = 0;
  for (let i = 0; i < 11; i++) {
    const n = base11.charCodeAt(i) - 48;
    if ((i + 1) % 2 === 1) sumOdd += n;
    else sumEven += n;
  }
  const total = sumOdd * 3 + sumEven;
  return (10 - (total % 10)) % 10;
}
function validate(num: string): boolean {
  const d = cleanDigits(num);
  if (d.length !== 12) return false;
  const cd = upcaCheckDigit(d.slice(0, 11));
  return cd === d.charCodeAt(11) - 48;
}
function generate(base11: string): string {
  const d = cleanDigits(base11);
  if (d.length !== 11) return "";
  return d + String(upcaCheckDigit(d));
}

export default function UPCaClient() {
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
        <h1>UPC-A</h1>
        <SafetyNote kind="upca" />
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
            mode === "validate" ? "Enter UPC-A..." : "Enter 11-digit base..."
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
            title="UPC-A — FAQs"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "UPC-A", url: "https://www.hashkitly.com/upca" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "EAN-13", url: "/ean13" },
              { name: "EAN-8", url: "/ean8" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
