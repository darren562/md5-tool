"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function sdbm(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    hash = c + (hash << 6) + (hash << 16) - hash;
    hash |= 0; // force 32-bit
  }
  return (hash >>> 0).toString(16).padStart(8, "0");
}

export default function SdbmClient() {
  const [input, setInput] = useState("");
  const [digest, setDigest] = useState("");
  const onHash = () => setDigest(sdbm(input));

  const handleCopy = async (value: string, btn: HTMLButtonElement) => {
    try {
      await navigator.clipboard.writeText(value);
      const orig = btn.textContent;
      btn.textContent = "Copied";
      btn.classList.add("ok");
      setTimeout(() => {
        btn.textContent = orig;
        btn.classList.remove("ok");
      }, 1200);
    } catch {}
  };

  return (
    <div className="container">
      <div className="box">
        <h1>SDBM Hash (32-bit)</h1>
        <SafetyNote kind="djb2" />
        <textarea
          placeholder="Enter text to hash..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn" onClick={onHash} style={{ margin: "12px 0" }}>
          Hash
        </button>
        {digest && (
          <div className="result">
            <div className="row">
              <span>Hash (hex):</span>
              <span className="hash">{digest}</span>
              <button
                className="copy"
                onClick={(e) => handleCopy(digest, e.currentTarget)}
              >
                Copy
              </button>
            </div>
          </div>
        )}
        <div className="intro">
          <h2>About SDBM</h2>
          <p>
            SDBM is a classic non-cryptographic hash, commonly used for hash
            tables and quick checks.
          </p>
          <LongTailSEO
            title="SDBM hash online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "SDBM", url: "https://www.hashkitly.com/sdbm" },
            ]}
            faqs={[
              { q: "Is SDBM secure?", a: "No, it is not cryptographic." },
              { q: "What encoding?", a: "JavaScript UTF‑16 code units." },
              { q: "Any uploads?", a: "No, everything runs in your browser." },
            ]}
            relatedLinks={[
              { name: "DJB2", url: "https://www.hashkitly.com/djb2" },
              { name: "Murmur3", url: "https://www.hashkitly.com/murmur3" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
