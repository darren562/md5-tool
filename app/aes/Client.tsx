"use client";

import { useState } from "react";
import CryptoJS from "crypto-js";

export default function AesClient() {
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
      const cipher = CryptoJS.AES.encrypt(text, passphrase).toString();
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
      const bytes = CryptoJS.AES.decrypt(text, passphrase);
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
        <h1>AES Text Encrypt / Decrypt</h1>
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
          placeholder="Passphrase (keep this secret)"
          value={passphrase}
          onChange={(e) => setPassphrase(e.target.value)}
        />
        <div className="tip">
          Browser‑only AES (CryptoJS). For serious security, prefer audited
          libs, authenticated modes with salt + IV + key derivation.
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
          <h2>About AES</h2>
          <p>
            AES (Advanced Encryption Standard) is a symmetric block cipher
            widely used worldwide. This demo uses a simplified passphrase
            interface (CryptoJS) producing ciphertext in Base64. For production
            use, apply random IVs, key derivation (PBKDF2/Argon2), and
            authenticated modes (GCM / CCM) to ensure integrity.
          </p>
        </div>
      </div>
    </div>
  );
}
