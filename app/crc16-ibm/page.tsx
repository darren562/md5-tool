import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "CRC-16/IBM (ARC) — HashKitly",
  description: "Compute CRC-16/IBM (ARC) reflected (poly 0xA001) checksum.",
};

export default function Page() {
  return <Client />;
}
