"use client";

import { useState } from "react";
import CryptoJS from "crypto-js";

export default function Sha256Page() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleEncrypt = () => {
    const text = inputText.trim();
    if (!text) {
      alert("Please enter content to encrypt");
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
        <h1>SHA256 Online Encryption</h1>
        <textarea
          id="txt"
          placeholder="Please enter the text to encrypt..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="tip">
          This tool calculates SHA256 hashes locally in your browser. Your content will never be uploaded. 100% secure and private.
        </div>
        <button className="btn" onClick={handleEncrypt}>
          Encrypt
        </button>
        {result && (
          <div id="res" className="result">
            <div className="row">
              <span>SHA256 Hash:</span>
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
            SHA256 (Secure Hash Algorithm 256) is a cryptographic hash function that generates a 256-bit (32-byte) hash value. It is widely used for data integrity verification, password hashing, and digital signatures. SHA256 is part of the SHA-2 family and is considered highly secure for most modern applications.
          </p>
          <h2>SHA256 Features</h2>
          <p>
            - Fixed 256-bit output<br />
            - Irreversible one-way function<br />
            - High avalanche effect<br />
            - Strong collision resistance
          </p>
          <h2>Application Scenarios</h2>
          <p>
            - Password storage and verification<br />
            - File integrity checking<br />
            - Blockchain and cryptocurrency security<br />
            - Digital signatures
          </p>
        </div>
      </div>
    </div>
  );
}
