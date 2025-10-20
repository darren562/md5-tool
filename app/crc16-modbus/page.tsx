import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "CRC-16/MODBUS Checksum Calculator | Online",
  description:
    "Compute CRC-16/MODBUS checksums (poly 0xA001) from text or hex. In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/crc16-modbus" },
};
export default function Page() {
  return <Client />;
}
