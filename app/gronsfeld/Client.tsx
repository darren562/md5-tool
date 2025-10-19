"use client";
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function cleanKey(k: string): number[] {
  const out: number[] = [];
  for (let i = 0; i < k.length; i++) {
    const ch = k.charCodeAt(i);
    if (ch >= 48 && ch <= 57) out.push(ch - 48);
  }
  return out.length ? out : [0];
}
function shiftChar(ch: string, shift: number, enc: boolean): string {
  const A = 65;
  const code = ch.charCodeAt(0);
  if (code >= 65 && code <= 90) {
    const p = code - A;
    const s = enc ? shift : (26 - shift) % 26;
    return String.fromCharCode(((p + s) % 26) + A);
  }
  if (code >= 97 && code <= 122) {
    const p = code - 97;
    const s = enc ? shift : (26 - shift) % 26;
    return String.fromCharCode(((p + s) % 26) + 97);
  }
  return ch;
}
function transform(text: string, keyDigits: number[], enc: boolean): string {
  let out = "";
  let j = 0;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const isAlpha = /[A-Za-z]/.test(ch);
    if (isAlpha) {
      out += shiftChar(ch, keyDigits[j % keyDigits.length], enc);
      j++;
    } else out += ch;
  }
  return out;
}

export default function GronsfeldClient() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [key, setKey] = useState("31415");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    const kd = cleanKey(key);
    setOutput(transform(input, kd, mode === "encode"));
  };
  return (
    <div className="container">
      <div className="box">
        <h1>Gronsfeld Cipher</h1>
        <SafetyNote kind="gronsfeld" />
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
            Key (digits):{" "}
            <input value={key} onChange={(e) => setKey(e.target.value)} />
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
            title="Gronsfeld — FAQs"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Gronsfeld", url: "https://www.hashkitly.com/gronsfeld" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "Vigenere", url: "/vigenere" },
              { name: "Autokey", url: "/autokey" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
