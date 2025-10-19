"use client";
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function dekhash(str: string): number {
  let hash = 0 | 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) ^ (hash >>> 27) ^ str.charCodeAt(i);
    hash = hash >>> 0;
  }
  return hash >>> 0;
}

export default function DEKHashClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    const h = dekhash(input) >>> 0;
    setOutput(h.toString(16).padStart(8, "0"));
  };
  return (
    <div className="container">
      <div className="box">
        <h1>DEK Hash</h1>
        <SafetyNote kind="dekhash" />
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
              <span>DEK Hash (hex):</span>
              <span className="hash">{output}</span>
            </div>
          </div>
        )}
        <div className="intro">
          <LongTailSEO
            title="DEK Hash — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "DEK Hash", url: "https://www.hashkitly.com/dekhash" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "PJW Hash", url: "/pjwhash" },
              { name: "JS Hash", url: "/jshash" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
