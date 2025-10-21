import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PBKDF2 vs HKDF: Different purposes and when to use each",
  description:
    "PBKDF2 is a password hashing KDF (slow, salted). HKDF expands key material using HMAC. Understand use-cases and differences.",
  alternates: { canonical: "https://www.hashkitly.com/guides/pbkdf2-vs-hkdf" },
  openGraph: {
    title: "PBKDF2 vs HKDF",
    description:
      "Password hashing vs key expansion: roles, parameters, and best practices.",
    type: "article",
    url: "https://www.hashkitly.com/guides/pbkdf2-vs-hkdf",
  },
  twitter: {
    card: "summary",
    title: "PBKDF2 vs HKDF",
    description: "Choose the right KDF for your scenario.",
  },
};

export default function Page() {
  return (
    <div className="container">
      <div className="box">
        <h1>PBKDF2 vs HKDF</h1>
        <ul>
          <li>
            PBKDF2: derives keys from passwords. Use a high iteration count and
            a unique salt per password.
          </li>
          <li>
            HKDF: expands keying material into one or more keys using HMAC.
            Requires a strong input keying material (IKM) from a high-entropy
            source.
          </li>
        </ul>
        <p>
          Tools: <a href="/pbkdf2">PBKDF2</a>, <a href="/hkdf">HKDF</a>
        </p>
      </div>
    </div>
  );
}

export {};
