import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HMAC-SHA256 vs SHA-256: Integrity MAC vs plain hash",
  description:
    "SHA-256 is a hash function. HMAC-SHA256 is a keyed MAC built on SHA-256 for message authentication. Learn which to use.",
  alternates: {
    canonical: "https://www.hashkitly.com/guides/hmac-sha256-vs-sha256",
  },
  openGraph: {
    title: "HMAC-SHA256 vs SHA-256",
    description:
      "Keyed authentication vs unkeyed hashing, common pitfalls, and correct usage.",
    type: "article",
    url: "https://www.hashkitly.com/guides/hmac-sha256-vs-sha256",
  },
  twitter: {
    card: "summary",
    title: "HMAC-SHA256 vs SHA-256",
    description: "Don’t use plain hashes for integrity/authentication.",
  },
};

export default function Page() {
  return (
    <div className="container">
      <div className="box">
        <h1>HMAC-SHA256 vs SHA-256</h1>
        <p>
          SHA-256 is unkeyed; it detects accidental errors but not active
          tampering. HMAC-SHA256 uses a secret key to provide message
          authentication and integrity.
        </p>
        <p>
          Tools: <a href="/sha256">SHA-256</a>,{" "}
          <a href="/hmac-sha256">HMAC-SHA256</a>
        </p>
      </div>
    </div>
  );
}

export {};
