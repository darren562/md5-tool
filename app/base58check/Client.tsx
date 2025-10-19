"use client";
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

const ALPH = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
const MAP: Record<string, number> = Object.fromEntries(
  ALPH.split("").map((c, i) => [c, i])
);
function sha256(bytes: Uint8Array): Uint8Array {
  // Use crypto.subtle if available; fallback to crypto-js if not available in this runtime.
  // For this static tool UI, provide a minimal sync fallback using a simple WASMless implementation is heavy; we rely on Web Crypto at runtime.
  throw new Error("SHA-256 not available in build-time context");
}
function b58encode(bytes: Uint8Array): string {
  let x = bytes.slice();
  let zeros = 0;
  for (let i = 0; i < x.length && x[i] === 0; i++) zeros++;
  let digits: number[] = [];
  for (let i = zeros; i < x.length; i++) {
    let carry = x[i];
    for (let j = 0; j < digits.length; j++) {
      const t = (digits[j] << 8) + carry;
      digits[j] = t % 58;
      carry = (t / 58) | 0;
    }
    while (carry) {
      digits.push(carry % 58);
      carry = (carry / 58) | 0;
    }
  }
  let out = "";
  for (let i = 0; i < zeros; i++) out += "1";
  for (let i = digits.length - 1; i >= 0; i--) out += ALPH[digits[i]];
  return out;
}
function b58decode(str: string): Uint8Array {
  let zeros = 0;
  for (; zeros < str.length && str[zeros] === "1"; zeros++);
  let bytes: number[] = [];
  for (let i = zeros; i < str.length; i++) {
    const v = MAP[str[i]];
    if (v === undefined) continue;
    let carry = v;
    for (let j = 0; j < bytes.length; j++) {
      const t = bytes[j] * 58 + carry;
      bytes[j] = t & 255;
      carry = t >>> 8;
    }
    while (carry) {
      bytes.push(carry & 255);
      carry >>>= 8;
    }
  }
  for (let i = 0; i < zeros; i++) bytes.push(0);
  return new Uint8Array(bytes.reverse());
}

async function encodeCheckRuntime(text: string): Promise<string> {
  const enc = new TextEncoder().encode(text);
  const hash1 = new Uint8Array(await crypto.subtle.digest("SHA-256", enc));
  const hash2 = new Uint8Array(await crypto.subtle.digest("SHA-256", hash1));
  const payload = new Uint8Array(enc.length + 4);
  payload.set(enc, 0);
  payload.set(hash2.slice(0, 4), enc.length);
  return b58encode(payload);
}
async function decodeCheckRuntime(b58: string): Promise<string> {
  const data = b58decode(b58);
  if (data.length < 5) throw new Error("Too short");
  const body = data.slice(0, data.length - 4);
  const check = data.slice(data.length - 4);
  const hash1 = new Uint8Array(await crypto.subtle.digest("SHA-256", body));
  const hash2 = new Uint8Array(await crypto.subtle.digest("SHA-256", hash1));
  for (let i = 0; i < 4; i++)
    if (hash2[i] !== check[i]) throw new Error("Checksum mismatch");
  return new TextDecoder().decode(body);
}

export default function Base58CheckClient() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    const fn = mode === "encode" ? encodeCheckRuntime : decodeCheckRuntime;
    fn(input)
      .then((res) => setOutput(res))
      .catch(() => setOutput("Error"));
  };
  return (
    <div className="container">
      <div className="box">
        <h1>Base58Check</h1>
        <SafetyNote kind="base58check" />
        <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
          <label>
            <input
              type="radio"
              checked={mode === "encode"}
              onChange={() => setMode("encode")}
            />{" "}
            Encode
          </label>
          <label>
            <input
              type="radio"
              checked={mode === "decode"}
              onChange={() => setMode("decode")}
            />{" "}
            Decode
          </label>
        </div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            mode === "encode" ? "Enter text..." : "Enter Base58Check..."
          }
        />
        <button className="btn" onClick={run} style={{ margin: "12px 0" }}>
          Run
        </button>
        {output !== "" && (
          <div className="result">
            <div className="row">
              <span>Result:</span>
              <span className="hash" style={{ wordBreak: "break-all" }}>
                {output}
              </span>
            </div>
          </div>
        )}
        <div className="intro">
          <LongTailSEO
            title="Base58Check — FAQs"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              {
                name: "Base58Check",
                url: "https://www.hashkitly.com/base58check",
              },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "Base58", url: "/base58" },
              { name: "Hex", url: "/hex" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
