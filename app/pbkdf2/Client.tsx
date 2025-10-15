"use client";

import { useState } from "react";
import CryptoJS from "crypto-js";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";

export default function Pbkdf2Client() {
  const [passphrase, setPassphrase] = useState("");
  const [salt, setSalt] = useState("");
  const [iterations, setIterations] = useState<number>(100000);
  const [keyBytes, setKeyBytes] = useState<number>(32);
  const [hasher, setHasher] = useState<"SHA1" | "SHA256" | "SHA512">("SHA256");
  const [hexKey, setHexKey] = useState<string>("");
  const [b64Key, setB64Key] = useState<string>("");

  const generateSalt = () => {
    const s = CryptoJS.lib.WordArray.random(16).toString();
    setSalt(s);
  };

  const derive = () => {
    if (!passphrase) {
      alert("Enter a passphrase");
      return;
    }
    if (!iterations || iterations < 1000) {
      alert("Iterations should be a reasonably large number (e.g., 100000)");
      return;
    }
    if (!keyBytes || keyBytes < 8) {
      alert("Key length should be at least 8 bytes");
      return;
    }
    const hasherAlgo =
      hasher === "SHA1"
        ? CryptoJS.algo.SHA1
        : hasher === "SHA256"
        ? CryptoJS.algo.SHA256
        : CryptoJS.algo.SHA512;

    const keySizeWords = Math.ceil(keyBytes / 4);
    const saltWA = salt
      ? CryptoJS.enc.Hex.parse(salt)
      : CryptoJS.lib.WordArray.create();

    const key = CryptoJS.PBKDF2(passphrase, saltWA, {
      keySize: keySizeWords,
      iterations,
      hasher: hasherAlgo,
    }) as CryptoJS.lib.WordArray;

    setHexKey(key.toString(CryptoJS.enc.Hex));
    setB64Key(CryptoJS.enc.Base64.stringify(key));
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
    } catch {}
  };

  return (
    <div className="container">
      <div className="box">
        <h1>PBKDF2 Key Derivation</h1>
        <SafetyNote kind="pbkdf2" />
        <input
          style={{
            width: "100%",
            padding: "10px 12px",
            fontSize: 15,
            border: "1px solid #cbd5e1",
            borderRadius: 6,
            boxSizing: "border-box",
            marginBottom: 8,
          }}
          type="password"
          placeholder="Passphrase"
          value={passphrase}
          onChange={(e) => setPassphrase(e.target.value)}
        />
        <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
          <input
            style={{
              flex: 1,
              padding: "10px 12px",
              fontSize: 15,
              border: "1px solid #cbd5e1",
              borderRadius: 6,
            }}
            type="text"
            placeholder="Salt (hex). Leave empty for none"
            value={salt}
            onChange={(e) => setSalt(e.target.value)}
          />
          <button
            className="btn"
            onClick={generateSalt}
            style={{ whiteSpace: "nowrap" }}
          >
            Random Salt
          </button>
        </div>
        <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
          <input
            style={{
              flex: 1,
              padding: "10px 12px",
              fontSize: 15,
              border: "1px solid #cbd5e1",
              borderRadius: 6,
            }}
            type="number"
            placeholder="Iterations"
            value={iterations}
            onChange={(e) => setIterations(parseInt(e.target.value || "0", 10))}
          />
          <input
            style={{
              flex: 1,
              padding: "10px 12px",
              fontSize: 15,
              border: "1px solid #cbd5e1",
              borderRadius: 6,
            }}
            type="number"
            placeholder="Key length (bytes)"
            value={keyBytes}
            onChange={(e) => setKeyBytes(parseInt(e.target.value || "0", 10))}
          />
          <select
            style={{
              flex: 1,
              padding: "10px 12px",
              fontSize: 15,
              border: "1px solid #cbd5e1",
              borderRadius: 6,
            }}
            value={hasher}
            onChange={(e) => setHasher(e.target.value as any)}
          >
            <option value="SHA1">SHA-1</option>
            <option value="SHA256">SHA-256</option>
            <option value="SHA512">SHA-512</option>
          </select>
        </div>
        <div className="tip">
          PBKDF2 derives keys from passwords. Use large iteration counts and
          unique, random salts. Consider Argon2 or scrypt for stronger
          resistance.
        </div>
        <div style={{ display: "flex", gap: 8, margin: "12px 0" }}>
          <button className="btn" onClick={derive}>
            Derive Key
          </button>
        </div>
        {(hexKey || b64Key) && (
          <div className="result">
            {hexKey && (
              <div className="row">
                <span>Key (Hex):</span>
                <span className="hash" style={{ wordBreak: "break-all" }}>
                  {hexKey}
                </span>
                <button
                  className="copy"
                  onClick={(e) => handleCopy(hexKey, e.currentTarget)}
                >
                  Copy
                </button>
              </div>
            )}
            {b64Key && (
              <div className="row">
                <span>Key (Base64):</span>
                <span className="hash" style={{ wordBreak: "break-all" }}>
                  {b64Key}
                </span>
                <button
                  className="copy"
                  onClick={(e) => handleCopy(b64Key, e.currentTarget)}
                >
                  Copy
                </button>
              </div>
            )}
          </div>
        )}
        <div className="intro">
          <h2>About PBKDF2</h2>
          <p>
            PBKDF2 is a standard password-based key derivation function. Output
            depends on passphrase, salt, iterations, and hasher. Use high
            iteration counts and random salts; evaluate Argon2 or scrypt for new
            systems.
          </p>
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
