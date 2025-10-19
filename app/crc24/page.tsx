import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "CRC-24 (OpenPGP) — HashKitly",
  description: "Compute CRC-24 (OpenPGP) checksum of text (UTF-8 bytes).",
};

export default function Page() {
  return <Client />;
}
