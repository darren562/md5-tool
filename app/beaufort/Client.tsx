"use client";
export {};
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function beaufortTransform(text: string, key: string): string {
  const A = 65;
  const t = text.toUpperCase();
  const k = key.toUpperCase().replace(/[^A-Z]/g, "");
  if (!k) return "";
  let out = "";
  let j = 0;
  for (let i = 0; i < t.length; i++) {
    const c = t.charCodeAt(i);
    if (c >= 65 && c <= 90) {
      const ki = k.charCodeAt(j % k.length) - A;
      const pi = c - A;
      const ci = (25 - ((pi - ki + 26) % 26)) % 26;
      out += String.fromCharCode(ci + A);
      j++;
    } else out += text[i];
  }
  return out;
}

export default function BeaufortClient() {
  const [key, setKey] = useState("KEY");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    setOutput(beaufortTransform(input, key));
  };
  return (
    <div className="container">
      <div className="box">
        <h1>Beaufort Cipher</h1>
        <SafetyNote kind="beaufort" />
        <label>
          Key: <input value={key} onChange={(e) => setKey(e.target.value)} />
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
        />
        <button className="btn" onClick={run} style={{ margin: "12px 0" }}>
          Transform
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
            title="Beaufort — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Beaufort", url: "https://www.hashkitly.com/beaufort" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "Vigenere", url: "/vigenere" },
              { name: "Porta", url: "/porta" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
