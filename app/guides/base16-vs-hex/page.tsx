import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base16 vs Hex: Are they the same?",
  description:
    "Base16 and Hexadecimal (hex) are the same encoding. Learn naming differences, casing, and typical tooling.",
  keywords: [
    "Base16",
    "hex",
    "hexadecimal",
    "encoding",
    "uppercase",
    "lowercase",
  ],
  alternates: { canonical: "https://www.hashkitly.com/guides/base16-vs-hex" },
  openGraph: {
    title: "Base16 vs Hex",
    description:
      "Terminology, uppercase/lowercase variants, and common use-cases.",
    type: "article",
    url: "https://www.hashkitly.com/guides/base16-vs-hex",
  },
  twitter: {
    card: "summary",
    title: "Base16 vs Hex",
    description: "Clear up the naming confusion.",
  },
};

export default function Page() {
  const faq = [
    {
      q: "Is Base16 exactly the same as hex?",
      a: "Yes. Base16 is a formal name for the same representation commonly called hexadecimal. Both use digits 0–9 and letters A–F to encode bytes.",
    },
    {
      q: "Should I use uppercase or lowercase hex?",
      a: "Functionally they are equivalent. Pick one style and keep it consistent across your APIs and UIs unless a system requires a specific case.",
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
        <h1>Base16 vs Hex</h1>
        <p>
          Base16 and hexadecimal are interchangeable terms. Each byte is
          represented by two characters drawn from sixteen symbols. Uppercase
          A–F and lowercase a–f are both common; some checksum tools output
          uppercase by default while many programming libraries produce
          lowercase. Unless an interface is case-sensitive, they compare equal.
        </p>
        <p>
          Hex is a human-friendly way to display binary data such as digests,
          keys, and wire formats. When bandwidth is a concern, encodings like
          <a href="/base64">Base64</a> are more compact (4/3 overhead). For URL
          contexts, consider <a href="/base64url">Base64url</a>.
        </p>

        <h2 style={{ marginTop: 16 }}>Related tools</h2>
        <p>
          Try: <a href="/hex">Hex encoder/decoder</a>,{" "}
          <a href="/base32">Base32</a>, <a href="/base64">Base64</a>
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
