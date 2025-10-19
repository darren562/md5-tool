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

// CRC-16/MODBUS: poly 0xA001 (reflected), init 0xFFFF
function crc16modbus(bytes: Uint8Array): number {
  let crc = 0xffff;
  for (let i = 0; i < bytes.length; i++) {
    crc ^= bytes[i];
    for (let j = 0; j < 8; j++) {
      const lsb = crc & 1;
      crc >>= 1;
      if (lsb) crc ^= 0xa001;
    }
  }
  return crc & 0xffff;
}

export default function Crc16ModbusClient() {
  const [input, setInput] = useState("");
  const [digest, setDigest] = useState("");
  return (
    <div className="container">
      <div className="box">
        <h1>CRC-16/MODBUS</h1>
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
              crc16modbus(utf8(input))
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
            title="CRC-16/MODBUS — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              {
                name: "CRC-16/MODBUS",
                url: "https://www.hashkitly.com/crc16-modbus",
              },
            ]}
            faqs={[{ q: "Polynomial?", a: "0xA001 (reflected)." }]}
            relatedLinks={[
              { name: "CRC-16", url: "https://www.hashkitly.com/crc16" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
