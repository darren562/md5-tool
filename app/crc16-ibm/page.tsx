import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "CRC-16/IBM (ARC) Online Calculator | Reflected poly 0xA001",
  description:
    "Compute CRC-16/IBM (ARC) reflected checksum (poly 0xA001) over UTF-8 bytes. In-browser, no upload.",
  alternates: { canonical: "https://www.hashkitly.com/crc16-ibm" },
};

export default function Page() {
  return <Client />;
}
