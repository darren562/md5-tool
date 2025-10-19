"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function vigenere(str: string, key: string, encode = true): string {
  if (!key) return str;
  const k = key.replace(/[^A-Za-z]/g, "").toUpperCase();
  if (!k) return str;
  let j = 0,
    out = "";
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    const code = ch.charCodeAt(0);
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      const isLower = code >= 97;
      const base = isLower ? 97 : 65;
      const shift = (k[j % k.length].charCodeAt(0) - 65) * (encode ? 1 : -1);
      const v = ((((code - base + shift) % 26) + 26) % 26) + base;
      out += String.fromCharCode(v);
      j++;
    } else out += ch;
  }
  return out;
}

export default function VigenereClient() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [key, setKey] = useState("LEMON");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => setOutput(vigenere(input, key, mode === "encode"));
  return (
    <div className="container">
      <div className="box">
        <h1>Vigenère Cipher</h1>
        <SafetyNote kind="rot13" />
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
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
            </label>{" "}
            <label>
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
              Key:{" "}
              <input
                value={key}
                onChange={(e) => setKey(e.target.value)}
                style={{ width: 200 }}
              />
            </label>
          </div>
        </div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
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
            title="Vigenere cipher online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Vigenere", url: "https://www.hashkitly.com/vigenere" },
            ]}
            faqs={[
              {
                q: "Secure?",
                a: "No, it is a historical learning cipher only.",
              },
            ]}
            relatedLinks={[
              { name: "Caesar", url: "https://www.hashkitly.com/caesar" },
              { name: "ROT13", url: "https://www.hashkitly.com/rot13" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
