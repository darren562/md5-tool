"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";

// CRC32 implementation
const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(input: string): number {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(input);
  let c = 0 ^ -1;
  for (let i = 0; i < bytes.length; i++) {
    c = (c >>> 8) ^ CRC_TABLE[(c ^ bytes[i]) & 0xff];
  }
  return (c ^ -1) >>> 0;
}

export default function Crc32Client() {
  const [inputText, setInputText] = useState("");
  const [hex, setHex] = useState<string>("");
  const [dec, setDec] = useState<number | null>(null);

  const onCompute = () => {
    const text = inputText;
    const val = crc32(text);
    setDec(val);
    setHex(val.toString(16).padStart(8, "0"));
  };

  const handleCopy = async (value: string, btn: HTMLButtonElement) => {
    try {
      await navigator.clipboard.writeText(value);
      const orig = btn.textContent;
      btn.textContent = "Copied";
      btn.classList.add("ok");
      setTimeout(() => {
        btn.textContent = orig;
        btn.classList.remove("ok");
      }, 1200);
    } catch {}
  };

  return (
    <div className="container">
      <div className="box">
        <h1>CRC32 Checksum</h1>
        <SafetyNote kind="crc32" />
        <textarea
          id="txt"
          placeholder="Enter text to checksum..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="btn" onClick={onCompute}>
          Compute CRC32
        </button>
        {(hex || dec !== null) && (
          <div className="result">
            {hex && (
              <div className="row">
                <span>CRC32 (hex):</span>
                <span className="hash">{hex}</span>
                <button
                  className="copy"
                  onClick={(e) => handleCopy(hex, e.currentTarget)}
                >
                  Copy
                </button>
              </div>
            )}
            {dec !== null && (
              <div className="row">
                <span>CRC32 (decimal):</span>
                <span className="hash">{dec}</span>
                <button
                  className="copy"
                  onClick={(e) => handleCopy(String(dec), e.currentTarget)}
                >
                  Copy
                </button>
              </div>
            )}
          </div>
        )}
        <div className="intro">
          <h2>About CRC32</h2>
          <p>
            CRC32 is a checksum for error detection in transmission/storage. It
            is not cryptographically secure and should not be used for security
            purposes.
          </p>
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
