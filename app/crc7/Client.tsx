"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function utf8(s: string): Uint8Array {
  return typeof TextEncoder !== "undefined"
    ? new TextEncoder().encode(s)
    : new Uint8Array(
        Array.from(unescape(encodeURIComponent(s))).map((c) => c.charCodeAt(0))
      );
}

// CRC-7 (poly 0x09), init 0x00, width 7
function crc7(bytes: Uint8Array): number {
  let crc = 0;
  for (let i = 0; i < bytes.length; i++) {
    let b = bytes[i];
    for (let j = 0; j < 8; j++) {
      const bit = ((b >> (7 - j)) & 1) ^ ((crc >> 6) & 1);
      crc = ((crc << 1) & 0x7f) ^ (bit ? 0x09 : 0);
    }
  }
  return crc & 0x7f;
}

export default function Crc7Client() {
  const [input, setInput] = useState("");
  const [digest, setDigest] = useState("");
  const onRun = () => setDigest(crc7(utf8(input)).toString(16).toUpperCase());
  return (
    <div className="container">
      <div className="box">
        <h1>CRC-7</h1>
        <SafetyNote kind="crc32" />
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
        />
        <button className="btn" onClick={onRun} style={{ margin: "12px 0" }}>
          Compute
        </button>
        {digest && (
          <div className="result">
            <div className="row">
              <span>CRC-7 (hex):</span>
              <span className="hash">{digest}</span>
            </div>
          </div>
        )}
        <div className="intro">
          <LongTailSEO
            title="CRC-7 online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "CRC-7", url: "https://www.hashkitly.com/crc7" },
            ]}
            faqs={[{ q: "What bytes?", a: "UTF‑8 bytes of your text." }]}
            relatedLinks={[
              { name: "CRC32", url: "https://www.hashkitly.com/crc32" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
