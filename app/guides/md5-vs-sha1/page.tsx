import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MD5 vs SHA-1: Differences, security, and when to use each",
  description:
    "A practical comparison of MD5 and SHA-1: speed, collision resistance, output length, and recommended use cases.",
  keywords: ["MD5", "SHA-1", "collision", "hash", "integrity", "migration"],
  alternates: { canonical: "https://www.hashkitly.com/guides/md5-vs-sha1" },
  openGraph: {
    title: "MD5 vs SHA-1: Differences and use cases",
    description:
      "Compare MD5 and SHA-1 for checksums and legacy compatibility. Learn why both are not recommended for security.",
    type: "article",
    url: "https://www.hashkitly.com/guides/md5-vs-sha1",
  },
  twitter: {
    card: "summary",
    title: "MD5 vs SHA-1",
    description: "Key differences, security, and migration advice.",
  },
};

export default function Page() {
  const faq = [
    {
      q: "Are MD5 and SHA-1 ever acceptable?",
      a: "Only for legacy compatibility and non-adversarial checksums. For security or signatures, both are deprecated due to collisions.",
    },
    {
      q: "How should I migrate?",
      a: "Support SHA-256 alongside existing hashes, update clients, then deprecate MD5/SHA-1. For passwords, move to PBKDF2/scrypt/Argon2.",
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
        <h1>MD5 vs SHA-1</h1>
        <p>
          MD5 (128-bit) and SHA-1 (160-bit) are obsolete for security because
          practical collisions exist. They remain in some legacy protocols but
          should be phased out in favor of <a href="/sha256">SHA-256</a> or
          newer hash functions.
        </p>
        <p>
          For passwords, do not use plain hashes. Prefer
          <a href="/pbkdf2"> PBKDF2</a> or modern KDFs. For message integrity,
          use <a href="/hmac-sha256">HMAC-SHA256</a>. Maintain backward
          compatibility by publishing multiple digests during a transition.
        </p>

        <h2 style={{ marginTop: 16 }}>Related tools</h2>
        <p>
          Try: <a href="/sha1">SHA-1</a>, <a href="/sha256">SHA-256</a>,{" "}
          <a href="/pbkdf2">PBKDF2</a>
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
