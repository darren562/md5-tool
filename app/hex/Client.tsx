"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";

function toHex(text: string): string {
  const bytes = new TextEncoder().encode(text);
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function fromHex(hex: string): string {
  const clean = hex.trim().replace(/^0x/i, "");
  if (clean.length % 2 !== 0 || /[^0-9a-f]/i.test(clean)) {
    throw new Error("Invalid hex string");
  }
  const len = clean.length / 2;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = parseInt(clean.substr(i * 2, 2), 16);
  }
  return new TextDecoder().decode(bytes);
}

export default function HexClient() {
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState<string>("");

  const onTextToHex = () => {
    setOutput(toHex(inputText));
  };

  const onHexToText = () => {
    try {
      setOutput(fromHex(inputText));
    } catch (e) {
      alert("Invalid hex input");
      setOutput("");
    }
  };

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
        <h1>Hex Encode / Decode</h1>
        <SafetyNote kind="hex" />
        <textarea
          id="txt"
          placeholder="Enter text or hex..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div style={{ display: "flex", gap: 8, margin: "12px 0" }}>
          <button className="btn" style={{ flex: 1 }} onClick={onTextToHex}>
            Text → Hex
          </button>
          <button className="btn" style={{ flex: 1 }} onClick={onHexToText}>
            Hex → Text
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
          <h2>About Hex</h2>
          <p>
            Hex is a human-readable encoding of bytes. This tool converts
            between UTF-8 text and hex.
          </p>
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
