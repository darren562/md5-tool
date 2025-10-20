import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cryptography and encoding guides | Hashkitly",
  description:
    "Step-by-step guides for checksums, hashing, encoding, and security best practices. Practical tutorials for Windows, macOS, and Linux.",
  alternates: { canonical: "https://www.hashkitly.com/guides" },
  openGraph: {
    title: "Cryptography and encoding guides | Hashkitly",
    description:
      "Step-by-step guides for checksums, hashing, encoding, and security best practices.",
    type: "website",
    url: "https://www.hashkitly.com/guides",
  },
  twitter: {
    card: "summary",
    title: "Cryptography and encoding guides | Hashkitly",
    description:
      "Step-by-step guides for checksums, hashing, encoding, and security best practices.",
  },
};

export default function Page() {
  const guides = [
    { href: "/guides/generate-md5-checksum", title: "Generate MD5 checksum" },
    { href: "/guides/verify-file-sha256", title: "Verify file SHA-256" },
  ];
  const comparisons = [
    { href: "/md5-vs-sha1", title: "MD5 vs SHA-1" },
    { href: "/sha1-vs-sha256", title: "SHA-1 vs SHA-256" },
    { href: "/crc32-vs-crc32c", title: "CRC32 vs CRC32C" },
    { href: "/base64-vs-base64url", title: "Base64 vs Base64URL" },
    { href: "/base32-vs-base32hex", title: "Base32 vs Base32hex" },
    {
      href: "/ascii85-vs-base85-rfc1924",
      title: "ASCII85 vs Base85 (RFC 1924)",
    },
    { href: "/base58-vs-base58check", title: "Base58 vs Base58Check" },
    { href: "/uuid-vs-guid", title: "UUID vs GUID" },
    { href: "/jwt-hs256-vs-rs256", title: "JWT HS256 vs RS256" },
    { href: "/aes-gcm-vs-cbc", title: "AES-GCM vs CBC" },
  ];
  return (
    <div className="container">
      <div className="box">
        <h1>Guides</h1>
        <p>Hands-on guides for hashing, checksums, and encoding workflows.</p>
        <ul>
          {guides.map((g) => (
            <li key={g.href}>
              <a href={g.href}>{g.title}</a>
            </li>
          ))}
        </ul>

        <h2 style={{ marginTop: 24 }}>Comparisons</h2>
        <ul>
          {comparisons.map((c) => (
            <li key={c.href}>
              <a href={c.href}>{c.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
