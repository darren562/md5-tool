"use client";

import React from "react";

const MESSAGES: Record<string, string> = {
  md5: "MD5 for non-security uses only (checksums, cache keys) — not for password storage.",
  base64: "Base64 is encoding, not encryption — anyone can decode it.",
  sha256:
    "SHA256 is fast; use bcrypt / Argon2 / scrypt / PBKDF2 for password storage.",
  sha1: "SHA-1 has known collisions; avoid for new security designs.",
  sha512: "Raw SHA-512 is fast; still use slow salted KDFs for passwords.",
  aes: "Demo only: simplified passphrase -> key; real apps need salt + IV + AES-GCM.",
  sha3: "SHA-3 (Keccak) is fast and modern; still use a slow KDF for passwords.",
  ripemd160:
    "RIPEMD-160 is legacy; avoid for new designs unless required for compatibility.",
  hmac256:
    "HMAC provides integrity/authenticity, not encryption. Requires a shared secret.",
  hmac512:
    "HMAC provides integrity/authenticity, not encryption. Requires a shared secret.",
  sha224:
    "SHA-224 is a SHA-2 variant; fast and fine for integrity, not for password storage.",
  sha384:
    "SHA-384 is a SHA-2 variant; fast and fine for integrity, not for password storage.",
  tripledes:
    "TripleDES is legacy and slower; prefer AES-GCM for modern encryption.",
  url: "URL encoding is not encryption; it only makes text safe for URLs.",
  uuid: "UUID v4 provides uniqueness, not secrecy; do not embed secrets in IDs.",
  pbkdf2:
    "PBKDF2 demo; choose high iterations. Consider Argon2/scrypt for stronger resistance.",
  crc32: "CRC32 is a checksum for error detection, not a cryptographic hash.",
  hex: "Hex is just an encoding of bytes; it conveys no security by itself.",
  random:
    "Random bytes come from your browser CSPRNG; do not reuse for keys across contexts.",
  jwt: "Decoding a JWT doesn’t verify it. Always validate signature, issuer, audience, and expiry on the server.",
  aesgcm:
    "AES-GCM provides confidentiality and integrity when used with unique nonces and proper key derivation.",
  base32: "Base32 is an encoding (RFC 4648), not encryption.",
  base58: "Base58 is an encoding (Bitcoin alphabet), not encryption.",
  hmacsha1:
    "HMAC-SHA1 is legacy and generally replaced by HMAC-SHA256/512 for new systems.",
  hkdf: "HKDF expands key material; it is not a password hasher by itself.",
  rsa: "RSA-OAEP provides asymmetric encryption; protect private keys and use adequate key sizes.",
};

type Variant = "info" | "warn";

export function SafetyNote({
  kind,
  variant = "info",
}: {
  kind: keyof typeof MESSAGES;
  variant?: Variant;
}) {
  const icon = variant === "warn" ? "⚠️" : "💡";
  return (
    <div
      className={`safety-note safety-note--${variant}`}
      role="note"
      aria-label="security note"
    >
      <span className="safety-note__icon" aria-hidden>
        {icon}
      </span>
      <span className="safety-note__text">{MESSAGES[kind]}</span>
    </div>
  );
}
