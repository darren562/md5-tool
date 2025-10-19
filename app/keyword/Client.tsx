"use client";
export {};
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function buildAlphabet(keyword: string): {
  enc: Record<string, string>;
  dec: Record<string, string>;
} {
  const seen: Record<string, boolean> = {};
  let subs = "";
  const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const k = keyword.toUpperCase().replace(/[^A-Z]/g, "");
  for (let i = 0; i < k.length; i++) {
    const c = k[i];
    if (!seen[c]) {
      seen[c] = true;
      subs += c;
    }
  }
  for (let i = 0; i < base.length; i++) {
    const c = base[i];
    if (!seen[c]) subs += c;
  }
  const enc: Record<string, string> = {},
    dec: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    enc[base[i]] = subs[i];
    dec[subs[i]] = base[i];
  }
  return { enc, dec };
}
function transform(
  text: string,
  maps: { enc: Record<string, string>; dec: Record<string, string> },
  mode: "encode" | "decode"
) {
  const src = mode === "encode" ? maps.enc : maps.dec;
  const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let out = "";
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const up = ch.toUpperCase();
    if (base.indexOf(up) >= 0) {
      const mapped = src[up];
      out += ch === up ? mapped : mapped.toLowerCase();
    } else out += ch;
  }
  return out;
}

export default function KeywordClient() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [key, setKey] = useState("keyword");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    if (!key) {
      setOutput("Key required");
      return;
    }
    const maps = buildAlphabet(key);
    setOutput(transform(input, maps, mode));
  };
  return (
    <div className="container">
      <div className="box">
        <h1>Keyword Substitution</h1>
        <SafetyNote kind="keyword" />
        <div
          style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}
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
            Keyword:{" "}
            <input value={key} onChange={(e) => setKey(e.target.value)} />
          </label>
        </div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={mode === "encode" ? "Enter text..." : "Enter cipher..."}
        />
        <button className="btn" onClick={run} style={{ margin: "12px 0" }}>
          Run
        </button>
        {output !== "" && (
          <div className="result">
            <div className="row">
              <span>Result:</span>
              <span className="hash">{output}</span>
            </div>
          </div>
        )}
        <div className="intro">
          <LongTailSEO
            title="Keyword substitution — FAQs"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Keyword", url: "https://www.hashkitly.com/keyword" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "Affine", url: "/affine" },
              { name: "Atbash", url: "/atbash" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
