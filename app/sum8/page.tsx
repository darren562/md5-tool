import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Sum-8 — HashKitly",
  description: "Compute simple 8-bit sum checksum over UTF-8 bytes.",
};

export default function Page() {
  return <Client />;
}
