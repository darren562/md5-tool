"use client";
export {};
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function soundex(s: string): string {
  const str = s.toUpperCase().replace(/[^A-Z]/g, "");
  if (!str) return "";
  const first = str[0];
  const map: Record<string, string> = {
    B: "1",
    F: "1",
    P: "1",
    V: "1",
    C: "2",
    G: "2",
    J: "2",
    K: "2",
    Q: "2",
    S: "2",
    X: "2",
    Z: "2",
    D: "3",
    T: "3",
    L: "4",
    M: "5",
    N: "5",
    R: "6",
  };
  let prev = "";
  let out = "";
  for (let i = 1; i < str.length; i++) {
    const ch = str[i];
    const code = map[ch] || "";
    if (code && code !== prev) out += code;
    prev = code;
  }
  out = (first + out).padEnd(4, "0").slice(0, 4);
  return out;
}

export default function SoundexClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => setOutput(soundex(input));
  return (
    <div className="container">
      <div className="box">
        <h1>Soundex</h1>
        <SafetyNote kind="soundex" />
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a name..."
        />
        <button className="btn" onClick={run} style={{ margin: "12px 0" }}>
          Compute
        </button>
        {output !== "" && (
          <div className="result">
            <div className="row">
              <span>Soundex:</span>
              <span className="hash">{output}</span>
            </div>
          </div>
        )}
        <div className="intro">
          <LongTailSEO
            title="Soundex — FAQs"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Soundex", url: "https://www.hashkitly.com/soundex" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "NATO Phonetic", url: "/nato" },
              { name: "Leetspeak", url: "/leetspeak" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
