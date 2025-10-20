import type { FAQItem } from "../components/LongTailSEO";

export type RouteSEOConfig = {
  title: string;
  breadcrumbs: { name: string; url: string }[];
  faqs: FAQItem[];
  relatedLinks?: { name: string; url: string }[];
};

export const routeSeoConfig: Record<string, RouteSEOConfig> = {
  "/base64": {
    title: "Base64 online encoder/decoder FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Base64", url: "https://www.hashkitly.com/base64" },
    ],
    faqs: [
      {
        q: "How to encode text to Base64?",
        a: "Paste text, click Encode. Output appears instantly in your browser.",
      },
      {
        q: "How to decode Base64?",
        a: "Paste Base64 string and click Decode. Invalid input is highlighted.",
      },
      {
        q: "Is my data uploaded?",
        a: "No. All conversions are client-side; your data never leaves your device.",
      },
      {
        q: "How to remove padding =?",
        a: "Use our Base64URL page for URL-safe, no padding encoding when needed.",
      },
    ],
    relatedLinks: [
      { name: "Base64URL", url: "https://www.hashkitly.com/base64url" },
      { name: "Hex converter", url: "https://www.hashkitly.com/hex" },
      { name: "URL encode/decode", url: "https://www.hashkitly.com/url" },
    ],
  },
  "/sha256": {
    title: "SHA-256 hash generator FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "SHA-256", url: "https://www.hashkitly.com/sha256" },
    ],
    faqs: [
      {
        q: "How to create a SHA-256 checksum?",
        a: "Enter text or use a file tool. For files, see our guides on verifying checksums.",
      },
      {
        q: "Is SHA-256 reversible?",
        a: "No. SHA-256 is a one-way function; you cannot retrieve original input from the hash.",
      },
      {
        q: "Which is better for passwords?",
        a: "Use Argon2, scrypt, bcrypt, or PBKDF2 with salt—not plain SHA-256.",
      },
      {
        q: "How to verify a file hash?",
        a: "Compare the computed SHA-256 with the publisher's provided checksum.",
      },
    ],
    relatedLinks: [
      {
        name: "Verify file SHA-256 (guide)",
        url: "https://www.hashkitly.com/guides/verify-file-sha256",
      },
      { name: "PBKDF2", url: "https://www.hashkitly.com/pbkdf2" },
      { name: "HMAC-SHA256", url: "https://www.hashkitly.com/hmac-sha256" },
    ],
  },
  "/url": {
    title: "URL encoding and decoding FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "URL Encode/Decode", url: "https://www.hashkitly.com/url" },
    ],
    faqs: [
      {
        q: "What is percent-encoding?",
        a: "It replaces unsafe characters with %HH bytes to make URLs safe for transport.",
      },
      {
        q: "When to use + vs %20?",
        a: "+ is for application/x-www-form-urlencoded spaces; %20 is the raw percent-encoding for space.",
      },
      {
        q: "How to encode non-ASCII?",
        a: "Use UTF-8 before encoding; the tool handles this automatically.",
      },
    ],
    relatedLinks: [
      { name: "Base64URL", url: "https://www.hashkitly.com/base64url" },
      { name: "HTML entities", url: "https://www.hashkitly.com/html-entities" },
    ],
  },
  "/uuid": {
    title: "UUID v4 generator FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "UUID", url: "https://www.hashkitly.com/uuid" },
    ],
    faqs: [
      {
        q: "What is UUID v4?",
        a: "A randomly generated 128-bit identifier formatted as 8-4-4-4-12 hexadecimal.",
      },
      {
        q: "Is UUID unique?",
        a: "Collisions are astronomically unlikely; v4 is safe for most practical uses.",
      },
      {
        q: "UUID vs GUID?",
        a: "GUID is Microsoft's implementation; terms are used interchangeably in many contexts.",
      },
    ],
    relatedLinks: [
      { name: "Random generator", url: "https://www.hashkitly.com/random" },
      { name: "SHA-1", url: "https://www.hashkitly.com/sha1" },
    ],
  },
  "/crc32": {
    title: "CRC32 checksum FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "CRC32", url: "https://www.hashkitly.com/crc32" },
    ],
    faqs: [
      {
        q: "What is CRC32 used for?",
        a: "Error-detection in storage and transmission; not for security.",
      },
      {
        q: "CRC vs Hash?",
        a: "CRC is linear and not cryptographic; use SHA-256 for security-sensitive needs.",
      },
    ],
  },
  "/hmac-sha256": {
    title: "HMAC-SHA256 signing FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "HMAC-SHA256", url: "https://www.hashkitly.com/hmac-sha256" },
    ],
    faqs: [
      {
        q: "What is HMAC?",
        a: "A message authentication code combining a hash function and a secret key.",
      },
      {
        q: "What is a good key length?",
        a: "Use a 256-bit randomly generated key for strong security.",
      },
    ],
    relatedLinks: [
      {
        name: "JWT guide",
        url: "https://www.hashkitly.com/guides/decode-jwt-safely",
      },
      {
        name: "PBKDF2 vs HKDF",
        url: "https://www.hashkitly.com/guides/pbkdf2-vs-hkdf",
      },
    ],
  },
  "/aes": {
    title: "AES encryption FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "AES", url: "https://www.hashkitly.com/aes" },
    ],
    faqs: [
      {
        q: "What mode should I use?",
        a: "Prefer GCM for authenticated encryption. Use unique IVs and never reuse keys+IVs.",
      },
      {
        q: "Is AES-256 better than AES-128?",
        a: "Both are secure; AES-256 offers larger key space but may be slower.",
      },
    ],
    relatedLinks: [
      { name: "AES-GCM", url: "https://www.hashkitly.com/aes-gcm" },
      { name: "RSA-OAEP", url: "https://www.hashkitly.com/rsa-oaep" },
    ],
  },
  "/jwt": {
    title: "JWT decoding and security FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "JWT", url: "https://www.hashkitly.com/jwt" },
    ],
    faqs: [
      {
        q: "Is Base64 decoding validating JWT?",
        a: "No. Decoding reveals claims but does not verify signature or trustworthiness.",
      },
      {
        q: "What algorithms are safe?",
        a: "Use RS256/ES256/EdDSA. Never accept 'none'. Validate 'aud', 'iss', 'exp'.",
      },
    ],
    relatedLinks: [
      { name: "HMAC-SHA256", url: "https://www.hashkitly.com/hmac-sha256" },
      {
        name: "Verify file SHA-256",
        url: "https://www.hashkitly.com/guides/verify-file-sha256",
      },
    ],
  },
};
