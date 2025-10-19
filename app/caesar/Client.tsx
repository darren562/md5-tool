"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function shiftChar(c: string, k: number): string {
  const code = c.charCodeAt(0);
  if (code >= 65 && code <= 90)
    return String.fromCharCode(((((code - 65 + k) % 26) + 26) % 26) + 65);
  if (code >= 97 && code <= 122)
    return String.fromCharCode(((((code - 97 + k) % 26) + 26) % 26) + 97);
  return c;
}
function caesar(str: string, k: number): string {
  return str
    .split("")
    .map((ch) => shiftChar(ch, k))
    .join("");
}

export default function CaesarClient() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [shift, setShift] = useState(13);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    const k = mode === "encode" ? shift : -shift;
    setOutput(caesar(input, k));
  };
  return (
    <div className="container">
      <div className="box">
        <h1>Caesar Cipher</h1>
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
              Shift:{" "}
              <input
                type="number"
                value={shift}
                onChange={(e) => setShift(parseInt(e.target.value || "0", 10))}
                style={{ width: 80 }}
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
            title="Caesar cipher online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Caesar", url: "https://www.hashkitly.com/caesar" },
            ]}
            faqs={[
              {
                q: "Is Caesar secure?",
                a: "No, it is a historical learning cipher only.",
              },
            ]}
            relatedLinks={[
              { name: "ROT13", url: "https://www.hashkitly.com/rot13" },
              { name: "Vigenere", url: "https://www.hashkitly.com/vigenere" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
