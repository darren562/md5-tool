"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";
import LongTailSEO from "../components/LongTailSEO";

function utf8Bytes(s: string): Uint8Array {
  return new TextEncoder().encode(s);
}

// CRC-8 polynomial 0x07, init 0x00, refin=false, refout=false, xorout=0x00
function crc8Hex(input: string): string {
  const bytes = utf8Bytes(input);
  let crc = 0x00;
  for (let i = 0; i < bytes.length; i++) {
    crc ^= bytes[i];
    for (let b = 0; b < 8; b++) {
      crc = crc & 0x80 ? (crc << 1) ^ 0x07 : crc << 1;
      crc &= 0xff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(2, "0");
}

export default function Crc8Client() {
  const [inputText, setInputText] = useState("");
  const [digest, setDigest] = useState<string>("");

  const onCalc = () => {
    if (!inputText.trim()) return alert("Please enter text to checksum");
    setDigest(crc8Hex(inputText));
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
        <h1>CRC-8</h1>
        <SafetyNote kind="crc8" />
        <textarea
          placeholder="Enter text to checksum (UTF-8)..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="tip">Poly 0x07, init 0x00, no final XOR.</div>
        <button className="btn" onClick={onCalc}>
          Calculate
        </button>
        {digest && (
          <div className="result">
            <div className="row">
              <span>CRC-8 (hex):</span>
              <span className="hash">{digest}</span>
              <button
                className="copy"
                onClick={(e) => handleCopy(digest, e.currentTarget)}
              >
                Copy
              </button>
            </div>
          </div>
        )}
        <div className="intro">
          <h2>About CRC-8</h2>
          <p>
            CRC-8 is a tiny checksum suitable for detecting simple errors in
            small payloads. It is not a cryptographic hash.
          </p>

          <LongTailSEO
            title="CRC-8 checksum online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "CRC-8", url: "https://www.hashkitly.com/crc8" },
            ]}
            faqs={[
              {
                q: "Is CRC-8 secure?",
                a: "No. It only detects some accidental errors.",
              },
              {
                q: "Which variant is used?",
                a: "Polynomial 0x07, init 0x00, no xorout.",
              },
              {
                q: "Does this upload data?",
                a: "No. All computations are local in your browser.",
              },
            ]}
            relatedLinks={[
              { name: "CRC16", url: "https://www.hashkitly.com/crc16" },
              { name: "CRC32", url: "https://www.hashkitly.com/crc32" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
