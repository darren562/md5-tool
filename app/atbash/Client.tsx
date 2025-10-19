"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function atbash(s: string): string {
  let out = "";
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    if (c >= 65 && c <= 90) out += String.fromCharCode(65 + (25 - (c - 65)));
    else if (c >= 97 && c <= 122)
      out += String.fromCharCode(97 + (25 - (c - 97)));
    else out += s[i];
  }
  return out;
}

export default function AtbashClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  return (
    <div className="container">
      <div className="box">
        <h1>Atbash Cipher</h1>
        <SafetyNote kind="caesar" />
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
        />
        <button
          className="btn"
          onClick={() => setOutput(atbash(input))}
          style={{ margin: "12px 0" }}
        >
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
            title="Atbash cipher — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Atbash", url: "https://www.hashkitly.com/atbash" },
            ]}
            faqs={[{ q: "Secure?", a: "No, it is a historical substitution." }]}
            relatedLinks={[
              { name: "Caesar", url: "https://www.hashkitly.com/caesar" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
