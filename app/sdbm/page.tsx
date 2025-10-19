import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "SDBM Hash — HashKitly",
  description: "Compute SDBM (non-cryptographic) hash of text in your browser.",
  openGraph: {
    title: "SDBM Hash — HashKitly",
    description:
      "Compute SDBM (non-cryptographic) hash of text in your browser.",
    url: "https://www.hashkitly.com/sdbm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SDBM Hash — HashKitly",
    description:
      "Compute SDBM (non-cryptographic) hash of text in your browser.",
  },
};

export default function Page() {
  return <Client />;
}
