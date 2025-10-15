"use client";

import { useState } from "react";
import CryptoJS from "crypto-js";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";

export default function HmacSha1Client() {
  const [inputText, setInputText] = useState("");
  const [key, setKey] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleSign = () => {
    const text = inputText.trim();
    if (!text) return alert("Please enter message to sign");
    if (!key) return alert("Please enter secret key");
    const mac = CryptoJS.HmacSHA1(text, key).toString();
    setResult(mac);
  };

  const handleCopy = async (value: string, btn: HTMLButtonElement) => {
    try {
      await navigator.clipboard.writeText(value);
      const o = btn.textContent;
      btn.textContent = "Copied";
      btn.classList.add("ok");
      setTimeout(() => {
        btn.textContent = o;
        btn.classList.remove("ok");
      }, 1200);
    } catch {}
  };

  return (
    <div className="container">
      <div className="box">
        <h1>HMAC-SHA1 Generator</h1>
        <SafetyNote kind="hmacsha1" variant="warn" />
        <textarea
          id="txt"
          placeholder="Enter message to sign..."
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
          type="text"
          placeholder="Secret key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <div className="tip">
          Legacy HMAC; prefer HMAC-SHA256/512 for new systems.
        </div>
        <button className="btn" onClick={handleSign}>
          Generate HMAC
        </button>
        {result && (
          <div className="result">
            <div className="row">
              <span>HMAC-SHA1:</span>
              <span className="hash">{result}</span>
              <button
                className="copy"
                onClick={(e) => handleCopy(result!, e.currentTarget)}
              >
                Copy
              </button>
            </div>
          </div>
        )}
        <div className="intro">
          <h2>About HMAC-SHA1</h2>
          <p>
            HMAC-SHA1 is older and generally replaced by HMAC-SHA256/512. It’s
            still encountered for compatibility.
          </p>
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
