import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MD5 vs SHA-1: Differences, security, and when to use each",
  description:
    "A practical comparison of MD5 and SHA-1: speed, collision resistance, output length, and recommended use cases.",
  alternates: { canonical: "https://www.hashkitly.com/md5-vs-sha1" },
  openGraph: {
    title: "MD5 vs SHA-1: Differences and use cases",
    description:
      "Compare MD5 and SHA-1 for checksums and legacy compatibility. Learn why both are not recommended for security.",
    type: "article",
    url: "https://www.hashkitly.com/md5-vs-sha1",
  },
  twitter: {
    card: "summary",
    title: "MD5 vs SHA-1",
    description: "Key differences, security, and migration advice.",
  },
};

export default function Page() {
  return (
    <div className="container">
      <div className="box">
        <h1>MD5 vs SHA-1</h1>
        <p>
          MD5 (128-bit) and SHA-1 (160-bit) are both considered broken for
          collision resistance. Use only for legacy compatibility and
          non-security checks; prefer SHA-256 or SHA-3 for new systems.
        </p>
        <h2>Key differences</h2>
        <ul>
          <li>Output: MD5 128-bit (32 hex) vs SHA-1 160-bit (40 hex)</li>
          <li>
            Security: Both have practical collision attacks; avoid for
            signatures
          </li>
          <li>Speed: MD5 is usually faster but less robust</li>
        </ul>
        <h2>Recommended alternatives</h2>
        <ul>
          <li>Integrity: SHA-256/512</li>
          <li>Passwords: bcrypt/scrypt/Argon2/PBKDF2</li>
        </ul>
        <p>
          Try our tools: <a href="/">MD5</a>, <a href="/sha1">SHA-1</a>,{" "}
          <a href="/sha256">SHA-256</a>
        </p>
      </div>
    </div>
  );
}
