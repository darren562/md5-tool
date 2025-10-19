"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function railfenceEncode(text: string, rails: number): string {
  if (rails < 2) return text;
  const rows: string[] = Array.from({ length: rails }, () => "");
  let row = 0,
    dir = 1;
  for (let i = 0; i < text.length; i++) {
    rows[row] += text[i];
    row += dir;
    if (row === 0 || row === rails - 1) dir *= -1;
  }
  return rows.join("");
}

function railfenceDecode(cipher: string, rails: number): string {
  if (rails < 2) return cipher;
  const len = cipher.length;
  // Determine rail pattern positions
  const pattern: number[] = [];
  let row = 0,
    dir = 1;
  for (let i = 0; i < len; i++) {
    pattern.push(row);
    row += dir;
    if (row === 0 || row === rails - 1) dir *= -1;
  }
  // Count how many chars per rail
  const counts = Array(rails).fill(0);
  for (const r of pattern) counts[r]++;
  // Slice cipher into rails
  const railsArr: string[] = Array(rails).fill("");
  let idx = 0;
  for (let r = 0; r < rails; r++) {
    railsArr[r] = cipher.slice(idx, idx + counts[r]);
    idx += counts[r];
  }
  // Reconstruct by walking pattern and taking from each rail
  const pointers = Array(rails).fill(0);
  let out = "";
  for (const r of pattern) {
    out += railsArr[r][pointers[r]++];
  }
  return out;
}

export default function RailFenceClient() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [rails, setRails] = useState(3);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    const r = Math.max(2, Math.floor(rails));
    setOutput(
      mode === "encode" ? railfenceEncode(input, r) : railfenceDecode(input, r)
    );
  };
  return (
    <div className="container">
      <div className="box">
        <h1>Rail Fence Cipher</h1>
        <SafetyNote kind="railfence" />
        <div
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
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
          <label>
            Rails:{" "}
            <input
              type="number"
              value={rails}
              min={2}
              onChange={(e) => setRails(parseInt(e.target.value || "3", 10))}
              style={{ width: 80 }}
            />
          </label>
        </div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={mode === "encode" ? "Enter text..." : "Enter cipher..."}
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
            title="Rail Fence cipher — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              {
                name: "Rail Fence",
                url: "https://www.hashkitly.com/railfence",
              },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "Caesar", url: "/caesar" },
              { name: "Vigenere", url: "/vigenere" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
