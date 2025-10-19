"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

// UTF-8 helpers
function utf8Encode(str: string): Uint8Array {
  const encoder =
    typeof TextEncoder !== "undefined" ? new TextEncoder() : undefined;
  if (encoder) return encoder.encode(str);
  // Fallback
  const out: number[] = [];
  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i);
    if (c < 0x80) out.push(c);
    else if (c < 0x800) {
      out.push(0xc0 | (c >> 6), 0x80 | (c & 0x3f));
    } else if (c >= 0xd800 && c <= 0xdbff) {
      // surrogate pair
      const high = c;
      const low = str.charCodeAt(++i);
      const cp = ((high - 0xd800) << 10) + (low - 0xdc00) + 0x10000;
      out.push(
        0xf0 | (cp >> 18),
        0x80 | ((cp >> 12) & 0x3f),
        0x80 | ((cp >> 6) & 0x3f),
        0x80 | (cp & 0x3f)
      );
    } else {
      out.push(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 0x3f), 0x80 | (c & 0x3f));
    }
  }
  return new Uint8Array(out);
}

function utf8Decode(bytes: Uint8Array): string {
  const decoder =
    typeof TextDecoder !== "undefined" ? new TextDecoder() : undefined;
  if (decoder) return decoder.decode(bytes);
  let out = "";
  for (let i = 0; i < bytes.length; i++) {
    const c = bytes[i];
    if (c < 128) out += String.fromCharCode(c);
    else if (c > 191 && c < 224) {
      const c2 = bytes[++i];
      out += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
    } else if (c > 239 && c < 365) {
      const c2 = bytes[++i];
      const c3 = bytes[++i];
      const c4 = bytes[++i];
      const u =
        ((c & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63);
      const cp = u - 0x10000;
      out += String.fromCharCode(0xd800 + (cp >> 10));
      out += String.fromCharCode(0xdc00 + (cp & 1023));
    } else {
      const c2 = bytes[++i];
      const c3 = bytes[++i];
      out += String.fromCharCode(
        ((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
      );
    }
  }
  return out;
}

// Adobe ASCII85 encode/decode (no <~ ~> wrappers, compress zeros with 'z')
const A85_START = 33; // '!'

function a85Encode(bytes: Uint8Array): string {
  let out = "";
  let i = 0;
  while (i < bytes.length) {
    const b0 = bytes[i++] || 0;
    const b1 = bytes[i++] || 0;
    const b2 = bytes[i++] || 0;
    const b3 = bytes[i++] || 0;
    const tuple =
      ((b0 << 24) >>> 0) + ((b1 << 16) >>> 0) + ((b2 << 8) >>> 0) + b3;
    if (b0 === 0 && b1 === 0 && b2 === 0 && b3 === 0) {
      out += "z";
      continue;
    }
    let tmp = tuple;
    const chars = new Array(5);
    for (let j = 4; j >= 0; j--) {
      chars[j] = String.fromCharCode((tmp % 85) + A85_START);
      tmp = Math.floor(tmp / 85);
    }
    // For the last block, if bytes remaining < 4, we should emit fewer chars
    const remain = Math.min(4, bytes.length - (i - 4));
    if (remain < 4) {
      out += chars.slice(0, remain + 1).join("");
    } else {
      out += chars.join("");
    }
  }
  return out;
}

function a85Decode(str: string): Uint8Array {
  // Remove whitespace
  const s = str.replace(/\s+/g, "");
  const bytes: number[] = [];
  let i = 0;
  while (i < s.length) {
    const ch = s[i];
    if (ch === "z") {
      bytes.push(0, 0, 0, 0);
      i++;
      continue;
    }
    const block = s.slice(i, i + 5);
    const len = block.length;
    if (len === 0) break;
    let acc = 0;
    let valid = 0;
    for (let j = 0; j < 5; j++) {
      const c = block.charCodeAt(j);
      if (isNaN(c)) break;
      if (c < 33 || c > 117) break;
      acc = acc * 85 + (c - A85_START);
      valid++;
      if (j === 4) {
        // full 5 chars → 4 bytes
        bytes.push(
          (acc >>> 24) & 0xff,
          (acc >>> 16) & 0xff,
          (acc >>> 8) & 0xff,
          acc & 0xff
        );
      }
    }
    if (valid > 0 && valid < 5) {
      // partial block: pad with 'u' (117)
      for (let j = valid; j < 5; j++) acc = acc * 85 + (117 - A85_START);
      const tuple = acc >>> 0;
      if (valid === 2) bytes.push((tuple >>> 24) & 0xff);
      else if (valid === 3)
        bytes.push((tuple >>> 24) & 0xff, (tuple >>> 16) & 0xff);
      else if (valid === 4)
        bytes.push(
          (tuple >>> 24) & 0xff,
          (tuple >>> 16) & 0xff,
          (tuple >>> 8) & 0xff
        );
    }
    i += valid === 0 ? 1 : valid;
  }
  return new Uint8Array(bytes);
}

export default function Ascii85Client() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");

  const run = () => {
    try {
      if (mode === "encode") {
        const bytes = utf8Encode(input);
        setOutput(a85Encode(bytes));
      } else {
        const decoded = a85Decode(input);
        setOutput(utf8Decode(decoded));
      }
    } catch (e) {
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
        <h1>ASCII85 (Base85) Encode / Decode</h1>
        <SafetyNote kind="ascii85" />
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
              ? "Enter text to encode..."
              : "Enter ASCII85 to decode..."
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
          <h2>About ASCII85</h2>
          <p>
            ASCII85 (a.k.a. Base85) encodes binary data into ASCII characters.
            This tool uses the traditional Adobe variant without &lt;~ ~&gt;
            wrappers.
          </p>
          <LongTailSEO
            title="ASCII85 encoder/decoder online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "ASCII85", url: "https://www.hashkitly.com/ascii85" },
            ]}
            faqs={[
              {
                q: "Is ASCII85 the same as Z85?",
                a: "No. This tool targets the Adobe ASCII85 variant; Z85 has a different alphabet and padding rules.",
              },
              {
                q: "Does this handle UTF‑8?",
                a: "Yes. Text is UTF‑8 encoded before Base85 and decoded after.",
              },
              {
                q: "Are <~ and ~> required?",
                a: "No, they are optional markers and omitted here.",
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
