"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function bkdr(str: string): string {
  let seed = 131;
  let hash = 0;
  for (let i = 0; i < str.length; i++) hash = hash * seed + str.charCodeAt(i);
  return (hash >>> 0).toString(16).padStart(8, "0");
}

export default function BkdrClient() {
  const [input, setInput] = useState("");
  const [digest, setDigest] = useState("");
  return (
    <div className="container">
      <div className="box">
        <h1>BKDR Hash</h1>
        <SafetyNote kind="sdbm" />
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
        />
        <button
          className="btn"
          onClick={() => setDigest(bkdr(input))}
          style={{ margin: "12px 0" }}
        >
          Hash
        </button>
        {digest !== "" && (
          <div className="result">
            <div className="row">
              <span>Hash:</span>
              <span className="hash">{digest}</span>
            </div>
          </div>
        )}
        <div className="intro">
          <LongTailSEO
            title="BKDR hash online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "BKDR", url: "https://www.hashkitly.com/bkdr" },
            ]}
            faqs={[{ q: "Cryptographic?", a: "No." }]}
            relatedLinks={[
              { name: "SDBM", url: "https://www.hashkitly.com/sdbm" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
