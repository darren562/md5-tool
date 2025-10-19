"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";
import LongTailSEO from "../components/LongTailSEO";

function toUtf8Bytes(str: string): Uint8Array {
  return new TextEncoder().encode(str);
}

// CRC16-CCITT (False): poly 0x1021, init 0xFFFF, no xorout, no refin/refout
function crc16CcittFalseBytes(bytes: Uint8Array): number {
  let crc = 0xffff;
  for (let i = 0; i < bytes.length; i++) {
    crc ^= bytes[i] << 8;
    for (let b = 0; b < 8; b++) {
      if (crc & 0x8000) crc = ((crc << 1) ^ 0x1021) & 0xffff;
      else crc = (crc << 1) & 0xffff;
    }
  }
  return crc & 0xffff;
}

function crc16Hex(input: string): string {
  const bytes = toUtf8Bytes(input);
  const n = crc16CcittFalseBytes(bytes);
  return n.toString(16).padStart(4, "0").toUpperCase();
}

export default function Crc16Client() {
  const [inputText, setInputText] = useState("");
  const [digest, setDigest] = useState<string>("");

  const onCalc = () => {
    if (!inputText.trim()) return alert("Please enter text to checksum");
    setDigest(crc16Hex(inputText));
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
        <h1>CRC16-CCITT (False)</h1>
        <SafetyNote kind="crc16" />
        <textarea
          id="txt"
          placeholder="Enter text to checksum (UTF-8)..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="tip">
          Variant: CCITT-False, poly 0x1021, init 0xFFFF, big-endian, no final
          XOR.
        </div>
        <button className="btn" onClick={onCalc}>
          Calculate
        </button>
        {digest && (
          <div className="result">
            <div className="row">
              <span>CRC16 (hex):</span>
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
          <h2>About CRC16</h2>
          <p>
            CRC16 is a checksum used in communication protocols and storage to
            detect accidental errors. This page uses the CCITT-False variant.
            For cryptographic integrity, use HMAC or digital signatures instead.
          </p>

          <LongTailSEO
            title="CRC16-CCITT checksum online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "CRC16", url: "https://www.hashkitly.com/crc16" },
            ]}
            faqs={[
              {
                q: "Is CRC16 secure?",
                a: "No. CRCs detect accidental errors, not malicious tampering.",
              },
              {
                q: "Which CRC16 variant is used?",
                a: "CRC16-CCITT (False): poly 0x1021, init 0xFFFF, no xorout.",
              },
              {
                q: "Does this upload my data?",
                a: "No. All computations are done in your browser.",
              },
            ]}
            relatedLinks={[
              { name: "CRC32", url: "https://www.hashkitly.com/crc32" },
              { name: "Adler-32", url: "https://www.hashkitly.com/adler32" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
