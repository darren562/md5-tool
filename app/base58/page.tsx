import type { Metadata } from "next";
import Base58Client from "./Client";

export const metadata: Metadata = {
  title: "Base58 Encode/Decode Online | Bitcoin Alphabet",
  description: "Convert text to Base58 and Base58 to text in your browser.",
  keywords: "Base58, encode, decode, Bitcoin alphabet",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Base58 Encode/Decode Online | Bitcoin Alphabet",
    description: "Convert text to Base58 and Base58 to text in your browser.",
    type: "website",
    url: "https://www.hashkitly.com/base58",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "Base58 Encode/Decode Online | Bitcoin Alphabet",
    description: "Convert text to Base58 and Base58 to text in your browser.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: { canonical: "https://www.hashkitly.com/base58" },
};

export default function Page() {
  return <Base58Client />;
}

export {};
