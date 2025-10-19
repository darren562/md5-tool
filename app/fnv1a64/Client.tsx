"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";
import LongTailSEO from "../components/LongTailSEO";

// FNV-1a 64-bit constants (offset basis and prime)
const FNV64_OFFSET_HI = 0xcbf29ce4 >>> 0; // high 32 bits
const FNV64_OFFSET_LO = 0x84222325 >>> 0; // low 32 bits
const FNV64_PRIME_HI = 0x00000100 >>> 0; // 0x00000100000001B3
const FNV64_PRIME_LO = 0x00000001b3 >>> 0;

function mul64(aHi: number, aLo: number, bHi: number, bLo: number) {
  // 64-bit multiply via 32-bit parts
  const lo_lo = Math.imul(aLo, bLo) >>> 0;
  const hi_lo = Math.imul(aHi, bLo) >>> 0;
  const lo_hi = Math.imul(aLo, bHi) >>> 0;
  let carry = ((lo_lo >>> 0) + (((lo_hi << 32) >>> 0) >>> 0)) >>> 0; // will truncate
  // Instead compute with 16-bit chunks to keep precision
  const aLo0 = aLo & 0xffff,
    aLo1 = aLo >>> 16;
  const aHi0 = aHi & 0xffff,
    aHi1 = aHi >>> 16;
  const bLo0 = bLo & 0xffff,
    bLo1 = bLo >>> 16;
  const bHi0 = bHi & 0xffff,
    bHi1 = bHi >>> 16;

  let lo = 0,
    hi = 0,
    m = 0;
  m = aLo0 * bLo0;
  lo = (m & 0xffff) >>> 0;
  let k = m >>> 16;
  m = aLo1 * bLo0 + aLo0 * bLo1 + k;
  lo |= (m & 0xffff) << 16;
  k = m >>> 16;
  m = aHi0 * bLo0 + aLo1 * bLo1 + aLo0 * bHi0 + k;
  hi = (m & 0xffff) >>> 0;
  k = m >>> 16;
  m = aHi1 * bLo0 + aHi0 * bLo1 + aLo1 * bHi0 + aLo0 * bHi1 + k;
  hi |= (m & 0xffff) << 16;
  // Remaining higher terms are dropped (mod 2^64)
  return { hi: hi >>> 0, lo: lo >>> 0 };
}

export function fnv1a64Hex(input: string): string {
  let hi = FNV64_OFFSET_HI;
  let lo = FNV64_OFFSET_LO;
  for (let i = 0; i < input.length; i++) {
    // XOR low with byte/code unit
    lo ^= input.charCodeAt(i) & 0xff;
    // Multiply by FNV prime
    const prod = mul64(hi, lo, FNV64_PRIME_HI, FNV64_PRIME_LO);
    hi = prod.hi >>> 0;
    lo = prod.lo >>> 0;
  }
  const hex =
    (hi >>> 0).toString(16).padStart(8, "0") +
    (lo >>> 0).toString(16).padStart(8, "0");
  return hex.toUpperCase();
}

export default function Fnv1a64Client() {
  const [inputText, setInputText] = useState("");
  const [digest, setDigest] = useState<string>("");

  const onHash = () => {
    if (!inputText.trim()) return alert("Please enter text to hash");
    setDigest(fnv1a64Hex(inputText));
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
        <h1>FNV-1a 64-bit</h1>
        <SafetyNote kind="fnv1a64" />
        <textarea
          placeholder="Enter text to hash..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="tip">
          Non-cryptographic hash. For security, use SHA-256/512.
        </div>
        <button className="btn" onClick={onHash}>
          Generate Hash
        </button>
        {digest && (
          <div className="result">
            <div className="row">
              <span>FNV-1a 64 (hex):</span>
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
          <h2>About FNV-1a 64</h2>
          <p>
            FNV-1a 64-bit is a fast non-cryptographic hash. This implementation
            operates on JS code units.
          </p>

          <LongTailSEO
            title="FNV-1a 64-bit hash online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "FNV-1a 64", url: "https://www.hashkitly.com/fnv1a64" },
            ]}
            faqs={[
              {
                q: "Is FNV-1a 64 secure?",
                a: "No. It's non-cryptographic; use modern hashes for security.",
              },
              {
                q: "What input encoding?",
                a: "JS UTF-16 code units. Add a UTF-8 toggle if you need byte-precise hashing.",
              },
              {
                q: "Where does it run?",
                a: "In your browser only; no uploads.",
              },
            ]}
            relatedLinks={[
              { name: "FNV-1a 32", url: "https://www.hashkitly.com/fnv1a32" },
              {
                name: "Murmur3 (32)",
                url: "https://www.hashkitly.com/murmur3",
              },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
