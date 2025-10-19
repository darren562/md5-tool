import type { Metadata } from "next";
import Crc16Client from "./Client";

export const metadata: Metadata = {
  title: "CRC16-CCITT (False) Online Calculator | Free, In-Browser",
  description:
    "Compute CRC16-CCITT (False) checksums online. Free, instant, no upload. Useful for protocols and integrity checks.",
  keywords:
    "crc16, crc16-ccitt, ccitt-false, checksum online, protocol checksum, in browser",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "CRC16-CCITT (False) Online Calculator | Free, In-Browser",
    description:
      "Compute CRC16-CCITT (False) checksums online. Free, instant, no upload.",
    type: "website",
    url: "https://www.hashkitly.com/crc16",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "CRC16-CCITT (False) Online Calculator | Free, In-Browser",
    description:
      "Compute CRC16-CCITT (False) checksums online. Free, instant, no upload.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: { canonical: "https://www.hashkitly.com/crc16" },
};

export default function Page() {
  return <Crc16Client />;
}
