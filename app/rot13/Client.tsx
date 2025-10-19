"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function rot13(s: string): string {
  return s.replace(/[A-Za-z]/g, (c) => {
    const base = c <= "Z" ? 65 : 97;
    const code = c.charCodeAt(0) - base;
    return String.fromCharCode(((code + 13) % 26) + base);
  });
}

export default function Rot13Client() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const onEncode = () => setOutput(rot13(input));
  const onDecode = () => setOutput(rot13(input)); // ROT13 is symmetric

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
        <h1>ROT13 Encode / Decode</h1>
        <SafetyNote kind="rot13" />
        <textarea
          placeholder="Enter text..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div style={{ display: "flex", gap: 8, margin: "12px 0" }}>
          <button className="btn" style={{ flex: 1 }} onClick={onEncode}>
            Encode
          </button>
          <button className="btn" style={{ flex: 1 }} onClick={onDecode}>
            Decode
          </button>
        </div>
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
          <h2>About ROT13</h2>
          <p>
            ROT13 is a simple letter substitution cipher that replaces a letter
            with the letter 13 letters after it in the alphabet. It is not
            encryption and provides no real security.
          </p>
          <LongTailSEO
            title="ROT13 encoder/decoder online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "ROT13", url: "https://www.hashkitly.com/rot13" },
            ]}
            faqs={[
              {
                q: "Is ROT13 secure?",
                a: "No. It is only obfuscation, not encryption.",
              },
              {
                q: "Does this run locally?",
                a: "Yes. It runs entirely in your browser; nothing is uploaded.",
              },
              {
                q: "What characters are affected?",
                a: "Only A–Z and a–z alphabetic characters are rotated.",
              },
            ]}
            relatedLinks={[
              { name: "ROT47", url: "https://www.hashkitly.com/rot47" },
              { name: "Base64", url: "https://www.hashkitly.com/base64" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
