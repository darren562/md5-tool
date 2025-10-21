import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SHA-1 vs SHA-256: Which hash should you use?",
  description:
    "Compare SHA-1 and SHA-256: security, performance, and compatibility. Learn when to migrate and how to verify checksums.",
  keywords: ["SHA-1", "SHA-256", "collision", "hash", "integrity", "migration"],
  alternates: { canonical: "https://www.hashkitly.com/guides/sha1-vs-sha256" },
  openGraph: {
    title: "SHA-1 vs SHA-256",
    description:
      "Why SHA-256 is recommended over SHA-1 for new systems. Practical advice and tooling.",
    type: "article",
    url: "https://www.hashkitly.com/guides/sha1-vs-sha256",
  },
  twitter: {
    card: "summary",
    title: "SHA-1 vs SHA-256",
    description: "Security differences and migration tips.",
  },
};

export default function Page() {
  const faq = [
    {
      q: "Why migrate from SHA-1 now?",
      a: "Public collision demonstrations show SHA-1 is unsafe for signatures. Many platforms and browsers already reject SHA-1 certificates.",
    },
    {
      q: "Is SHA-256 fast enough?",
      a: "Yes for most applications. Hardware acceleration and optimized libraries make SHA-256 broadly performant.",
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
        <h1>SHA-1 vs SHA-256</h1>
        <p>
          SHA-1 is deprecated because it no longer offers adequate collision
          resistance. <a href="/sha256">SHA-256</a> is the modern default for
          signatures, package integrity, and file verification.
        </p>
        <p>
          Migration tips: start producing SHA-256 in parallel with SHA-1 for a
          transition period, update documentation and APIs, then drop SHA-1. For
          passwords, use a KDF like <a href="/pbkdf2">PBKDF2</a>.
        </p>

        <h2 style={{ marginTop: 16 }}>Related tools</h2>
        <p>
          Try: <a href="/sha1">SHA-1</a>, <a href="/sha256">SHA-256</a>,{" "}
          <a href="/guides/verify-file-sha256">Verify SHA-256</a>
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
