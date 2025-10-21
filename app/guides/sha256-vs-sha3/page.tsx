import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SHA-256 vs SHA-3: What’s the difference and when to use each",
  description:
    "Compare SHA-256 (Merkle–Damgård) vs SHA-3/Keccak (sponge). Learn security properties, performance notes, and when each is recommended.",
  alternates: { canonical: "https://www.hashkitly.com/guides/sha256-vs-sha3" },
  openGraph: {
    title: "SHA-256 vs SHA-3",
    description:
      "Merkle–Damgård vs sponge, NIST status, and practical guidance for choosing an algorithm.",
    type: "article",
    url: "https://www.hashkitly.com/guides/sha256-vs-sha3",
  },
  twitter: {
    card: "summary",
    title: "SHA-256 vs SHA-3",
    description: "Key differences, security posture, and usage guidance.",
  },
};

export default function Page() {
  return (
    <div className="container">
      <div className="box">
        <h1>SHA-256 vs SHA-3</h1>
        <p>
          SHA-256 is part of SHA-2 and uses a Merkle–Damgård construction. SHA-3
          (Keccak) uses a sponge construction and was standardized later by
          NIST. Both are secure for general use. SHA-256 remains widely adopted
          and hardware-accelerated on many platforms; SHA-3 offers a distinct
          design lineage and is a good alternative where desired.
        </p>
        <p>
          Tools: <a href="/sha256">SHA-256</a>, <a href="/sha3">SHA-3</a>
        </p>
      </div>
    </div>
  );
}

export {};
