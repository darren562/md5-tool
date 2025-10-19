"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

// Z85 alphabet per ZeroMQ spec
const Z85_CHARS =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#";
const Z85_DEC: Record<string, number> = (() => {
  const map: Record<string, number> = {};
  for (let i = 0; i < Z85_CHARS.length; i++) map[Z85_CHARS[i]] = i;
  return map;
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

function z85Encode(bytes: Uint8Array): string {
  if (bytes.length % 4 !== 0)
    throw new Error("Z85 encode requires length multiple of 4 bytes");
  let out = "";
  for (let i = 0; i < bytes.length; i += 4) {
    const value =
      bytes[i] * 0x1000000 +
      bytes[i + 1] * 0x10000 +
      bytes[i + 2] * 0x100 +
      bytes[i + 3];
    let div = value >>> 0;
    const block = new Array(5);
    for (let j = 4; j >= 0; j--) {
      block[j] = Z85_CHARS[div % 85];
      div = Math.floor(div / 85);
    }
    out += block.join("");
  }
  return out;
}

function z85Decode(str: string): Uint8Array {
  if (str.length % 5 !== 0)
    throw new Error("Z85 decode requires length multiple of 5 characters");
  const bytes = new Uint8Array((str.length / 5) * 4);
  let bi = 0;
  for (let i = 0; i < str.length; i += 5) {
    let value = 0;
    for (let j = 0; j < 5; j++) {
      const c = str[i + j];
      const v = Z85_DEC[c];
      if (v === undefined) throw new Error("Invalid Z85 character");
      value = value * 85 + v;
    }
    bytes[bi++] = (value >>> 24) & 0xff;
    bytes[bi++] = (value >>> 16) & 0xff;
    bytes[bi++] = (value >>> 8) & 0xff;
    bytes[bi++] = value & 0xff;
  }
  return bytes;
}

export default function Z85Client() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const run = () => {
    try {
      if (mode === "encode") {
        const bytes = utf8Encode(input);
        // pad to multiple of 4 bytes with zeros non-destructively for convenience? Z85 spec forbids.
        if (bytes.length % 4 !== 0) {
          setOutput(
            "Error: input bytes must be multiple of 4 for Z85 encode (pad your data)"
          );
          return;
        }
        setOutput(z85Encode(bytes));
      } else {
        const decoded = z85Decode(input.trim());
        setOutput(utf8Decode(decoded));
      }
    } catch (e) {
      setOutput("Decoding error");
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h1>Z85 Encode / Decode</h1>
        <SafetyNote kind="z85" />
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
            mode === "encode"
              ? "Enter text (UTF-8) — length must be 4N bytes"
              : "Enter Z85 string (length 5N)"
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
            title="Z85 encoder/decoder online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Z85", url: "https://www.hashkitly.com/z85" },
            ]}
            faqs={[
              {
                q: "What is Z85?",
                a: "A Base85 variant standardized by ZeroMQ for binary data.",
              },
              {
                q: "Length constraints?",
                a: "Encode requires 4N input bytes; decode requires 5N characters.",
              },
            ]}
            relatedLinks={[
              { name: "ASCII85", url: "https://www.hashkitly.com/ascii85" },
              { name: "Base64", url: "https://www.hashkitly.com/base64" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
