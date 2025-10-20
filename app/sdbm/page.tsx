import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "SDBM Hash Online | Fast Non-Cryptographic Hash Generator",
  description:
    "Compute SDBM hash of text in your browser. Free, instant, no upload. Great for hash tables and quick deduping.",
  openGraph: {
    title: "SDBM Hash Online | Fast Non-Cryptographic Hash Generator",
    description:
      "Compute SDBM hash of text in your browser. Free, instant, no upload.",
    url: "https://www.hashkitly.com/sdbm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SDBM Hash Online | Fast Non-Cryptographic Hash Generator",
    description:
      "Compute SDBM hash of text in your browser. Free, instant, no upload.",
  },
};

export default function Page() {
  return <Client />;
}
