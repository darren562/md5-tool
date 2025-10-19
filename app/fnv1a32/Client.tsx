"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";
import LongTailSEO from "../components/LongTailSEO";

function fnv1a32(input: string): string {
  // FNV-1a 32-bit parameters
  let hash = 0x811c9dc5; // offset basis
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    // multiply by FNV prime 16777619 with overflow in 32-bit
    hash = (hash >>> 0) * 0x01000193;
  }
  // Convert to unsigned 32-bit hex
  return (hash >>> 0).toString(16).padStart(8, "0");
}

export default function Fnv1a32Client() {
  const [inputText, setInputText] = useState("");
  const [digest, setDigest] = useState<string>("");

  const onHash = () => {
    const text = inputText;
    if (!text.trim()) {
      alert("Please enter text to hash");
      return;
    }
    setDigest(fnv1a32(text));
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
        <h1>FNV-1a 32-bit Hash</h1>
        <SafetyNote kind="fnv1a" />
        <textarea
          id="txt"
          placeholder="Enter text to hash..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="tip">
          Fast, non-cryptographic hash. Runs fully in your browser.
        </div>
        <button className="btn" onClick={onHash}>
          Generate Hash
        </button>
        {digest && (
          <div className="result">
            <div className="row">
              <span>FNV-1a (32-bit, hex):</span>
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
          <h2>About FNV-1a</h2>
          <p>
            FNV-1a is a fast, non-cryptographic hash function commonly used for
            hash tables, sharding, and quick deduplication. It is not suitable
            for security-related use cases.
          </p>

          <LongTailSEO
            title="FNV-1a 32-bit hash online  free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              {
                name: "FNV-1a 32-bit",
                url: "https://www.hashkitly.com/fnv1a32",
              },
            ]}
            faqs={[
              {
                q: "Is FNV-1a cryptographically secure?",
                a: "No. FNV-1a is for non-crypto hashing such as hash tables and checksums.",
              },
              {
                q: "What encoding does this use?",
                a: "This implementation hashes JavaScript UTF-16 code units. For byte-precise hashing, hash bytes explicitly.",
              },
              {
                q: "Does this tool upload my data?",
                a: "No. Everything runs in your browser; nothing is sent to a server.",
              },
            ]}
            relatedLinks={[
              { name: "CRC32", url: "https://www.hashkitly.com/crc32" },
              { name: "SHA-256", url: "https://www.hashkitly.com/sha256" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
