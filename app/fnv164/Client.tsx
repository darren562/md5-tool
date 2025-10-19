"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function mul64(
  aHi: number,
  aLo: number,
  bHi: number,
  bLo: number
): [number, number] {
  const lo = Math.imul(aLo, bLo);
  const mid1 = Math.imul(aHi, bLo) + ((lo >>> 16) | 0);
  const mid2 = Math.imul(aLo, bHi);
  const hi =
    (Math.imul(aHi, bHi) + ((mid1 >>> 16) | 0) + ((mid2 >>> 16) | 0)) >>> 0;
  const loOut = ((mid1 << 16) >>> 0) + ((mid2 << 16) >>> 0) + (lo & 0xffff);
  return [hi >>> 0, loOut >>> 0];
}

export function fnv1_64(str: string): string {
  // offset basis: 14695981039346656037 = 0xcbf29ce484222325
  let hi = 0xcbf29ce4 >>> 0;
  let lo = 0x84222325 >>> 0;
  // prime 1099511628211 = 0x100000001b3
  const pHi = 0x00000001 >>> 0;
  const pLo = 0x000000b3 >>> 0;
  for (let i = 0; i < str.length; i++) {
    // FNV-1 multiply then xor
    [hi, lo] = mul64(hi, lo, pHi, pLo);
    lo ^= str.charCodeAt(i);
  }
  const hex = (n: number) => n.toString(16).padStart(8, "0");
  return hex(hi) + hex(lo);
}

export default function Fnv1_64_Client() {
  const [input, setInput] = useState("");
  const [digest, setDigest] = useState("");
  const onHash = () => setDigest(fnv1_64(input));
  return (
    <div className="container">
      <div className="box">
        <h1>FNV-1 64-bit</h1>
        <SafetyNote kind="fnv1a64" />
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
        />
        <button className="btn" onClick={onHash} style={{ margin: "12px 0" }}>
          Hash
        </button>
        {digest && (
          <div className="result">
            <div className="row">
              <span>Hash:</span>
              <span className="hash">{digest}</span>
            </div>
          </div>
        )}
        <div className="intro">
          <LongTailSEO
            title="FNV-1 64 hash online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "FNV-1 64", url: "https://www.hashkitly.com/fnv164" },
            ]}
            faqs={[
              { q: "Is FNV-1 secure?", a: "No, it's for non-crypto hashing." },
            ]}
            relatedLinks={[
              { name: "FNV-1a 64", url: "https://www.hashkitly.com/fnv1a64" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
