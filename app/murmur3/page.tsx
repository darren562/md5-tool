import type { Metadata } from "next";
import Murmur3Client from "./Client";

export const metadata: Metadata = {
  title: "MurmurHash3 (32-bit) Online | Non-Cryptographic Hash",
  description:
    "Compute MurmurHash3 x86 32-bit online in your browser. Free, instant, no upload. Useful for hash tables and quick deduping.",
  keywords: "murmurhash3, murmur3, 32-bit, non-cryptographic hash, online hash",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "MurmurHash3 (32-bit) Online | Non-Cryptographic Hash",
    description:
      "Compute MurmurHash3 x86 32-bit online in your browser. Free, instant, no upload.",
    type: "website",
    url: "https://www.hashkitly.com/murmur3",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "MurmurHash3 (32-bit) Online | Non-Cryptographic Hash",
    description:
      "Compute MurmurHash3 x86 32-bit online in your browser. Free, instant, no upload.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: { canonical: "https://www.hashkitly.com/murmur3" },
};

export default function Page() {
  return <Murmur3Client />;
}
