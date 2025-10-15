"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";
import LongTailSEO from "../components/LongTailSEO";

const ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
const MAP: Record<string, number> = Object.fromEntries(
  ALPHABET.split("").map((c, i) => [c, i])
);

function encodeBase58(input: string): string {
  const bytes = new TextEncoder().encode(input);
  let zeros = 0;
  let i = 0;
  while (i < bytes.length && bytes[i] === 0) {
    zeros++;
    i++;
  }
  const b = bytes.slice(i);
  const digits: number[] = [];
  for (let j = 0; j < b.length; j++) {
    let carry = b[j];
    for (let k = 0; k < digits.length; k++) {
      const x = digits[k] * 256 + carry;
      digits[k] = x % 58;
      carry = (x / 58) | 0;
    }
    while (carry) {
      digits.push(carry % 58);
      carry = (carry / 58) | 0;
    }
  }
  let out = "";
  for (let p = 0; p < zeros; p++) out += "1";
  for (let p = digits.length - 1; p >= 0; p--) out += ALPHABET[digits[p]];
  return out;
}

function decodeBase58(b58: string): string {
  if (!b58) return "";
  let zeros = 0;
  let i = 0;
  while (i < b58.length && b58[i] === "1") {
    zeros++;
    i++;
  }
  const digits: number[] = [];
  for (; i < b58.length; i++) {
    const v = MAP[b58[i]];
    if (v === undefined) throw new Error("Invalid Base58");
    let carry = v;
    for (let k = 0; k < digits.length; k++) {
      const x = digits[k] * 58 + carry;
      digits[k] = x % 256;
      carry = (x / 256) | 0;
    }
    while (carry) {
      digits.push(carry % 256);
      carry = (carry / 256) | 0;
    }
  }
  const bytes = new Uint8Array(zeros + digits.length);
  for (let p = 0; p < zeros; p++) bytes[p] = 0;
  for (let p = 0; p < digits.length; p++)
    bytes[bytes.length - 1 - p] = digits[p];
  return new TextDecoder().decode(bytes);
}

export default function Base58Client() {
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState<string>("");

  const onEncode = () => {
    try {
      setOutput(encodeBase58(inputText));
    } catch {
      setOutput("");
    }
  };
  const onDecode = () => {
    try {
      setOutput(decodeBase58(inputText));
    } catch {
      alert("Invalid Base58");
      setOutput("");
    }
  };

  const handleCopy = async (value: string, btn: HTMLButtonElement) => {
    try {
      await navigator.clipboard.writeText(value);
      const o = btn.textContent;
      btn.textContent = "Copied";
      btn.classList.add("ok");
      setTimeout(() => {
        btn.textContent = o;
        btn.classList.remove("ok");
      }, 1200);
    } catch {}
  };

  return (
    <div className="container">
      <div className="box">
        <h1>Base58 Encode / Decode</h1>
        <SafetyNote kind="base58" />
        <textarea
          id="txt"
          placeholder="Enter text or Base58..."
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
          <h2>About Base58</h2>
          <p>
            Base58 is an encoding using a restricted alphanumeric alphabet (no 0
            O I l). Popular in Bitcoin addresses.
          </p>

          <LongTailSEO
            title="Base58 encoding online  free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Base58", url: "https://www.hashkitly.com/base58" },
            ]}
            faqs={[
              {
                q: "Why Base58 instead of Base64?",
                a: "Base58 avoids lookalike characters and symbols, useful for human entry (e.g., cryptocurrency addresses).",
              },
              {
                q: "Is Base58 secure?",
                a: "No. It's encoding only. Use cryptography for security.",
              },
              {
                q: "Does this Base58 tool upload my data?",
                a: "No. All encoding/decoding runs locally in your browser.",
              },
            ]}
            relatedLinks={[
              { name: "Base32", url: "https://www.hashkitly.com/base32" },
              { name: "Hex", url: "https://www.hashkitly.com/hex" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
