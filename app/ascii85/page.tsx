import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "ASCII85 Encoder/Decoder — HashKitly",
  description:
    "ASCII85 (Base85) online: encode/decode UTF-8 text to ASCII85. Works offline in your browser.",
  openGraph: {
    title: "ASCII85 Encoder/Decoder — HashKitly",
    description:
      "ASCII85 (Base85) online: encode/decode UTF-8 text to ASCII85. Works offline in your browser.",
    url: "https://www.hashkitly.com/ascii85",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASCII85 Encoder/Decoder — HashKitly",
    description:
      "ASCII85 (Base85) online: encode/decode UTF-8 text to ASCII85. Works offline in your browser.",
  },
};

export default function Page() {
  return <Client />;
}
