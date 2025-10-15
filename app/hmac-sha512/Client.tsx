"use client";

import { useState } from "react";
import CryptoJS from "crypto-js";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";
import LongTailSEO from "../components/LongTailSEO";

export default function HmacSha512Client() {
  const [inputText, setInputText] = useState("");
  const [key, setKey] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleSign = () => {
    const text = inputText.trim();
    if (!text) {
      alert("Please enter message to sign");
      return;
    }
    if (!key) {
      alert("Please enter secret key");
      return;
    }
    const mac = CryptoJS.HmacSHA512(text, key).toString();
    setResult(mac);
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
        <h1>HMAC-SHA512 Generator</h1>
        <SafetyNote kind="hmac512" />
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
          HMAC provides message authentication and integrity, not
          confidentiality.
        </div>
        <button className="btn" onClick={handleSign}>
          Generate HMAC
        </button>
        {result && (
          <div className="result">
            <div className="row">
              <span>HMAC-SHA512:</span>
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
          <h2>About HMAC-SHA512</h2>
          <p>
            HMAC with SHA-512 provides a 512-bit MAC suitable for integrity and
            authenticity of messages with a shared key.
          </p>
          <h2>Security Notes</h2>
          <p>
            Keep keys secret, set clear key IDs/rotation, and sign exactly the
            canonical bytes you intend to verify.
          </p>

          <LongTailSEO
            title="HMAC-SHA512: FAQs"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              {
                name: "HMAC-SHA512",
                url: "https://www.hashkitly.com/hmac-sha512",
              },
            ]}
            faqs={[
              {
                q: "What does HMAC guarantee?",
                a: "Integrity and authenticity (with a shared secret). It does not encrypt the message.",
              },
              {
                q: "Which is better: SHA256 or SHA512?",
                a: "Both are strong; SHA512 has a larger internal state. Choose based on platform performance and compatibility.",
              },
            ]}
            relatedLinks={[
              {
                name: "HMAC-SHA256",
                url: "https://www.hashkitly.com/hmac-sha256",
              },
              { name: "JWT", url: "https://www.hashkitly.com/jwt" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
