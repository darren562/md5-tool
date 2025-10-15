"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";

function encode(text: string) {
  try {
    return encodeURIComponent(text);
  } catch (e) {
    return "";
  }
}

function decode(text: string) {
  try {
    return decodeURIComponent(text);
  } catch (e) {
    return "";
  }
}

export default function UrlClient() {
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState<string>("");

  const onEncode = () => setOutput(encode(inputText));
  const onDecode = () => setOutput(decode(inputText));

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
        <h1>URL Encode / Decode</h1>
        <SafetyNote kind="url" />
        <textarea
          id="txt"
          placeholder="Enter text to encode/decode..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
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
          <h2>About URL Encoding</h2>
          <p>
            URL encoding makes text safe for inclusion in URLs by escaping
            special characters. It is not a security measure and does not hide
            content.
          </p>
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
