"use client";

import { useState } from "react";
import CryptoJS from "crypto-js";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";

export default function TripleDESClient() {
  const [inputText, setInputText] = useState("");
  const [passphrase, setPassphrase] = useState("");
  const [encrypted, setEncrypted] = useState<string | null>(null);
  const [decrypted, setDecrypted] = useState<string | null>(null);

  const handleEncrypt = () => {
    const text = inputText.trim();
    if (!text) {
      alert("Please enter text to encrypt");
      return;
    }
    if (!passphrase) {
      alert("Please enter a passphrase");
      return;
    }
    try {
      const cipher = CryptoJS.TripleDES.encrypt(text, passphrase).toString();
      setEncrypted(cipher);
      setDecrypted(null);
    } catch (e) {
      alert("Encryption failed");
    }
  };

  const handleDecrypt = () => {
    const text = inputText.trim();
    if (!text) {
      alert("Please enter ciphertext to decrypt");
      return;
    }
    if (!passphrase) {
      alert("Please enter a passphrase");
      return;
    }
    try {
      const bytes = CryptoJS.TripleDES.decrypt(text, passphrase);
      const plain = bytes.toString(CryptoJS.enc.Utf8);
      if (!plain) throw new Error("Bad passphrase or invalid ciphertext");
      setDecrypted(plain);
      setEncrypted(null);
    } catch (e) {
      alert("Decryption failed (invalid ciphertext or passphrase)");
    }
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
        <h1>TripleDES (3DES) Encrypt / Decrypt</h1>
        <SafetyNote kind="tripledes" variant="warn" />
        <textarea
          id="txt"
          placeholder="Enter plaintext or ciphertext..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <input
          style={{
            width: "100%",
            marginTop: 12,
            padding: "10px 12px",
            fontSize: 15,
            border: "1px solid #cbd5e1",
            borderRadius: 6,
            boxSizing: "border-box",
          }}
          type="password"
          placeholder="Passphrase (demo only)"
          value={passphrase}
          onChange={(e) => setPassphrase(e.target.value)}
        />
        <div className="tip">
          Legacy cipher. Prefer AES-GCM with random IV and authenticated
          encryption for modern apps.
        </div>
        <div style={{ display: "flex", gap: 8, margin: "12px 0" }}>
          <button className="btn" style={{ flex: 1 }} onClick={handleEncrypt}>
            Encrypt
          </button>
          <button className="btn" style={{ flex: 1 }} onClick={handleDecrypt}>
            Decrypt
          </button>
        </div>
        {encrypted && (
          <div className="result">
            <div className="row">
              <span>Ciphertext (Base64):</span>
              <span className="hash" style={{ wordBreak: "break-all" }}>
                {encrypted}
              </span>
              <button
                className="copy"
                onClick={(e) => handleCopy(encrypted, e.currentTarget)}
              >
                Copy
              </button>
            </div>
          </div>
        )}
        {decrypted && (
          <div className="result">
            <div className="row">
              <span>Decrypted Text:</span>
              <span className="hash" style={{ wordBreak: "break-all" }}>
                {decrypted}
              </span>
              <button
                className="copy"
                onClick={(e) => handleCopy(decrypted, e.currentTarget)}
              >
                Copy
              </button>
            </div>
          </div>
        )}
        <div className="intro">
          <h2>About TripleDES</h2>
          <p>
            TripleDES (3DES) applies DES three times with different keys. It's
            considered legacy and slower than AES, with smaller block size and
            deprecation timelines in many standards.
          </p>
          <h2>Security Notes</h2>
          <p>
            Demo uses passphrase shortcut (CryptoJS). For real-world encryption
            use AES-GCM with KDF + random IV, and avoid DES/3DES for new
            systems.
          </p>
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
