"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

// basE91 alphabet
const B91 =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,./:;<=>?@[]^_`{|}~"';
const B91_DEC: Record<string, number> = (() => {
  const m: Record<string, number> = {};
  for (let i = 0; i < B91.length; i++) m[B91[i]] = i;
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

function base91Encode(input: Uint8Array): string {
  let b = 0,
    n = 0,
    out = "";
  for (let i = 0; i < input.length; i++) {
    b |= input[i] << n;
    n += 8;
    if (n > 13) {
      let v = b & 8191; // 2^13-1
      if (v > 88) {
        b >>= 13;
        n -= 13;
      } else {
        v = b & 16383;
        b >>= 14;
        n -= 14;
      }
      out += B91[v % 91] + B91[Math.floor(v / 91)];
    }
  }
  if (n) {
    out += B91[b % 91];
    if (n > 7 || b > 90) out += B91[Math.floor(b / 91)];
  }
  return out;
}

function base91Decode(str: string): Uint8Array {
  let b = 0,
    n = 0,
    out: number[] = [];
  let v = -1;
  for (let i = 0; i < str.length; i++) {
    const p = B91_DEC[str[i]];
    if (p === undefined) continue;
    if (v < 0) v = p;
    else {
      v += p * 91;
      b |= v << n;
      n += (v & 8191) > 88 ? 13 : 14;
      do {
        out.push(b & 255);
        b >>= 8;
        n -= 8;
      } while (n > 7);
      v = -1;
    }
  }
  if (v > -1) out.push((b | (v << n)) & 255);
  return new Uint8Array(out);
}

export default function Base91Client() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    try {
      if (mode === "encode") {
        const bytes = utf8Encode(input);
        setOutput(base91Encode(bytes));
      } else {
        const bytes = base91Decode(input.trim());
        setOutput(utf8Decode(bytes));
      }
    } catch {
      setOutput("Decoding error");
    }
  };
  return (
    <div className="container">
      <div className="box">
        <h1>Base91 Encode / Decode</h1>
        <SafetyNote kind="base64" />
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
          placeholder={mode === "encode" ? "Enter text..." : "Enter Base91..."}
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
            title="Base91 encoder/decoder — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Base91", url: "https://www.hashkitly.com/base91" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "ASCII85", url: "https://www.hashkitly.com/ascii85" },
              { name: "Z85", url: "https://www.hashkitly.com/z85" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
