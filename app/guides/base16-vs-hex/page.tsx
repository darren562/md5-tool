import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base16 vs Hex: Are they the same?",
  description:
    "Base16 and Hexadecimal (hex) are the same encoding. Learn naming differences, casing, and typical tooling.",
  alternates: { canonical: "https://www.hashkitly.com/guides/base16-vs-hex" },
  openGraph: {
    title: "Base16 vs Hex",
    description:
      "Terminology, uppercase/lowercase variants, and common use-cases.",
    type: "article",
    url: "https://www.hashkitly.com/guides/base16-vs-hex",
  },
  twitter: {
    card: "summary",
    title: "Base16 vs Hex",
    description: "Clear up the naming confusion.",
  },
};

export default function Page() {
  return (
    <div className="container">
      <div className="box">
        <h1>Base16 vs Hex</h1>
        <p>
          Base16 is another name for hexadecimal. Both represent bytes using 16
          symbols (0–9 and A–F). Some tools prefer lowercase a–f; both are
          equivalent unless a system is case-sensitive.
        </p>
        <p>
          Tools: <a href="/hex">Hex</a>, <a href="/base64">Base64</a>
        </p>
      </div>
    </div>
  );
}

export {};
