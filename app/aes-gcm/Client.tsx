"use client";

import { useState } from "react";
import CryptoJS from "crypto-js";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";
import LongTailSEO from "../components/LongTailSEO";

async function deriveKey(
  passphrase: string,
  salt: Uint8Array,
  iterations: number
) {
  const enc = new TextEncoder();
  const baseKey = await crypto.subtle.importKey(
    "raw",
    enc.encode(passphrase),
    "PBKDF2",
    false,
    ["deriveKey"]
  );
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations, hash: "SHA-256" },
    baseKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

function toBase64(bytes: Uint8Array): string {
  const wa = CryptoJS.lib.WordArray.create(bytes as any as number[]);
  return CryptoJS.enc.Base64.stringify(wa);
}

function fromBase64(b64: string): Uint8Array {
  const wa = CryptoJS.enc.Base64.parse(b64);
  const { words, sigBytes } = wa;
  const u8 = new Uint8Array(sigBytes);
  for (let i = 0; i < sigBytes; i++) {
    u8[i] = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
  }
  return u8;
}

function toHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function concatBytes(...parts: Uint8Array[]): Uint8Array {
  const len = parts.reduce((a, b) => a + b.length, 0);
  const out = new Uint8Array(len);
  let offset = 0;
  for (const p of parts) {
    out.set(p, offset);
    offset += p.length;
  }
  return out;
}

export default function AesGcmClient() {
  const [inputText, setInputText] = useState("");
  const [passphrase, setPassphrase] = useState("");
  const [iterations, setIterations] = useState<number>(100000);
  const [cipherOut, setCipherOut] = useState<string>("");
  const [plainOut, setPlainOut] = useState<string>("");

  const encrypt = async () => {
    const text = inputText.trim();
    if (!text) return alert("Enter plaintext to encrypt");
    if (!passphrase) return alert("Enter passphrase");
    const salt = new Uint8Array(16);
    crypto.getRandomValues(salt);
    const iv = new Uint8Array(12);
    crypto.getRandomValues(iv);
    const key = await deriveKey(passphrase, salt, iterations);
    const enc = new TextEncoder();
    const ct = new Uint8Array(
      await crypto.subtle.encrypt(
        { name: "AES-GCM", iv },
        key,
        enc.encode(text)
      )
    );
    const packed = concatBytes(salt, iv, ct);
    setCipherOut(toBase64(packed));
    setPlainOut("");
  };

  const decrypt = async () => {
    const b64 = inputText.trim();
    if (!b64) return alert("Paste base64 ciphertext to decrypt");
    if (!passphrase) return alert("Enter passphrase");
    const packed = fromBase64(b64);
    if (packed.length < 16 + 12 + 1) return alert("Invalid ciphertext format");
    const salt = packed.slice(0, 16);
    const iv = packed.slice(16, 28);
    const ct = packed.slice(28);
    const key = await deriveKey(passphrase, salt, iterations);
    try {
      const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ct);
      setPlainOut(new TextDecoder().decode(new Uint8Array(pt)));
      setCipherOut("");
    } catch (e) {
      alert("Decryption failed (bad passphrase or corrupted data)");
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
        <h1>AES-GCM Encrypt / Decrypt</h1>
        <SafetyNote kind="aesgcm" />
        <textarea
          id="txt"
          placeholder="Enter plaintext or base64 ciphertext..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <input
          style={{
            width: "100%",
            marginTop: 12,
            padding: "10px 12px",
            fontSize: 15,
            border: "1px solid #cbd5e1",
            borderRadius: 6,
            boxSizing: "border-box",
          }}
          type="password"
          placeholder="Passphrase"
          value={passphrase}
          onChange={(e) => setPassphrase(e.target.value)}
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
            placeholder="Iterations (PBKDF2)"
            value={iterations}
            onChange={(e) => setIterations(parseInt(e.target.value || "0", 10))}
          />
        </div>
        <div className="tip">
          Pack format (Base64): [salt(16) | iv(12) | ciphertext]. Always use a
          unique IV per message.
        </div>
        <div style={{ display: "flex", gap: 8, margin: "12px 0" }}>
          <button className="btn" style={{ flex: 1 }} onClick={encrypt}>
            Encrypt
          </button>
          <button className="btn" style={{ flex: 1 }} onClick={decrypt}>
            Decrypt
          </button>
        </div>
        {cipherOut && (
          <div className="result">
            <div className="row">
              <span>Ciphertext (Base64):</span>
              <span className="hash" style={{ wordBreak: "break-all" }}>
                {cipherOut}
              </span>
              <button
                className="copy"
                onClick={(e) => handleCopy(cipherOut, e.currentTarget)}
              >
                Copy
              </button>
            </div>
          </div>
        )}
        {plainOut && (
          <div className="result">
            <div className="row">
              <span>Decrypted Text:</span>
              <span className="hash" style={{ wordBreak: "break-all" }}>
                {plainOut}
              </span>
              <button
                className="copy"
                onClick={(e) => handleCopy(plainOut, e.currentTarget)}
              >
                Copy
              </button>
            </div>
          </div>
        )}
        <div className="intro">
          <h2>About AES-GCM</h2>
          <p>
            AES-GCM is an authenticated encryption mode that ensures
            confidentiality and integrity. This demo derives a key from a
            passphrase using PBKDF2 (SHA-256) with configurable iterations.
          </p>

          <LongTailSEO
            title="AES-GCM encrypt/decrypt online  in-browser, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "AES-GCM", url: "https://www.hashkitly.com/aes-gcm" },
            ]}
            faqs={[
              {
                q: "Why use AES-GCM?",
                a: "AES-GCM provides confidentiality and integrity with a built-in MAC (GCM tag).",
              },
              {
                q: "What must be unique?",
                a: "The IV (nonce) must be unique per key. Never reuse an IV with the same key.",
              },
              {
                q: "How to derive keys from passphrases?",
                a: "Use a KDF (Argon2, scrypt, or PBKDF2) with a random salt to derive an AES key from a passphrase.",
              },
              {
                q: "Does this AES-GCM tool upload my data?",
                a: "No. All operations happen in your browser (client-side).",
              },
            ]}
            relatedLinks={[
              {
                name: "AES (CryptoJS demo)",
                url: "https://www.hashkitly.com/aes",
              },
              { name: "PBKDF2", url: "https://www.hashkitly.com/pbkdf2" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
