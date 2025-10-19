"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

const BACON: Record<string, string> = (() => {
  const map: Record<string, string> = {};
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < 26; i++) {
    const bin = i.toString(2).padStart(5, "0");
    map[letters[i]] = bin.replace(/0/g, "A").replace(/1/g, "B");
  }
  return map;
})();
const REV: Record<string, string> = Object.fromEntries(
  Object.entries(BACON).map(([k, v]) => [v, k])
);

function encodeBacon(s: string): string {
  return s.replace(/[A-Za-z]/g, (c) => {
    const up = c.toUpperCase();
    return BACON[up] || c;
  });
}
function decodeBacon(s: string): string {
  const cleaned = s.replace(/[^AB]/g, "");
  let out = "";
  for (let i = 0; i < cleaned.length; i += 5) {
    const chunk = cleaned.slice(i, i + 5);
    if (chunk.length < 5) break;
    out += REV[chunk] || "?";
  }
  return out;
}

export default function BaconianClient() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () =>
    setOutput(mode === "encode" ? encodeBacon(input) : decodeBacon(input));
  return (
    <div className="container">
      <div className="box">
        <h1>Baconian Cipher</h1>
        <SafetyNote kind="baconian" />
        <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
          <label>
            <input
              type="radio"
              checked={mode === "encode"}
              onChange={() => setMode("encode")}
            />{" "}
            Encode
          </label>
          <label>
            <input
              type="radio"
              checked={mode === "decode"}
              onChange={() => setMode("decode")}
            />{" "}
            Decode
          </label>
        </div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            mode === "encode" ? "Enter text..." : "Enter A/B pattern..."
          }
        />
        <button className="btn" onClick={run} style={{ margin: "12px 0" }}>
          Run
        </button>
        {output !== "" && (
          <div className="result">
            <div className="row">
              <span>Result:</span>
              <span className="hash" style={{ wordBreak: "break-all" }}>
                {output}
              </span>
            </div>
          </div>
        )}
        <div className="intro">
          <LongTailSEO
            title="Baconian cipher — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Baconian", url: "https://www.hashkitly.com/baconian" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "Atbash", url: "/atbash" },
              { name: "Caesar", url: "/caesar" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
