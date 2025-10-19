"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function elfHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 4) + str.charCodeAt(i);
    const x = hash & 0xf0000000;
    if (x !== 0) hash ^= x >>> 24;
    hash &= ~x;
  }
  return (hash >>> 0).toString(16).padStart(8, "0");
}

export default function ElfClient() {
  const [input, setInput] = useState("");
  const [digest, setDigest] = useState("");
  const onHash = () => setDigest(elfHash(input));

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
        <h1>ELF Hash (32-bit)</h1>
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
          <h2>About ELF Hash</h2>
          <p>
            ELF is a classic non-cryptographic hash, often used historically in
            Unix tools and compilers.
          </p>
          <LongTailSEO
            title="ELF hash online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "ELF", url: "https://www.hashkitly.com/elf" },
            ]}
            faqs={[
              { q: "Is ELF secure?", a: "No, it is not cryptographic." },
              { q: "What encoding?", a: "JavaScript UTF‑16 code units." },
              { q: "Any uploads?", a: "No, everything runs in your browser." },
            ]}
            relatedLinks={[
              { name: "DJB2", url: "https://www.hashkitly.com/djb2" },
              { name: "SDBM", url: "https://www.hashkitly.com/sdbm" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
