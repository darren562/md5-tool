import type { Metadata } from "next";
import Crc32cClient from "./Client";

export const metadata: Metadata = {
  title: "CRC-32C (Castagnoli) Online Calculator | Free, In-Browser",
  description:
    "Compute CRC-32C (Castagnoli) checksums online over UTF-8 bytes. Free, instant, no upload.",
  keywords:
    "crc32c, castagnoli, crc-32c, checksum online, crc calculator, browser checksum",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "CRC-32C (Castagnoli) Online Calculator | Free, In-Browser",
    description:
      "Compute CRC-32C (Castagnoli) checksums online over UTF-8 bytes. Free, instant, no upload.",
    type: "website",
    url: "https://www.hashkitly.com/crc32c",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "CRC-32C (Castagnoli) Online Calculator | Free, In-Browser",
    description:
      "Compute CRC-32C (Castagnoli) checksums online over UTF-8 bytes. Free, instant, no upload.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: { canonical: "https://www.hashkitly.com/crc32c" },
};

export default function Page() {
  return <Crc32cClient />;
}
