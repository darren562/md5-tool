"use client";
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function ibanValidate(iban: string): boolean {
  const s = iban.toUpperCase().replace(/\s+/g, "");
  if (s.length < 5) return false;
  const rearranged = s.slice(4) + s.slice(0, 4);
  let total = 0; // compute mod 97 iteratively on small chunks to avoid BigInt
  for (let i = 0; i < rearranged.length; i++) {
    const ch = rearranged[i];
    let v: number;
    if (ch >= "A" && ch <= "Z") v = ch.charCodeAt(0) - 55;
    else v = ch.charCodeAt(0) - 48;
    // append v (can be 2 digits) to current number then mod 97
    const digits = String(v);
    for (let k = 0; k < digits.length; k++) {
      total = (total * 10 + (digits.charCodeAt(k) - 48)) % 97;
    }
  }
  return total === 1;
}

export default function IBANClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => setOutput(ibanValidate(input).toString());
  return (
    <div className="container">
      <div className="box">
        <h1>IBAN</h1>
        <SafetyNote kind="iban" />
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter IBAN..."
        />
        <button className="btn" onClick={run} style={{ margin: "12px 0" }}>
          Validate
        </button>
        {output !== "" && (
          <div className="result">
            <div className="row">
              <span>Valid:</span>
              <span className="hash">{output}</span>
            </div>
          </div>
        )}
        <div className="intro">
          <LongTailSEO
            title="IBAN — FAQs"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "IBAN", url: "https://www.hashkitly.com/iban" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "Luhn", url: "/luhn" },
              { name: "Verhoeff", url: "/verhoeff" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
