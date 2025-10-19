"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";
import LongTailSEO from "../components/LongTailSEO";

function toBytes(s: string): Uint8Array {
  return new TextEncoder().encode(s);
}

function jenkinsOAAT(input: string): string {
  const data = toBytes(input);
  let hash = 0 >>> 0;
  for (let i = 0; i < data.length; i++) {
    hash += data[i];
    hash &= 0xffffffff;
    hash += (hash << 10) >>> 0;
    hash ^= hash >>> 6;
  }
  hash += (hash << 3) >>> 0;
  hash ^= hash >>> 11;
  hash += (hash << 15) >>> 0;
  return (hash >>> 0).toString(16).toUpperCase().padStart(8, "0");
}

export default function JenkinsClient() {
  const [inputText, setInputText] = useState("");
  const [digest, setDigest] = useState<string>("");

  const onHash = () => {
    if (!inputText.trim()) return alert("Please enter text to hash");
    setDigest(jenkinsOAAT(inputText));
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
        <h1>Jenkins One-at-a-Time</h1>
        <SafetyNote kind="jenkins" />
        <textarea
          placeholder="Enter text to hash (UTF-8)..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="tip">
          Simple non-cryptographic hash for small keys and tables.
        </div>
        <button className="btn" onClick={onHash}>
          Generate Hash
        </button>
        {digest && (
          <div className="result">
            <div className="row">
              <span>Jenkins (hex):</span>
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
          <h2>About Jenkins OAAT</h2>
          <p>
            Jenkins one-at-a-time is a simple non-cryptographic hash function
            often used in hash tables.
          </p>

          <LongTailSEO
            title="Jenkins hash online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Jenkins", url: "https://www.hashkitly.com/jenkins" },
            ]}
            faqs={[
              {
                q: "Is Jenkins OAAT secure?",
                a: "No. It's for non-cryptographic uses only.",
              },
              {
                q: "Where does it run?",
                a: "In your browser only; no uploads.",
              },
              {
                q: "Why use it?",
                a: "It's simple and adequate for basic hash table keys.",
              },
            ]}
            relatedLinks={[
              { name: "DJB2", url: "https://www.hashkitly.com/djb2" },
              { name: "FNV-1a 32", url: "https://www.hashkitly.com/fnv1a32" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
