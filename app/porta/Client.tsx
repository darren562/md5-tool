"use client";
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

const PAIRS = [
  "AB",
  "CD",
  "EF",
  "GH",
  "IJ",
  "KL",
  "MN",
  "OP",
  "QR",
  "ST",
  "UV",
  "WX",
  "YZ",
];
function portaTransform(text: string, key: string): string {
  const A = 65;
  const t = text.toUpperCase();
  const k = key.toUpperCase().replace(/[^A-Z]/g, "");
  if (!k) return "";
  let out = "";
  let j = 0;
  for (let i = 0; i < t.length; i++) {
    const code = t.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      const group = Math.floor((k.charCodeAt(j % k.length) - A) / 2); // 0..12
      const pair = PAIRS[group];
      const idxA = pair.charCodeAt(0) - A,
        idxB = pair.charCodeAt(1) - A;
      const chIdx = code - A;
      const map = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const row = map.slice(idxA) + map.slice(0, idxA); // rotation starting at a
      const row2 = map.slice(idxB) + map.slice(0, idxB);
      const pos = row.indexOf(String.fromCharCode(code));
      out += row2[pos];
      j++;
    } else out += t[i];
  }
  return out;
}

export default function PortaClient() {
  const [key, setKey] = useState("KEY");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    setOutput(portaTransform(input, key));
  };
  return (
    <div className="container">
      <div className="box">
        <h1>Porta Cipher</h1>
        <SafetyNote kind="porta" />
        <label>
          Key: <input value={key} onChange={(e) => setKey(e.target.value)} />
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
        />
        <button className="btn" onClick={run} style={{ margin: "12px 0" }}>
          Transform
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
            title="Porta — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Porta", url: "https://www.hashkitly.com/porta" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "Vigenere", url: "/vigenere" },
              { name: "Playfair", url: "/playfair" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
