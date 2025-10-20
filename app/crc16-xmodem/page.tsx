import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "CRC-16/XMODEM Checksum Calculator | Online",
  description:
    "Compute CRC-16/XMODEM checksums (poly 0x1021, init 0x0000) from text or hex.",
  alternates: { canonical: "https://www.hashkitly.com/crc16-xmodem" },
};

export default function Page() {
  return <Client />;
}
