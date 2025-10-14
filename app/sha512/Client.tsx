"use client";

import { useState } from "react";
import CryptoJS from "crypto-js";

export default function Sha512Client() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleHash = () => {
    const text = inputText.trim();
    if (!text) {
      alert("Please enter text to hash");
      return;
    }
    const hash = CryptoJS.SHA512(text).toString();
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
        <h1>SHA-512 Hash Generator</h1>
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
              <span>SHA-512 digest:</span>
              <span id="sha512" className="hash">
                {result}
              </span>
              <button
                className="copy"
                onClick={(e) => handleCopy(result, e.currentTarget)}
                id="copy-sha512"
              >
                Copy
              </button>
            </div>
          </div>
        )}
        <div className="intro">
          <h2>What is SHA‑512?</h2>
          <p>
            SHA‑512 is part of the SHA‑2 family, producing a 512‑bit (64‑byte)
            digest. It offers very strong collision resistance and is suitable
            for high‑security integrity checks, digital signatures, and password
            hashing (usually with salting + stretching mechanisms).
          </p>
        </div>
      </div>
    </div>
  );
}
