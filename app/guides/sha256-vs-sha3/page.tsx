import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SHA-256 vs SHA-3: What’s the difference and when to use each",
  description:
    "Compare SHA-256 (Merkle–Damgård) vs SHA-3/Keccak (sponge). Learn security properties, performance notes, and when each is recommended.",
  alternates: { canonical: "https://www.hashkitly.com/guides/sha256-vs-sha3" },
  openGraph: {
    title: "SHA-256 vs SHA-3",
    description:
      "Merkle–Damgård vs sponge, NIST status, and practical guidance for choosing an algorithm.",
    type: "article",
    url: "https://www.hashkitly.com/guides/sha256-vs-sha3",
  },
  twitter: {
    card: "summary",
    title: "SHA-256 vs SHA-3",
    description: "Key differences, security posture, and usage guidance.",
  },
};

export default function Page() {
  const faq = [
    {
      q: "Which is more secure, SHA-256 or SHA-3?",
      a: "Both are considered secure for typical use today. SHA-256 (from the SHA-2 family) has broader industry deployment and mature hardware acceleration. SHA-3 (Keccak, sponge construction) offers an alternative design lineage and can be preferred when you want separation from SHA-2 or need sponge-based primitives.",
    },
    {
      q: "When should I prefer SHA-3?",
      a: "If you want cryptographic diversity from SHA-2 or need sponge-derived functions like SHAKE (extendable-output), SHA-3 is a strong choice. For common integrity checks and signatures with maximal ecosystem support and acceleration, SHA-256 remains a great default.",
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
        <h1>SHA-256 vs SHA-3</h1>
        <p>
          In practice, SHA-256 and SHA-3 are often compared side-by-side.
          SHA-256 belongs to the SHA-2 family and uses a Merkle–Damgård
          construction. It is widely implemented, enjoys mature hardware
          acceleration on many platforms, and is a safe, practical default for
          integrity and signatures. SHA-3 is based on Keccak and uses a sponge
          construction, standardized later by NIST. It provides a design that is
          independent from SHA-2 and unlocks extendable-output functions (SHAKE)
          that some applications value.
        </p>
        <p>
          For most general-purpose workloads—file verification, code signing,
          API authentication—SHA-256 offers the best combination of support,
          performance, and reliability. If you specifically want cryptographic
          diversity or need sponge-based features (e.g., variable-length
          output), SHA-3 is an excellent alternative. Assuming correct
          implementation and parameterization, both are currently considered
          secure against collisions and (second-)preimage attacks for everyday
          use.
        </p>

        <h2 style={{ marginTop: 16 }}>Key differences</h2>
        <ul>
          <li>Construction: SHA-256 (Merkle–Damgård) vs SHA-3 (sponge)</li>
          <li>
            Ecosystem: SHA-256 has broader deployment and mature acceleration;
            SHA-3 offers SHAKE and a distinct design lineage
          </li>
          <li>
            Practice: Prefer SHA-256 for common checks/signatures; consider
            SHA-3 for diversity or sponge-derived features
          </li>
        </ul>

        <h2 style={{ marginTop: 16 }}>Recommended usage</h2>
        <ul>
          <li>
            Software distribution and API signing: <a href="/sha256">SHA-256</a>{" "}
            or <a href="/hmac-sha256">HMAC-SHA256</a>
          </li>
          <li>
            Sponge primitives or variable output: <a href="/sha3">SHA-3</a> /
            SHAKE
          </li>
        </ul>

        <h2 style={{ marginTop: 16 }}>Related tools</h2>
        <p>
          Try our tools: <a href="/sha256">SHA-256</a>,{" "}
          <a href="/sha3">SHA-3</a>,{" "}
          <a href="/guides/verify-file-sha256">Verify file SHA-256</a>
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
