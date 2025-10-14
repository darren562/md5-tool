import type { Metadata } from "next";
import Sha512Client from "./Client";

export const metadata: Metadata = {
  title: "SHA-512 Online Hash Generator | Free & Secure",
  description:
    "Free online SHA-512 hash generator for text. Instant SHA-512 calculation in your browser with no data upload. Strong 512-bit digest for integrity checks.",
  keywords:
    "SHA512, SHA-512, hash, online, generator, text hash, sha512 online, sha512 tool, secure hash",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "SHA-512 Online Hash Generator | Free & Secure",
    description:
      "Free online SHA-512 hash generator for text. Instant SHA-512 calculation in your browser with no data upload.",
    type: "website",
    url: "https://www.hashkitly.com/sha512",
    images: ["https://www.hashkitly.com/social-card.svg"],
  },
  twitter: {
    card: "summary",
    title: "SHA-512 Online Hash Generator | Free & Secure",
    description:
      "Free online SHA-512 hash generator for text. Instant SHA-512 calculation in your browser with no data upload.",
    images: ["https://www.hashkitly.com/social-card.svg"],
  },
  alternates: { canonical: "https://www.hashkitly.com/sha512" },
};

export default function Page() {
  return <Sha512Client />;
}
