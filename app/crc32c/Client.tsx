"use client";

import { useMemo, useState } from "react";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";
import LongTailSEO from "../components/LongTailSEO";

function utf8Bytes(s: string): Uint8Array {
  return new TextEncoder().encode(s);
}

function makeTable(): Uint32Array {
  // CRC-32C polynomial 0x1EDC6F41 (reflected 0x82F63B78)
  const poly = 0x82f63b78 >>> 0;
  const tbl = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let crc = i >>> 0;
    for (let j = 0; j < 8; j++) {
      const bit = crc & 1;
      crc >>>= 1;
      if (bit) crc ^= poly;
    }
    tbl[i] = crc >>> 0;
  }
  return tbl;
}

function crc32cHex(input: string, tbl: Uint32Array): string {
  const bytes = utf8Bytes(input);
  let crc = 0xffffffff >>> 0;
  for (let i = 0; i < bytes.length; i++) {
    const idx = (crc ^ bytes[i]) & 0xff;
    crc = (tbl[idx] ^ (crc >>> 8)) >>> 0;
  }
  crc = ~crc >>> 0;
  return crc.toString(16).toUpperCase().padStart(8, "0");
}

export default function Crc32cClient() {
  const [inputText, setInputText] = useState("");
  const [digest, setDigest] = useState<string>("");
  const table = useMemo(() => makeTable(), []);

  const onCalc = () => {
    if (!inputText.trim()) return alert("Please enter text to checksum");
    setDigest(crc32cHex(inputText, table));
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
        <h1>CRC-32C (Castagnoli)</h1>
        <SafetyNote kind="crc32c" />
        <textarea
          placeholder="Enter text to checksum (UTF-8)..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="tip">
          Polynomial: 0x1EDC6F41 (reflected 0x82F63B78), init 0xFFFFFFFF, xorout
          0xFFFFFFFF.
        </div>
        <button className="btn" onClick={onCalc}>
          Calculate
        </button>
        {digest && (
          <div className="result">
            <div className="row">
              <span>CRC-32C (hex):</span>
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
          <h2>About CRC-32C</h2>
          <p>
            CRC-32C (Castagnoli) is widely used in storage and networking for
            error detection. It is not a cryptographic hash and should not be
            used for security.
          </p>

          <LongTailSEO
            title="CRC-32C (Castagnoli) online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "CRC-32C", url: "https://www.hashkitly.com/crc32c" },
            ]}
            faqs={[
              {
                q: "Is CRC-32C secure?",
                a: "No. CRCs detect accidental errors, not malicious tampering.",
              },
              {
                q: "What polynomial is used?",
                a: "Castagnoli 0x1EDC6F41 (reflected 0x82F63B78).",
              },
              {
                q: "Does this tool upload my data?",
                a: "No. Everything runs in your browser.",
              },
            ]}
            relatedLinks={[
              { name: "CRC32", url: "https://www.hashkitly.com/crc32" },
              { name: "CRC64", url: "https://www.hashkitly.com/crc64" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
