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

// CRC-24 (OpenPGP): poly 0x1864CFB, init 0xB704CE
function crc24(bytes: Uint8Array): number {
  let crc = 0xb704ce;
  for (let i = 0; i < bytes.length; i++) {
    crc ^= bytes[i] << 16;
    for (let j = 0; j < 8; j++) {
      crc <<= 1;
      if (crc & 0x1000000) crc ^= 0x1864cfb;
      crc &= 0xffffff;
    }
  }
  return crc >>> 0;
}

export default function Crc24Client() {
  const [input, setInput] = useState("");
  const [digest, setDigest] = useState("");
  const onRun = () => {
    const c = crc24(utf8(input));
    setDigest(c.toString(16).toUpperCase().padStart(6, "0"));
  };
  return (
    <div className="container">
      <div className="box">
        <h1>CRC-24 (OpenPGP)</h1>
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
              <span>CRC-24 (hex):</span>
              <span className="hash">{digest}</span>
            </div>
          </div>
        )}
        <div className="intro">
          <LongTailSEO
            title="CRC-24 OpenPGP online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "CRC-24", url: "https://www.hashkitly.com/crc24" },
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
