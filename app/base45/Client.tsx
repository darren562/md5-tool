"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

const ALPH = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
const DEC: Record<string, number> = (() => {
  const m: Record<string, number> = {};
  for (let i = 0; i < ALPH.length; i++) m[ALPH[i]] = i;
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

function base45Encode(bytes: Uint8Array): string {
  let out = "";
  for (let i = 0; i < bytes.length; ) {
    if (i + 1 < bytes.length) {
      const x = bytes[i] * 256 + bytes[i + 1];
      const e = x % 45;
      const d = ((x - e) / 45) % 45;
      const c = Math.floor(x / (45 * 45));
      out += ALPH[e] + ALPH[d] + ALPH[c];
      i += 2;
    } else {
      const x = bytes[i];
      const e = x % 45;
      const d = Math.floor(x / 45);
      out += ALPH[e] + ALPH[d];
      i += 1;
    }
  }
  return out;
}

function base45Decode(s: string): Uint8Array {
  const out: number[] = [];
  for (let i = 0; i < s.length; ) {
    const e = DEC[s[i++]];
    const d = DEC[s[i++]];
    if (e === undefined || d === undefined) throw new Error("Invalid Base45");
    if (i < s.length) {
      const c = DEC[s[i]];
      if (c !== undefined) {
        i++;
        const x = e + d * 45 + c * 45 * 45;
        if (x > 0xffff) throw new Error("Invalid Base45");
        out.push((x / 256) | 0, x % 256);
      } else {
        const x = e + d * 45;
        if (x > 0xff) throw new Error("Invalid Base45");
        out.push(x);
      }
    } else {
      const x = e + d * 45;
      if (x > 0xff) throw new Error("Invalid Base45");
      out.push(x);
    }
  }
  return new Uint8Array(out);
}

export default function Base45Client() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    try {
      if (mode === "encode") setOutput(base45Encode(utf8Encode(input)));
      else setOutput(utf8Decode(base45Decode(input.replace(/\s+/g, ""))));
    } catch {
      setOutput("Decoding error");
    }
  };
  return (
    <div className="container">
      <div className="box">
        <h1>Base45 Encode / Decode</h1>
        <SafetyNote kind="base45" />
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
          placeholder={mode === "encode" ? "Enter text..." : "Enter Base45..."}
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
            title="Base45 encoder/decoder — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Base45", url: "https://www.hashkitly.com/base45" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "Base32", url: "/base32" },
              { name: "Base64url", url: "/base64url" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
