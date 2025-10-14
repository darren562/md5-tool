"use client";

import { useState } from "react";
import CryptoJS from "crypto-js";

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
            SHA‑1 (Secure Hash Algorithm 1) is a cryptographic hash function
            that produces a 160‑bit digest. It is considered weak for
            cryptographic security due to known collision attacks, but it can
            still be used for non‑security‑critical purposes like simple data
            checksums and legacy compatibility.
          </p>
        </div>
      </div>
    </div>
  );
}
