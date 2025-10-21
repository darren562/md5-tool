import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MD5 vs SHA-256: Why SHA-256 is preferred today",
  description:
    "MD5 is broken for collision resistance. SHA-256 remains secure and widely used. Learn differences and migration advice.",
  keywords: [
    "MD5",
    "SHA-256",
    "collision",
    "integrity",
    "hash",
    "security",
    "migration",
  ],
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
  const faq = [
    {
      q: "Is MD5 still safe for any use?",
      a: "MD5 is unsafe for collision resistance and must not be used for signatures, certificates, or integrity in adversarial settings. It may be acceptable for non-adversarial checksums, but prefer modern hashes.",
    },
    {
      q: "How do I migrate from MD5 to SHA-256?",
      a: "Start computing SHA-256 alongside MD5, store both during a transition period, update clients and APIs to read SHA-256, then deprecate MD5 once compatibility is assured.",
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
        <h1>MD5 vs SHA-256</h1>
        <p>
          MD5 was designed for speed decades ago and is now broken for collision
          resistance: researchers can craft two different inputs that produce
          the same digest. That breaks digital signatures, certificates, and any
          scheme relying on unique fingerprints. By contrast, SHA-256 remains
          collision-resistant and widely trusted in modern systems.
        </p>
        <p>
          If you only need a quick checksum in non-adversarial contexts, you
          might see legacy MD5 usage. However, for security-sensitive integrity
          use cases, prefer <a href="/sha256">SHA-256</a> or add a keyed MAC
          like
          <a href="/hmac-sha256"> HMAC-SHA256</a>. For passwords, use a KDF such
          as <a href="/pbkdf2">PBKDF2</a> rather than plain hashes.
        </p>

        <h2 style={{ marginTop: 16 }}>Related tools</h2>
        <p>
          Try: <a href="/sha256">SHA-256</a>,{" "}
          <a href="/hmac-sha256">HMAC-SHA256</a>, <a href="/pbkdf2">PBKDF2</a>
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
