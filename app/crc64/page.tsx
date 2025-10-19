import type { Metadata } from "next";
import Crc64Client from "./Client";

export const metadata: Metadata = {
  title: "CRC64-ECMA Online Calculator | Free, In-Browser",
  description:
    "Compute CRC64-ECMA checksums online over UTF-8 bytes. Free, instant, no upload.",
  keywords:
    "crc64, crc64-ecma, checksum online, crc calculator, browser checksum",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "CRC64-ECMA Online Calculator | Free, In-Browser",
    description:
      "Compute CRC64-ECMA checksums online over UTF-8 bytes. Free, instant, no upload.",
    type: "website",
    url: "https://www.hashkitly.com/crc64",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "CRC64-ECMA Online Calculator | Free, In-Browser",
    description:
      "Compute CRC64-ECMA checksums online over UTF-8 bytes. Free, instant, no upload.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: { canonical: "https://www.hashkitly.com/crc64" },
};

export default function Page() {
  return <Crc64Client />;
}
