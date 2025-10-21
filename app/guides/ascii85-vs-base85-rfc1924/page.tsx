import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ASCII85 vs Base85 (RFC 1924): What's the difference?",
  description:
    "Compare ASCII85 (PostScript/PDF) and RFC 1924 Base85 alphabets, framing, and compatibility.",
  keywords: ["ASCII85", "Base85", "RFC 1924", "encoding", "delimiters", "Z85"],
  alternates: {
    canonical: "https://www.hashkitly.com/guides/ascii85-vs-base85-rfc1924",
  },
  openGraph: {
    title: "ASCII85 vs Base85 (RFC 1924)",
    description: "Alphabet and delimiter differences; where each is used.",
    type: "article",
    url: "https://www.hashkitly.com/guides/ascii85-vs-base85-rfc1924",
  },
  twitter: {
    card: "summary",
    title: "ASCII85 vs Base85 (RFC 1924)",
    description: "Understand the encoding variants.",
  },
};

export default function Page() {
  const faq = [
    {
      q: "Are ASCII85 and Base85 (RFC 1924) compatible?",
      a: "No. ASCII85 uses different alphabet and framing (often <~ ~>) than RFC 1924 Base85. Use a decoder specific to the variant.",
    },
    {
      q: "What is Z85 and how does it relate?",
      a: "Z85 is another Base85 variant used by ZeroMQ, with its own alphabet and no delimiters. It is also not compatible with ASCII85 or RFC 1924 Base85.",
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
        <h1>ASCII85 vs Base85 (RFC 1924)</h1>
        <p>
          ASCII85 (often seen in PostScript/PDF) and RFC 1924 Base85 encode data
          using 85-character alphabets, but they differ in symbol sets and
          framing. ASCII85 commonly wraps data with <code>&lt;~</code> and
          <code>~&gt;</code> and supports a shorthand for zero runs, while RFC
          1924 Base85 defines a purely alphabetic variant without those
          delimiters. Strings are not cross-decodable between the two.
        </p>
        <p>
          Choose the decoder that matches your source. For ZeroMQ payloads,
          consider <a href="/z85">Z85</a>, another Base85 family member with its
          own alphabet. Our tools: <a href="/ascii85">ASCII85</a>,{" "}
          <a href="/base85-rfc1924">Base85 RFC1924</a>, and{" "}
          <a href="/z85">Z85</a>.
        </p>

        <h2 style={{ marginTop: 16 }}>Related tools</h2>
        <p>
          Try: <a href="/ascii85">ASCII85</a>,{" "}
          <a href="/base85-rfc1924">Base85 RFC1924</a>, <a href="/z85">Z85</a>
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
