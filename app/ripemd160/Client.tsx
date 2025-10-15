"use client";

import { useState } from "react";
import CryptoJS from "crypto-js";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";

export default function Ripemd160Client() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleHash = () => {
    const text = inputText.trim();
    if (!text) {
      alert("Please enter text to hash");
      return;
    }
    const hash = CryptoJS.RIPEMD160(text).toString();
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
        <h1>RIPEMD-160 Hash Generator</h1>
        <SafetyNote kind="ripemd160" />
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
              <span>RIPEMD-160:</span>
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
          <h2>About RIPEMD-160</h2>
          <p>
            RIPEMD-160 is a 160-bit cryptographic hash function from the RIPEMD
            family. Considered legacy today, it still appears in systems for
            backward compatibility (e.g., some blockchain address schemes).
          </p>
          <h2>Security Notes</h2>
          <p>
            Prefer SHA-2 or SHA-3 for new designs. For passwords, use slow KDFs
            (bcrypt, scrypt, Argon2, PBKDF2) with unique salts.
          </p>
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
