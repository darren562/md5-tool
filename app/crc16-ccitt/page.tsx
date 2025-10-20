import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "CRC-16/CCITT-FALSE Checksum Calculator | Online",
  description:
    "Compute CRC-16/CCITT-FALSE checksums (poly 0x1021, init 0xFFFF) from text or hex.",
  alternates: { canonical: "https://www.hashkitly.com/crc16-ccitt" },
};

export default function Page() {
  return <Client />;
}
