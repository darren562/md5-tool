"use client";

import { useState } from "react";
import CryptoJS from "crypto-js";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";

function toHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function toBase64(bytes: Uint8Array): string {
  const wa = CryptoJS.lib.WordArray.create(bytes as any as number[]);
  return CryptoJS.enc.Base64.stringify(wa);
}

export default function RandomClient() {
  const [size, setSize] = useState<number>(32);
  const [hex, setHex] = useState<string>("");
  const [b64, setB64] = useState<string>("");

  const generate = () => {
    const n = Math.max(1, Math.min(4096, size | 0));
    const buf = new Uint8Array(n);
    crypto.getRandomValues(buf);
    setHex(toHex(buf));
    setB64(toBase64(buf));
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
        <h1>Random Bytes Generator</h1>
        <SafetyNote kind="random" />
        <div style={{ display: "flex", gap: 8, margin: "12px 0" }}>
          <input
            style={{
              flex: 1,
              padding: "10px 12px",
              fontSize: 15,
              border: "1px solid #cbd5e1",
              borderRadius: 6,
            }}
            type="number"
            placeholder="Byte length"
            value={size}
            onChange={(e) => setSize(parseInt(e.target.value || "0", 10))}
          />
          <button className="btn" onClick={generate}>
            Generate
          </button>
        </div>
        {(hex || b64) && (
          <div className="result">
            {hex && (
              <div className="row">
                <span>Hex:</span>
                <span className="hash" style={{ wordBreak: "break-all" }}>
                  {hex}
                </span>
                <button
                  className="copy"
                  onClick={(e) => handleCopy(hex, e.currentTarget)}
                >
                  Copy
                </button>
              </div>
            )}
            {b64 && (
              <div className="row">
                <span>Base64:</span>
                <span className="hash" style={{ wordBreak: "break-all" }}>
                  {b64}
                </span>
                <button
                  className="copy"
                  onClick={(e) => handleCopy(b64, e.currentTarget)}
                >
                  Copy
                </button>
              </div>
            )}
          </div>
        )}
        <div className="intro">
          <h2>About Random Bytes</h2>
          <p>
            Generated via the browser CSPRNG (window.crypto.getRandomValues).
            Suitable for nonces, salts, and tokens (with appropriate handling).
          </p>
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
