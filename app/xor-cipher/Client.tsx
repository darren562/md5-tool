"use client";
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function utf8Encode(s: string): Uint8Array {
  return typeof TextEncoder !== "undefined"
    ? new TextEncoder().encode(s)
    : new Uint8Array(
        Array.from(unescape(encodeURIComponent(s))).map((c) => c.charCodeAt(0))
      );
}
function utf8Decode(b: Uint8Array): string {
  if (typeof TextDecoder !== "undefined") return new TextDecoder().decode(b);
  let bin = "";
  for (let i = 0; i < b.length; i++) bin += String.fromCharCode(b[i]);
  return decodeURIComponent(escape(bin));
}
function fromHex(s: string): Uint8Array {
  const clean = s.replace(/\s+/g, "");
  const out: number[] = [];
  for (let i = 0; i < clean.length; i += 2) {
    out.push(parseInt(clean.substr(i, 2), 16) || 0);
  }
  return new Uint8Array(out);
}
function toHex(b: Uint8Array): string {
  let out = "";
  for (let i = 0; i < b.length; i++) {
    const h = b[i].toString(16).padStart(2, "0");
    out += h;
  }
  return out;
}

function xorBytes(data: Uint8Array, key: Uint8Array): Uint8Array {
  const out = new Uint8Array(data.length);
  for (let i = 0; i < data.length; i++) out[i] = data[i] ^ key[i % key.length];
  return out;
}

export default function XorCipherClient() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [key, setKey] = useState("key");
  const [inFormat, setInFormat] = useState<"text" | "hex">("text");
  const [outFormat, setOutFormat] = useState<"hex" | "text">("hex");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    if (!key) {
      setOutput("Key required");
      return;
    }
    try {
      const keyBytes = utf8Encode(key);
      if (mode === "encode") {
        const data = inFormat === "text" ? utf8Encode(input) : fromHex(input);
        const x = xorBytes(data, keyBytes);
        setOutput(outFormat === "hex" ? toHex(x) : utf8Decode(x));
      } else {
        const data = inFormat === "hex" ? fromHex(input) : utf8Encode(input);
        const x = xorBytes(data, keyBytes);
        setOutput(outFormat === "text" ? utf8Decode(x) : toHex(x));
      }
    } catch {
      setOutput("Error");
    }
  };
  return (
    <div className="container">
      <div className="box">
        <h1>XOR Cipher</h1>
        <SafetyNote kind="xorcipher" />
        <div
          style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}
        >
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
          <label>
            Key: <input value={key} onChange={(e) => setKey(e.target.value)} />
          </label>
        </div>
        <div
          style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}
        >
          <label>
            Input:{" "}
            <select
              value={inFormat}
              onChange={(e) => setInFormat(e.target.value as any)}
            >
              <option value="text">Text</option>
              <option value="hex">Hex</option>
            </select>
          </label>
          <label>
            Output:{" "}
            <select
              value={outFormat}
              onChange={(e) => setOutFormat(e.target.value as any)}
            >
              <option value="hex">Hex</option>
              <option value="text">Text</option>
            </select>
          </label>
        </div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={inFormat === "text" ? "Enter text..." : "Enter hex..."}
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
            title="XOR Cipher — FAQs"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              {
                name: "XOR Cipher",
                url: "https://www.hashkitly.com/xor-cipher",
              },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "Vigenere", url: "/vigenere" },
              { name: "Autokey", url: "/autokey" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
