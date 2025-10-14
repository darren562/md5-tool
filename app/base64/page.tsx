import type { Metadata } from "next";
import Base64Client from "./Client";

export const metadata: Metadata = {
  title: "Base64 Encode & Decode Online | Free & Secure Converter",
  description:
    "Free online Base64 encoder and decoder for text. Instantly encode or decode Base64 in your browser with no data upload. Safe, private, and easy to use.",
  keywords:
    "Base64, encode, decode, online converter, text encoding, base64 online, base64 tool, privacy, secure",
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
