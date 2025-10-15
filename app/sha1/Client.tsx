"use client";

import { useState } from "react";
import CryptoJS from "crypto-js";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";
import LongTailSEO from "../components/LongTailSEO";

export default function Sha1Client() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleHash = () => {
    const text = inputText.trim();
    if (!text) {
      alert("Please enter text to hash");
      return;
    }
    const hash = CryptoJS.SHA1(text).toString();
    setResult(hash);
  };

  const handleCopy = async (text: string, buttonElement: HTMLButtonElement) => {
    try {
      await navigator.clipboard.writeText(text);
      const originalText = buttonElement.textContent;
      buttonElement.textContent = "Copied";
      buttonElement.classList.add("ok");
      setTimeout(() => {
        buttonElement.textContent = originalText;
        buttonElement.classList.remove("ok");
      }, 1200);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h1>SHA-1 Hash Generator</h1>
        <SafetyNote kind="sha1" />
        <textarea
          id="txt"
          placeholder="Enter text to hash..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="tip">
          This tool runs entirely in your browser. Your content is never
          uploaded—100% private and secure.
        </div>
        <button className="btn" onClick={handleHash}>
          Generate Hash
        </button>
        {result && (
          <div id="res" className="result">
            <div className="row">
              <span>SHA-1 digest:</span>
              <span id="sha1" className="hash">
                {result}
              </span>
              <button
                className="copy"
                onClick={(e) => handleCopy(result, e.currentTarget)}
                id="copy-sha1"
              >
                Copy
              </button>
            </div>
          </div>
        )}
        <div className="intro">
          <h2>What is SHA‑1?</h2>
          <p>
            SHA‑1 (Secure Hash Algorithm 1) outputs a 160‑bit digest. It was
            widely used for signatures and integrity but now has practical
            collision attacks (chosen-prefix collisions demonstrated). Modern
            security protocols have migrated to SHA‑256 or stronger.
          </p>
          <h2>Legacy / Security Notes</h2>
          <p>
            Only use SHA‑1 where you must interoperate with legacy systems and a
            collision would have low impact. Do not use for new signatures,
            certificate chains, or commit integrity; choose SHA‑256/512 or
            SHA‑3/BLAKE3 families depending on requirements.
          </p>
          <LongTailSEO
            title="SHA-1 hash generator online  legacy (free, no upload)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "SHA-1", url: "https://www.hashkitly.com/sha1" },
            ]}
            faqs={[
              {
                q: "Is SHA-1 broken?",
                a: "Practical chosen-prefix collisions exist. Avoid for new security designs.",
              },
              {
                q: "Migration path?",
                a: "Move to SHA-256/512 or SHA-3 depending on requirements and ecosystem support.",
              },
              {
                q: "Does this tool upload my data?",
                a: "No. Hashing is performed entirely in your browser.",
              },
            ]}
            relatedLinks={[
              { name: "SHA-256", url: "https://www.hashkitly.com/sha256" },
              { name: "SHA-3", url: "https://www.hashkitly.com/sha3" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
