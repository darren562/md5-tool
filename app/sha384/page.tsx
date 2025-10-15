import type { Metadata } from "next";
import Sha384Client from "./Client";

export const metadata: Metadata = {
  title: "SHA-384 Online Hash Generator | Free & Secure",
  description:
    "Free online SHA-384 hash generator. Browser-only calculation with instant results.",
  keywords: "SHA384, SHA-384, hash, online, generator",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "SHA-384 Online Hash Generator | Free & Secure",
    description:
      "Free online SHA-384 hash generator. Browser-only calculation with instant results.",
    type: "website",
    url: "https://www.hashkitly.com/sha384",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "SHA-384 Online Hash Generator | Free & Secure",
    description:
      "Free online SHA-384 hash generator. Browser-only calculation with instant results.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: {
    canonical: "https://www.hashkitly.com/sha384",
  },
};

export default function Page() {
  return <Sha384Client />;
}
