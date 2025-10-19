"use client";
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function aphash(str: string): number {
  let hash = 0xaaaaaaaa | 0;
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    if ((i & 1) === 0) {
      hash ^= (hash << 7) ^ (c * (hash >>> 3));
    } else {
      hash ^= ~((hash << 11) ^ c ^ (hash >>> 5)) >>> 0;
    }
    hash = hash >>> 0;
  }
  return hash >>> 0;
}

export default function APHashClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    const h = aphash(input) >>> 0;
    setOutput((h >>> 0).toString(16).padStart(8, "0"));
  };
  return (
    <div className="container">
      <div className="box">
        <h1>AP Hash</h1>
        <SafetyNote kind="aphash" />
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
        />
        <button className="btn" onClick={run} style={{ margin: "12px 0" }}>
          Hash
        </button>
        {output !== "" && (
          <div className="result">
            <div className="row">
              <span>AP Hash (hex):</span>
              <span className="hash">{output}</span>
            </div>
          </div>
        )}
        <div className="intro">
          <LongTailSEO
            title="AP Hash — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "AP Hash", url: "https://www.hashkitly.com/aphash" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "RS Hash", url: "/rshash" },
              { name: "DEK Hash", url: "/dekhash" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
