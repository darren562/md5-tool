"use client";
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function cleanDigits(s: string): string {
  return s.replace(/[^0-9Xx]/g, "").toUpperCase();
}

function isbn10Validate(s: string): boolean {
  const d = cleanDigits(s);
  if (d.length !== 10) return false;
  let sum = 0;
  for (let i = 0; i < 9; i++) sum += (i + 1) * (d.charCodeAt(i) - 48);
  const last = d[9] === "X" ? 10 : d.charCodeAt(9) - 48;
  sum += 10 * last;
  return sum % 11 === 0;
}
function isbn10Compute(base: string): string {
  const d = cleanDigits(base).replace(/X/g, "");
  if (d.length !== 9) return "";
  let sum = 0;
  for (let i = 0; i < 9; i++) sum += (i + 1) * (d.charCodeAt(i) - 48);
  const check = sum % 11;
  const digit = check === 10 ? "X" : String(check);
  return d + digit;
}

export default function ISBN10Client() {
  const [mode, setMode] = useState<"validate" | "generate">("validate");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    if (mode === "validate") setOutput(isbn10Validate(input).toString());
    else setOutput(isbn10Compute(input));
  };
  return (
    <div className="container">
      <div className="box">
        <h1>ISBN-10</h1>
        <SafetyNote kind="isbn10" />
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
            mode === "validate" ? "Enter ISBN-10..." : "Enter 9-digit base..."
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
            title="ISBN-10 — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "ISBN-10", url: "https://www.hashkitly.com/isbn10" },
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
