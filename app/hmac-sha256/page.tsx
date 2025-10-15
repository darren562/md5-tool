import type { Metadata } from "next";
import HmacSha256Client from "./Client";

export const metadata: Metadata = {
  title: "HMAC-SHA256 Online Generator | Free & Secure",
  description:
    "Free online HMAC-SHA256 generator for message signing and verification examples. 100% browser-based.",
  keywords: "HMAC, SHA256, HMAC-SHA256, mac, message authentication, online",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "HMAC-SHA256 Online Generator | Free & Secure",
    description:
      "Free online HMAC-SHA256 generator for message signing and verification examples. 100% browser-based.",
    type: "website",
    url: "https://www.hashkitly.com/hmac-sha256",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "HMAC-SHA256 Online Generator | Free & Secure",
    description:
      "Free online HMAC-SHA256 generator for message signing and verification examples. 100% browser-based.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: {
    canonical: "https://www.hashkitly.com/hmac-sha256",
  },
};

export default function Page() {
  return <HmacSha256Client />;
}
