import type { Metadata } from "next";
import HmacSha512Client from "./Client";

export const metadata: Metadata = {
  title: "HMAC-SHA512 Online Generator | Free & Secure",
  description:
    "Free online HMAC-SHA512 generator for message signing and verification examples. 100% browser-based.",
  keywords: "HMAC, SHA512, HMAC-SHA512, mac, message authentication, online",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "HMAC-SHA512 Online Generator | Free & Secure",
    description:
      "Free online HMAC-SHA512 generator for message signing and verification examples. 100% browser-based.",
    type: "website",
    url: "https://www.hashkitly.com/hmac-sha512",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "HMAC-SHA512 Online Generator | Free & Secure",
    description:
      "Free online HMAC-SHA512 generator for message signing and verification examples. 100% browser-based.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: {
    canonical: "https://www.hashkitly.com/hmac-sha512",
  },
};

export default function Page() {
  return <HmacSha512Client />;
}
