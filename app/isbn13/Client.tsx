"use client";
export {};
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function clean(s: string) {
  return s.replace(/\D+/g, "");
}
function isbn13CheckDigit(base12: string): number {
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    const n = base12.charCodeAt(i) - 48;
    sum += i % 2 === 0 ? n : n * 3;
  }
  return (10 - (sum % 10)) % 10;
}
function validate(num: string): boolean {
  const d = clean(num);
  if (d.length !== 13) return false;
  const cd = isbn13CheckDigit(d.slice(0, 12));
  return cd === d.charCodeAt(12) - 48;
}
function generate(base12: string): string {
  const d = clean(base12);
  if (d.length !== 12) return "";
  return d + String(isbn13CheckDigit(d));
}

export default function ISBN13Client() {
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
        <h1>ISBN-13</h1>
        <SafetyNote kind="isbn13" />
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
            mode === "validate" ? "Enter ISBN-13..." : "Enter 12-digit base..."
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
            title="ISBN-13 — FAQs"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "ISBN-13", url: "https://www.hashkitly.com/isbn13" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "ISBN-10", url: "/isbn10" },
              { name: "EAN-13", url: "/ean13" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
