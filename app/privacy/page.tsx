import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & Data Handling | Hashkitly Browser Hash Tools",
  description:
    "Learn how Hashkitly handles your data. All hashing, encoding and AES operations run 100% locally in your browser. Nothing is uploaded.",
  alternates: { canonical: "https://www.hashkitly.com/privacy" },
  openGraph: {
    title: "Privacy & Data Handling | Hashkitly",
    description:
      "All hashing, encoding and AES operations run 100% locally in your browser. No persistence. No uploads.",
    type: "website",
    url: "https://www.hashkitly.com/privacy",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "Privacy & Data Handling | Hashkitly",
    description:
      "All hashing, encoding and AES operations run 100% locally in your browser. No persistence. No uploads.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
};

export default function PrivacyPage() {
  return (
    <div className="container">
      <div className="box">
        <h1>Privacy & Data Handling</h1>
        <p>
          Hashkitly is designed to be privacy‑first. All cryptographic hashing
          (MD5, SHA‑1, SHA‑256, SHA‑512), Base64 encoding/decoding and AES
          encryption/decryption happen entirely inside your browser using
          JavaScript. Your input text never leaves your device and is not sent
          to any server owned by us.
        </p>
        <h2>No Upload, No Storage</h2>
        <p>
          We do not transmit, log, cache, or persist the text you enter. When
          you refresh or close the page, the state is cleared. Clipboard copy
          actions use the standard Web Clipboard API only locally.
        </p>
        <h2>Analytics</h2>
        <p>
          We use Google Analytics to understand aggregate usage (page views,
          anonymous interaction patterns). We do not send your input content to
          analytics. If you prefer to block analytics, you can use a content
          blocker—core functionality still works.
        </p>
        <h2>Security Notes</h2>
        <p>
          - Hash algorithms shown (MD5, SHA‑1, SHA‑256, SHA‑512) here are fast
          and should <strong>not</strong> be used directly for password storage.
          Use slow, salted password hashing (bcrypt, scrypt, Argon2, PBKDF2) for
          credentials.
          <br />- SHA‑1 is provided for legacy interoperability only; it is
          considered broken for collision resistance.
          <br />- AES demo uses a simplified CryptoJS passphrase shortcut. For
          production security use a random salt + IV + authenticated encryption
          (e.g. AES‑GCM) with a strong key derivation function.
        </p>
        <h2>Open Source Libraries</h2>
        <p>
          Hash functions and AES operations rely on the well‑known CryptoJS
          library executed locally. No external network calls are made for the
          actual transformations.
        </p>
        <h2>Questions</h2>
        <p>
          Have a concern or suggestion? Open an issue or submit feedback. We aim
          to keep the tool minimal, transparent, and trustworthy.
        </p>
      </div>
    </div>
  );
}
