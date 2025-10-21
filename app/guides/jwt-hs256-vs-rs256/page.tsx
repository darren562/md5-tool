import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JWT HS256 vs RS256: Which signing algorithm to choose?",
  description:
    "Compare symmetric HS256 and asymmetric RS256 for JWTs: security, key management, and typical use cases.",
  alternates: {
    canonical: "https://www.hashkitly.com/guides/jwt-hs256-vs-rs256",
  },
  openGraph: {
    title: "JWT HS256 vs RS256",
    description:
      "Security trade-offs and deployment considerations for JWT signing.",
    type: "article",
    url: "https://www.hashkitly.com/guides/jwt-hs256-vs-rs256",
  },
  twitter: {
    card: "summary",
    title: "JWT HS256 vs RS256",
    description: "Key differences and recommendations.",
  },
};

export default function Page() {
  return (
    <div className="container">
      <div className="box">
        <h1>JWT HS256 vs RS256</h1>
        <p>
          HS256 uses a shared secret; simpler but requires secure distribution.
          RS256 uses public/private keys; easier rotation and safer for
          multi-service architectures.
        </p>
        <p>
          Tools: <a href="/jwt">JWT</a>, <a href="/hmac-sha256">HMAC-SHA256</a>
        </p>
      </div>
    </div>
  );
}

export {};
