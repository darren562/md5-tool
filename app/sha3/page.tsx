import type { Metadata } from "next";
import Sha3Client from "./Client";

export const metadata: Metadata = {
  title: "SHA-3 (Keccak) Online Hash Generator | Free & Secure",
  description:
    "Free online SHA-3 (Keccak) hash generator supporting 224/256/384/512-bit outputs. 100% browser-based, no data upload.",
  keywords:
    "SHA3, SHA-3, Keccak, hash, online, generator, sha3-256, sha3-512, secure hash",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "SHA-3 (Keccak) Online Hash Generator | Free & Secure",
    description:
      "Free online SHA-3 (Keccak) hash generator supporting 224/256/384/512-bit outputs. 100% browser-based, no data upload.",
    type: "website",
    url: "https://www.hashkitly.com/sha3",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "SHA-3 (Keccak) Online Hash Generator | Free & Secure",
    description:
      "Free online SHA-3 (Keccak) hash generator supporting 224/256/384/512-bit outputs. 100% browser-based, no data upload.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: {
    canonical: "https://www.hashkitly.com/sha3",
  },
};

export default function Page() {
  return <Sha3Client />;
}
