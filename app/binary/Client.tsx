"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

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
  return typeof TextDecoder !== "undefined"
    ? new TextDecoder().decode(bytes)
    : decodeURIComponent(escape(String.fromCharCode(...Array.from(bytes))));
}

function textToBinary(str: string): string {
  const bytes = utf8Encode(str);
  return Array.from(bytes)
    .map((b) => b.toString(2).padStart(8, "0"))
    .join(" ");
}

function binaryToText(bin: string): string {
  const clean = bin.trim().replace(/[^01\s]/g, "");
  const parts = clean.split(/\s+/).filter(Boolean);
  const arr = new Uint8Array(parts.map((p) => parseInt(p, 2) & 0xff));
  return utf8Decode(arr);
}

export default function BinaryClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");

  const run = () => {
    try {
      setOutput(mode === "encode" ? textToBinary(input) : binaryToText(input));
    } catch {
      setOutput("Decoding error");
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
        <h1>Binary ↔ Text (UTF‑8)</h1>
        <SafetyNote kind="base64" />
        <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
          <label>
            <input
              type="radio"
              checked={mode === "encode"}
              onChange={() => setMode("encode")}
            />{" "}
            Text → Binary
          </label>
          <label>
            <input
              type="radio"
              checked={mode === "decode"}
              onChange={() => setMode("decode")}
            />{" "}
            Binary → Text
          </label>
        </div>
        <textarea
          placeholder={
            mode === "encode"
              ? "Enter text..."
              : "Enter groups of 8-bit binary, separated by spaces"
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
          <h2>About Text↔Binary</h2>
          <p>
            This tool converts between text and its UTF‑8 binary representation.
            It’s useful for learning or debugging encodings.
          </p>
          <LongTailSEO
            title="Binary text encoder/decoder — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Binary", url: "https://www.hashkitly.com/binary" },
            ]}
            faqs={[
              {
                q: "What encoding is used?",
                a: "UTF‑8 for converting between text and bytes.",
              },
              {
                q: "Can I paste long data?",
                a: "Yes, but very large input may be slow in the browser.",
              },
              {
                q: "Is this secure?",
                a: "Nothing is uploaded; however, it’s just an encoding/decoding aid.",
              },
            ]}
            relatedLinks={[
              { name: "Hex", url: "https://www.hashkitly.com/hex" },
              { name: "Base64", url: "https://www.hashkitly.com/base64" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
