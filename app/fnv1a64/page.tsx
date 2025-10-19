import type { Metadata } from "next";
import Fnv1a64Client from "./Client";

export const metadata: Metadata = {
  title: "FNV-1a 64-bit Online | Non-Cryptographic Hash",
  description:
    "Compute FNV-1a 64-bit hash online. Free, instant, in-browser. Useful for sharding and hashing (non-cryptographic).",
  keywords:
    "fnv1a64, fnv-1a 64, 64-bit hash, non-cryptographic hash, online hash",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "FNV-1a 64-bit Online | Non-Cryptographic Hash",
    description:
      "Compute FNV-1a 64-bit hash online. Free, instant, in-browser.",
    type: "website",
    url: "https://www.hashkitly.com/fnv1a64",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "FNV-1a 64-bit Online | Non-Cryptographic Hash",
    description:
      "Compute FNV-1a 64-bit hash online. Free, instant, in-browser.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: { canonical: "https://www.hashkitly.com/fnv1a64" },
};

export default function Page() {
  return <Fnv1a64Client />;
}
