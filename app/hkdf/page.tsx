import type { Metadata } from "next";
import HkdfClient from "./Client";

export const metadata: Metadata = {
  title: "HKDF (SHA-256) Online Key Expansion | Demo",
  description: "Derive key material via HKDF (SHA-256) in your browser.",
  keywords: "HKDF, key derivation, SHA-256, deriveBits",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "HKDF (SHA-256) Online Key Expansion | Demo",
    description: "Derive key material via HKDF (SHA-256) in your browser.",
    type: "website",
    url: "https://www.hashkitly.com/hkdf",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "HKDF (SHA-256) Online Key Expansion | Demo",
    description: "Derive key material via HKDF (SHA-256) in your browser.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: { canonical: "https://www.hashkitly.com/hkdf" },
};

export default function Page() {
  return <HkdfClient />;
}
