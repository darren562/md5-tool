"use client";
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function order(key: string): number[] {
  const pairs = key
    .toUpperCase()
    .split("")
    .map((c, i) => ({ c, i }));
  pairs.sort((a, b) => (a.c === b.c ? a.i - b.i : a.c < b.c ? -1 : 1));
  return pairs.map((p) => p.i);
}
function transpose(text: string, key: string): string {
  const k = order(key);
  const cols = k.length;
  const rows = Math.ceil(text.length / cols);
  const grid: Array<string[]> = Array.from({ length: rows }, () =>
    Array(cols).fill("X")
  );
  let idx = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      grid[r][c] = text[idx++] || "X";
    }
  }
  let out = "";
  for (let i = 0; i < k.length; i++) {
    const col = k[i];
    for (let r = 0; r < rows; r++) {
      out += grid[r][col];
    }
  }
  return out;
}
function itranspose(cipher: string, key: string): string {
  const k = order(key);
  const cols = k.length;
  const rows = Math.ceil(cipher.length / cols);
  const grid: Array<string[]> = Array.from({ length: rows }, () =>
    Array(cols).fill("")
  );
  let idx = 0;
  for (let i = 0; i < k.length; i++) {
    const col = k[i];
    for (let r = 0; r < rows; r++) {
      grid[r][col] = cipher[idx++] || "X";
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

function doubleEncode(text: string, k1: string, k2: string) {
  return transpose(transpose(text, k1), k2);
}
function doubleDecode(cipher: string, k1: string, k2: string) {
  return itranspose(itranspose(cipher, k2), k1);
}

export default function DoubleTransClient() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [k1, setK1] = useState("CARGO");
  const [k2, setK2] = useState("SHIP");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    if (!k1 || !k2) {
      setOutput("Keys required");
      return;
    }
    setOutput(
      mode === "encode"
        ? doubleEncode(input, k1, k2)
        : doubleDecode(input, k1, k2)
    );
  };
  return (
    <div className="container">
      <div className="box">
        <h1>Double Transposition</h1>
        <SafetyNote kind="doubletrans" />
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
            Key 1: <input value={k1} onChange={(e) => setK1(e.target.value)} />
          </label>
          <label>
            Key 2: <input value={k2} onChange={(e) => setK2(e.target.value)} />
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
            title="Double Transposition — FAQs"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              {
                name: "Double Transposition",
                url: "https://www.hashkitly.com/double-transposition",
              },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "Columnar", url: "/columnar" },
              { name: "Rail Fence", url: "/railfence" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
