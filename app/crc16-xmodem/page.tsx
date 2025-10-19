import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "CRC-16/XMODEM — HashKitly",
  description: "Compute CRC-16/XMODEM (poly 0x1021, init 0x0000) checksum.",
};

export default function Page() {
  return <Client />;
}
