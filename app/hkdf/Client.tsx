"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";
import CryptoJS from "crypto-js";
import LongTailSEO from "../components/LongTailSEO";

async function hkdfExtractExpand(
  ikm: Uint8Array,
  salt: Uint8Array,
  info: Uint8Array,
  length: number
) {
  const baseKey = await crypto.subtle.importKey(
    "raw",
    ikm,
    { name: "HKDF" },
    false,
    ["deriveBits"]
  );
  const bits = await crypto.subtle.deriveBits(
    { name: "HKDF", hash: "SHA-256", salt, info },
    baseKey,
    length * 8
  );
  return new Uint8Array(bits);
}

function toHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
function toBase64(bytes: Uint8Array): string {
  const wa = CryptoJS.lib.WordArray.create(bytes as any as number[]);
  return CryptoJS.enc.Base64.stringify(wa);
}

export default function HkdfClient() {
  const [ikm, setIkm] = useState("");
  const [salt, setSalt] = useState("");
  const [info, setInfo] = useState("");
  const [length, setLength] = useState<number>(32);
  const [outHex, setOutHex] = useState("");
  const [outB64, setOutB64] = useState("");

  const derive = async () => {
    try {
      const enc = new TextEncoder();
      const key = await hkdfExtractExpand(
        enc.encode(ikm),
        enc.encode(salt),
        enc.encode(info),
        Math.max(1, Math.min(1024, length))
      );
      setOutHex(toHex(key));
      setOutB64(toBase64(key));
    } catch (e) {
      alert("HKDF derivation failed");
    }
  };

  const copy = async (v: string, btn: HTMLButtonElement) => {
    try {
      await navigator.clipboard.writeText(v);
      const o = btn.textContent;
      btn.textContent = "Copied";
      btn.classList.add("ok");
      setTimeout(() => {
        btn.textContent = o;
        btn.classList.remove("ok");
      }, 1200);
    } catch {}
  };

  return (
    <div className="container">
      <div className="box">
        <h1>HKDF (SHA-256) Key Expansion</h1>
        <SafetyNote kind="hkdf" />
        <textarea
          id="txt"
          placeholder="Input keying material (IKM)"
          value={ikm}
          onChange={(e) => setIkm(e.target.value)}
        />
        <input
          style={{
            width: "100%",
            marginTop: 8,
            padding: "10px 12px",
            fontSize: 15,
            border: "1px solid #cbd5e1",
            borderRadius: 6,
          }}
          placeholder="Salt (optional)"
          value={salt}
          onChange={(e) => setSalt(e.target.value)}
        />
        <input
          style={{
            width: "100%",
            marginTop: 8,
            padding: "10px 12px",
            fontSize: 15,
            border: "1px solid #cbd5e1",
            borderRadius: 6,
          }}
          placeholder="Info (optional)"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        />
        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <input
            style={{
              flex: 1,
              padding: "10px 12px",
              fontSize: 15,
              border: "1px solid #cbd5e1",
              borderRadius: 6,
            }}
            type="number"
            placeholder="Output length (bytes)"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value || "0", 10))}
          />
          <button className="btn" onClick={derive}>
            Derive
          </button>
        </div>
        {(outHex || outB64) && (
          <div className="result">
            {outHex && (
              <div className="row">
                <span>Key (Hex):</span>
                <span className="hash" style={{ wordBreak: "break-all" }}>
                  {outHex}
                </span>
                <button
                  className="copy"
                  onClick={(e) => copy(outHex, e.currentTarget)}
                >
                  Copy
                </button>
              </div>
            )}
            {outB64 && (
              <div className="row">
                <span>Key (Base64):</span>
                <span className="hash" style={{ wordBreak: "break-all" }}>
                  {outB64}
                </span>
                <button
                  className="copy"
                  onClick={(e) => copy(outB64, e.currentTarget)}
                >
                  Copy
                </button>
              </div>
            )}
          </div>
        )}
        <div className="intro">
          <h2>About HKDF</h2>
          <p>
            HKDF is a standard for deriving strong keys from initial keying
            material using HMAC as a PRF. It is commonly used to expand shared
            secrets into multiple keys.
          </p>

          <LongTailSEO
            title="HKDF online  HMAC-based key derivation (in-browser, no upload)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "HKDF", url: "https://www.hashkitly.com/hkdf" },
            ]}
            faqs={[
              {
                q: "What does HKDF do?",
                a: "It extracts and expands key material using HMAC, turning a shared secret into strong keys.",
              },
              {
                q: "Is HKDF a password hasher?",
                a: "No. Use bcrypt/scrypt/Argon2 for password hashing; HKDF is for key expansion.",
              },
              {
                q: "Does this tool upload my data?",
                a: "No. HKDF derivation runs entirely in your browser.",
              },
            ]}
            relatedLinks={[
              { name: "PBKDF2", url: "https://www.hashkitly.com/pbkdf2" },
              {
                name: "HMAC-SHA256",
                url: "https://www.hashkitly.com/hmac-sha256",
              },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
