import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AES-GCM vs CBC: Which mode should you use?",
  description:
    "AES-GCM provides authenticated encryption with nonces; CBC requires padding and separate MAC. Learn pros/cons and pitfalls.",
  keywords: [
    "AES-GCM",
    "AES-CBC",
    "AEAD",
    "padding",
    "IV",
    "nonce",
    "authentication",
  ],
  alternates: { canonical: "https://www.hashkitly.com/guides/aes-gcm-vs-cbc" },
  openGraph: {
    title: "AES-GCM vs CBC",
    description:
      "When to prefer GCM, IV/nonce rules, and how to avoid common mistakes.",
    type: "article",
    url: "https://www.hashkitly.com/guides/aes-gcm-vs-cbc",
  },
  twitter: {
    card: "summary",
    title: "AES-GCM vs CBC",
    description: "Best practices for modern encryption.",
  },
};

export default function Page() {
  const faq = [
    {
      q: "Why is GCM recommended over CBC?",
      a: "GCM provides authenticated encryption (AEAD), preventing undetected tampering and simplifying implementations. CBC needs padding and a separate MAC.",
    },
    {
      q: "Can I reuse an IV/nonce?",
      a: "No. Reusing a nonce with GCM or an IV with CBC (under the same key) breaks confidentiality and can enable attacks.",
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
        <h1>AES-GCM vs CBC</h1>
        <p>
          AES-GCM is an AEAD mode that provides both confidentiality and
          integrity with a single API. It outputs an authentication tag and
          supports associated data (AAD) to bind headers. CBC, by contrast,
          requires padding and must be combined with a MAC (e.g.,
          <a href="/hmac-sha256">HMAC-SHA256</a>) in an encrypt-then-MAC
          construction to resist tampering.
        </p>
        <p>
          Implementation pitfalls with CBC include padding oracles, IV reuse,
          and MAC-then-encrypt ordering errors. If you must use CBC for
          compatibility, use random IVs, constant-time checks, and authenticated
          encryption via a separate MAC. Otherwise, prefer
          <a href="/aes-gcm"> AES-GCM</a>.
        </p>
        <p>
          Operational guidance: never reuse nonces/IVs with the same key, store
          or transmit the nonce alongside ciphertext, and rotate keys
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
