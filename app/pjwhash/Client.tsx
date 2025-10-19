"use client";
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function pjwHash(str: string): number {
  let BitsInUnsignedInt = 32;
  let ThreeQuarters = (BitsInUnsignedInt * 3) / 4; // 24
  let OneEighth = BitsInUnsignedInt / 8; // 4
  let HighBits = 0xffffffff << (BitsInUnsignedInt - OneEighth); // top 4 bits mask
  HighBits = HighBits >>> 0;
  let hash = 0 >>> 0;
  let test = 0 >>> 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << OneEighth) + str.charCodeAt(i)) >>> 0;
    test = hash & HighBits;
    if (test !== 0) {
      hash =
        (((hash ^ (test >>> ThreeQuarters)) & (~HighBits >>> 0)) >>> 0) >>> 0;
    }
  }
  return hash >>> 0;
}

export default function PJWHashClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    const h = pjwHash(input) >>> 0;
    setOutput(h.toString(16).padStart(8, "0"));
  };
  return (
    <div className="container">
      <div className="box">
        <h1>PJW Hash</h1>
        <SafetyNote kind="pjwhash" />
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
        />
        <button className="btn" onClick={run} style={{ margin: "12px 0" }}>
          Hash
        </button>
        {output !== "" && (
          <div className="result">
            <div className="row">
              <span>PJW Hash (hex):</span>
              <span className="hash">{output}</span>
            </div>
          </div>
        )}
        <div className="intro">
          <LongTailSEO
            title="PJW Hash — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "PJW Hash", url: "https://www.hashkitly.com/pjwhash" },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "DEK Hash", url: "/dekhash" },
              { name: "JS Hash", url: "/jshash" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
