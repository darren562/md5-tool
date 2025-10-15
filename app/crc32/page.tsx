import type { Metadata } from "next";
import Crc32Client from "./Client";

export const metadata: Metadata = {
  title: "CRC32 Online Checksum Calculator | Free & Fast",
  description:
    "Compute CRC32 checksums in your browser. Useful for integrity checks (non-cryptographic).",
  keywords: "CRC32, checksum, calculator, online",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "CRC32 Online Checksum Calculator | Free & Fast",
    description:
      "Compute CRC32 checksums in your browser. Useful for integrity checks (non-cryptographic).",
    type: "website",
    url: "https://www.hashkitly.com/crc32",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "CRC32 Online Checksum Calculator | Free & Fast",
    description:
      "Compute CRC32 checksums in your browser. Useful for integrity checks (non-cryptographic).",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: {
    canonical: "https://www.hashkitly.com/crc32",
  },
};

export default function Page() {
  return <Crc32Client />;
}
