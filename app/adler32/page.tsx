import type { Metadata } from "next";
import Adler32Client from "./Client";

export const metadata: Metadata = {
  title: "Adler-32 Online Checksum Calculator | Fast & Simple",
  description:
    "Compute Adler-32 checksum online in your browser. Free, instant, no upload. Useful for integrity checks and lightweight validation.",
  keywords:
    "adler32, adler-32, checksum, online checksum, non-cryptographic, zlib",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Adler-32 Online Checksum Calculator | Fast & Simple",
    description:
      "Compute Adler-32 checksum online in your browser. Free, instant, no upload.",
    type: "website",
    url: "https://www.hashkitly.com/adler32",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "Adler-32 Online Checksum Calculator | Fast & Simple",
    description:
      "Compute Adler-32 checksum online in your browser. Free, instant, no upload.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: { canonical: "https://www.hashkitly.com/adler32" },
};

export default function Page() {
  return <Adler32Client />;
}
