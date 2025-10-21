import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base32 vs Base32hex: Alphabets and compatibility",
  description:
    "Understand differences between Base32 (A-Z2-7) and Base32hex (0-9A-V) alphabets and decoding compatibility.",
  keywords: [
    "Base32",
    "Base32hex",
    "RFC 4648",
    "alphabet",
    "padding",
    "encoding",
  ],
  alternates: {
    canonical: "https://www.hashkitly.com/guides/base32-vs-base32hex",
  },
  openGraph: {
    title: "Base32 vs Base32hex",
    description:
      "Alphabet, padding, and where each is used (OTP secrets, RFC 4648).",
    type: "article",
    url: "https://www.hashkitly.com/guides/base32-vs-base32hex",
  },
  twitter: {
    card: "summary",
    title: "Base32 vs Base32hex",
    description: "Alphabet differences and tips.",
  },
};

export default function Page() {
  const faq = [
    {
      q: "What is the difference between the alphabets?",
      a: "Base32 uses A–Z and 2–7; Base32hex uses 0–9 and A–V. The mapping of symbols to values differs, so decoders are not interchangeable.",
    },
    {
      q: "Do both variants use padding?",
      a: "Per RFC 4648, padding with = is optional for both. Many modern APIs accept unpadded input.",
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
        <h1>Base32 vs Base32hex</h1>
        <p>
          Base32 and Base32hex are both 5-bit encodings defined by RFC 4648 but
          they use different alphabets. As a result, strings produced by a
          Base32 encoder will not decode correctly with a Base32hex decoder and
          vice versa. Choose the variant your ecosystem expects: Base32 is
          common for OTP secret keys, while Base32hex may appear in some
          interoperability profiles.
        </p>
        <p>
          If you control both ends, standardize on one alphabet and document it.
          When consuming external data, inspect the alphabet and attempt the
          correct decoder. Our tools can help: <a href="/base32">Base32</a> and
          <a href="/base32hex"> Base32hex</a>.
        </p>

        <h2 style={{ marginTop: 16 }}>Related tools</h2>
        <p>
          Try: <a href="/base32">Base32</a>, <a href="/base32hex">Base32hex</a>,{" "}
          <a href="/base64">Base64</a>
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
