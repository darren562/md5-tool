import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MD5 vs SHA-256: Why SHA-256 is preferred today",
  description:
    "MD5 is broken for collision resistance. SHA-256 remains secure and widely used. Learn differences and migration advice.",
  alternates: { canonical: "https://www.hashkitly.com/guides/md5-vs-sha256" },
  openGraph: {
    title: "MD5 vs SHA-256",
    description:
      "Security status, performance notes, and where each still appears.",
    type: "article",
    url: "https://www.hashkitly.com/guides/md5-vs-sha256",
  },
  twitter: {
    card: "summary",
    title: "MD5 vs SHA-256",
    description: "Choose SHA-256 for security-sensitive contexts.",
  },
};

export default function Page() {
  return (
    <div className="container">
      <div className="box">
        <h1>MD5 vs SHA-256</h1>
        <p>
          MD5 is fast but broken for collision resistance and should not be used
          for new designs. SHA-256 is secure, widely supported, and recommended
          for integrity and signatures (often via HMAC/SHA-256).
        </p>
        <p>
          Tools: <a href="/sha256">SHA-256</a>
        </p>
      </div>
    </div>
  );
}

export {};
