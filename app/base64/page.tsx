import type { Metadata } from "next";
import Base64Client from "./Client";

export const metadata: Metadata = {
  title: "Base64 Encode & Decode Online | Free & Secure Converter",
  description:
    "Free online Base64 encoder and decoder for text. Instantly encode or decode Base64 in your browser with no data upload. Safe, private, and easy to use.",
  keywords:
    "base64 encode text online, base64 decode string online, browser base64 converter, base64 without upload, free base64 encoder decoder, copy base64 output",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Base64 Encode & Decode Online | Free & Secure Converter",
    description:
      "Free online Base64 encoder and decoder for text. Instantly encode or decode Base64 in your browser with no data upload. Safe, private, and easy to use.",
    type: "website",
    url: "https://www.hashkitly.com/base64",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "Base64 Encode & Decode Online | Free & Secure Converter",
    description:
      "Free online Base64 encoder and decoder for text. Instantly encode or decode Base64 in your browser with no data upload. Safe, private, and easy to use.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: {
    canonical: "https://www.hashkitly.com/base64",
  },
};

export default function Page() {
  // server component wrapper that renders the client UI
  return <Base64Client />;
}
