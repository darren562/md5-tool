import type { Metadata } from "next";
import Sha1Client from "./Client";

export const metadata: Metadata = {
  title: "SHA-1 Online Hash Generator | Free & Secure",
  description:
    "Free online SHA-1 hash generator for text. Instant SHA-1 calculation in your browser with no data upload. Best for quick checks and legacy interoperability.",
  keywords:
    "SHA1, SHA-1, hash, online, generator, text hash, sha1 online, sha1 tool, checksum, legacy",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "SHA-1 Online Hash Generator | Free & Secure",
    description:
      "Free online SHA-1 hash generator for text. Instant SHA-1 calculation in your browser with no data upload.",
    type: "website",
    url: "https://www.hashkitly.com/sha1",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "SHA-1 Online Hash Generator | Free & Secure",
    description:
      "Free online SHA-1 hash generator for text. Instant SHA-1 calculation in your browser with no data upload.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: {
    canonical: "https://www.hashkitly.com/sha1",
  },
};

export default function Page() {
  return <Sha1Client />;
}
