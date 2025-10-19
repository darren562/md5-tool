"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";
import LongTailSEO from "../components/LongTailSEO";

function djb2(input: string): string {
  let hash = 5381 >>> 0;
  for (let i = 0; i < input.length; i++) {
    hash = ((hash << 5) + hash + input.charCodeAt(i)) >>> 0; // hash * 33 + c
  }
  return (hash >>> 0).toString(16).padStart(8, "0");
}

export default function Djb2Client() {
  const [inputText, setInputText] = useState("");
  const [digest, setDigest] = useState<string>("");

  const onHash = () => {
    if (!inputText.trim()) return alert("Please enter text to hash");
    setDigest(djb2(inputText));
  };

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
        <h1>DJB2 Hash</h1>
        <SafetyNote kind="djb2" />
        <textarea
          id="txt"
          placeholder="Enter text to hash..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="tip">
          Simple non-cryptographic hash used in older examples.
        </div>
        <button className="btn" onClick={onHash}>
          Generate Hash
        </button>
        {digest && (
          <div className="result">
            <div className="row">
              <span>DJB2 (hex):</span>
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
          <h2>About DJB2</h2>
          <p>
            DJB2 is a simple hash function attributed to Daniel J. Bernstein. It
            is not cryptographically secure and should be used only for quick,
            non-security tasks.
          </p>

          <LongTailSEO
            title="DJB2 hash online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "DJB2", url: "https://www.hashkitly.com/djb2" },
            ]}
            faqs={[
              {
                q: "Is DJB2 secure?",
                a: "No. It's not for security. Use SHA-256/512 for secure hashing.",
              },
              {
                q: "Where is hashing done?",
                a: "In your browser; no data is uploaded.",
              },
              {
                q: "Why use DJB2?",
                a: "It's a simple example for educational purposes and quick, non-critical hashing.",
              },
            ]}
            relatedLinks={[
              { name: "FNV-1a 32", url: "https://www.hashkitly.com/fnv1a32" },
              {
                name: "Murmur3 (32)",
                url: "https://www.hashkitly.com/murmur3",
              },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
