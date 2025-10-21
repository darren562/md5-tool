import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base58 vs Base58Check: When to use each",
  description:
    "Base58Check extends Base58 with version and checksum (double SHA-256). Learn the format and when to use it.",
  alternates: {
    canonical: "https://www.hashkitly.com/guides/base58-vs-base58check",
  },
  openGraph: {
    title: "Base58 vs Base58Check",
    description:
      "Understand version bytes and checksum in Bitcoin-style addresses.",
    type: "article",
    url: "https://www.hashkitly.com/guides/base58-vs-base58check",
  },
  twitter: {
    card: "summary",
    title: "Base58 vs Base58Check",
    description: "Version + checksum vs raw Base58.",
  },
};

export default function Page() {
  return (
    <div className="container">
      <div className="box">
        <h1>Base58 vs Base58Check</h1>
        <p>
          Base58Check prefixes data with a version byte and appends a 4-byte
          checksum (double SHA-256). It helps detect typos and format
          mismatches.
        </p>
        <p>
          Tools: <a href="/base58">Base58</a>,{" "}
          <a href="/base58check">Base58Check</a>, <a href="/sha256">SHA-256</a>
        </p>
      </div>
    </div>
  );
}

export {};
