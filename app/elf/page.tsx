import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "ELF Hash — HashKitly",
  description: "Compute ELF (non-cryptographic) hash of text in your browser.",
  openGraph: {
    title: "ELF Hash — HashKitly",
    description:
      "Compute ELF (non-cryptographic) hash of text in your browser.",
    url: "https://www.hashkitly.com/elf",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELF Hash — HashKitly",
    description:
      "Compute ELF (non-cryptographic) hash of text in your browser.",
  },
};

export default function Page() {
  return <Client />;
}
