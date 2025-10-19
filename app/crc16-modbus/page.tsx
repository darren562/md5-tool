import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "CRC-16/MODBUS — HashKitly",
  description: "Compute CRC-16/MODBUS checksum (poly 0xA001).",
};
export default function Page() {
  return <Client />;
}
