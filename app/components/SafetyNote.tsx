"use client";

import React from "react";

const MESSAGES: Record<string, string> = {
  md5: "MD5 for non-security uses only (checksums, cache keys) — not for password storage.",
  base64: "Base64 is encoding, not encryption — anyone can decode it.",
  sha256: "SHA256 is fast; use bcrypt / Argon2 / scrypt / PBKDF2 for password storage.",
  sha1: "SHA-1 has known collisions; avoid for new security designs.",
  sha512: "Raw SHA-512 is fast; still use slow salted KDFs for passwords.",
  aes: "Demo only: simplified passphrase -> key; real apps need salt + IV + AES-GCM.",
};

export function SafetyNote({ kind }: { kind: keyof typeof MESSAGES }) {
  return (
    <div className="tip" style={{ marginTop: 4 }}>
      {MESSAGES[kind]}
    </div>
  );
}
