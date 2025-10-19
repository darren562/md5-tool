"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

const ALPH = "0123456789ABCDEFGHJKMNPQRSTVWXYZ"; // Crockford (no I, L, O, U)
const DEC: Record<string, number> = (() => {
  const m: Record<string, number> = {};
  for (let i = 0; i < ALPH.length; i++) m[ALPH[i]] = i;
  // tolerant mappings
  m["O"] = 0;
  m["o"] = 0;
  m["o"] = 0;
  m["o"] = 0;
  m["I"] = 1;
  m["i"] = 1;
  m["L"] = 1;
  m["l"] = 1;
  return m;
})();

function utf8Encode(str: string): Uint8Array {
  return typeof TextEncoder !== "undefined"
    ? new TextEncoder().encode(str)
    : new Uint8Array(
        Array.from(unescape(encodeURIComponent(str))).map((c) =>
          c.charCodeAt(0)
        )
      );
}
function utf8Decode(bytes: Uint8Array): string {
  if (typeof TextDecoder !== "undefined")
    return new TextDecoder().decode(bytes);
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return decodeURIComponent(escape(bin));
}

function crockfordEncode(bytes: Uint8Array): string {
  let out = "";
  let bits = 0,
    val = 0;
  for (let i = 0; i < bytes.length; i++) {
    val = (val << 8) | bytes[i];
    bits += 8;
    while (bits >= 5) {
      out += ALPH[(val >>> (bits - 5)) & 31];
      bits -= 5;
    }
  }
  if (bits > 0) out += ALPH[(val << (5 - bits)) & 31];
  return out;
}

function crockfordDecode(s: string): Uint8Array {
  let bits = 0,
    val = 0;
  const out: number[] = [];
  for (const ch of s.replace(/[-\s]/g, "").toUpperCase()) {
    const v = DEC[ch];
    if (v === undefined) continue;
    val = (val << 5) | v;
    bits += 5;
    if (bits >= 8) {
      out.push((val >>> (bits - 8)) & 0xff);
      bits -= 8;
    }
  }
  return new Uint8Array(out);
}

export default function Base32CrockfordClient() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    try {
      if (mode === "encode") setOutput(crockfordEncode(utf8Encode(input)));
      else setOutput(utf8Decode(crockfordDecode(input)));
    } catch {
      setOutput("Decoding error");
    }
  };
  return (
    <div className="container">
      <div className="box">
        <h1>Base32 Crockford</h1>
        <SafetyNote kind="crockford" />
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
          placeholder={
            mode === "encode" ? "Enter text..." : "Enter Base32 Crockford..."
          }
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
            title="Base32 Crockford — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              {
                name: "Base32 Crockford",
                url: "https://www.hashkitly.com/base32-crockford",
              },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "Base32", url: "/base32" },
              { name: "Base58", url: "/base58" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
