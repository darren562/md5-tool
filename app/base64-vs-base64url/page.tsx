import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base64 vs Base64URL: Differences and when to use each",
  description:
    "Learn how Base64URL differs from Base64 (+/ vs -_, padding) and where each is used (URLs, JWT).",
  alternates: { canonical: "https://www.hashkitly.com/base64-vs-base64url" },
  openGraph: {
    title: "Base64 vs Base64URL",
    description: "Character set, padding, and typical use cases with examples.",
    type: "article",
    url: "https://www.hashkitly.com/base64-vs-base64url",
  },
  twitter: {
    card: "summary",
    title: "Base64 vs Base64URL",
    description: "Key differences and compatibility.",
  },
};

export default function Page() {
  return (
    <div className="container">
      <div className="box">
        <h1>Base64 vs Base64URL</h1>
        <p>
          Base64URL replaces + and / with - and _. Padding = may be omitted. Use
          Base64URL in URLs, cookies, and JWT to avoid reserved characters.
        </p>
        <p>
          Tools: <a href="/base64">Base64</a>,{" "}
          <a href="/base64url">Base64URL</a>, <a href="/jwt">JWT</a>
        </p>
      </div>
    </div>
  );
}
