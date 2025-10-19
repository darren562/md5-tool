import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "CRC-16/KERMIT — HashKitly",
  description:
    "Compute CRC-16/KERMIT (reflected poly 0x8408, init 0x0000) checksum.",
};

export default function Page() {
  return <Client />;
}
