import type { Metadata } from "next";
import HmacSha1Client from "./Client";

export const metadata: Metadata = {
  title: "HMAC-SHA1 Online Generator | Legacy",
  description: "Generate HMAC-SHA1 for messages with a secret key (legacy).",
  keywords: "HMAC, SHA1, generator, legacy",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "HMAC-SHA1 Online Generator | Legacy",
    description: "Generate HMAC-SHA1 for messages with a secret key (legacy).",
    type: "website",
    url: "https://www.hashkitly.com/hmac-sha1",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "HMAC-SHA1 Online Generator | Legacy",
    description: "Generate HMAC-SHA1 for messages with a secret key (legacy).",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: { canonical: "https://www.hashkitly.com/hmac-sha1" },
};

export default function Page() {
  return <HmacSha1Client />;
}

export {};
