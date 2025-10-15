"use client";

import { useState } from "react";
import CryptoJS from "crypto-js";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";
import LongTailSEO from "../components/LongTailSEO";

export default function Sha224Client() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleHash = () => {
    const text = inputText.trim();
    if (!text) {
      alert("Please enter text to hash");
      return;
    }
    const hash = CryptoJS.SHA224(text).toString();
    setResult(hash);
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
    } catch (e) {
      console.error("Copy failed", e);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h1>SHA-224 Hash Generator</h1>
        <SafetyNote kind="sha224" />
        <textarea
          id="txt"
          placeholder="Enter text to hash..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="tip">Runs in your browser only. No uploads.</div>
        <button className="btn" onClick={handleHash}>
          Generate Hash
        </button>
        {result && (
          <div className="result">
            <div className="row">
              <span>SHA-224:</span>
              <span className="hash">{result}</span>
              <button
                className="copy"
                onClick={(e) => handleCopy(result, e.currentTarget)}
              >
                Copy
              </button>
            </div>
          </div>
        )}
        <div className="intro">
          <h2>About SHA-224</h2>
          <p>
            SHA-224 is a member of the SHA-2 family producing a 224-bit digest.
            Suitable for integrity checks and general hashing. For password
            storage, use slow KDFs.
          </p>

          <LongTailSEO
            title="SHA-224 hash generator online – free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "SHA-224", url: "https://www.hashkitly.com/sha224" },
            ]}
            faqs={[
              {
                q: "Is SHA-224 encryption?",
                a: "No. SHA-224 is a one-way hash; it cannot be reversed.",
              },
              {
                q: "When to use SHA-224?",
                a: "Use for integrity and fingerprinting where a shorter SHA-2 output is desired.",
              },
              {
                q: "Does this tool upload my data?",
                a: "No. It runs entirely in your browser with no uploads.",
              },
            ]}
            relatedLinks={[
              { name: "SHA-256", url: "https://www.hashkitly.com/sha256" },
              { name: "SHA-384", url: "https://www.hashkitly.com/sha384" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
