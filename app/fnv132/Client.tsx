"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function fnv1_32(str: string): string {
  let hash = 0x811c9dc5; // offset basis
  for (let i = 0; i < str.length; i++) {
    // FNV-1: multiply first
    hash = (hash >>> 0) * 0x01000193;
    hash ^= str.charCodeAt(i);
  }
  return (hash >>> 0).toString(16).padStart(8, "0");
}

export default function Fnv1_32_Client() {
  const [input, setInput] = useState("");
  const [digest, setDigest] = useState("");
  const onHash = () => setDigest(fnv1_32(input));
  return (
    <div className="container">
      <div className="box">
        <h1>FNV-1 32-bit</h1>
        <SafetyNote kind="fnv1a" />
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
        />
        <button className="btn" onClick={onHash} style={{ margin: "12px 0" }}>
          Hash
        </button>
        {digest && (
          <div className="result">
            <div className="row">
              <span>Hash:</span>
              <span className="hash">{digest}</span>
            </div>
          </div>
        )}
        <div className="intro">
          <LongTailSEO
            title="FNV-1 32 hash online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "FNV-1 32", url: "https://www.hashkitly.com/fnv132" },
            ]}
            faqs={[
              { q: "Is FNV-1 secure?", a: "No, it's for non-crypto hashing." },
            ]}
            relatedLinks={[
              { name: "FNV-1a 32", url: "https://www.hashkitly.com/fnv1a32" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
