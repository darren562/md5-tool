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
