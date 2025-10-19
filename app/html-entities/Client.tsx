"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function encodeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
function decodeHtml(str: string): string {
  return str
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");
}

export default function HtmlEntitiesClient() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    setOutput(mode === "encode" ? encodeHtml(input) : decodeHtml(input));
  };
  return (
    <div className="container">
      <div className="box">
        <h1>HTML Entities Encode / Decode</h1>
        <SafetyNote kind="url" />
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
            mode === "encode" ? "Enter text..." : "Enter HTML entities..."
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
            title="HTML entities encoder/decoder — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              {
                name: "HTML Entities",
                url: "https://www.hashkitly.com/html-entities",
              },
            ]}
            faqs={[
              {
                q: "Is this safe for all HTML?",
                a: "It covers common entities (&, <, >, \", '). For full HTML sanitization use specialized libraries.",
              },
            ]}
            relatedLinks={[
              { name: "URL", url: "https://www.hashkitly.com/url" },
              { name: "Base64", url: "https://www.hashkitly.com/base64" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
