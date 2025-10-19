"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function rot5(s: string): string {
  return s.replace(/[0-9]/g, (d) =>
    String.fromCharCode(48 + ((d.charCodeAt(0) - 48 + 5) % 10))
  );
}

export default function Rot5Client() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  return (
    <div className="container">
      <div className="box">
        <h1>ROT5</h1>
        <SafetyNote kind="rot13" />
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
        />
        <button
          className="btn"
          onClick={() => setOutput(rot5(input))}
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
            title="ROT5 — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "ROT5", url: "https://www.hashkitly.com/rot5" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "ROT13", url: "https://www.hashkitly.com/rot13" },
              { name: "ROT18", url: "https://www.hashkitly.com/rot18" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
