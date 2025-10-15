"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "MD5" },
  { href: "/base64", label: "Base64" },
  { href: "/sha256", label: "SHA256" },
  { href: "/sha3", label: "SHA-3" },
  { href: "/sha224", label: "SHA-224" },
  { href: "/sha384", label: "SHA-384" },
  { href: "/sha1", label: "SHA-1" },
  { href: "/sha512", label: "SHA-512" },
  { href: "/ripemd160", label: "RIPEMD-160" },
  { href: "/aes", label: "AES" },
  { href: "/aes-gcm", label: "AES-GCM" },
  { href: "/tripledes", label: "3DES" },
  { href: "/hmac-sha256", label: "HMAC-SHA256" },
  { href: "/hmac-sha512", label: "HMAC-SHA512" },
  { href: "/hmac-sha1", label: "HMAC-SHA1" },
  { href: "/url", label: "URL" },
  { href: "/uuid", label: "UUID" },
  { href: "/pbkdf2", label: "PBKDF2" },
  { href: "/hkdf", label: "HKDF" },
  { href: "/crc32", label: "CRC32" },
  { href: "/hex", label: "Hex" },
  { href: "/base32", label: "Base32" },
  { href: "/base58", label: "Base58" },
  { href: "/random", label: "Random" },
  { href: "/jwt", label: "JWT" },
  { href: "/rsa-oaep", label: "RSA-OAEP" },
  { href: "/privacy", label: "Privacy" },
];

export default function ToolLinks() {
  // Temporarily disabled as requested to remove the bottom "Other Tools" section.
  // Keeping the component exported to avoid import errors across pages.
  return null;
}
