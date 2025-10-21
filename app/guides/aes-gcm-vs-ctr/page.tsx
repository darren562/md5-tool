import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AES-GCM vs CTR: Authenticated vs. stream-like encryption",
  description:
    "AES-GCM provides authenticated encryption (AEAD) with nonces; CTR is a stream-like mode requiring a separate MAC. Learn when to use each.",
  keywords: [
    "AES-GCM",
    "AES-CTR",
    "AEAD",
    "encryption",
    "integrity",
    "authentication",
    "nonce",
    "IV",
  ],
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
  const faq = [
    {
      q: "When should I choose AES-GCM over CTR?",
      a: "Prefer AES-GCM for most applications because it provides both confidentiality and integrity (AEAD). CTR offers only confidentiality and must be combined with a MAC to prevent undetected tampering.",
    },
    {
      q: "Can I reuse nonces with AES-GCM or CTR?",
      a: "No. Reusing a nonce/IV with the same key breaks security for both modes. Always use unique nonces per message.",
    },
  ];

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="container">
      <div className="box">
        <h1>AES-GCM vs CTR</h1>
        <p>
          AES-CTR turns a block cipher into a keystream generator. You XOR the
          keystream with plaintext to encrypt and with ciphertext to decrypt. It
          is fast and parallelizable but provides no authenticity: bit flips in
          the ciphertext become predictable flips in the plaintext, so receivers
          cannot detect tampering. To gain integrity you must pair CTR with a
          separate MAC (e.g., <a href="/hmac-sha256">HMAC-SHA256</a>) in an
          encrypt-then-MAC construction.
        </p>
        <p>
          AES-GCM integrates encryption and authentication (AEAD). It outputs a
          ciphertext and an authentication tag; the receiver verifies the tag
          before releasing plaintext. This blocks undetected modification and
          supports associated data (AAD) so you can bind unencrypted headers to
          the message. For most modern systems, prefer
          <a href="/aes-gcm"> AES-GCM</a> for its simplicity and safety.
        </p>
        <p>
          Critical operational rule: never reuse a nonce/IV with the same key in
          either mode. Nonce reuse compromises confidentiality for CTR and both
          confidentiality and integrity for GCM. Use random or monotonically
          increasing nonces as specified by your library and rotate keys
          periodically.
        </p>

        <h2 style={{ marginTop: 16 }}>Related tools</h2>
        <p>
          Try: <a href="/aes-gcm">AES-GCM</a>, <a href="/aes">AES</a>,{" "}
          <a href="/hmac-sha256">HMAC-SHA256</a>
        </p>

        <h2 style={{ marginTop: 16 }}>FAQ</h2>
        <dl>
          {faq.map((f) => (
            <div key={f.q} style={{ marginBottom: 8 }}>
              <dt>
                <strong>{f.q}</strong>
              </dt>
              <dd>{f.a}</dd>
            </div>
          ))}
        </dl>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </div>
    </div>
  );
}

export {};
