import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HMAC-SHA256 vs SHA-256: Integrity MAC vs plain hash",
  description:
    "SHA-256 is a hash function. HMAC-SHA256 is a keyed MAC built on SHA-256 for message authentication. Learn which to use.",
  keywords: [
    "HMAC",
    "SHA-256",
    "MAC",
    "message authentication",
    "integrity",
    "hash",
    "security",
  ],
  alternates: {
    canonical: "https://www.hashkitly.com/guides/hmac-sha256-vs-sha256",
  },
  openGraph: {
    title: "HMAC-SHA256 vs SHA-256",
    description:
      "Keyed authentication vs unkeyed hashing, common pitfalls, and correct usage.",
    type: "article",
    url: "https://www.hashkitly.com/guides/hmac-sha256-vs-sha256",
  },
  twitter: {
    card: "summary",
    title: "HMAC-SHA256 vs SHA-256",
    description: "Don’t use plain hashes for integrity/authentication.",
  },
};

export default function Page() {
  const faq = [
    {
      q: "Can I use SHA-256 alone for integrity?",
      a: "No. A plain hash provides no authentication; an attacker can recompute it after tampering. Use a keyed MAC such as HMAC-SHA256 for integrity/authentication.",
    },
    {
      q: "When should I use HMAC-SHA256?",
      a: "Use HMAC whenever you need to detect active tampering and authenticate the message origin with a shared secret (e.g., API signatures, webhooks, session tokens).",
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
        <h1>HMAC-SHA256 vs SHA-256</h1>
        <p>
          SHA-256 is an unkeyed hash function suitable for deduplication,
          checksums, and non-adversarial error detection. It does not provide
          authenticity. HMAC-SHA256 wraps SHA-256 with a secret key to create a
          message authentication code (MAC) that detects tampering and confirms
          the sender shares the key.
        </p>
        <p>
          In security-sensitive systems, prefer HMAC-SHA256 for request
          signatures, webhook validation, and token integrity. Keep keys random
          and rotate them periodically. When only collision-resistant
          fingerprinting is needed (e.g., content addressing), a plain
          <a href="/sha256"> SHA-256</a> hash is fine.
        </p>

        <h2 style={{ marginTop: 16 }}>Related tools</h2>
        <p>
          Try: <a href="/hmac-sha256">HMAC-SHA256</a>,{" "}
          <a href="/sha256">SHA-256</a>, <a href="/pbkdf2">PBKDF2</a>
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
