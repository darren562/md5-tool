import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UUIDv4 vs UUIDv7: Random vs time-ordered identifiers",
  description:
    "UUIDv4 uses random bits; UUIDv7 is time-ordered for better database locality and sorting. Learn tradeoffs and migration tips.",
  keywords: [
    "UUIDv4",
    "UUIDv7",
    "identifier",
    "database",
    "index",
    "ordering",
    "timestamp",
  ],
  alternates: {
    canonical: "https://www.hashkitly.com/guides/uuidv4-vs-uuidv7",
  },
  openGraph: {
    title: "UUIDv4 vs UUIDv7",
    description:
      "Randomness vs time ordering, collision risk, and performance implications.",
    type: "article",
    url: "https://www.hashkitly.com/guides/uuidv4-vs-uuidv7",
  },
  twitter: {
    card: "summary",
    title: "UUIDv4 vs UUIDv7",
    description: "Which to choose and why.",
  },
};

export default function Page() {
  const faq = [
    {
      q: "Why do many teams switch to UUIDv7?",
      a: "UUIDv7 improves index locality and chronological ordering thanks to its timestamp prefix, reducing page splits and improving range scans in many databases.",
    },
    {
      q: "Is UUIDv7 less private than v4?",
      a: "UUIDv7 embeds a coarse timestamp, which may leak creation time. If that matters, consider v4 or apply additional privacy measures.",
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
        <h1>UUIDv4 vs UUIDv7</h1>
        <p>
          UUIDv4 generates identifiers from randomness. This spreads new values
          throughout an index, which can cause page splits and cache misses. In
          contrast, UUIDv7 is time-ordered: its high bits encode a timestamp,
          clustering inserts near the end of the index for better locality and
          natural sorting by creation time.
        </p>
        <p>
          For analytics and event streams, v7 simplifies time-sorted operations.
          For privacy-sensitive contexts, v4 avoids leaking creation time.
          Collision risk is negligible for both when implemented correctly. Many
          systems can migrate by accepting both formats during a transition and
          backfilling existing records.
        </p>

        <h2 style={{ marginTop: 16 }}>Related tools</h2>
        <p>
          Try: <a href="/uuid">UUID generator</a>, <a href="/random">Random</a>
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
