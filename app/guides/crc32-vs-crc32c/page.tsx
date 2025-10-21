import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRC32 vs CRC32C: Which checksum do you need?",
  description:
    "Understand differences between CRC32 (IEEE) and CRC32C (Castagnoli), hardware acceleration, and interoperability.",
  keywords: [
    "CRC32",
    "CRC32C",
    "Castagnoli",
    "checksum",
    "polynomial",
    "SSE4.2",
  ],
  alternates: { canonical: "https://www.hashkitly.com/guides/crc32-vs-crc32c" },
  openGraph: {
    title: "CRC32 vs CRC32C",
    description:
      "Parameters, performance, and use cases. Learn which CRC is used in your stack.",
    type: "article",
    url: "https://www.hashkitly.com/guides/crc32-vs-crc32c",
  },
  twitter: {
    card: "summary",
    title: "CRC32 vs CRC32C",
    description: "Differences and compatibility notes.",
  },
};

export default function Page() {
  const faq = [
    {
      q: "Which variant is faster?",
      a: "On many CPUs, CRC32C can use SSE4.2 instructions, making it significantly faster than CRC32 when available.",
    },
    {
      q: "Are CRC32 and CRC32C interchangeable?",
      a: "No. They use different polynomials and yield different results for the same data. Systems must agree on the variant.",
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
        <h1>CRC32 vs CRC32C</h1>
        <p>
          CRC32 (IEEE) and CRC32C (Castagnoli) are different polynomials with
          different error-detection properties. CRC32C often benefits from CPU
          acceleration (SSE4.2 or dedicated instructions), making it attractive
          for high-throughput systems such as storage and networking stacks.
        </p>
        <p>
          Interoperability is key: choose the variant that your ecosystem uses
          and keep it consistent across producers and consumers. Validate with
          our calculators: <a href="/crc32">CRC32</a> and
          <a href="/crc32c"> CRC32C</a>.
        </p>

        <h2 style={{ marginTop: 16 }}>Related tools</h2>
        <p>
          Try: <a href="/crc32">CRC32</a>, <a href="/crc32c">CRC32C</a>,{" "}
          <a href="/crc32-vs-crc32c">This guide</a>
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
