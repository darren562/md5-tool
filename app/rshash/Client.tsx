"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function rsHash(str: string): string {
  let b = 378551,
    a = 63689;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = hash * a + str.charCodeAt(i);
    a = a * b;
    // keep in 32-bit space
    hash |= 0;
  }
  return (hash >>> 0).toString(16).toUpperCase().padStart(8, "0");
}

export default function RsHashClient() {
  const [input, setInput] = useState("");
  const [digest, setDigest] = useState("");
  return (
    <div className="container">
      <div className="box">
        <h1>RS Hash</h1>
        <SafetyNote kind="rshash" />
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
        />
        <button
          className="btn"
          onClick={() => setDigest(rsHash(input))}
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
            title="RS Hash — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "RS Hash", url: "https://www.hashkitly.com/rshash" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "BKDR", url: "/bkdr" },
              { name: "DJB2", url: "/djb2" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
