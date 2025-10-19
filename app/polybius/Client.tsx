"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ"; // J merged into I
const grid: string[][] = [];
for (let r = 0; r < 5; r++) grid[r] = [];
for (let i = 0; i < 25; i++) grid[Math.floor(i / 5)][i % 5] = alphabet[i];
const pos: Record<string, [number, number]> = {};
for (let r = 0; r < 5; r++)
  for (let c = 0; c < 5; c++) pos[grid[r][c]] = [r + 1, c + 1];

function encodePolybius(s: string): string {
  let out = "";
  for (const ch of s.toUpperCase()) {
    if (ch === "J") {
      const [r, c] = pos["I"];
      out += `${r}${c}`;
      continue;
    }
    if (pos[ch]) {
      const [r, c] = pos[ch];
      out += `${r}${c}`;
    } else if (/\s/.test(ch)) out += " ";
    else out += ch;
  }
  return out;
}
function decodePolybius(s: string): string {
  let out = "";
  let i = 0;
  while (i < s.length) {
    const ch = s[i];
    if (/\s/.test(ch)) {
      out += ch;
      i++;
      continue;
    }
    if (i + 1 < s.length && /[1-5]/.test(ch) && /[1-5]/.test(s[i + 1])) {
      const r = parseInt(ch, 10) - 1;
      const c = parseInt(s[i + 1], 10) - 1;
      out += grid[r]?.[c] || "?";
      i += 2;
    } else {
      out += ch;
      i++;
    }
  }
  return out;
}

export default function PolybiusClient() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () =>
    setOutput(
      mode === "encode" ? encodePolybius(input) : decodePolybius(input)
    );
  return (
    <div className="container">
      <div className="box">
        <h1>Polybius Square</h1>
        <SafetyNote kind="polybius" />
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
            mode === "encode" ? "Enter text..." : "Enter digits (11..55)..."
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
            title="Polybius square — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Polybius", url: "https://www.hashkitly.com/polybius" },
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
