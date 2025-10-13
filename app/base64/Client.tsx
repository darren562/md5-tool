"use client";

import { useState } from "react";

export default function Base64Client() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [decodeResult, setDecodeResult] = useState<string | null>(null);

  const handleEncode = () => {
    const text = inputText.trim();
    if (!text) {
      alert("Please enter content to encode");
      return;
    }
    setResult(btoa(unescape(encodeURIComponent(text))));
    setDecodeResult(null);
  };

  const handleDecode = () => {
    const text = inputText.trim();
    if (!text) {
      alert("Please enter Base64 content to decode");
      return;
    }
    try {
      setDecodeResult(decodeURIComponent(escape(atob(text))));
      setResult(null);
    } catch {
      alert("Invalid Base64 string");
    }
  };

  const handleCopy = async (text: string, buttonElement: HTMLButtonElement) => {
    try {
      await navigator.clipboard.writeText(text);
      const originalText = buttonElement.textContent;
      buttonElement.textContent = "Copied";
      buttonElement.classList.add("ok");
      setTimeout(() => {
        buttonElement.textContent = originalText;
        buttonElement.classList.remove("ok");
      }, 1200);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h1>Base64 Encode & Decode Online</h1>
        <textarea
          id="txt"
          placeholder="Enter text or Base64 to encode/decode..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="tip">
          This tool encodes and decodes Base64 locally in your browser. Your
          content will never be uploaded. 100% secure and private.
        </div>
        <div style={{ display: "flex", gap: 8, margin: "12px 0" }}>
          <button className="btn" onClick={handleEncode}>
            Encode
          </button>
          <button className="btn" onClick={handleDecode}>
            Decode
          </button>
        </div>
        {result && (
          <div id="res" className="result">
            <div className="row">
              <span>Base64 Encoded:</span>
              <span id="base64-enc" className="hash">
                {result}
              </span>
              <button
                className="copy"
                onClick={(e) => handleCopy(result, e.currentTarget)}
                id="copy-base64-enc"
              >
                Copy
              </button>
            </div>
          </div>
        )}
        {decodeResult && (
          <div id="res" className="result">
            <div className="row">
              <span>Base64 Decoded:</span>
              <span id="base64-dec" className="hash">
                {decodeResult}
              </span>
              <button
                className="copy"
                onClick={(e) => handleCopy(decodeResult, e.currentTarget)}
                id="copy-base64-dec"
              >
                Copy
              </button>
            </div>
          </div>
        )}
        <div className="intro">
          <h2>What is Base64?</h2>
          <p>
            Base64 is an encoding scheme that converts binary data into ASCII
            text. It is commonly used to encode data for transmission over media
            that are designed to deal with textual data, ensuring that the data
            remains intact without modification during transport.
          </p>
          <h2>Base64 Features</h2>
          <p>
            - Converts any text or binary data to ASCII
            <br />
            - Safe for URLs, emails, and web forms
            <br />- Widely used in data serialization and transfer
          </p>
          <h2>Application Scenarios</h2>
          <p>
            - Embedding images in HTML/CSS
            <br />
            - Data transfer in APIs
            <br />- Email attachments encoding
          </p>
        </div>
      </div>
    </div>
  );
}
