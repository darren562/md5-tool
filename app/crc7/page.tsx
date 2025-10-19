import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "CRC-7 — HashKitly",
  description: "Compute CRC-7 checksum of text (UTF-8 bytes).",
};

export default function Page() {
  return <Client />;
}
