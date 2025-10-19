import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Binary Text Encoder/Decoder (UTF-8) — HashKitly",
  description:
    "Convert text to binary and binary to text using UTF-8. Runs fully in your browser, no uploads.",
  openGraph: {
    title: "Binary Text Encoder/Decoder (UTF-8) — HashKitly",
    description:
      "Convert text to binary and binary to text using UTF-8. Runs fully in your browser, no uploads.",
    url: "https://www.hashkitly.com/binary",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Binary Text Encoder/Decoder (UTF-8) — HashKitly",
    description:
      "Convert text to binary and binary to text using UTF-8. Runs fully in your browser, no uploads.",
  },
};

export default function Page() {
  return <Client />;
}
