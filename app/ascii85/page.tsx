import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "ASCII85 (Base85) Encode/Decode Online | Text Converter",
  description:
    "Encode/decode ASCII85 (Base85) in your browser. Free, instant, no upload.",
  openGraph: {
    title: "ASCII85 (Base85) Encode/Decode Online | Text Converter",
    description:
      "Encode/decode ASCII85 (Base85) in your browser. Free, instant, no upload.",
    url: "https://www.hashkitly.com/ascii85",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASCII85 (Base85) Encode/Decode Online | Text Converter",
    description:
      "Encode/decode ASCII85 (Base85) in your browser. Free, instant, no upload.",
  },
};

export default function Page() {
  return <Client />;
}
