import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "CRC-16/KERMIT Checksum Calculator | Online",
  description:
    "Compute CRC-16/KERMIT checksums (reflected poly 0x8408, init 0x0000) from text or hex.",
  alternates: { canonical: "https://www.hashkitly.com/crc16-kermit" },
};

export default function Page() {
  return <Client />;
}
