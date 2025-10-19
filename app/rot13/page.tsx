import type { Metadata } from "next";
import Rot13Client from "./Client";

export const metadata: Metadata = {
  title: "ROT13 Encoder/Decoder Online | Free & In-Browser",
  description:
    "Encode or decode ROT13 in your browser. Free, instant, no upload.",
  keywords: "rot13, encode, decode, online rot13, text obfuscation",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "ROT13 Encoder/Decoder Online | Free & In-Browser",
    description:
      "Encode or decode ROT13 in your browser. Free, instant, no upload.",
    type: "website",
    url: "https://www.hashkitly.com/rot13",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "ROT13 Encoder/Decoder Online | Free & In-Browser",
    description:
      "Encode or decode ROT13 in your browser. Free, instant, no upload.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: { canonical: "https://www.hashkitly.com/rot13" },
};

export default function Page() {
  return <Rot13Client />;
}
