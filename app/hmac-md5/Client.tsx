"use client";

import { useState } from "react";
import CryptoJS from "crypto-js";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";
import LongTailSEO from "../components/LongTailSEO";

export default function HmacMd5Client() {
  const [message, setMessage] = useState("");
  const [key, setKey] = useState("");
  const [mac, setMac] = useState<string>("");

  const onSign = () => {
    if (!message.trim()) return alert("Please enter message to sign");
    if (!key) return alert("Please enter secret key");
    const out = CryptoJS.HmacMD5(message, key).toString();
    setMac(out);
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
        <h1>HMAC-MD5 Generator</h1>
        <SafetyNote kind="hmacmd5" />
        <textarea
          placeholder="Enter message to sign..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
          Legacy HMAC for demos. Prefer HMAC-SHA256/512 for new systems.
        </div>
        <button className="btn" onClick={onSign}>
          Generate HMAC
        </button>
        {mac && (
          <div className="result">
            <div className="row">
              <span>HMAC-MD5:</span>
              <span className="hash">{mac}</span>
              <button
                className="copy"
                onClick={(e) => handleCopy(mac, e.currentTarget)}
              >
                Copy
              </button>
            </div>
          </div>
        )}
        <div className="intro">
          <h2>About HMAC-MD5</h2>
          <p>
            HMAC-MD5 provides message authentication and integrity with a shared
            secret. MD5 is legacy; for new designs, use HMAC-SHA256/512.
          </p>

          <LongTailSEO
            title="HMAC-MD5 generator online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "HMAC-MD5", url: "https://www.hashkitly.com/hmac-md5" },
            ]}
            faqs={[
              {
                q: "Is HMAC-MD5 secure?",
                a: "HMAC construction is secure against many attacks, but MD5 is legacy. Prefer HMAC-SHA256/512 for new systems.",
              },
              {
                q: "Where is signing done?",
                a: "In your browser only; no data upload.",
              },
              {
                q: "What encoding?",
                a: "CryptoJS signs the provided string; ensure consistent input normalization across systems.",
              },
            ]}
            relatedLinks={[
              {
                name: "HMAC-SHA256",
                url: "https://www.hashkitly.com/hmac-sha256",
              },
              {
                name: "HMAC-SHA512",
                url: "https://www.hashkitly.com/hmac-sha512",
              },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
