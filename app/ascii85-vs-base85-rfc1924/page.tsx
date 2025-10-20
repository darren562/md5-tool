import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ASCII85 vs Base85 (RFC 1924): What's the difference?",
  description:
    "Compare ASCII85 (PostScript/PDF) and RFC 1924 Base85 alphabets, framing, and compatibility.",
  alternates: {
    canonical: "https://www.hashkitly.com/ascii85-vs-base85-rfc1924",
  },
  openGraph: {
    title: "ASCII85 vs Base85 (RFC 1924)",
    description: "Alphabet and delimiter differences; where each is used.",
    type: "article",
    url: "https://www.hashkitly.com/ascii85-vs-base85-rfc1924",
  },
  twitter: {
    card: "summary",
    title: "ASCII85 vs Base85 (RFC 1924)",
    description: "Understand the encoding variants.",
  },
};

export default function Page() {
  return (
    <div className="container">
      <div className="box">
        <h1>ASCII85 vs Base85 (RFC 1924)</h1>
        <p>
          ASCII85 uses <code>&lt;~ ~&gt;</code> delimiters and a different
          alphabet than RFC 1924's Base85. They are not interchangeable.
        </p>
        <p>
          Tools: <a href="/ascii85">ASCII85</a>,{" "}
          <a href="/base85-rfc1924">Base85 RFC1924</a>, <a href="/z85">Z85</a>
        </p>
      </div>
    </div>
  );
}
