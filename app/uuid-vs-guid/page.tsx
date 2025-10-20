import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UUID vs GUID: Are they the same?",
  description:
    "Understand the difference between UUID and GUID terms, formatting, and practical usage.",
  alternates: { canonical: "https://www.hashkitly.com/uuid-vs-guid" },
  openGraph: {
    title: "UUID vs GUID",
    description: "Terminology, formatting, and compatibility across systems.",
    type: "article",
    url: "https://www.hashkitly.com/uuid-vs-guid",
  },
  twitter: {
    card: "summary",
    title: "UUID vs GUID",
    description: "Naming differences and compatibility.",
  },
};

export default function Page() {
  return (
    <div className="container">
      <div className="box">
        <h1>UUID vs GUID</h1>
        <p>
          UUID is a standard (RFC 4122) 128-bit identifier. GUID is Microsoft's
          implementation term. In most contexts, they are interchangeable.
        </p>
        <p>
          Tools: <a href="/uuid">UUID generator</a>
        </p>
      </div>
    </div>
  );
}
