"use client";
export {};
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

const MAPS: Array<Record<string, string>> = [
  { A: "4", E: "3", I: "1", O: "0", S: "5", T: "7" },
  { B: "8", G: "6", Z: "2" },
  {
    L: "1",
    D: "|)",
    H: "#",
    K: "|<",
    M: "/\\/\\",
    N: "|\\|",
    R: "|2",
    W: "\\/\\/",
    X: "><",
    Y: "`/",
  },
];

function encodeLeet(s: string, level: number): string {
  const up = s.split("");
  const out: string[] = [];
  for (let i = 0; i < up.length; i++) {
    const ch = up[i];
    const u = ch.toUpperCase();
    let repl = "";
    for (let l = 0; l < level && l < MAPS.length; l++) {
      if (MAPS[l][u]) {
        repl = MAPS[l][u];
        break;
      }
    }
    out.push(repl ? repl : ch);
  }
  return out.join("");
}

function decodeLeet(s: string): string {
  // naive: reverse only single-char replacements
  const rev: Record<string, string> = {};
  for (let l = 0; l < MAPS.length; l++) {
    const m = MAPS[l];
    for (const k in m) {
      if (m[k].length === 1) rev[m[k]] = k.toLowerCase();
    }
  }
  const out: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const ch = s.charAt(i);
    out.push(rev[ch] ? rev[ch] : ch);
  }
  return out.join("");
}

export default function LeetspeakClient() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [level, setLevel] = useState(1);
  const run = () => {
    setOutput(mode === "encode" ? encodeLeet(input, level) : decodeLeet(input));
  };
  return (
    <div className="container">
      <div className="box">
        <h1>Leetspeak</h1>
        <SafetyNote kind="leetspeak" />
        <div
          style={{
            display: "flex",
            gap: 12,
            marginBottom: 8,
            alignItems: "center",
          }}
        >
          <div>
            <label>
              <input
                type="radio"
                checked={mode === "encode"}
                onChange={() => setMode("encode")}
              />{" "}
              Encode
            </label>
            <label style={{ marginLeft: 12 }}>
              <input
                type="radio"
                checked={mode === "decode"}
                onChange={() => setMode("decode")}
              />{" "}
              Decode
            </label>
          </div>
          <div>
            <label>
              Intensity:
              <select
                value={level}
                onChange={(e) => setLevel(parseInt(e.target.value, 10))}
              >
                <option value={1}>Low</option>
                <option value={2}>Medium</option>
                <option value={3}>High</option>
              </select>
            </label>
          </div>
        </div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={mode === "encode" ? "Enter text..." : "Enter leet..."}
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
            title="Leetspeak — FAQs"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Leetspeak", url: "https://www.hashkitly.com/leetspeak" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "ROT13", url: "/rot13" },
              { name: "XOR Cipher", url: "/xor-cipher" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
