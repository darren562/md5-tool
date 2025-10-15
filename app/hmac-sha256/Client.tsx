"use client";

import { useState } from "react";
import CryptoJS from "crypto-js";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";
import LongTailSEO from "../components/LongTailSEO";

export default function HmacSha256Client() {
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
    const mac = CryptoJS.HmacSHA256(text, key).toString();
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
        <h1>HMAC-SHA256 Generator</h1>
        <SafetyNote kind="hmac256" />
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
              <span>HMAC-SHA256:</span>
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
          <h2>About HMAC-SHA256</h2>
          <p>
            HMAC combines a cryptographic hash function with a secret key to
            verify message integrity and authenticity. Widely used in API
            signing and webhooks.
          </p>
          <h2>Security Notes</h2>
          <p>
            Keep keys secret and rotate as needed. Use hex/base64 consistently
            for transport. Avoid key reuse across domains.
          </p>

          <LongTailSEO
            title="HMAC-SHA256 generator online  free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              {
                name: "HMAC-SHA256",
                url: "https://www.hashkitly.com/hmac-sha256",
              },
            ]}
            faqs={[
              {
                q: "What does HMAC guarantee?",
                a: "Integrity and authenticity (with a shared secret). Not confidentiality.",
              },
              {
                q: "How to sign the correct bytes?",
                a: "Define a canonical message format (ordering, encoding) and sign exactly those bytes.",
              },
              {
                q: "Does this tool upload my data?",
                a: "No. HMAC is computed locally in your browser.",
              },
            ]}
            relatedLinks={[
              {
                name: "HMAC-SHA512",
                url: "https://www.hashkitly.com/hmac-sha512",
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
