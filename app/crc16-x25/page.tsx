import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "CRC-16/X25 — HashKitly",
  description: "Compute CRC-16/X25 (reflected, xorout 0xFFFF) checksum.",
};

export default function Page() {
  return <Client />;
}
