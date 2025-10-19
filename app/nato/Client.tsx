"use client";
export {};
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

const MAP: Record<string, string> = {
  A: "Alfa",
  B: "Bravo",
  C: "Charlie",
  D: "Delta",
  E: "Echo",
  F: "Foxtrot",
  G: "Golf",
  H: "Hotel",
  I: "India",
  J: "Juliett",
  K: "Kilo",
  L: "Lima",
  M: "Mike",
  N: "November",
  O: "Oscar",
  P: "Papa",
  Q: "Quebec",
  R: "Romeo",
  S: "Sierra",
  T: "Tango",
  U: "Uniform",
  V: "Victor",
  W: "Whiskey",
  X: "X-ray",
  Y: "Yankee",
  Z: "Zulu",
  0: "Zero",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
};
const INV: Record<string, string> = (function () {
  const o: Record<string, string> = {};
  for (const k in MAP) {
    if (Object.prototype.hasOwnProperty.call(MAP, k)) {
      o[MAP[k]] = k;
    }
  }
  return o;
})();

function toNato(s: string): string {
  const out: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const ch = s.charAt(i);
    const up = ch.toUpperCase();
    if (MAP[up]) out.push(MAP[up]);
    else if (/\s/.test(ch)) out.push("/");
    else out.push(ch);
  }
  return out.join(" ");
}

function fromNato(s: string): string {
  const parts = s.trim().split(/\s+/);
  const out: string[] = [];
  for (let i = 0; i < parts.length; i++) {
    const w = parts[i];
    if (w === "/") {
      out.push(" ");
    } else if (INV[w]) {
      out.push(INV[w]);
    } else {
      out.push(w);
    }
  }
  return out.join("");
}

export default function NatoClient() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () =>
    setOutput(mode === "encode" ? toNato(input) : fromNato(input));
  return (
    <div className="container">
      <div className="box">
        <h1>NATO Phonetic</h1>
        <SafetyNote kind="nato" />
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
            mode === "encode" ? "Enter text..." : "Enter NATO words..."
          }
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
            title="NATO phonetic alphabet — FAQs"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "NATO", url: "https://www.hashkitly.com/nato" },
            ]}
            faqs={[]}
            relatedLinks={[{ name: "Morse", url: "/morse" }]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
