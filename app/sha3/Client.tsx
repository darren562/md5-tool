"use client";

import { useState } from "react";
import CryptoJS from "crypto-js";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";

export default function Sha3Client() {
  const [inputText, setInputText] = useState("");
  const [result224, setResult224] = useState<string | null>(null);
  const [result256, setResult256] = useState<string | null>(null);
  const [result384, setResult384] = useState<string | null>(null);
  const [result512, setResult512] = useState<string | null>(null);

  const handleHash = () => {
    const text = inputText.trim();
    if (!text) {
      alert("Please enter text to hash");
      return;
    }
    setResult224(CryptoJS.SHA3(text, { outputLength: 224 }).toString());
    setResult256(CryptoJS.SHA3(text, { outputLength: 256 }).toString());
    setResult384(CryptoJS.SHA3(text, { outputLength: 384 }).toString());
    setResult512(CryptoJS.SHA3(text, { outputLength: 512 }).toString());
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
        <h1>SHA-3 (Keccak) Hash Generator</h1>
        <SafetyNote kind="sha3" />
        <textarea
          id="txt"
          placeholder="Enter text to hash..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="tip">Runs in your browser only. No uploads.</div>
        <button className="btn" onClick={handleHash}>
          Generate Hashes
        </button>
        {(result224 || result256 || result384 || result512) && (
          <div className="result">
            {result224 && (
              <div className="row">
                <span>SHA3-224:</span>
                <span className="hash">{result224}</span>
                <button
                  className="copy"
                  onClick={(e) => handleCopy(result224, e.currentTarget)}
                >
                  Copy
                </button>
              </div>
            )}
            {result256 && (
              <div className="row">
                <span>SHA3-256:</span>
                <span className="hash">{result256}</span>
                <button
                  className="copy"
                  onClick={(e) => handleCopy(result256, e.currentTarget)}
                >
                  Copy
                </button>
              </div>
            )}
            {result384 && (
              <div className="row">
                <span>SHA3-384:</span>
                <span className="hash">{result384}</span>
                <button
                  className="copy"
                  onClick={(e) => handleCopy(result384, e.currentTarget)}
                >
                  Copy
                </button>
              </div>
            )}
            {result512 && (
              <div className="row">
                <span>SHA3-512:</span>
                <span className="hash">{result512}</span>
                <button
                  className="copy"
                  onClick={(e) => handleCopy(result512, e.currentTarget)}
                >
                  Copy
                </button>
              </div>
            )}
          </div>
        )}
        <div className="intro">
          <h2>About SHA-3</h2>
          <p>
            SHA-3 (Keccak) is a NIST-standardized hash family based on the
            sponge construction. It complements SHA-2; both are considered
            secure. Variants include 224/256/384/512-bit outputs.
          </p>
          <h2>Security Notes</h2>
          <p>
            Like SHA-2, SHA-3 is fast. For password hashing, prefer slow, salted
            KDFs (bcrypt, scrypt, Argon2, PBKDF2).
          </p>
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
