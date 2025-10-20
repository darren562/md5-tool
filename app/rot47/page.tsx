import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "ROT47 Encoder/Decoder Online | Text Obfuscation",
  description:
    "Encode and decode ROT47 instantly in your browser. Free, private, no upload.",
  openGraph: {
    title: "ROT47 Encoder/Decoder Online | Text Obfuscation",
    description:
      "Encode and decode ROT47 instantly in your browser. Free, private, no upload.",
    url: "https://www.hashkitly.com/rot47",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ROT47 Encoder/Decoder Online | Text Obfuscation",
    description:
      "Encode and decode ROT47 instantly in your browser. Free, private, no upload.",
  },
  alternates: { canonical: "https://www.hashkitly.com/rot47" },
};

export default function Page() {
  return <Client />;
}
