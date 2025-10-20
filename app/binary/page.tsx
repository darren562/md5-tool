import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Text ↔ Binary Converter Online (UTF-8) | Encode/Decode",
  description:
    "Convert text to binary and binary to text using UTF-8 in your browser. Free, instant, no upload.",
  openGraph: {
    title: "Text ↔ Binary Converter Online (UTF-8) | Encode/Decode",
    description:
      "Convert text to binary and binary to text using UTF-8 in your browser. Free, instant, no upload.",
    url: "https://www.hashkitly.com/binary",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Text ↔ Binary Converter Online (UTF-8) | Encode/Decode",
    description:
      "Convert text to binary and binary to text using UTF-8 in your browser. Free, instant, no upload.",
  },
  alternates: { canonical: "https://www.hashkitly.com/binary" },
};

export default function Page() {
  return <Client />;
}
