"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";

function base64UrlToUint8Array(input: string): Uint8Array {
  const pad =
    input.length % 4 === 2
      ? "=="
      : input.length % 4 === 3
      ? "="
      : input.length % 4 === 1
      ? "A"
      : "";
  const b64 = input.replace(/-/g, "+").replace(/_/g, "/") + pad;
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function decodePart(part: string) {
  try {
    const bytes = base64UrlToUint8Array(part);
    const json = new TextDecoder().decode(bytes);
    return JSON.stringify(JSON.parse(json), null, 2);
  } catch (e) {
    return "";
  }
}

export default function JwtClient() {
  const [jwt, setJwt] = useState("");
  const [header, setHeader] = useState("");
  const [payload, setPayload] = useState("");

  const onDecode = () => {
    const parts = jwt.split(".");
    if (parts.length < 2) {
      alert("Invalid JWT format");
      return;
    }
    setHeader(decodePart(parts[0]));
    setPayload(decodePart(parts[1]));
  };

  return (
    <div className="container">
      <div className="box">
        <h1>JWT Decode (Header/Payload)</h1>
        <SafetyNote kind="jwt" variant="warn" />
        <textarea
          id="txt"
          placeholder="Paste JWT here (xxx.yyy.zzz)"
          value={jwt}
          onChange={(e) => setJwt(e.target.value)}
        />
        <button className="btn" onClick={onDecode}>
          Decode
        </button>
        {(header || payload) && (
          <div className="result">
            {header && (
              <div className="row" style={{ alignItems: "flex-start" }}>
                <span>Header:</span>
                <pre className="hash" style={{ whiteSpace: "pre-wrap" }}>
                  {header}
                </pre>
              </div>
            )}
            {payload && (
              <div className="row" style={{ alignItems: "flex-start" }}>
                <span>Payload:</span>
                <pre className="hash" style={{ whiteSpace: "pre-wrap" }}>
                  {payload}
                </pre>
              </div>
            )}
          </div>
        )}
        <div className="intro">
          <h2>About JWT</h2>
          <p>
            This tool decodes the Base64URL-encoded header and payload. It does
            not verify the signature. Always validate tokens server-side.
          </p>
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
