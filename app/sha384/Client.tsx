"use client";

import { useState } from "react";
import CryptoJS from "crypto-js";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";
import LongTailSEO from "../components/LongTailSEO";

export default function Sha384Client() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleHash = () => {
    const text = inputText.trim();
    if (!text) {
      alert("Please enter text to hash");
      return;
    }
    const hash = CryptoJS.SHA384(text).toString();
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
        <h1>SHA-384 Hash Generator</h1>
        <SafetyNote kind="sha384" />
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
              <span>SHA-384:</span>
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
          <h2>About SHA-384</h2>
          <p>
            SHA-384 is a member of the SHA-2 family producing a 384-bit digest.
            Good for integrity and signatures (inside proper schemes).
          </p>

          <LongTailSEO
            title="SHA-384 hash generator online – free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "SHA-384", url: "https://www.hashkitly.com/sha384" },
            ]}
            faqs={[
              { q: "Is SHA-384 reversible?", a: "No. It's a one-way hash." },
              {
                q: "When to use SHA-384?",
                a: "Integrity and digital signatures in modern systems (within proper schemes).",
              },
              {
                q: "Does this tool upload my data?",
                a: "No. Everything runs in your browser with no server upload.",
              },
            ]}
            relatedLinks={[
              { name: "SHA-512", url: "https://www.hashkitly.com/sha512" },
              { name: "SHA-256", url: "https://www.hashkitly.com/sha256" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
