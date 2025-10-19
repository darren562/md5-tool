import type { Metadata } from "next";
import Xxhash32Client from "./Client";

export const metadata: Metadata = {
  title: "xxHash32 Online | Fast Non-Cryptographic Hash",
  description:
    "Compute xxHash32 with seed online over UTF-8 bytes. Free, instant, no upload.",
  keywords: "xxhash, xxhash32, non-cryptographic hash, online hash, fast hash",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "xxHash32 Online | Fast Non-Cryptographic Hash",
    description:
      "Compute xxHash32 with seed online over UTF-8 bytes. Free, instant, no upload.",
    type: "website",
    url: "https://www.hashkitly.com/xxhash32",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "xxHash32 Online | Fast Non-Cryptographic Hash",
    description:
      "Compute xxHash32 with seed online over UTF-8 bytes. Free, instant, no upload.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: { canonical: "https://www.hashkitly.com/xxhash32" },
};

export default function Page() {
  return <Xxhash32Client />;
}
