"use client";

import { useState } from "react";
import CryptoJS from "crypto-js";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";

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
        <SafetyNote kind="sha512" />
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
            SHA‑512 (SHA‑2 family) outputs a 512‑bit digest. Its larger internal
            state and word size benefit some 64‑bit platforms. It is robust for
            integrity, digital signatures, and tamper detection.
          </p>
          <h2>Security Notes</h2>
          <p>
            Like other fast hashes, SHA‑512 alone is unsuitable for password
            storage. Always use a dedicated password hashing / KDF algorithm
            with per‑user salts and tuned cost factors. For content address
            trade‑offs (size vs speed) consider SHA‑256 or modern alternatives
            (BLAKE3) depending on performance goals.
          </p>
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
