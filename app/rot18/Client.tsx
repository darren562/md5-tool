"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function rot13(s: string): string {
  return s.replace(/[A-Za-z]/g, (c) =>
    String.fromCharCode(
      (c <= "Z" ? 65 : 97) +
        ((c.charCodeAt(0) - (c <= "Z" ? 65 : 97) + 13) % 26)
    )
  );
}
function rot5(s: string): string {
  return s.replace(/[0-9]/g, (d) =>
    String.fromCharCode(48 + ((d.charCodeAt(0) - 48 + 5) % 10))
  );
}
function rot18(s: string): string {
  return rot5(rot13(s));
}

export default function Rot18Client() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  return (
    <div className="container">
      <div className="box">
        <h1>ROT18</h1>
        <SafetyNote kind="rot13" />
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
        />
        <button
          className="btn"
          onClick={() => setOutput(rot18(input))}
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
            title="ROT18 — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "ROT18", url: "https://www.hashkitly.com/rot18" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "ROT13", url: "https://www.hashkitly.com/rot13" },
              { name: "ROT5", url: "https://www.hashkitly.com/rot5" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
