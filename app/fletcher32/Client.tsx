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

// Fletcher-32: two 16-bit sums modulo 65535 (often 65535 or 255 variants). Classic definition uses mod 65535.
function fletcher32(bytes: Uint8Array): number {
  let sum1 = 0xffff;
  let sum2 = 0xffff;
  let i = 0;
  while (i < bytes.length) {
    let tlen = Math.min(360, bytes.length - i);
    for (let j = 0; j < tlen; j++) {
      sum1 = (sum1 + bytes[i++]) % 0xffff;
      sum2 = (sum2 + sum1) % 0xffff;
    }
  }
  return (sum2 << 16) | sum1;
}

export default function Fletcher32Client() {
  const [input, setInput] = useState("");
  const [digest, setDigest] = useState("");
  return (
    <div className="container">
      <div className="box">
        <h1>Fletcher-32</h1>
        <SafetyNote kind="fletcher16" />
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
        />
        <button
          className="btn"
          onClick={() =>
            setDigest(
              fletcher32(utf8(input))
                .toString(16)
                .toUpperCase()
                .padStart(8, "0")
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
            title="Fletcher-32 online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              {
                name: "Fletcher-32",
                url: "https://www.hashkitly.com/fletcher32",
              },
            ]}
            faqs={[{ q: "What bytes?", a: "UTF‑8 bytes of your text." }]}
            relatedLinks={[
              {
                name: "Fletcher-16",
                url: "https://www.hashkitly.com/fletcher16",
              },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
