import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "ELF Hash Online | Simple Non-Crypto Hash",
  description:
    "Compute the ELF hash (non-cryptographic) over UTF-8 text in your browser.",
  openGraph: {
    title: "ELF Hash Online | Simple Non-Crypto Hash",
    description:
      "Compute the ELF hash (non-cryptographic) over UTF-8 text in your browser.",
    url: "https://www.hashkitly.com/elf",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELF Hash Online | Simple Non-Crypto Hash",
    description:
      "Compute the ELF hash (non-cryptographic) over UTF-8 text in your browser.",
  },
  alternates: { canonical: "https://www.hashkitly.com/elf" },
};

export default function Page() {
  return <Client />;
}
