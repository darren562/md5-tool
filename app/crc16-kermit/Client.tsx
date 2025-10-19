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

// CRC-16/KERMIT: reflected poly 0x8408, init 0x0000, xorout 0x0000
function crc16kermit(bytes: Uint8Array): number {
  let crc = 0x0000;
  for (let i = 0; i < bytes.length; i++) {
    crc ^= bytes[i];
    for (let j = 0; j < 8; j++) {
      crc = crc & 1 ? (crc >>> 1) ^ 0x8408 : crc >>> 1;
    }
  }
  return crc & 0xffff;
}

export default function Crc16KermitClient() {
  const [input, setInput] = useState("");
  const [digest, setDigest] = useState("");
  return (
    <div className="container">
      <div className="box">
        <h1>CRC-16/KERMIT</h1>
        <SafetyNote kind="crc16kermit" />
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
        />
        <button
          className="btn"
          onClick={() =>
            setDigest(
              crc16kermit(utf8(input))
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
              <span>CRC (hex):</span>
              <span className="hash">{digest}</span>
            </div>
          </div>
        )}
        <div className="intro">
          <LongTailSEO
            title="CRC-16/KERMIT online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              {
                name: "CRC-16/KERMIT",
                url: "https://www.hashkitly.com/crc16-kermit",
              },
            ]}
            faqs={[{ q: "Params?", a: "reflected poly 0x8408, init 0x0000." }]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
