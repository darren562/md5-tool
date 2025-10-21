import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UUID vs GUID: Are they the same?",
  description:
    "Understand the difference between UUID and GUID terms, formatting, and practical usage.",
  keywords: ["UUID", "GUID", "identifier", "RFC 4122", "format"],
  alternates: { canonical: "https://www.hashkitly.com/guides/uuid-vs-guid" },
  openGraph: {
    title: "UUID vs GUID",
    description: "Terminology, formatting, and compatibility across systems.",
    type: "article",
    url: "https://www.hashkitly.com/guides/uuid-vs-guid",
  },
  twitter: {
    card: "summary",
    title: "UUID vs GUID",
    description: "Naming differences and compatibility.",
  },
};

export default function Page() {
  const faq = [
    {
      q: "Is a GUID the same as a UUID?",
      a: "Practically yes. GUID is the Microsoft term for a 128-bit identifier compatible with UUIDs defined in RFC 4122.",
    },
    {
      q: "Are there formatting differences?",
      a: "Some APIs include braces or uppercase letters for GUIDs; UUIDs are commonly lowercase without braces. The bytes are the same.",
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
        <h1>UUID vs GUID</h1>
        <p>
          UUID (Universally Unique Identifier) is standardized by RFC 4122. GUID
          (Globally Unique Identifier) is Microsoft's name for the same 128-bit
          structure. Most systems treat them interchangeably.
        </p>
        <p>
          Minor formatting differences exist (braces, uppercase), but parsing
          libraries typically accept multiple variants. Use our
          <a href="/uuid"> UUID generator</a> to create v4 or v7 identifiers
          suitable for databases and distributed systems.
        </p>

        <h2 style={{ marginTop: 16 }}>Related tools</h2>
        <p>
          Try: <a href="/uuid">UUID generator</a>,{" "}
          <a href="/uuidv4-vs-uuidv7">UUIDv4 vs UUIDv7</a>
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
