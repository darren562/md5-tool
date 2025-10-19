"use client";
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function normalizeKey(k: string): string {
  const seen: Record<string, boolean> = {};
  let out = "";
  const up = k
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .replace(/J/g, "I");
  for (let i = 0; i < up.length; i++) {
    const c = up[i];
    if (!seen[c] && c !== "J") {
      seen[c] = true;
      out += c;
    }
  }
  const ALPH = "ABCDEFGHIKLMNOPQRSTUVWXYZ"; // no J
  for (let i = 0; i < ALPH.length; i++) if (!seen[ALPH[i]]) out += ALPH[i];
  return out;
}
function gridIndex(grid: string, ch: string): { r: number; c: number } {
  const idx = grid.indexOf(ch);
  return { r: Math.floor(idx / 5), c: idx % 5 };
}
function prepareText(t: string): string {
  const s = t
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .replace(/J/g, "I");
  let out = "";
  for (let i = 0; i < s.length; ) {
    const a = s[i];
    const b = s[i + 1] || "X";
    if (a === b) {
      out += a + "X";
      i += 1;
    } else {
      out += a + b;
      i += 2;
    }
  }
  if (out.length % 2 === 1) out += "X";
  return out;
}
function playfairEncode(plain: string, key: string): string {
  const grid = normalizeKey(key);
  const p = prepareText(plain);
  let out = "";
  for (let i = 0; i < p.length; i += 2) {
    const a = p[i],
      b = p[i + 1];
    const ia = gridIndex(grid, a),
      ib = gridIndex(grid, b);
    if (ia.r === ib.r) {
      out += grid[ia.r * 5 + ((ia.c + 1) % 5)];
      out += grid[ib.r * 5 + ((ib.c + 1) % 5)];
    } else if (ia.c === ib.c) {
      out += grid[((ia.r + 1) % 5) * 5 + ia.c];
      out += grid[((ib.r + 1) % 5) * 5 + ib.c];
    } else {
      out += grid[ia.r * 5 + ib.c];
      out += grid[ib.r * 5 + ia.c];
    }
  }
  return out;
}
function playfairDecode(cipher: string, key: string): string {
  const grid = normalizeKey(key);
  const c = cipher
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .replace(/J/g, "I");
  let out = "";
  for (let i = 0; i < c.length; i += 2) {
    const a = c[i],
      b = c[i + 1];
    const ia = gridIndex(grid, a),
      ib = gridIndex(grid, b);
    if (ia.r === ib.r) {
      out += grid[ia.r * 5 + ((ia.c + 4) % 5)];
      out += grid[ib.r * 5 + ((ib.c + 4) % 5)];
    } else if (ia.c === ib.c) {
      out += grid[((ia.r + 4) % 5) * 5 + ia.c];
      out += grid[((ib.r + 4) % 5) * 5 + ib.c];
    } else {
      out += grid[ia.r * 5 + ib.c];
      out += grid[ib.r * 5 + ia.c];
    }
  }
  return out;
}

export default function PlayfairClient() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [key, setKey] = useState("keyword");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    if (!key) {
      setOutput("Key required");
      return;
    }
    setOutput(
      mode === "encode"
        ? playfairEncode(input, key)
        : playfairDecode(input, key)
    );
  };
  return (
    <div className="container">
      <div className="box">
        <h1>Playfair Cipher</h1>
        <SafetyNote kind="playfair" />
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
            title="Playfair — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Playfair", url: "https://www.hashkitly.com/playfair" },
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
