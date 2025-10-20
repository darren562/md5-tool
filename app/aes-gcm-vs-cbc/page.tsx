import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AES-GCM vs CBC: Which mode should you use?",
  description:
    "AES-GCM provides authenticated encryption with nonces; CBC requires padding and separate MAC. Learn pros/cons and pitfalls.",
  alternates: { canonical: "https://www.hashkitly.com/aes-gcm-vs-cbc" },
  openGraph: {
    title: "AES-GCM vs CBC",
    description:
      "When to prefer GCM, IV/nonce rules, and how to avoid common mistakes.",
    type: "article",
    url: "https://www.hashkitly.com/aes-gcm-vs-cbc",
  },
  twitter: {
    card: "summary",
    title: "AES-GCM vs CBC",
    description: "Best practices for modern encryption.",
  },
};

export default function Page() {
  return (
    <div className="container">
      <div className="box">
        <h1>AES-GCM vs CBC</h1>
        <ul>
          <li>
            GCM: authenticated encryption (AEAD), 12-byte nonce, never reuse
            nonce with same key
          </li>
          <li>
            CBC: needs random IV + padding and a separate MAC (e.g., HMAC) to
            prevent tampering
          </li>
        </ul>
        <p>
          Tools: <a href="/aes">AES</a>, <a href="/aes-gcm">AES-GCM</a>,{" "}
          <a href="/rsa-oaep">RSA-OAEP</a>
        </p>
      </div>
    </div>
  );
}
