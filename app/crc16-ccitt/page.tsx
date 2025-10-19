import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "CRC-16/CCITT-FALSE — HashKitly",
  description:
    "Compute CRC-16/CCITT-FALSE (poly 0x1021, init 0xFFFF) checksum.",
};

export default function Page() {
  return <Client />;
}
