"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";

function uuidv4(): string {
  const b = new Uint8Array(16);
  crypto.getRandomValues(b);
  b[6] = (b[6] & 0x0f) | 0x40; // version 4
  b[8] = (b[8] & 0x3f) | 0x80; // variant RFC 4122
  const hex = Array.from(b)
    .map((x) => x.toString(16).padStart(2, "0"))
    .join("");
  return `${hex.substring(0, 8)}-${hex.substring(8, 12)}-${hex.substring(
    12,
    16
  )}-${hex.substring(16, 20)}-${hex.substring(20)}`;
}

export default function UuidClient() {
  const [value, setValue] = useState<string>("");

  const generate = () => setValue(uuidv4());

  const handleCopy = async (text: string, btn: HTMLButtonElement) => {
    try {
      await navigator.clipboard.writeText(text);
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
        <h1>UUID v4 Generator</h1>
        <SafetyNote kind="uuid" />
        <div style={{ display: "flex", gap: 8, margin: "12px 0" }}>
          <button className="btn" onClick={generate}>
            Generate UUID
          </button>
        </div>
        {value && (
          <div className="result">
            <div className="row">
              <span>UUID v4:</span>
              <span className="hash">{value}</span>
              <button
                className="copy"
                onClick={(e) => handleCopy(value, e.currentTarget)}
              >
                Copy
              </button>
            </div>
          </div>
        )}
        <div className="intro">
          <h2>About UUID v4</h2>
          <p>
            UUID v4 is randomly generated and useful for unique identifiers. It
            is not a security token.
          </p>
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
