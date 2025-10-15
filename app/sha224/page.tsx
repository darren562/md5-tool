import type { Metadata } from "next";
import Sha224Client from "./Client";

export const metadata: Metadata = {
  title: "SHA-224 Online Hash Generator | Free & Secure",
  description:
    "Free online SHA-224 hash generator. Browser-only calculation with instant results.",
  keywords: "SHA224, SHA-224, hash, online, generator",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "SHA-224 Online Hash Generator | Free & Secure",
    description:
      "Free online SHA-224 hash generator. Browser-only calculation with instant results.",
    type: "website",
    url: "https://www.hashkitly.com/sha224",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "SHA-224 Online Hash Generator | Free & Secure",
    description:
      "Free online SHA-224 hash generator. Browser-only calculation with instant results.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: {
    canonical: "https://www.hashkitly.com/sha224",
  },
};

export default function Page() {
  return <Sha224Client />;
}
