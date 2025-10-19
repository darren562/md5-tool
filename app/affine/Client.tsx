"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function egcd(a: number, b: number): [number, number, number] {
  if (b === 0) return [a, 1, 0];
  const [g, x1, y1] = egcd(b, a % b);
  return [g, y1, x1 - Math.floor(a / b) * y1];
}
function modInv(a: number, m: number): number | null {
  const [g, x] = egcd(a, m);
  if (g !== 1 && g !== -1) return null;
  return ((x % m) + m) % m;
}

function affineTransform(
  s: string,
  a: number,
  b: number,
  decode = false
): string {
  const m = 26;
  const inv = decode ? modInv(a, m) : 1;
  if (decode && inv == null) return "";
  return s.replace(/[A-Za-z]/g, (c) => {
    const base = c <= "Z" ? 65 : 97;
    const x = c.charCodeAt(0) - base;
    let y: number;
    if (decode) y = (inv! * (x - b + m)) % m;
    else y = (a * x + b) % m;
    return String.fromCharCode(y + base);
  });
}

export default function AffineClient() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [a, setA] = useState(5);
  const [b, setB] = useState(8);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    const aa = Math.floor(a);
    const bb = Math.floor(b) % 26;
    const inv = modInv(aa, 26);
    if (!inv) {
      setOutput("a must be coprime with 26");
      return;
    }
    setOutput(
      mode === "encode"
        ? affineTransform(input, aa, bb, false)
        : affineTransform(input, aa, bb, true)
    );
  };
  return (
    <div className="container">
      <div className="box">
        <h1>Affine Cipher</h1>
        <SafetyNote kind="affine" />
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
            a:{" "}
            <input
              type="number"
              value={a}
              onChange={(e) => setA(parseInt(e.target.value || "1", 10))}
              style={{ width: 80 }}
            />
          </label>
          <label>
            b:{" "}
            <input
              type="number"
              value={b}
              onChange={(e) => setB(parseInt(e.target.value || "0", 10))}
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
            title="Affine cipher — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Affine", url: "https://www.hashkitly.com/affine" },
            ]}
            faqs={[
              {
                q: "Valid a values?",
                a: "a must be coprime with 26, e.g., 1,3,5,7,9,11,15,17,19,21,23,25.",
              },
            ]}
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
