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
  if (typeof TextDecoder !== "undefined")
    return new TextDecoder().decode(bytes);
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return decodeURIComponent(escape(bin));
}

function uuencode(bytes: Uint8Array): string {
  let out = "";
  for (let i = 0; i < bytes.length; i += 45) {
    const chunk = bytes.slice(i, i + 45);
    out += String.fromCharCode(32 + chunk.length);
    for (let j = 0; j < chunk.length; j += 3) {
      const a = chunk[j],
        b = chunk[j + 1] || 0,
        c = chunk[j + 2] || 0;
      const n0 = (a >>> 2) & 0x3f;
      const n1 = ((a << 4) | (b >>> 4)) & 0x3f;
      const n2 = ((b << 2) | (c >>> 6)) & 0x3f;
      const n3 = c & 0x3f;
      out += String.fromCharCode(
        n0 ? n0 + 32 : 96,
        n1 ? n1 + 32 : 96,
        n2 ? n2 + 32 : 96,
        n3 ? n3 + 32 : 96
      );
    }
    out += "\n";
  }
  out += "`\n";
  return out;
}
function uudecode(str: string): Uint8Array {
  const lines = str.replace(/\r/g, "").split("\n");
  const out: number[] = [];
  for (let line of lines) {
    if (!line) continue;
    const lenChar = line.charCodeAt(0);
    if (lenChar === 96) break;
    const len = (lenChar - 32) & 0x3f;
    let idx = 1;
    while (out.length % 45 !== len && idx + 3 < line.length) {
      const n0 = (line.charCodeAt(idx++) - 32) & 0x3f;
      const n1 = (line.charCodeAt(idx++) - 32) & 0x3f;
      const n2 = (line.charCodeAt(idx++) - 32) & 0x3f;
      const n3 = (line.charCodeAt(idx++) - 32) & 0x3f;
      const a = (n0 << 2) | (n1 >>> 4);
      const b = ((n1 & 0xf) << 4) | (n2 >>> 2);
      const c = ((n2 & 3) << 6) | n3;
      out.push(a);
      if (out.length % 45 < len) out.push(b);
      if (out.length % 45 < len) out.push(c);
    }
  }
  return new Uint8Array(out);
}

export default function UUEncodeClient() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    try {
      if (mode === "encode") setOutput(uuencode(utf8Encode(input)));
      else setOutput(utf8Decode(uudecode(input)));
    } catch {
      setOutput("Decoding error");
    }
  };
  return (
    <div className="container">
      <div className="box">
        <h1>UUEncode</h1>
        <SafetyNote kind="uuencode" />
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
            mode === "encode" ? "Enter text..." : "Enter uuencoded data..."
          }
        />
        <button className="btn" onClick={run} style={{ margin: "12px 0" }}>
          Run
        </button>
        {output !== "" && (
          <div className="result">
            <div className="row">
              <span>Result:</span>
              <span
                className="hash"
                style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}
              >
                {output}
              </span>
            </div>
          </div>
        )}
        <div className="intro">
          <LongTailSEO
            title="UUEncode — FAQs"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "UUEncode", url: "https://www.hashkitly.com/uuencode" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "ASCII85", url: "/ascii85" },
              { name: "Quoted-Printable", url: "/quoted-printable" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
