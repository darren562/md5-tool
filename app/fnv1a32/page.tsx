import type { Metadata } from "next";
import Fnv1a32Client from "./Client";

export const metadata: Metadata = {
  title: "FNV-1a 32-bit Hash Online | Fast Non-Crypto Checksum",
  description:
    "Compute FNV-1a 32-bit hash online in your browser. Free, instant, no upload. Great for deduping, sharding, and quick checksums.",
  keywords:
    "fnv1a, fnv-1a, 32-bit hash, non-cryptographic hash, checksum online, browser hash",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "FNV-1a 32-bit Hash Online | Fast Non-Crypto Checksum",
    description:
      "Compute FNV-1a 32-bit hash online in your browser. Free, instant, no upload.",
    type: "website",
    url: "https://www.hashkitly.com/fnv1a32",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "FNV-1a 32-bit Hash Online | Fast Non-Crypto Checksum",
    description:
      "Compute FNV-1a 32-bit hash online in your browser. Free, instant, no upload.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: {
    canonical: "https://www.hashkitly.com/fnv1a32",
  },
};

export default function Page() {
  return <Fnv1a32Client />;
}
