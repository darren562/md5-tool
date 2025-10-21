import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base64 vs Base64URL: Differences and when to use each",
  description:
    "Learn how Base64URL differs from Base64 (+/ vs -_, padding) and where each is used (URLs, JWT).",
  keywords: ["Base64", "Base64URL", "URL-safe", "padding", "encoding", "JWT"],
  alternates: {
    canonical: "https://www.hashkitly.com/guides/base64-vs-base64url",
  },
  openGraph: {
    title: "Base64 vs Base64URL",
    description: "Character set, padding, and typical use cases with examples.",
    type: "article",
    url: "https://www.hashkitly.com/guides/base64-vs-base64url",
  },
  twitter: {
    card: "summary",
    title: "Base64 vs Base64URL",
    description: "Key differences and compatibility.",
  },
};

export default function Page() {
  const faq = [
    {
      q: "What characters differ between Base64 and Base64URL?",
      a: "Base64 uses + and / while Base64URL uses - and _. Base64URL may also omit trailing = padding for compactness.",
    },
    {
      q: "Can I safely use standard Base64 in URLs?",
      a: "It is risky because +, /, and = have special meaning in URLs and HTTP forms. Prefer Base64URL for URL, cookie, and JWT contexts.",
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
        <h1>Base64 vs Base64URL</h1>
        <p>
          Base64 and Base64URL encode binary data into ASCII, but they are not
          interchangeable. Base64 uses the <code>+</code> and <code>/</code>
          characters and typically includes <code>=</code> padding. Base64URL
          replaces <code>+</code> with <code>-</code> and <code>/</code> with
          <code>_</code>, and allows omitting padding to be URL- and
          cookie-safe. This avoids reserved characters that can be reinterpreted
          by browsers, proxies, or frameworks.
        </p>
        <p>
          Use <a href="/base64url">Base64URL</a> for web tokens and URLs (e.g.,
          <a href="/jwt">JWT</a>). Use <a href="/base64">Base64</a> for general
          file encodings, email (MIME), and CLI tools that expect the classic
          alphabet. Many decoders are lenient and accept both alphabets, but you
          should output the format your consumers expect to avoid subtle bugs.
        </p>

        <h2 style={{ marginTop: 16 }}>Related tools</h2>
        <p>
          Try: <a href="/base64">Base64</a>, <a href="/base64url">Base64URL</a>,{" "}
          <a href="/jwt">JWT</a>
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
