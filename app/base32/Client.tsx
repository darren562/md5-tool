"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";
import LongTailSEO from "../components/LongTailSEO";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"; // RFC 4648

function base32Encode(input: string): string {
  const bytes = new TextEncoder().encode(input);
  let bits = 0;
  let value = 0;
  let output = "";
  for (let i = 0; i < bytes.length; i++) {
    value = (value << 8) | bytes[i];
    bits += 8;
    while (bits >= 5) {
      output += ALPHABET[(value >>> (bits - 5)) & 31];
      bits -= 5;
    }
  }
  if (bits > 0) {
    output += ALPHABET[(value << (5 - bits)) & 31];
  }
  while (output.length % 8 !== 0) output += "=";
  return output;
}

function base32Decode(b32: string): string {
  const clean = b32.toUpperCase().replace(/=+$/g, "");
  let bits = 0;
  let value = 0;
  const out: number[] = [];
  for (let i = 0; i < clean.length; i++) {
    const idx = ALPHABET.indexOf(clean[i]);
    if (idx === -1) throw new Error("Invalid Base32");
    value = (value << 5) | idx;
    bits += 5;
    if (bits >= 8) {
      out.push((value >>> (bits - 8)) & 0xff);
      bits -= 8;
    }
  }
  return new TextDecoder().decode(new Uint8Array(out));
}

export default function Base32Client() {
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState<string>("");

  const onEncode = () => {
    try {
      setOutput(base32Encode(inputText));
    } catch {
      setOutput("");
    }
  };
  const onDecode = () => {
    try {
      setOutput(base32Decode(inputText));
    } catch {
      alert("Invalid Base32");
      setOutput("");
    }
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
        <h1>Base32 Encode / Decode</h1>
        <SafetyNote kind="base32" />
        <textarea
          id="txt"
          placeholder="Enter text or Base32..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div style={{ display: "flex", gap: 8, margin: "12px 0" }}>
          <button className="btn" style={{ flex: 1 }} onClick={onEncode}>
            Encode
          </button>
          <button className="btn" style={{ flex: 1 }} onClick={onDecode}>
            Decode
          </button>
        </div>
        {output !== "" && (
          <div className="result">
            <div className="row">
              <span>Result:</span>
              <span className="hash" style={{ wordBreak: "break-all" }}>
                {output}
              </span>
              <button
                className="copy"
                onClick={(e) => handleCopy(output, e.currentTarget)}
              >
                Copy
              </button>
            </div>
          </div>
        )}
        <div className="intro">
          <h2>About Base32</h2>
          <p>
            Base32 encodes bytes into 32-character alphabet (RFC 4648). It is
            used for case-insensitive, URL-safe-ish representations.
          </p>

          <LongTailSEO
            title="Base32 encode/decode online  free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Base32", url: "https://www.hashkitly.com/base32" },
            ]}
            faqs={[
              {
                q: "Is Base32 the same as Base64?",
                a: "No. Base32 uses a 32-character alphabet and is longer than Base64 for the same data.",
              },
              {
                q: "Why use Base32?",
                a: "It can be more human-friendly and case-insensitive for certain contexts like secrets/OTP seeds.",
              },
              {
                q: "Does Base32 provide security?",
                a: "No. It's encoding only—use encryption for confidentiality.",
              },
              {
                q: "Does this Base32 tool upload my data?",
                a: "No. It runs entirely in your browser; nothing is sent to a server.",
              },
            ]}
            relatedLinks={[
              { name: "Base64", url: "https://www.hashkitly.com/base64" },
              { name: "Base58", url: "https://www.hashkitly.com/base58" },
              { name: "Hex", url: "https://www.hashkitly.com/hex" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
