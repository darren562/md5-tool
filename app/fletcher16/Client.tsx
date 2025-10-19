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

function fletcher16(bytes: Uint8Array): number {
  let sum1 = 0,
    sum2 = 0;
  for (let i = 0; i < bytes.length; i++) {
    sum1 = (sum1 + bytes[i]) % 255;
    sum2 = (sum2 + sum1) % 255;
  }
  return (sum2 << 8) | sum1;
}

export default function Fletcher16Client() {
  const [input, setInput] = useState("");
  const [digest, setDigest] = useState("");
  return (
    <div className="container">
      <div className="box">
        <h1>Fletcher-16</h1>
        <SafetyNote kind="crc32" />
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
        />
        <button
          className="btn"
          onClick={() =>
            setDigest(
              fletcher16(utf8(input))
                .toString(16)
                .toUpperCase()
                .padStart(4, "0")
            )
          }
          style={{ margin: "12px 0" }}
        >
          Compute
        </button>
        {digest !== "" && (
          <div className="result">
            <div className="row">
              <span>Checksum (hex):</span>
              <span className="hash">{digest}</span>
            </div>
          </div>
        )}
        <div className="intro">
          <LongTailSEO
            title="Fletcher-16 online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              {
                name: "Fletcher-16",
                url: "https://www.hashkitly.com/fletcher16",
              },
            ]}
            faqs={[{ q: "What bytes?", a: "UTF‑8 bytes of your text." }]}
            relatedLinks={[
              { name: "CRC16", url: "https://www.hashkitly.com/crc16" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
