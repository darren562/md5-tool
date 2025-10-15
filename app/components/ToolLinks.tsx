"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "MD5" },
  { href: "/base64", label: "Base64" },
  { href: "/sha256", label: "SHA256" },
  { href: "/sha3", label: "SHA-3" },
  { href: "/sha1", label: "SHA-1" },
  { href: "/sha512", label: "SHA-512" },
  { href: "/ripemd160", label: "RIPEMD-160" },
  { href: "/aes", label: "AES" },
  { href: "/hmac-sha256", label: "HMAC-SHA256" },
  { href: "/hmac-sha512", label: "HMAC-SHA512" },
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
