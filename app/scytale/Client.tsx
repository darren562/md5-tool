"use client";
export {};
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function scytaleEncode(text: string, rows: number): string {
  if (rows <= 1) return text;
  const s = text;
  let out = "";
  for (let r = 0; r < rows; r++) {
    for (let i = r; i < s.length; i += rows) {
      out += s[i];
    }
  }
  return out;
}
function scytaleDecode(cipher: string, rows: number): string {
  if (rows <= 1) return cipher;
  const len = cipher.length;
  const out = Array(len).fill("");
  let idx = 0;
  for (let r = 0; r < rows; r++) {
    for (let i = r; i < len; i += rows) {
      out[i] = cipher[idx++] || "";
    }
  }
  return out.join("");
}

export default function ScytaleClient() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [rows, setRows] = useState(3);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    const r = Math.max(2, Math.floor(rows));
    setOutput(
      mode === "encode" ? scytaleEncode(input, r) : scytaleDecode(input, r)
    );
  };
  return (
    <div className="container">
      <div className="box">
        <h1>Scytale Cipher</h1>
        <SafetyNote kind="scytale" />
        <div
          style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}
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
            Rows:{" "}
            <input
              type="number"
              value={rows}
              min={2}
              onChange={(e) => setRows(parseInt(e.target.value || "3", 10))}
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
              <span className="hash">{output}</span>
            </div>
          </div>
        )}
        <div className="intro">
          <LongTailSEO
            title="Scytale — FAQs"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Scytale", url: "https://www.hashkitly.com/scytale" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "Rail Fence", url: "/railfence" },
              { name: "Columnar", url: "/columnar" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
