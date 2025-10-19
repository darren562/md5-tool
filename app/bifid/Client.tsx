"use client";
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function clean(s: string) {
  return s
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .replace(/J/g, "I");
}
function gridFromKey(k: string): string {
  const seen: Record<string, boolean> = {};
  let out = "";
  k = clean(k);
  for (let i = 0; i < k.length; i++) {
    const c = k[i];
    if (!seen[c]) {
      seen[c] = true;
      out += c;
    }
  }
  const ALPH = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < ALPH.length; i++) {
    const c = ALPH[i];
    if (!seen[c]) out += c;
  }
  return out;
}
function bifidEncode(text: string, key: string, period: number): string {
  const grid = gridFromKey(key);
  const t = clean(text);
  const rows: number[] = [];
  const cols: number[] = [];
  for (let i = 0; i < t.length; i++) {
    const idx = grid.indexOf(t[i]);
    rows.push(Math.floor(idx / 5));
    cols.push(idx % 5);
  }
  const merged: number[] = [];
  for (let i = 0; i < t.length; i++) {
    merged.push(rows[i], cols[i]);
  }
  let out = "";
  for (let i = 0; i < merged.length; i += 2) {
    const r = merged[i],
      c = merged[i + 1];
    out += grid[r * 5 + c];
  }
  return out;
}
function bifidDecode(cipher: string, key: string, period: number): string {
  const grid = gridFromKey(key);
  const c = clean(cipher);
  const coords: number[] = [];
  for (let i = 0; i < c.length; i++) {
    const idx = grid.indexOf(c[i]);
    coords.push(Math.floor(idx / 5), idx % 5);
  }
  const half = coords.length / 2;
  const rows = coords.slice(0, half);
  const cols = coords.slice(half);
  let out = "";
  for (let i = 0; i < rows.length; i++) {
    out += grid[rows[i] * 5 + cols[i]];
  }
  return out;
}

export default function BifidClient() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [key, setKey] = useState("KEY");
  const [period, setPeriod] = useState(5);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    const p = Math.max(2, Math.floor(period));
    setOutput(
      mode === "encode"
        ? bifidEncode(input, key, p)
        : bifidDecode(input, key, p)
    );
  };
  return (
    <div className="container">
      <div className="box">
        <h1>Bifid Cipher</h1>
        <SafetyNote kind="bifid" />
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
          <label>
            Period:{" "}
            <input
              type="number"
              value={period}
              min={2}
              onChange={(e) => setPeriod(parseInt(e.target.value || "5", 10))}
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
            title="Bifid — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Bifid", url: "https://www.hashkitly.com/bifid" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "Playfair", url: "/playfair" },
              { name: "Polybius", url: "/polybius" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
