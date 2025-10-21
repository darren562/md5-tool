import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JWT HS256 vs RS256: Which signing algorithm to choose?",
  description:
    "Compare symmetric HS256 and asymmetric RS256 for JWTs: security, key management, and typical use cases.",
  keywords: [
    "JWT",
    "HS256",
    "RS256",
    "JWS",
    "JWKS",
    "key rotation",
    "public key",
    "HMAC",
    "RSA",
  ],
  alternates: {
    canonical: "https://www.hashkitly.com/guides/jwt-hs256-vs-rs256",
  },
  openGraph: {
    title: "JWT HS256 vs RS256",
    description:
      "Security trade-offs and deployment considerations for JWT signing.",
    type: "article",
    url: "https://www.hashkitly.com/guides/jwt-hs256-vs-rs256",
  },
  twitter: {
    card: "summary",
    title: "JWT HS256 vs RS256",
    description: "Key differences and recommendations.",
  },
};

export default function Page() {
  const faq = [
    {
      q: "When should I prefer RS256 over HS256?",
      a: "Use RS256 when multiple services verify tokens. You can publish a JWKS of public keys, avoiding secret sharing and simplifying rotation.",
    },
    {
      q: "Is HS256 insecure?",
      a: "HS256 is secure if keys are long and kept secret. Risks arise from secret distribution, weak keys, and misconfiguration. Limit who can sign and verify.",
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
        <h1>JWT HS256 vs RS256</h1>
        <p>
          HS256 signs with a shared secret (HMAC-SHA256). It is simple and fast
          but requires secure secret distribution to every verifier. Any holder
          of the secret can also mint tokens, which increases blast radius if a
          verifier is compromised.
        </p>
        <p>
          RS256 uses an RSA private key for signing and a public key for
          verification. Publishers can expose a JWKS endpoint for key discovery
          and rotation via <code>kid</code>. Only the issuer holds the private
          key; verifiers keep public keys, reducing trust requirements across
          services and enabling safer multi-tenant/microservice deployments.
        </p>
        <p>
          Operationally, enforce <code>alg</code> pinning, validate issuer and
          audience, and rotate keys regularly. For compact tokens in constrained
          environments, HS256 remains attractive; for distributed verification,
          RS256 usually wins.
        </p>

        <h2 style={{ marginTop: 16 }}>Related tools</h2>
        <p>
          Try: <a href="/jwt">JWT</a>, <a href="/hmac-sha256">HMAC-SHA256</a>,{" "}
          <a href="/rsa-oaep">RSA</a>
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
