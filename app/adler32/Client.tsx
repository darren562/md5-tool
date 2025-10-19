"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";
import LongTailSEO from "../components/LongTailSEO";

function adler32(input: string): string {
  // Adler-32 over JS UTF-16 code units (note: not bytes). Modulo 65521
  let a = 1;
  let b = 0;
  const MOD = 65521;
  for (let i = 0; i < input.length; i++) {
    a += input.charCodeAt(i);
    b += a;
    a %= MOD;
    b %= MOD;
  }
  const hash = ((b << 16) | a) >>> 0;
  return hash.toString(16).padStart(8, "0");
}

export default function Adler32Client() {
  const [inputText, setInputText] = useState("");
  const [digest, setDigest] = useState<string>("");

  const onCalc = () => {
    const text = inputText;
    if (!text.trim()) return alert("Please enter text to checksum");
    setDigest(adler32(text));
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
        <h1>Adler-32 Checksum</h1>
        <SafetyNote kind="adler32" />
        <textarea
          id="txt"
          placeholder="Enter text to checksum..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="tip">
          Fast non-cryptographic checksum. Browser-only.
        </div>
        <button className="btn" onClick={onCalc}>
          Calculate
        </button>
        {digest && (
          <div className="result">
            <div className="row">
              <span>Adler-32 (hex):</span>
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
          <h2>About Adler-32</h2>
          <p>
            Adler-32 is a simple checksum used in zlib. It's faster than CRC32
            but offers weaker error detection. Not cryptographically secure.
          </p>

          <LongTailSEO
            title="Adler-32 checksum online  free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Adler-32", url: "https://www.hashkitly.com/adler32" },
            ]}
            faqs={[
              {
                q: "Is Adler-32 secure?",
                a: "No, it is a checksum for accidental error detection, not a cryptographic hash.",
              },
              {
                q: "Adler-32 vs CRC32?",
                a: "Adler-32 is typically faster but CRC32 detects more error patterns.",
              },
              {
                q: "Does this tool upload my data?",
                a: "No. All computation happens in your browser.",
              },
            ]}
            relatedLinks={[
              { name: "CRC32", url: "https://www.hashkitly.com/crc32" },
              { name: "FNV-1a 32", url: "https://www.hashkitly.com/fnv1a32" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
