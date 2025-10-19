"use client";
export {};
import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

function toBytes(s: string): Uint8Array {
  return new TextEncoder().encode(s);
}

// Paul Hsieh's SuperFastHash (public domain)
function superFastHash(input: string): number {
  const data = toBytes(input);
  const len = data.length;
  let hash = len;
  let rem = len & 3;
  const len4 = len >> 2;
  let i = 0;
  for (let j = 0; j < len4; j++) {
    const lower = data[i] | (data[i + 1] << 8);
    const upper = data[i + 2] | (data[i + 3] << 8);
    hash += lower;
    let tmp = ((upper << 11) ^ hash) >>> 0;
    hash = ((hash << 16) ^ tmp) >>> 0;
    hash += hash >>> 11;
    i += 4;
  }
  switch (rem) {
    case 3: {
      hash += data[i] | (data[i + 1] << 8);
      hash ^= (hash << 16) >>> 0;
      hash ^= data[i + 2] << 18;
      hash += hash >>> 11;
      break;
    }
    case 2: {
      hash += data[i] | (data[i + 1] << 8);
      hash ^= (hash << 11) >>> 0;
      hash += hash >>> 17;
      break;
    }
    case 1: {
      hash += data[i];
      hash ^= (hash << 10) >>> 0;
      hash += hash >>> 1;
      break;
    }
  }
  // Force "avalanching" of final 127 bits
  hash ^= (hash << 3) >>> 0;
  hash += hash >>> 5;
  hash ^= (hash << 4) >>> 0;
  hash += hash >>> 17;
  hash ^= (hash << 25) >>> 0;
  hash += hash >>> 6;
  return hash >>> 0;
}

export default function SuperFastHashClient() {
  const [inputText, setInputText] = useState("");
  const [hex, setHex] = useState<string>("");
  const [dec, setDec] = useState<number | null>(null);

  const onCompute = () => {
    const val = superFastHash(inputText);
    setDec(val);
    setHex(val.toString(16).padStart(8, "0"));
  };

  return (
    <div className="container">
      <div className="box">
        <h1>SuperFastHash</h1>
        <SafetyNote kind="superfasthash" />
        <textarea
          placeholder="Enter text..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="btn" onClick={onCompute}>
          Compute
        </button>
        {(hex || dec !== null) && (
          <div className="result">
            {hex && (
              <div className="row">
                <span>Hash (hex):</span>
                <span className="hash">{hex}</span>
              </div>
            )}
            {dec !== null && (
              <div className="row">
                <span>Hash (decimal):</span>
                <span className="hash">{dec}</span>
              </div>
            )}
          </div>
        )}
        <div className="intro">
          <LongTailSEO
            title="SuperFastHash — FAQs"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              {
                name: "SuperFastHash",
                url: "https://www.hashkitly.com/superfasthash",
              },
            ]}
            faqs={[]}
            relatedLinks={[
              { name: "Murmur3", url: "/murmur3" },
              { name: "xxHash32", url: "/xxhash32" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
