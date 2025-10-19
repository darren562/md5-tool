"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function toB64Url(b64: string) {
  return b64.replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function fromB64Url(u: string) {
  let s = u.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  return s;
}

function encodeBase64url(s: string): string {
  const bytes =
    typeof TextEncoder !== "undefined"
      ? new TextEncoder().encode(s)
      : new Uint8Array(
          Array.from(unescape(encodeURIComponent(s))).map((c) =>
            c.charCodeAt(0)
          )
        );
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  const b64 =
    typeof btoa !== "undefined"
      ? btoa(bin)
      : Buffer.from(bytes).toString("base64");
  return toB64Url(b64);
}

function decodeBase64url(s: string): string {
  const b64 = fromB64Url(s.trim());
  const bin =
    typeof atob !== "undefined"
      ? atob(b64)
      : Buffer.from(b64, "base64").toString("binary");
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return (
    (typeof TextDecoder !== "undefined"
      ? new TextDecoder()
      : undefined
    )?.decode(bytes) ?? decodeURIComponent(escape(bin))
  );
}

export default function Base64UrlClient() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const run = () => {
    try {
      setOutput(
        mode === "encode" ? encodeBase64url(input) : decodeBase64url(input)
      );
    } catch {
      setOutput("Decoding error");
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h1>Base64url Encode / Decode</h1>
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
          placeholder={
            mode === "encode" ? "Enter text..." : "Enter base64url..."
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
            title="Base64url encoder/decoder — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Base64url", url: "https://www.hashkitly.com/base64url" },
            ]}
            faqs={[
              {
                q: "Is base64url padded?",
                a: "No, padding is removed for base64url.",
              },
              {
                q: "Are + and / used?",
                a: "Replaced by - and _ respectively.",
              },
            ]}
            relatedLinks={[
              { name: "Base64", url: "https://www.hashkitly.com/base64" },
              { name: "Hex", url: "https://www.hashkitly.com/hex" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
