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
  fnv1a:
    "FNV-1a is a non-cryptographic hash for quick checks; do not use for security.",
  adler32:
    "Adler-32 is a checksum for accidental errors; not cryptographically secure.",
  murmur3:
    "MurmurHash3 is non-cryptographic; suitable for hash tables, not security.",
  crc16:
    "CRC16 detects accidental errors in transmission; not cryptographic integrity.",
  hmacmd5:
    "HMAC provides integrity/authenticity; MD5 is legacy. Prefer HMAC-SHA256/512 for new systems.",
  djb2: "DJB2 is a simple non-cryptographic hash; use only for non-security purposes.",
  crc64: "CRC64 detects accidental errors; not a cryptographic hash.",
  crc8: "CRC-8 is for simple error detection; not cryptographic integrity.",
  fnv1a64: "FNV-1a 64 is non-cryptographic; use modern hashes for security.",
  crc32c: "CRC-32C detects accidental errors; not a cryptographic hash.",
  xxhash32: "xxHash32 is non-cryptographic; use for speed, not security.",
  jenkins:
    "Jenkins one-at-a-time is a simple non-cryptographic hash for hash table usage.",
  rot13: "ROT13 is reversible obfuscation only. Do not use it for security.",
  rot47:
    "ROT47 is reversible obfuscation only. Avoid for security or sensitive data.",
  ascii85:
    "ASCII85/Base85 is an encoding, not encryption. Anyone can decode it.",
  sdbm: "SDBM is a simple non-cryptographic hash; not for security.",
  elf: "ELF hash is non-cryptographic; avoid for security.",
  fnv132: "FNV-1 32 is non-cryptographic; use only for non-security purposes.",
  fnv164: "FNV-1 64 is non-cryptographic; use only for non-security purposes.",
  crc24: "CRC-24 (OpenPGP) is an error-detecting checksum; not cryptographic.",
  crc7: "CRC-7 is an error-detecting checksum; not cryptographic.",
  base64url: "Base64url is encoding, not encryption — URL-safe, no padding.",
  z85: "Z85 is an encoding for binary data; inputs must meet length constraints.",
  base91: "Base91 is an encoding for compact ASCII; not encryption.",
  html: "HTML entities encoding is not security; for sanitization use proper libraries.",
  caesar: "Caesar is a learning cipher only; not secure.",
  vigenere: "Vigenère is a learning cipher; not secure.",
  bkdr: "BKDR is non-cryptographic; use only for non-security purposes.",
  loselose: "Lose Lose is a trivial non-crypto hash; avoid for real uses.",
  fletcher16: "Fletcher-16 is a checksum; not cryptographic integrity.",
  fletcher32: "Fletcher-32 is a checksum; not cryptographic integrity.",
  crc16modbus: "CRC-16/MODBUS detects errors; not a cryptographic hash.",
  crc16xmodem:
    "CRC-16/XMODEM detects errors; parameters: poly 0x1021, init 0x0000.",
  crc16ibm: "CRC-16/IBM (ARC) reflects bits; detects errors only.",
  sum8: "Sum-8 is a trivial checksum; do not use for security.",
  xor8: "XOR-8 is a trivial checksum; do not use for security.",
  crc16ccitt:
    "CRC-16/CCITT-FALSE detects errors; params: poly 0x1021, init 0xFFFF.",
  crc16x25: "CRC-16/X25 detects errors; reflected, xorout 0xFFFF.",
  crc16kermit: "CRC-16/KERMIT detects errors; reflected poly, init 0.",
  lrc8: "LRC-8 is a simple longitudinal checksum; not cryptographic.",
  railfence: "Rail Fence is a classical transposition cipher; not secure.",
  affine: "Affine cipher is classical and weak; not for security.",
  baconian: "Baconian cipher is a simple steganographic encoding; not secure.",
  polybius: "Polybius square is a classical cipher; not secure.",
  crockford: "Crockford Base32 is an encoding; not encryption.",
  rshash: "RS Hash is non-cryptographic; use only for non-security purposes.",
  base45: "Base45 is an encoding (RFC 9285), not encryption.",
  base62: "Base62 is an encoding for compact text; not encryption.",
  base36: "Base36 is an encoding; not encryption.",
  quoted: "Quoted-Printable is a transfer encoding; not encryption.",
  base32hex: "Base32hex (RFC 4648) is an encoding; not encryption.",
  base85rfc1924: "RFC 1924 Base85 is an encoding; not encryption.",
  playfair: "Playfair is a classical cipher; not secure.",
  beaufort: "Beaufort is a classical cipher; not secure.",
  autokey: "Autokey is a classical cipher; not secure.",
  porta: "Porta is a classical cipher; not secure.",
  bifid: "Bifid is a classical cipher; not secure.",
  columnar: "Columnar transposition is classical; not secure.",
  luhn: "Luhn is a check algorithm for numbers; not cryptographic.",
  verhoeff: "Verhoeff is a check algorithm for numbers; not cryptographic.",
  damm: "Damm is a check algorithm for numbers; not cryptographic.",
  isbn10: "ISBN‑10 check digit validator/generator; not cryptographic.",
  aphash: "AP Hash is non-cryptographic; for non-security uses.",
  dekhash: "DEK Hash is non-cryptographic; for non-security uses.",
  pjwhash: "PJW Hash is non-cryptographic; for non-security uses.",
  jshash: "JS Hash is non-cryptographic; for non-security uses.",
  xorcipher: "XOR cipher is trivial and reversible; not secure.",
  keyword: "Keyword substitution is a classical cipher; not secure.",
  gronsfeld: "Gronsfeld is a variant of Vigenère; not secure.",
  scytale: "Scytale is a simple transposition cipher; not secure.",
  doubletrans: "Double transposition is classical; not secure.",
  uuencode: "uuencode is an encoding for files; not encryption.",
  base58check: "Base58Check is an encoding with checksum; not encryption.",
  qencoding: "RFC 2047 Q-encoding is for email headers; not encryption.",
  isbn13: "ISBN-13 check digit validation/generation; not cryptographic.",
  issn: "ISSN check digit validation/generation; not cryptographic.",
  ean13: "EAN-13 check digit validation/generation; not cryptographic.",
  ean8: "EAN-8 check digit validation/generation; not cryptographic.",
  upca: "UPC-A check digit validation/generation; not cryptographic.",
  superfasthash: "SuperFastHash is non-cryptographic; for non-security uses.",
  crc32bzip2: "CRC-32/BZIP2 detects errors; not a cryptographic hash.",
  crc32mpeg2: "CRC-32/MPEG-2 detects errors; not a cryptographic hash.",
  soundex: "Soundex is a phonetic algorithm; not cryptographic.",
  nato: "NATO phonetic is a spelling alphabet; not encryption.",
  leetspeak: "Leetspeak is playful obfuscation; not encryption.",
  iban: "IBAN validation uses mod-97 check; not cryptographic.",
};

type Variant = "info" | "warn";

export function SafetyNote({
  kind,
  variant = "info",
}: {
  kind: keyof typeof MESSAGES;
  variant?: Variant;
}) {
  const icon = "💡";
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
