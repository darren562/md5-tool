"use client";
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";
const ALPH = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function utf8Encode(s: string) {
  return typeof TextEncoder !== "undefined"
    ? new TextEncoder().encode(s)
    : new Uint8Array(
        Array.from(unescape(encodeURIComponent(s))).map((c) => c.charCodeAt(0))
      );
}
function utf8Decode(b: Uint8Array) {
  if (typeof TextDecoder !== "undefined") return new TextDecoder().decode(b);
  let x = "";
  for (let i = 0; i < b.length; i++) x += String.fromCharCode(b[i]);
  return decodeURIComponent(escape(x));
}

function encode(bytes: Uint8Array): string {
  // reuse baseN with 36
  const base = 36;
  const alph = ALPH;
  if (bytes.length === 0) return "";
  const digits = Array.from(bytes);
  let out = "";
  while (digits.length && digits.some((v) => v > 0)) {
    let carry = 0;
    const next: number[] = [];
    for (let i = 0; i < digits.length; i++) {
      const cur = digits[i] + carry * 256;
      const q = Math.floor(cur / base);
      const r = cur % base;
      if (next.length > 0 || q > 0) next.push(q);
      carry = r;
    }
    out = alph[carry] + out;
    digits.splice(0, digits.length, ...next);
  }
  let zeros = 0;
  while (zeros < bytes.length && bytes[zeros] === 0) {
    out = alph[0] + out;
    zeros++;
  }
  return out;
}
function decode(s: string): Uint8Array {
  const base = 36;
  const alph = ALPH;
  const map: Record<string, number> = Object.fromEntries(
    alph.split("").map((c, i) => [c, i])
  );
  const digits = s
    .toUpperCase()
    .split("")
    .map((c) => {
      const v = map[c];
      if (v === undefined) throw new Error("Invalid");
      return v;
    });
  let out: number[] = [];
  while (digits.length) {
    let carry = 0;
    const next: number[] = [];
    for (let i = 0; i < digits.length; i++) {
      const cur = digits[i] + carry * base;
      const q = Math.floor(cur / 256);
      const r = cur % 256;
      if (next.length > 0 || q > 0) next.push(q);
      carry = r;
    }
    out.unshift(carry);
    digits.splice(0, digits.length, ...next);
  }
  let i = 0;
  while (i < s.length && s[i] === "0") {
    out.unshift(0);
    i++;
  }
  return new Uint8Array(out);
}

export default function Base36Client() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    try {
      if (mode === "encode") setOutput(encode(utf8Encode(input)));
      else setOutput(utf8Decode(decode(input)));
    } catch {
      setOutput("Decoding error");
    }
  };
  return (
    <div className="container">
      <div className="box">
        <h1>Base36</h1>
        <SafetyNote kind="base36" />
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
          placeholder={mode === "encode" ? "Enter text..." : "Enter Base36..."}
          value={input}
          onChange={(e) => setInput(e.target.value)}
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
            title="Base36 — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Base36", url: "https://www.hashkitly.com/base36" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "Base62", url: "/base62" },
              { name: "Base58", url: "/base58" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
