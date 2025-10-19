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

// CRC-16/X25: reflected poly 0x8408, init 0xFFFF, xorout 0xFFFF
function crc16x25(bytes: Uint8Array): number {
  let crc = 0xffff;
  for (let i = 0; i < bytes.length; i++) {
    crc ^= bytes[i];
    for (let j = 0; j < 8; j++) {
      crc = crc & 1 ? (crc >>> 1) ^ 0x8408 : crc >>> 1;
    }
  }
  crc = ~crc & 0xffff; // xorout 0xFFFF = ones' complement
  return crc;
}

export default function Crc16X25Client() {
  const [input, setInput] = useState("");
  const [digest, setDigest] = useState("");
  return (
    <div className="container">
      <div className="box">
        <h1>CRC-16/X25</h1>
        <SafetyNote kind="crc16x25" />
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
        />
        <button
          className="btn"
          onClick={() =>
            setDigest(
              crc16x25(utf8(input)).toString(16).toUpperCase().padStart(4, "0")
            )
          }
          style={{ margin: "12px 0" }}
        >
          Compute
        </button>
        {digest !== "" && (
          <div className="result">
            <div className="row">
              <span>CRC (hex):</span>
              <span className="hash">{digest}</span>
            </div>
          </div>
        )}
        <div className="intro">
          <LongTailSEO
            title="CRC-16/X25 online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              {
                name: "CRC-16/X25",
                url: "https://www.hashkitly.com/crc16-x25",
              },
            ]}
            faqs={[
              { q: "Params?", a: "reflected, init 0xFFFF, xorout 0xFFFF." },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
