import type { Metadata } from "next";
import HkdfClient from "./Client";

export const metadata: Metadata = {
  title: "HKDF (SHA-256) Online | Extract-and-Expand Key Derivation",
  description:
    "Derive subkeys from input keying material using HKDF (SHA-256). Set salt, info, and output length. Free, in-browser.",
  keywords: "HKDF, key derivation, SHA-256, deriveBits, extract and expand",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "HKDF (SHA-256) Online | Extract-and-Expand Key Derivation",
    description:
      "Derive subkeys from input keying material using HKDF (SHA-256). Set salt, info, and output length. Free, in-browser.",
    type: "website",
    url: "https://www.hashkitly.com/hkdf",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "HKDF (SHA-256) Online | Extract-and-Expand Key Derivation",
    description:
      "Derive subkeys from input keying material using HKDF (SHA-256). Set salt, info, and output length. Free, in-browser.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: { canonical: "https://www.hashkitly.com/hkdf" },
};

export default function Page() {
  return <HkdfClient />;
}
