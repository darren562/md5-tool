"use client";
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function keyOrder(key: string): number[] {
  const pairs = key
    .toUpperCase()
    .split("")
    .map((c, i) => ({ c, i }));
  pairs.sort((a, b) => (a.c === b.c ? a.i - b.i : a.c < b.c ? -1 : 1));
  const order: number[] = [];
  for (let p of pairs) order.push(p.i);
  return order;
}
function columnarEncode(text: string, key: string): string {
  const clean = text.replace(/\s+/g, "");
  const k = keyOrder(key);
  const cols = k.length;
  const rows = Math.ceil(clean.length / cols);
  const grid: Array<string[]> = Array.from({ length: rows }, () =>
    Array(cols).fill("")
  );
  let idx = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      grid[r][c] = clean[idx++] || "X";
    }
  }
  let out = "";
  for (let ord of k) {
    for (let r = 0; r < rows; r++) {
      out += grid[r][ord];
    }
  }
  return out;
}
function columnarDecode(cipher: string, key: string): string {
  const clean = cipher.replace(/\s+/g, "");
  const k = keyOrder(key);
  const cols = k.length;
  const rows = Math.ceil(clean.length / cols);
  const grid: Array<string[]> = Array.from({ length: rows }, () =>
    Array(cols).fill("")
  );
  let idx = 0;
  for (let ord of k) {
    for (let r = 0; r < rows; r++) {
      grid[r][ord] = clean[idx++] || "X";
    }
  }
  let out = "";
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      out += grid[r][c];
    }
  }
  return out;
}

export default function ColumnarClient() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [key, setKey] = useState("KEY");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    if (!key) {
      setOutput("Key required");
      return;
    }
    setOutput(
      mode === "encode"
        ? columnarEncode(input, key)
        : columnarDecode(input, key)
    );
  };
  return (
    <div className="container">
      <div className="box">
        <h1>Columnar Transposition</h1>
        <SafetyNote kind="columnar" />
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
            Key: <input value={key} onChange={(e) => setKey(e.target.value)} />
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
              <span className="hash" style={{ wordBreak: "break-word" }}>
                {output}
              </span>
            </div>
          </div>
        )}
        <div className="intro">
          <LongTailSEO
            title="Columnar transposition — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Columnar", url: "https://www.hashkitly.com/columnar" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "Rail Fence", url: "/railfence" },
              { name: "Playfair", url: "/playfair" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
