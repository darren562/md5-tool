import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "CRC-16/X25 Checksum Calculator | Online",
  description:
    "Compute CRC-16/X25 checksums (reflected, xorout 0xFFFF) from text or hex.",
  alternates: { canonical: "https://www.hashkitly.com/crc16-x25" },
};

export default function Page() {
  return <Client />;
}
