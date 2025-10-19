"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function rot47(s: string): string {
  // ROT47 operates on ASCII 33 '!' to 126 '~'
  let out = "";
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    if (c >= 33 && c <= 126) {
      out += String.fromCharCode(33 + ((c - 33 + 47) % 94));
    } else {
      out += s[i];
    }
  }
  return out;
}

export default function Rot47Client() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const onEncode = () => setOutput(rot47(input));
  const onDecode = () => setOutput(rot47(input)); // symmetric

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
        <h1>ROT47 Encode / Decode</h1>
        <SafetyNote kind="rot47" />
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
          <h2>About ROT47</h2>
          <p>
            ROT47 is a simple substitution cipher operating on printable ASCII
            characters. It is not secure and only suitable for light
            obfuscation.
          </p>
          <LongTailSEO
            title="ROT47 encoder/decoder online — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "ROT47", url: "https://www.hashkitly.com/rot47" },
            ]}
            faqs={[
              { q: "Is ROT47 secure?", a: "No, it is only obfuscation." },
              {
                q: "Does this run locally?",
                a: "Yes, entirely in your browser.",
              },
              {
                q: "Which characters are transformed?",
                a: "ASCII 33 to 126 inclusive.",
              },
            ]}
            relatedLinks={[
              { name: "ROT13", url: "https://www.hashkitly.com/rot13" },
              { name: "Base64", url: "https://www.hashkitly.com/base64" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
