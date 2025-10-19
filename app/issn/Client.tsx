"use client";
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function clean(s: string) {
  return s.replace(/[^0-9Xx]/g, "").toUpperCase();
}
function issnValidate(s: string): boolean {
  const d = clean(s);
  if (d.length !== 8) return false;
  let sum = 0;
  for (let i = 0; i < 7; i++) {
    sum += (8 - i) * (d.charCodeAt(i) - 48);
  }
  const last = d[7] === "X" ? 10 : d.charCodeAt(7) - 48;
  const check = (11 - (sum % 11)) % 11;
  return check === last;
}
function issnGenerate(base7: string): string {
  const d = clean(base7).replace(/X/g, "");
  if (d.length !== 7) return "";
  let sum = 0;
  for (let i = 0; i < 7; i++) {
    sum += (8 - i) * (d.charCodeAt(i) - 48);
  }
  const check = (11 - (sum % 11)) % 11;
  const digit = check === 10 ? "X" : String(check);
  return d + digit;
}

export default function ISSNClient() {
  const [mode, setMode] = useState<"validate" | "generate">("validate");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    setOutput(
      mode === "validate" ? issnValidate(input).toString() : issnGenerate(input)
    );
  };
  return (
    <div className="container">
      <div className="box">
        <h1>ISSN</h1>
        <SafetyNote kind="issn" />
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
            mode === "validate" ? "Enter ISSN..." : "Enter 7-digit base..."
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
            title="ISSN — FAQs"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "ISSN", url: "https://www.hashkitly.com/issn" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "ISBN-13", url: "/isbn13" },
              { name: "ISBN-10", url: "/isbn10" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
