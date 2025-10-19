import type { Metadata } from "next";
import Crc8Client from "./Client";

export const metadata: Metadata = {
  title: "CRC-8 Online Calculator | Free, In-Browser",
  description:
    "Compute CRC-8 (poly 0x07) checksums online over UTF-8 bytes. Free, instant, no upload.",
  keywords: "crc8, crc-8, checksum online, crc calculator, browser checksum",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "CRC-8 Online Calculator | Free, In-Browser",
    description:
      "Compute CRC-8 (poly 0x07) checksums online over UTF-8 bytes. Free, instant, no upload.",
    type: "website",
    url: "https://www.hashkitly.com/crc8",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "CRC-8 Online Calculator | Free, In-Browser",
    description:
      "Compute CRC-8 (poly 0x07) checksums online over UTF-8 bytes. Free, instant, no upload.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: { canonical: "https://www.hashkitly.com/crc8" },
};

export default function Page() {
  return <Crc8Client />;
}
