import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PBKDF2 vs HKDF: Different purposes and when to use each",
  description:
    "PBKDF2 is a password hashing KDF (slow, salted). HKDF expands key material using HMAC. Understand use-cases and differences.",
  keywords: [
    "PBKDF2",
    "HKDF",
    "password hashing",
    "key derivation",
    "HMAC",
    "salt",
    "iterations",
    "key expansion",
  ],
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
  const faq = [
    {
      q: "Is PBKDF2 still recommended for passwords?",
      a: "Yes, with a large iteration count and unique salt per password. However, modern memory-hard KDFs (Argon2, scrypt) are preferred where available due to better GPU/ASIC resistance.",
    },
    {
      q: "Can I use HKDF directly with passwords?",
      a: "No. HKDF assumes high-entropy input keying material. If the input is a human password, first use a password hashing function (e.g., PBKDF2/Argon2), then HKDF if you need key expansion.",
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
        <h1>PBKDF2 vs HKDF</h1>
        <p>
          PBKDF2 and HKDF serve fundamentally different goals. PBKDF2 is a
          password hashing key-derivation function: it takes a low-entropy human
          password and, with a unique salt and high iteration count, stretches
          computation to slow down brute-force attacks. HKDF, on the other hand,
          is a key expansion mechanism built on HMAC; it assumes you already
          have a strong, high-entropy input keying material (IKM) and lets you
          derive one or multiple cryptographic subkeys for different contexts.
        </p>
        <p>
          In practice, if your input is a user password, use{" "}
          <a href="/pbkdf2">PBKDF2</a>
          (or better, a memory-hard function such as Argon2) with a per-user
          salt and a sufficiently large iteration count. If your input is an
          ECDH shared secret, a random master key, or any other high-entropy
          secret, it is appropriate to apply <a href="/hkdf">HKDF</a> (extract
          then expand) to produce purpose-scoped keys. Avoid feeding raw
          passwords into HKDF; and avoid using PBKDF2 for key expansion when you
          already have strong key material.
        </p>

        <h2 style={{ marginTop: 16 }}>Recommended settings</h2>
        <ul>
          <li>
            PBKDF2: unique salt per password, large iterations, fixed dkLen
          </li>
          <li>
            HKDF: context info (info) labels per subkey, separate extract/expand
            steps
          </li>
        </ul>

        <h2 style={{ marginTop: 16 }}>Related tools</h2>
        <p>
          Try: <a href="/pbkdf2">PBKDF2</a>, <a href="/hkdf">HKDF</a>,{" "}
          <a href="/hmac-sha256">HMAC-SHA256</a>, <a href="/random">Random</a>
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
