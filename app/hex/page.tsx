import type { Metadata } from "next";
import HexClient from "./Client";

export const metadata: Metadata = {
  title: "Hex Encode/Decode Online Tool | Free & Fast",
  description: "Convert text to hex and hex to text instantly in your browser.",
  keywords: "hex, hex encode, hex decode, text to hex, hex to text",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Hex Encode/Decode Online Tool | Free & Fast",
    description:
      "Convert text to hex and hex to text instantly in your browser.",
    type: "website",
    url: "https://www.hashkitly.com/hex",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "Hex Encode/Decode Online Tool | Free & Fast",
    description:
      "Convert text to hex and hex to text instantly in your browser.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: {
    canonical: "https://www.hashkitly.com/hex",
  },
};

export default function Page() {
  return <HexClient />;
}
