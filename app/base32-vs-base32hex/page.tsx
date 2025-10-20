import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base32 vs Base32hex: Alphabets and compatibility",
  description:
    "Understand differences between Base32 (A-Z2-7) and Base32hex (0-9A-V) alphabets and decoding compatibility.",
  alternates: { canonical: "https://www.hashkitly.com/base32-vs-base32hex" },
  openGraph: {
    title: "Base32 vs Base32hex",
    description:
      "Alphabet, padding, and where each is used (OTP secrets, RFC 4648).",
    type: "article",
    url: "https://www.hashkitly.com/base32-vs-base32hex",
  },
  twitter: {
    card: "summary",
    title: "Base32 vs Base32hex",
    description: "Alphabet differences and tips.",
  },
};

export default function Page() {
  return (
    <div className="container">
      <div className="box">
        <h1>Base32 vs Base32hex</h1>
        <p>
          Base32 uses A–Z and 2–7. Base32hex uses 0–9 and A–V mapping. They are
          not cross-compatible—use the correct decoder for the alphabet used.
        </p>
        <p>
          Tools: <a href="/base32">Base32</a>,{" "}
          <a href="/base32hex">Base32hex</a>
        </p>
      </div>
    </div>
  );
}
