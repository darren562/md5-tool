"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function loselose(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) hash += str.charCodeAt(i);
  return (hash >>> 0).toString(16).padStart(8, "0");
}

export default function LoseLoseClient() {
  const [input, setInput] = useState("");
  const [digest, setDigest] = useState("");
  return (
    <div className="container">
      <div className="box">
        <h1>Lose Lose Hash</h1>
        <SafetyNote kind="sdbm" />
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
        />
        <button
          className="btn"
          onClick={() => setDigest(loselose(input))}
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
            title="Lose Lose hash online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Lose Lose", url: "https://www.hashkitly.com/loselose" },
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
