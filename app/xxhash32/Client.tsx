"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";
import LongTailSEO from "../components/LongTailSEO";

function rotl(x: number, r: number) {
  return ((x << r) | (x >>> (32 - r))) >>> 0;
}

function toBytes(s: string): Uint8Array {
  return new TextEncoder().encode(s);
}

// xxHash32 constants
const P1 = 0x9e3779b1 >>> 0;
const P2 = 0x85ebca77 >>> 0;
const P3 = 0xc2b2ae3d >>> 0;
const P4 = 0x27d4eb2f >>> 0;
const P5 = 0x165667b1 >>> 0;

function xxh32(input: string, seed = 0): string {
  const data = toBytes(input);
  let p = 0;
  const len = data.length;
  let h: number;
  if (len >= 16) {
    let v1 = (seed + P1 + P2) >>> 0;
    let v2 = (seed + P2) >>> 0;
    let v3 = seed >>> 0;
    let v4 = (seed - P1) >>> 0;
    const limit = len - 16;
    while (p <= limit) {
      const k1 =
        (data[p] |
          (data[p + 1] << 8) |
          (data[p + 2] << 16) |
          (data[p + 3] << 24)) >>>
        0;
      p += 4;
      v1 = Math.imul(v1 + Math.imul(k1, P2), 1);
      v1 = rotl(v1, 13);
      v1 = Math.imul(v1, P1);

      const k2 =
        (data[p] |
          (data[p + 1] << 8) |
          (data[p + 2] << 16) |
          (data[p + 3] << 24)) >>>
        0;
      p += 4;
      v2 = Math.imul(v2 + Math.imul(k2, P2), 1);
      v2 = rotl(v2, 13);
      v2 = Math.imul(v2, P1);

      const k3 =
        (data[p] |
          (data[p + 1] << 8) |
          (data[p + 2] << 16) |
          (data[p + 3] << 24)) >>>
        0;
      p += 4;
      v3 = Math.imul(v3 + Math.imul(k3, P2), 1);
      v3 = rotl(v3, 13);
      v3 = Math.imul(v3, P1);

      const k4 =
        (data[p] |
          (data[p + 1] << 8) |
          (data[p + 2] << 16) |
          (data[p + 3] << 24)) >>>
        0;
      p += 4;
      v4 = Math.imul(v4 + Math.imul(k4, P2), 1);
      v4 = rotl(v4, 13);
      v4 = Math.imul(v4, P1);
    }
    h = ((rotl(v1, 1) + rotl(v2, 7) + rotl(v3, 12) + rotl(v4, 18)) >>> 0) >>> 0;
  } else {
    h = (seed + P5) >>> 0;
  }

  h = (h + len) >>> 0;

  while (p + 4 <= len) {
    const k1 =
      (data[p] |
        (data[p + 1] << 8) |
        (data[p + 2] << 16) |
        (data[p + 3] << 24)) >>>
      0;
    p += 4;
    h = Math.imul(h ^ Math.imul(k1, P3), P1);
    h = (rotl(h, 17) * P4) >>> 0;
  }
  while (p < len) {
    const k1 = data[p++] >>> 0;
    h = Math.imul(h ^ Math.imul(k1, P5), P1);
    h = rotl(h, 11);
  }

  h ^= h >>> 15;
  h = Math.imul(h, P2);
  h ^= h >>> 13;
  h = Math.imul(h, P3);
  h ^= h >>> 16;

  return (h >>> 0).toString(16).toUpperCase().padStart(8, "0");
}

export default function Xxhash32Client() {
  const [inputText, setInputText] = useState("");
  const [seed, setSeed] = useState<number>(0);
  const [digest, setDigest] = useState<string>("");

  const onHash = () => {
    if (!inputText.trim()) return alert("Please enter text to hash");
    setDigest(xxh32(inputText, seed));
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
        <h1>xxHash32</h1>
        <SafetyNote kind="xxhash32" />
        <textarea
          placeholder="Enter text to hash (UTF-8)..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <input
          style={{
            width: "100%",
            marginTop: 12,
            padding: "10px 12px",
            fontSize: 15,
            border: "1px solid #cbd5e1",
            borderRadius: 6,
            boxSizing: "border-box",
          }}
          type="number"
          placeholder="Seed (default 0)"
          value={seed}
          onChange={(e) => setSeed(parseInt(e.target.value || "0", 10))}
        />
        <div className="tip">
          Fast non-cryptographic hash with seed support.
        </div>
        <button className="btn" onClick={onHash}>
          Generate Hash
        </button>
        {digest && (
          <div className="result">
            <div className="row">
              <span>xxHash32 (hex):</span>
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
          <h2>About xxHash32</h2>
          <p>
            xxHash32 is a very fast non-cryptographic hash used for checksums,
            deduping, and hashing structures.
          </p>

          <LongTailSEO
            title="xxHash32 online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "xxHash32", url: "https://www.hashkitly.com/xxhash32" },
            ]}
            faqs={[
              {
                q: "Is xxHash32 secure?",
                a: "No. It's non-cryptographic; do not use for security boundaries.",
              },
              {
                q: "What about seed?",
                a: "The seed changes the mapping and reduces collision patterns in certain uses.",
              },
              {
                q: "Does this upload data?",
                a: "No. All computations are in your browser.",
              },
            ]}
            relatedLinks={[
              {
                name: "Murmur3 (32)",
                url: "https://www.hashkitly.com/murmur3",
              },
              { name: "FNV-1a 32", url: "https://www.hashkitly.com/fnv1a32" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
