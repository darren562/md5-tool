import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AES-GCM vs CTR: Authenticated vs. stream-like encryption",
  description:
    "AES-GCM provides authenticated encryption (AEAD) with nonces; CTR is a stream-like mode requiring a separate MAC. Learn when to use each.",
  alternates: { canonical: "https://www.hashkitly.com/guides/aes-gcm-vs-ctr" },
  openGraph: {
    title: "AES-GCM vs CTR",
    description:
      "Nonce handling, integrity protection, and best practices for modern encryption.",
    type: "article",
    url: "https://www.hashkitly.com/guides/aes-gcm-vs-ctr",
  },
  twitter: {
    card: "summary",
    title: "AES-GCM vs CTR",
    description: "AEAD vs non-authenticated mode in a nutshell.",
  },
};

export default function Page() {
  return (
    <div className="container">
      <div className="box">
        <h1>AES-GCM vs CTR</h1>
        <ul>
          <li>
            GCM: AEAD with authenticity; never reuse a nonce with the same key.
          </li>
          <li>
            CTR: stream-like; must pair with a MAC (e.g., HMAC) to prevent
            tampering.
          </li>
        </ul>
        <p>
          Tools: <a href="/aes-gcm">AES-GCM</a>, <a href="/aes">AES</a>
        </p>
      </div>
    </div>
  );
}

export {};
