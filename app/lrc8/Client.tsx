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

function sum8(bytes: Uint8Array): number {
  let s = 0;
  for (let i = 0; i < bytes.length; i++) s = (s + bytes[i]) & 0xff;
  return s;
}
function lrc8(bytes: Uint8Array): number {
  const s = sum8(bytes);
  return (~s + 1) & 0xff;
}

export default function Lrc8Client() {
  const [input, setInput] = useState("");
  const [digest, setDigest] = useState("");
  return (
    <div className="container">
      <div className="box">
        <h1>LRC-8</h1>
        <SafetyNote kind="lrc8" />
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
        />
        <button
          className="btn"
          onClick={() =>
            setDigest(
              lrc8(utf8(input)).toString(16).toUpperCase().padStart(2, "0")
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
            title="LRC‑8 checksum online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "LRC‑8", url: "https://www.hashkitly.com/lrc8" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "Sum‑8", url: "/sum8" },
              { name: "XOR‑8", url: "/xor8" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
