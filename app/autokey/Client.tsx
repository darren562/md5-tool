"use client";
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function clean(s: string) {
  return s.toUpperCase().replace(/[^A-Z]/g, "");
}
function autokeyEncode(text: string, key: string): string {
  const A = 65;
  const t = clean(text);
  const k = clean(key);
  if (!k) return "";
  let fullk = k;
  fullk += t; // autokey appends plaintext
  let out = "";
  for (let i = 0; i < t.length; i++) {
    const pi = t.charCodeAt(i) - A;
    const ki = fullk.charCodeAt(i) - A;
    out += String.fromCharCode(((pi + ki) % 26) + A);
  }
  return out;
}
function autokeyDecode(cipher: string, key: string): string {
  const A = 65;
  const c = clean(cipher);
  const k = clean(key);
  if (!k) return "";
  let out = "";
  let fullk = k.split("");
  for (let i = 0; i < c.length; i++) {
    const ci = c.charCodeAt(i) - A;
    const ki = fullk[i].charCodeAt(0) - A;
    const pi = (ci - ki + 26) % 26;
    const ch = String.fromCharCode(pi + A);
    out += ch;
    fullk.push(ch);
  }
  return out;
}

export default function AutokeyClient() {
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
      mode === "encode" ? autokeyEncode(input, key) : autokeyDecode(input, key)
    );
  };
  return (
    <div className="container">
      <div className="box">
        <h1>Autokey Cipher</h1>
        <SafetyNote kind="autokey" />
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
              <span className="hash">{output}</span>
            </div>
          </div>
        )}
        <div className="intro">
          <LongTailSEO
            title="Autokey — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Autokey", url: "https://www.hashkitly.com/autokey" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "Vigenere", url: "/vigenere" },
              { name: "Beaufort", url: "/beaufort" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
