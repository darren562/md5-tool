"use client";
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function jsHash(str: string): number {
  let hash = 1315423911 >>> 0;
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    hash ^= ((hash << 5) + c + (hash >>> 2)) >>> 0;
    hash = hash >>> 0;
  }
  return hash >>> 0;
}

export default function JSHashClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    const h = jsHash(input) >>> 0;
    setOutput(h.toString(16).padStart(8, "0"));
  };
  return (
    <div className="container">
      <div className="box">
        <h1>JS Hash</h1>
        <SafetyNote kind="jshash" />
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
              <span>JS Hash (hex):</span>
              <span className="hash">{output}</span>
            </div>
          </div>
        )}
        <div className="intro">
          <LongTailSEO
            title="JS Hash — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "JS Hash", url: "https://www.hashkitly.com/jshash" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "RS Hash", url: "/rshash" },
              { name: "AP Hash", url: "/aphash" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
