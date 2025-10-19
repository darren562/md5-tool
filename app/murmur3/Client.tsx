"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";
import LongTailSEO from "../components/LongTailSEO";

// MurmurHash3 x86 32-bit implementation over JS UTF-16 code units
function rotl32(x: number, r: number): number {
  return (x << r) | (x >>> (32 - r));
}

function fmix32(h: number): number {
  h ^= h >>> 16;
  h = Math.imul(h, 0x85ebca6b);
  h ^= h >>> 13;
  h = Math.imul(h, 0xc2b2ae35);
  h ^= h >>> 16;
  return h >>> 0;
}

function murmur3_32(input: string, seed = 0): string {
  let h1 = seed >>> 0;
  const c1 = 0xcc9e2d51;
  const c2 = 0x1b873593;

  const len = input.length;
  const nblocks = Math.floor(len / 2);
  // Process 2 chars (32 bits) per block to avoid packing bytes; simplistic
  for (let i = 0; i < nblocks; i++) {
    let k1 = input.charCodeAt(i * 2) | (input.charCodeAt(i * 2 + 1) << 16);
    k1 = Math.imul(k1, c1);
    k1 = rotl32(k1, 15);
    k1 = Math.imul(k1, c2);

    h1 ^= k1;
    h1 = rotl32(h1, 13);
    h1 = (Math.imul(h1, 5) + 0xe6546b64) >>> 0;
  }

  // Tail
  let k1 = 0;
  const tailIndex = nblocks * 2;
  const rem = len - tailIndex;
  if (rem === 1) {
    k1 ^= input.charCodeAt(tailIndex);
    k1 = Math.imul(k1, c1);
    k1 = rotl32(k1, 15);
    k1 = Math.imul(k1, c2);
    h1 ^= k1;
  }

  // finalize
  h1 ^= len;
  h1 = fmix32(h1);
  return (h1 >>> 0).toString(16).padStart(8, "0");
}

export default function Murmur3Client() {
  const [inputText, setInputText] = useState("");
  const [seed, setSeed] = useState<number>(0);
  const [digest, setDigest] = useState<string>("");

  const onHash = () => {
    if (!inputText.trim()) return alert("Please enter text to hash");
    setDigest(murmur3_32(inputText, seed));
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
        <h1>MurmurHash3 (32-bit)</h1>
        <SafetyNote kind="murmur3" />
        <textarea
          id="txt"
          placeholder="Enter text to hash..."
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
          Non-cryptographic hash with optional seed. Browser-only.
        </div>
        <button className="btn" onClick={onHash}>
          Generate Hash
        </button>
        {digest && (
          <div className="result">
            <div className="row">
              <span>Murmur3 (32-bit, hex):</span>
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
          <h2>About MurmurHash3</h2>
          <p>
            MurmurHash3 is a fast, non-cryptographic hash function commonly used
            for hash-based lookups and partitioning. This page implements the
            32-bit x86 variant over JS code units.
          </p>

          <LongTailSEO
            title="MurmurHash3 32-bit hash online  free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "MurmurHash3", url: "https://www.hashkitly.com/murmur3" },
            ]}
            faqs={[
              {
                q: "Is Murmur3 secure?",
                a: "No. It's not cryptographically secure; use SHA-256/512 for security needs.",
              },
              {
                q: "What about seed?",
                a: "The seed changes the hash output; it's useful for randomized hashing to reduce collisions.",
              },
              {
                q: "Does this tool upload data?",
                a: "No. Everything is computed in your browser only.",
              },
            ]}
            relatedLinks={[
              { name: "FNV-1a 32", url: "https://www.hashkitly.com/fnv1a32" },
              { name: "CRC32", url: "https://www.hashkitly.com/crc32" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
