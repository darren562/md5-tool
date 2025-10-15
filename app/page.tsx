"use client";

import { useState } from "react";
import CryptoJS from "crypto-js";
import ToolLinks from "./components/ToolLinks";
import { SafetyNote } from "./components/SafetyNote";
import LongTailSEO from "./components/LongTailSEO";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [results, setResults] = useState<{
    l32: string;
    u32: string;
    l16: string;
    u16: string;
  } | null>(null);

  const handleEncrypt = () => {
    const text = inputText.trim();
    if (!text) {
      alert("Please enter text to hash");
      return;
    }
    const h32 = CryptoJS.MD5(text).toString();
    const h16 = h32.substr(8, 16);
    const newResults = {
      l32: h32,
      u32: h32.toUpperCase(),
      l16: h16,
      u16: h16.toUpperCase(),
    };
    setResults(newResults);
  };

  const handleCopy = async (text: string, buttonElement: HTMLButtonElement) => {
    try {
      await navigator.clipboard.writeText(text);
      const originalText = buttonElement.textContent;
      buttonElement.textContent = "Copied";
      buttonElement.classList.add("ok");
      setTimeout(() => {
        buttonElement.textContent = originalText;
        buttonElement.classList.remove("ok");
      }, 1200);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h1>MD5 Hash Generator</h1>
        <SafetyNote kind="md5" />
        <textarea
          id="txt"
          placeholder="Enter text to hash..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="tip">
          This tool runs entirely in your browser. Your content is never
          uploaded—100% private and secure.
        </div>
        <button className="btn" onClick={handleEncrypt}>
          Generate Hash
        </button>

        {results && (
          <div id="res" className="result">
            <div className="row">
              <span>32-character (lowercase):</span>
              <span id="l32" className="hash">
                {results.l32}
              </span>
              <button
                className="copy"
                onClick={(e) => handleCopy(results.l32, e.currentTarget)}
                id="copy-l32"
              >
                Copy
              </button>
            </div>
            <div className="row">
              <span>32-character (uppercase):</span>
              <span id="u32" className="hash">
                {results.u32}
              </span>
              <button
                className="copy"
                onClick={(e) => handleCopy(results.u32, e.currentTarget)}
                id="copy-u32"
              >
                Copy
              </button>
            </div>
            <div className="row">
              <span>16-character (lowercase):</span>
              <span id="l16" className="hash">
                {results.l16}
              </span>
              <button
                className="copy"
                onClick={(e) => handleCopy(results.l16, e.currentTarget)}
                id="copy-l16"
              >
                Copy
              </button>
            </div>
            <div className="row">
              <span>16-character (uppercase):</span>
              <span id="u16" className="hash">
                {results.u16}
              </span>
              <button
                className="copy"
                onClick={(e) => handleCopy(results.u16, e.currentTarget)}
                id="copy-u16"
              >
                Copy
              </button>
            </div>
          </div>
        )}

        {/* MD5 Introduction */}
        <div className="intro">
          <h2>What is MD5?</h2>
          <p>
            MD5 (Message-Digest Algorithm 5), proposed by Ronald Rivest in 1991,
            maps data of any length to a 128-bit binary value, usually
            represented by 32 hexadecimal characters. It has an avalanche
            effect: even if only one bit of the original text is changed, the
            output will be completely different. MD5 was widely used for file
            integrity checks, digital signatures, and password storage. However,
            with increased computing power, MD5 collisions have been
            successfully constructed, making it unsuitable for high-security
            scenarios. It is still widely used for ordinary checks,
            deduplication, cache keys, and other low-security needs.
          </p>
          <h2>MD5 Features</h2>
          <p>
            MD5 (Message-Digest Algorithm 5) is a widely used cryptographic hash
            function that generates a 128-bit (16-byte) hash value to ensure the
            integrity of information transmission. Main features:
            <br />
            1. Fixed length: No matter the length of the input data, the output
            of MD5 is always a fixed 128 bits (16 bytes).
            <br></br>
            2. Irreversible: The original data cannot be deduced from the MD5
            output, making MD5 a one-way function.
            <br></br>
            3. High dispersion: Even if only one bit of the input data changes,
            the MD5 output will be completely different.
            <br></br>4. Collision resistance: The probability of two different
            data generating the same MD5 value is extremely low.
          </p>
          <h2>MD5 Application Scenarios</h2>
          <p>
            Common Uses:
            <br />- File integrity / checksum comparison
            <br />- Deduplication & cache keys
            <br />- Legacy systems expecting MD5
            <br />- Non-security fingerprinting of content
          </p>
          <h2>Security Notes</h2>
          <p>
            MD5 is intentionally fast; this makes brute force and rainbow table
            attacks practical on weak inputs. For passwords use bcrypt, scrypt,
            Argon2, or PBKDF2 with a unique salt and adequate cost factors. For
            collision resistance and digital signatures use modern hashes like
            SHA-256/512. Use MD5 only where accidental (not malicious) changes
            need detection and the risk profile is low.
          </p>
          <h2>How MD5 Works</h2>
          <p>
            Data padding: The input is padded so its length becomes N × 512 +
            448 bits, then a 64‑bit field is appended to record the original
            length.
            <br></br>
            Initialization and rounds: Four 32‑bit state variables (A, B, C, D)
            are initialized and updated across multiple rounds to produce a
            128‑bit MD5 digest.
          </p>

          {/* Long-tail SEO inside intro */}
          <LongTailSEO
            title="MD5 hash online: long‑tail FAQs"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "MD5 Hash Generator", url: "https://www.hashkitly.com/" },
            ]}
            faqs={[
              {
                q: "How to generate an MD5 hash online?",
                a: "Type your text into the box above and click Generate. The MD5 (32‑char and 16‑char) is calculated instantly in your browser—no data upload.",
              },
              {
                q: "How do I get a 16‑character MD5?",
                a: "A 16‑character MD5 is the middle 16 hex digits of the 32‑character MD5. This tool shows both 32‑char and 16‑char forms.",
              },
              {
                q: "Is MD5 secure for passwords?",
                a: "No. MD5 is fast and not appropriate for password storage. Use bcrypt, scrypt, Argon2, or PBKDF2 with a unique salt.",
              },
              {
                q: "Does this MD5 tool upload my data?",
                a: "No. Everything runs locally in your browser (client‑side). Your input never leaves your device.",
              },
            ]}
            relatedLinks={[
              {
                name: "SHA256 Hash Generator",
                url: "https://www.hashkitly.com/sha256",
              },
              {
                name: "SHA‑1 Hash Generator",
                url: "https://www.hashkitly.com/sha1",
              },
              {
                name: "CRC32 Checksum",
                url: "https://www.hashkitly.com/crc32",
              },
              {
                name: "Base64 Encode/Decode",
                url: "https://www.hashkitly.com/base64",
              },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
