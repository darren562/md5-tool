"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import { SafetyNote } from "../components/SafetyNote";

async function genKeyPair() {
  return crypto.subtle.generateKey(
    {
      name: "RSA-OAEP",
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256",
    },
    true,
    ["encrypt", "decrypt"]
  );
}

async function exportKeyJwk(key: CryptoKey) {
  return crypto.subtle.exportKey("jwk", key);
}

async function importKeyJwk(jwk: JsonWebKey, isPrivate: boolean) {
  return crypto.subtle.importKey(
    "jwk",
    jwk,
    { name: "RSA-OAEP", hash: "SHA-256" },
    true,
    isPrivate ? ["decrypt"] : ["encrypt"]
  );
}

function strToBytes(s: string) {
  return new TextEncoder().encode(s);
}
function bytesToStr(b: ArrayBuffer | Uint8Array) {
  const u8 = b instanceof Uint8Array ? b : new Uint8Array(b);
  return new TextDecoder().decode(u8);
}

function b64encode(bytes: Uint8Array) {
  let s = "";
  for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
  return btoa(s);
}
function b64decode(b64: string) {
  const bin = atob(b64);
  const u = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
  return u;
}

export default function RsaOaepClient() {
  const [publicKey, setPublicKey] = useState<CryptoKey | null>(null);
  const [privateKey, setPrivateKey] = useState<CryptoKey | null>(null);
  const [message, setMessage] = useState("");
  const [ciphertext, setCiphertext] = useState("");
  const [plaintext, setPlaintext] = useState("");
  const [pubJwk, setPubJwk] = useState("");
  const [privJwk, setPrivJwk] = useState("");

  const generate = async () => {
    try {
      const kp = await genKeyPair();
      setPublicKey(kp.publicKey);
      setPrivateKey(kp.privateKey);
      const pj = await exportKeyJwk(kp.publicKey);
      const sj = await exportKeyJwk(kp.privateKey);
      setPubJwk(JSON.stringify(pj, null, 2));
      setPrivJwk(JSON.stringify(sj, null, 2));
    } catch {
      alert("Key generation failed");
    }
  };

  const encrypt = async () => {
    if (!publicKey) return alert("Generate or import a public key first");
    try {
      const ct = await crypto.subtle.encrypt(
        { name: "RSA-OAEP" },
        publicKey,
        strToBytes(message)
      );
      setCiphertext(b64encode(new Uint8Array(ct)));
      setPlaintext("");
    } catch {
      alert("Encryption failed");
    }
  };

  const decrypt = async () => {
    if (!privateKey) return alert("Generate or import a private key first");
    try {
      const pt = await crypto.subtle.decrypt(
        { name: "RSA-OAEP" },
        privateKey,
        b64decode(message)
      );
      setPlaintext(bytesToStr(pt));
      setCiphertext("");
    } catch {
      alert("Decryption failed");
    }
  };

  const importPub = async () => {
    try {
      const jwk = JSON.parse(pubJwk);
      const k = await importKeyJwk(jwk, false);
      setPublicKey(k);
    } catch {
      alert("Invalid public JWK");
    }
  };
  const importPriv = async () => {
    try {
      const jwk = JSON.parse(privJwk);
      const k = await importKeyJwk(jwk, true);
      setPrivateKey(k);
    } catch {
      alert("Invalid private JWK");
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
        <h1>RSA-OAEP (2048/SHA-256) Encrypt / Decrypt</h1>
        <SafetyNote kind="rsa" />
        <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
          <button className="btn" onClick={generate}>
            Generate Key Pair
          </button>
        </div>
        <div className="tip">
          Keys are generated and used locally in your browser. Export/import JWK
          for reuse.
        </div>
        <div
          style={{
            display: "grid",
            gap: 8,
            gridTemplateColumns: "1fr 1fr",
            margin: "12px 0",
          }}
        >
          <div>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              Public Key (JWK)
            </div>
            <textarea
              value={pubJwk}
              onChange={(e) => setPubJwk(e.target.value)}
              placeholder="Public JWK..."
            />
            <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
              <button
                className="btn"
                onClick={(e) => copy(pubJwk, e.currentTarget)}
              >
                Copy
              </button>
              <button className="btn" onClick={importPub}>
                Import
              </button>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              Private Key (JWK)
            </div>
            <textarea
              value={privJwk}
              onChange={(e) => setPrivJwk(e.target.value)}
              placeholder="Private JWK..."
            />
            <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
              <button
                className="btn"
                onClick={(e) => copy(privJwk, e.currentTarget)}
              >
                Copy
              </button>
              <button className="btn" onClick={importPriv}>
                Import
              </button>
            </div>
          </div>
        </div>
        <textarea
          id="txt"
          placeholder="Enter plaintext to encrypt OR paste base64 ciphertext to decrypt..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div style={{ display: "flex", gap: 8, margin: "12px 0" }}>
          <button className="btn" style={{ flex: 1 }} onClick={encrypt}>
            Encrypt (with Public)
          </button>
          <button className="btn" style={{ flex: 1 }} onClick={decrypt}>
            Decrypt (with Private)
          </button>
        </div>
        {ciphertext && (
          <div className="result">
            <div className="row">
              <span>Ciphertext (Base64):</span>
              <span className="hash" style={{ wordBreak: "break-all" }}>
                {ciphertext}
              </span>
              <button
                className="copy"
                onClick={(e) => copy(ciphertext, e.currentTarget)}
              >
                Copy
              </button>
            </div>
          </div>
        )}
        {plaintext && (
          <div className="result">
            <div className="row">
              <span>Decrypted Text:</span>
              <span className="hash" style={{ wordBreak: "break-all" }}>
                {plaintext}
              </span>
              <button
                className="copy"
                onClick={(e) => copy(plaintext, e.currentTarget)}
              >
                Copy
              </button>
            </div>
          </div>
        )}
        <div className="intro">
          <h2>Notes</h2>
          <p>
            RSA-OAEP is suitable for small messages; for larger data, encrypt a
            random symmetric key and use AES-GCM (hybrid encryption).
          </p>
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
