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
  const pathname = usePathname();
  return (
    <div style={{ marginTop: 32 }}>
      <div style={{ fontWeight: 600, marginBottom: 8, fontSize: 15 }}>
        Other Tools
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          fontSize: 14,
        }}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            style={{
              padding: "6px 10px",
              borderRadius: 6,
              border: "1px solid #e2e8f0",
              background: pathname === l.href ? "#2563eb" : "#f8fafc",
              color: pathname === l.href ? "#fff" : "#334155",
              textDecoration: "none",
              lineHeight: 1.2,
            }}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
