"use client";

import { useState } from "react";
import CryptoJS from "crypto-js";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";

export default function Sha256Client() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleEncrypt = () => {
    const text = inputText.trim();
    if (!text) {
      alert("Please enter text to hash");
      return;
    }
    const hash = CryptoJS.SHA256(text).toString();
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
        <h1>SHA256 Hash Generator</h1>
        <SafetyNote kind="sha256" />
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
        <button className="btn" onClick={handleEncrypt}>
          Generate Hash
        </button>
        {result && (
          <div id="res" className="result">
            <div className="row">
              <span>SHA256 digest:</span>
              <span id="sha256" className="hash">
                {result}
              </span>
              <button
                className="copy"
                onClick={(e) => handleCopy(result, e.currentTarget)}
                id="copy-sha256"
              >
                Copy
              </button>
            </div>
          </div>
        )}
  <div className="intro">
          <h2>What is SHA256?</h2>
          <p>
            SHA256 (Secure Hash Algorithm 256) is a cryptographic hash function
            that generates a 256-bit (32-byte) hash value. It is widely used for
            data integrity verification, password hashing, and digital
            signatures. SHA256 is part of the SHA-2 family and is considered
            highly secure for most modern applications.
          </p>
          <h2>SHA256 Features</h2>
          <p>
            - Fixed 256-bit output
            <br />
            - Irreversible one-way function
            <br />
            - High avalanche effect
            <br />- Strong collision resistance
          </p>
          <h2>Application Scenarios</h2>
          <p>
            - File integrity checks
            <br />- Digital signatures (with proper schemes)
            <br />- Blockchain / Merkle tree hashing
            <br />- API request signing / content addressing
          </p>
          <h2>Security Notes</h2>
          <p>
            SHA256 is intentionally fast. For passwords or secrets, wrap inside
            a slow KDF (bcrypt, scrypt, Argon2, PBKDF2) with a unique per-password
            salt and adequate cost. Avoid rolling your own constructions (e.g.
            manual salting + single SHA256) as they remain GPU/ASIC friendly.
          </p>
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
