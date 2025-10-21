import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base58 vs Base58Check: When to use each",
  description:
    "Base58Check extends Base58 with version and checksum (double SHA-256). Learn the format and when to use it.",
  keywords: [
    "Base58",
    "Base58Check",
    "checksum",
    "version",
    "bitcoin",
    "address",
  ],
  alternates: {
    canonical: "https://www.hashkitly.com/guides/base58-vs-base58check",
  },
  openGraph: {
    title: "Base58 vs Base58Check",
    description:
      "Understand version bytes and checksum in Bitcoin-style addresses.",
    type: "article",
    url: "https://www.hashkitly.com/guides/base58-vs-base58check",
  },
  twitter: {
    card: "summary",
    title: "Base58 vs Base58Check",
    description: "Version + checksum vs raw Base58.",
  },
};

export default function Page() {
  const faq = [
    {
      q: "What does Base58Check add on top of Base58?",
      a: "A 1-byte version prefix and a 4-byte checksum derived from double SHA-256. This detects common transcription errors.",
    },
    {
      q: "Do I need Base58Check for arbitrary data?",
      a: "Not usually. Base58Check is primarily for address-like payloads where human entry and versioning matter.",
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
        <h1>Base58 vs Base58Check</h1>
        <p>
          Base58 removes look-alike characters from the alphabet to make
          encodings easier to read and transcribe. Base58Check adds structure: a
          version byte identifies the payload type and a checksum protects
          against accidental errors. This format is used for Bitcoin-style
          addresses. For non-address data, plain Base58 is often sufficient.
        </p>
        <p>
          If you are building address formats, choose a clear version map and
          validate with checksums. Explore: <a href="/base58">Base58</a>,{" "}
          <a href="/base58check">Base58Check</a>, and
          <a href="/sha256"> SHA-256</a> for the checksum derivation.
        </p>

        <h2 style={{ marginTop: 16 }}>Related tools</h2>
        <p>
          Try: <a href="/base58">Base58</a>,{" "}
          <a href="/base58check">Base58Check</a>, <a href="/z85">Z85</a>
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
