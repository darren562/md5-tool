"use client";
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

const ALPH =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&()*+-;<=>?@^_`{|}~";
const MAP: Record<string, number> = Object.fromEntries(
  ALPH.split("").map((c, i) => [c, i])
);

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

function encodeRFC1924(bytes: Uint8Array): string {
  let out = "";
  for (let i = 0; i < bytes.length; i += 4) {
    const rem = Math.min(4, bytes.length - i);
    let n = 0 >>> 0;
    for (let j = 0; j < 4; j++) n = (n << 8) | (j < rem ? bytes[i + j] : 0);
    const chars = new Array(5);
    for (let k = 4; k >= 0; k--) {
      chars[k] = ALPH[n % 85];
      n = Math.floor(n / 85);
    }
    out += chars.slice(0, rem + 1).join("");
  }
  return out;
}
function decodeRFC1924(s: string): Uint8Array {
  const clean = s.replace(/\s+/g, "");
  const out: number[] = [];
  for (let i = 0; i < clean.length; i += 5) {
    const rem = Math.min(5, clean.length - i);
    let n = 0;
    for (let j = 0; j < rem; j++) {
      const v = MAP[clean[i + j]];
      if (v === undefined) continue;
      n = n * 85 + v;
    }
    const bytes = [
      (n >>> 24) & 255,
      (n >>> 16) & 255,
      (n >>> 8) & 255,
      n & 255,
    ];
    for (let b = 0; b < Math.max(0, rem - 1); b++) out.push(bytes[b]);
  }
  return new Uint8Array(out);
}

export default function RFC1924Base85Client() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    try {
      if (mode === "encode") setOutput(encodeRFC1924(utf8Encode(input)));
      else setOutput(utf8Decode(decodeRFC1924(input)));
    } catch {
      setOutput("Decoding error");
    }
  };
  return (
    <div className="container">
      <div className="box">
        <h1>Base85 (RFC 1924)</h1>
        <SafetyNote kind="base85rfc1924" />
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
          placeholder={mode === "encode" ? "Enter text..." : "Enter Base85..."}
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
            title="Base85 (RFC 1924) — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              {
                name: "Base85 (RFC 1924)",
                url: "https://www.hashkitly.com/base85-rfc1924",
              },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "ASCII85", url: "/ascii85" },
              { name: "Z85", url: "/z85" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
