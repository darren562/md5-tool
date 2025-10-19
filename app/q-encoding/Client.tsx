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

function qEncode(str: string): string {
  // Simple Q-encoding: spaces -> '_'; safe chars pass-through; others -> =HH of UTF-8
  const safe = /[A-Za-z0-9!*+\-\/]/;
  const bytes = utf8Encode(str);
  let out = "";
  for (let i = 0; i < bytes.length; i++) {
    const ch = String.fromCharCode(bytes[i]);
    if (ch === " ") out += "_";
    else if (safe.test(ch)) out += ch;
    else out += "=" + bytes[i].toString(16).toUpperCase().padStart(2, "0");
  }
  return out;
}
function qDecode(s: string): string {
  const replaced = s.replace(/_/g, " ");
  const out: number[] = [];
  for (let i = 0; i < replaced.length; ) {
    const ch = replaced[i];
    if (ch === "=") {
      const h = replaced.substr(i + 1, 2);
      const n = parseInt(h, 16);
      if (!isNaN(n)) {
        out.push(n);
        i += 3;
        continue;
      }
    }
    out.push(replaced.charCodeAt(i));
    i++;
  }
  return utf8Decode(new Uint8Array(out));
}

export default function QEncodingClient() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    try {
      setOutput(mode === "encode" ? qEncode(input) : qDecode(input));
    } catch {
      setOutput("Decoding error");
    }
  };
  return (
    <div className="container">
      <div className="box">
        <h1>Q-encoding (RFC 2047)</h1>
        <SafetyNote kind="qencoding" />
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
            mode === "encode" ? "Enter text..." : "Enter Q-encoded text..."
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
            title="Q-encoding — FAQs"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              {
                name: "Q-encoding",
                url: "https://www.hashkitly.com/q-encoding",
              },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "Quoted-Printable", url: "/quoted-printable" },
              { name: "Base64", url: "/base64" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
