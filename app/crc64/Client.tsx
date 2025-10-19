"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";
import LongTailSEO from "../components/LongTailSEO";

function utf8Bytes(s: string): Uint8Array {
  return new TextEncoder().encode(s);
}

// 64-bit helpers (hi/lo 32-bit words)
const POLY_HI = 0x42f0e1eb >>> 0;
const POLY_LO = 0xa9ea3693 >>> 0;

function shiftLeft1(hi: number, lo: number): { hi: number; lo: number } {
  const newHi = (((hi << 1) | (lo >>> 31)) >>> 0) as number;
  const newLo = ((lo << 1) >>> 0) as number;
  return { hi: newHi, lo: newLo };
}

function toHex64(hi: number, lo: number): string {
  const h = (hi >>> 0).toString(16).padStart(8, "0");
  const l = (lo >>> 0).toString(16).padStart(8, "0");
  return (h + l).toUpperCase();
}

// CRC64-ECMA (poly 0x42F0E1EBA9EA3693, init 0, refin=false, refout=false, xorout=0)
function crc64EcmaHex(input: string): string {
  const bytes = utf8Bytes(input);
  let hi = 0 >>> 0;
  let lo = 0 >>> 0;
  for (let i = 0; i < bytes.length; i++) {
    // XOR into top 8 bits
    hi = (hi ^ ((bytes[i] << 24) >>> 0)) >>> 0;
    for (let b = 0; b < 8; b++) {
      const msb = (hi & 0x80000000) !== 0;
      const s = shiftLeft1(hi, lo);
      hi = s.hi;
      lo = s.lo;
      if (msb) {
        hi ^= POLY_HI;
        lo ^= POLY_LO;
      }
    }
  }
  return toHex64(hi, lo);
}

export default function Crc64Client() {
  const [inputText, setInputText] = useState("");
  const [digest, setDigest] = useState<string>("");

  const onCalc = () => {
    if (!inputText.trim()) return alert("Please enter text to checksum");
    setDigest(crc64EcmaHex(inputText));
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
        <h1>CRC64-ECMA</h1>
        <SafetyNote kind="crc64" />
        <textarea
          placeholder="Enter text to checksum (UTF-8)..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="tip">
          Variant: ECMA-182. Poly 0x42F0E1EBA9EA3693, init 0, no final XOR.
        </div>
        <button className="btn" onClick={onCalc}>
          Calculate
        </button>
        {digest && (
          <div className="result">
            <div className="row">
              <span>CRC64 (hex):</span>
              <span className="hash">{digest}</span>
              <button
                className="copy"
                onClick={(e) => handleCopy(digest, e.currentTarget)}
              >
                Copy
              </button>
            </div>
          </div>
        )}
        <div className="intro">
          <h2>About CRC64</h2>
          <p>
            CRC64 is a 64-bit checksum used to detect accidental errors in data.
            This page computes the ECMA variant. It is not a cryptographic hash.
          </p>

          <LongTailSEO
            title="CRC64-ECMA checksum online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "CRC64", url: "https://www.hashkitly.com/crc64" },
            ]}
            faqs={[
              {
                q: "Is CRC64 secure?",
                a: "No. CRCs detect accidental errors, not deliberate tampering.",
              },
              {
                q: "Which variant is used?",
                a: "ECMA-182 (poly 0x42F0E1EBA9EA3693), init 0, no xorout.",
              },
              {
                q: "Does this upload my data?",
                a: "No. All computation runs in your browser.",
              },
            ]}
            relatedLinks={[
              { name: "CRC32", url: "https://www.hashkitly.com/crc32" },
              { name: "CRC16", url: "https://www.hashkitly.com/crc16" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
