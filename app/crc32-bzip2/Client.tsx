"use client";
export {};
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";
import LongTailSEO from "../components/LongTailSEO";

// CRC-32/BZIP2 parameters: poly = 0x04C11DB7 (normal), init = 0xFFFFFFFF, refin=false, refout=false, xorOut=0xFFFFFFFF
function makeTable(): Uint32Array {
  const poly = 0x04c11db7 >>> 0;
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i << 24;
    for (let j = 0; j < 8; j++) {
      c = (c & 0x80000000) !== 0 ? ((c << 1) ^ poly) >>> 0 : (c << 1) >>> 0;
    }
    table[i] = c >>> 0;
  }
  return table;
}
const TABLE = makeTable();

function crc32bzip2(str: string): number {
  const bytes = new TextEncoder().encode(str);
  let crc = 0xffffffff >>> 0;
  for (let i = 0; i < bytes.length; i++) {
    const idx = ((crc >>> 24) ^ bytes[i]) & 0xff;
    crc = ((crc << 8) ^ TABLE[idx]) >>> 0;
  }
  crc = (crc ^ 0xffffffff) >>> 0;
  return crc >>> 0;
}

export default function Crc32Bzip2Client() {
  const [inputText, setInputText] = useState("");
  const [hex, setHex] = useState("");
  const [dec, setDec] = useState<number | null>(null);
  const run = () => {
    const v = crc32bzip2(inputText);
    setDec(v);
    setHex(v.toString(16).padStart(8, "0"));
  };
  return (
    <div className="container">
      <div className="box">
        <h1>CRC-32/BZIP2</h1>
        <SafetyNote kind="crc32bzip2" />
        <textarea
          placeholder="Enter text to checksum..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="btn" onClick={run}>
          Compute
        </button>
        {(hex || dec !== null) && (
          <div className="result">
            {hex && (
              <div className="row">
                <span>CRC (hex):</span>
                <span className="hash">{hex}</span>
              </div>
            )}
            {dec !== null && (
              <div className="row">
                <span>CRC (decimal):</span>
                <span className="hash">{dec}</span>
              </div>
            )}
          </div>
        )}
        <div className="intro">
          <LongTailSEO
            title="CRC-32/BZIP2 — FAQs"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              {
                name: "CRC-32/BZIP2",
                url: "https://www.hashkitly.com/crc32-bzip2",
              },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "CRC32", url: "/crc32" },
              { name: "CRC-32/MPEG-2", url: "/crc32-mpeg2" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
