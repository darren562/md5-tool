import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "ROT47 Encoder/Decoder — HashKitly",
  description:
    "ROT47 online tool: encode and decode text instantly in your browser. No upload, privacy-friendly.",
  openGraph: {
    title: "ROT47 Encoder/Decoder — HashKitly",
    description:
      "ROT47 online tool: encode and decode text instantly in your browser. No upload, privacy-friendly.",
    url: "https://www.hashkitly.com/rot47",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROT47 Encoder/Decoder — HashKitly",
    description:
      "ROT47 online tool: encode and decode text instantly in your browser. No upload, privacy-friendly.",
  },
};

export default function Page() {
  return <Client />;
}
