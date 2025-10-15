import type { Metadata } from "next";
import Base32Client from "./Client";

export const metadata: Metadata = {
  title: "Base32 Encode/Decode Online | RFC 4648",
  description: "Convert text to Base32 and Base32 to text in your browser.",
  keywords: "Base32, encode, decode, RFC 4648",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Base32 Encode/Decode Online | RFC 4648",
    description: "Convert text to Base32 and Base32 to text in your browser.",
    type: "website",
    url: "https://www.hashkitly.com/base32",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "Base32 Encode/Decode Online | RFC 4648",
    description: "Convert text to Base32 and Base32 to text in your browser.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: { canonical: "https://www.hashkitly.com/base32" },
};

export default function Page() {
  return <Base32Client />;
}

export {};
