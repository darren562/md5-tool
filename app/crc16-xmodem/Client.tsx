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

// CRC-16/XMODEM: poly 0x1021, init 0x0000, no reflection, no xorout
function crc16xmodem(bytes: Uint8Array): number {
  let crc = 0x0000;
  for (let i = 0; i < bytes.length; i++) {
    crc ^= bytes[i] << 8;
    for (let j = 0; j < 8; j++) {
      if (crc & 0x8000) crc = ((crc << 1) ^ 0x1021) & 0xffff;
      else crc = (crc << 1) & 0xffff;
    }
  }
  return crc & 0xffff;
}

export default function Crc16XModemClient() {
  const [input, setInput] = useState("");
  const [digest, setDigest] = useState("");
  return (
    <div className="container">
      <div className="box">
        <h1>CRC-16/XMODEM</h1>
        <SafetyNote kind="crc16" />
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
        />
        <button
          className="btn"
          onClick={() =>
            setDigest(
              crc16xmodem(utf8(input))
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
            title="CRC-16/XMODEM online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              {
                name: "CRC-16/XMODEM",
                url: "https://www.hashkitly.com/crc16-xmodem",
              },
            ]}
            faqs={[
              { q: "Params?", a: "poly 0x1021, init 0x0000, no reflection." },
            ]}
            relatedLinks={[{ name: "CRC-16/MODBUS", url: "/crc16-modbus" }]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
