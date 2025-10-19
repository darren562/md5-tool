"use client";
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function qpEncode(str: string): string {
  const bytes =
    typeof TextEncoder !== "undefined"
      ? new TextEncoder().encode(str)
      : new Uint8Array(
          Array.from(unescape(encodeURIComponent(str))).map((c) =>
            c.charCodeAt(0)
          )
        );
  let out = "";
  let line = "";
  const push = (s: string) => {
    if (line.length + s.length > 73) {
      out += line + "=\r\n";
      line = "";
    }
    line += s;
  };
  for (let i = 0; i < bytes.length; i++) {
    const b = bytes[i];
    const ch = String.fromCharCode(b);
    if (
      (b >= 33 && b <= 60) ||
      (b >= 62 && b <= 126) ||
      ch === " " ||
      ch === "\t"
    ) {
      push(ch);
    } else {
      push("=" + b.toString(16).toUpperCase().padStart(2, "0"));
    }
  }
  out += line;
  return out;
}

function qpDecode(str: string): string {
  const s = str.replace(/=\r?\n/g, "");
  const out: number[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "=") {
      const hex = s.slice(i + 1, i + 3);
      if (/^[0-9A-Fa-f]{2}$/.test(hex)) {
        out.push(parseInt(hex, 16));
        i += 2;
        continue;
      }
    }
    out.push(s.charCodeAt(i));
  }
  const u8 = new Uint8Array(out);
  if (typeof TextDecoder !== "undefined") return new TextDecoder().decode(u8);
  let bin = "";
  for (let i = 0; i < u8.length; i++) bin += String.fromCharCode(u8[i]);
  return decodeURIComponent(escape(bin));
}

export default function QuotedPrintableClient() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    try {
      setOutput(mode === "encode" ? qpEncode(input) : qpDecode(input));
    } catch {
      setOutput("Decoding error");
    }
  };
  return (
    <div className="container">
      <div className="box">
        <h1>Quoted-Printable</h1>
        <SafetyNote kind="quoted" />
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
            mode === "encode" ? "Enter text..." : "Enter Quoted-Printable..."
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
              <span
                className="hash"
                style={{ wordBreak: "break-all", whiteSpace: "pre-wrap" }}
              >
                {output}
              </span>
            </div>
          </div>
        )}
        <div className="intro">
          <LongTailSEO
            title="Quoted-Printable — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              {
                name: "Quoted-Printable",
                url: "https://www.hashkitly.com/quoted-printable",
              },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "Base64", url: "/base64" },
              { name: "HTML Entities", url: "/html-entities" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
