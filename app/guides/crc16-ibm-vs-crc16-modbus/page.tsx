import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRC16-IBM vs CRC16-MODBUS: Polynomial and init differences",
  description:
    "Compare CRC16-IBM and CRC16-MODBUS variants: polynomials, initial values, refin/out, and typical protocols.",
  keywords: ["CRC16", "IBM", "MODBUS", "polynomial", "checksum", "protocol"],
  alternates: {
    canonical: "https://www.hashkitly.com/guides/crc16-ibm-vs-crc16-modbus",
  },
  openGraph: {
    title: "CRC16-IBM vs CRC16-MODBUS",
    description:
      "Understand variant parameters and when each is required by a system.",
    type: "article",
    url: "https://www.hashkitly.com/guides/crc16-ibm-vs-crc16-modbus",
  },
  twitter: {
    card: "summary",
    title: "CRC16-IBM vs CRC16-MODBUS",
    description: "Variant parameters and typical use-cases.",
  },
};

export default function Page() {
  const faq = [
    {
      q: "Are CRC16-IBM and CRC16-MODBUS interchangeable?",
      a: "No. They use different parameters (polynomial, init, refin/out), yielding different digests for the same data. Use the variant mandated by your protocol.",
    },
    {
      q: "How do I pick the right CRC variant?",
      a: "Follow the specification of your device or file format. If you control both ends, choose a well-documented variant and keep parameters consistent.",
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
        <h1>CRC16-IBM vs CRC16-MODBUS</h1>
        <p>
          CRC16 variants differ by polynomial, initial value, bit reflection
          (refin/refout), and final XOR. Those small parameter differences
          produce completely different checksums. In industrial systems, device
          firmware and serial protocols often mandate one variant explicitly—mix
          ups will cause verification failures.
        </p>
        <p>
          If you are debugging a mismatch, check endianness, reflection flags,
          and whether bytes include headers or addresses. Use our calculators to
          validate your chosen parameters: <a href="/crc16-ibm">CRC16-IBM</a>{" "}
          and
          <a href="/crc16-modbus"> CRC16-MODBUS</a>. Keep implementations
          aligned on both sides and document parameters for future maintenance.
        </p>

        <h2 style={{ marginTop: 16 }}>Related tools</h2>
        <p>
          Try: <a href="/crc16">CRC16</a>,{" "}
          <a href="/crc16-ccitt">CRC16-CCITT</a>
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
