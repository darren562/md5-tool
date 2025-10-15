import type { Metadata } from "next";
import Sha256Client from "./Client";

export const metadata: Metadata = {
  title: "SHA256 Online Hash Generator & Text Encryption | Free & Secure",
  description:
    "Free online SHA256 hash generator for text encryption. Instant SHA256 hash calculation in your browser with no data upload. Perfect for password hashing and text verification.",
  keywords:
    "sha256 online generator, hash string to sha256, browser sha256 calculator, verify sha256 checksum online, create sha256 without upload",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "SHA256 Online Hash Generator & Text Encryption | Free & Secure",
    description:
      "Free online SHA256 hash generator for text encryption. Instant SHA256 hash calculation in your browser with no data upload. Perfect for password hashing and text verification.",
    type: "website",
    url: "https://www.hashkitly.com/sha256",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "SHA256 Online Hash Generator & Text Encryption | Free & Secure",
    description:
      "Free online SHA256 hash generator for text encryption. Instant SHA256 hash calculation in your browser with no data upload. Perfect for password hashing and text verification.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: {
    canonical: "https://www.hashkitly.com/sha256",
  },
};

export default function Page() {
  // server component wrapper that renders the client UI
  return <Sha256Client />;
}
