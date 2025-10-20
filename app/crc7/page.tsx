import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "CRC-7 Checksum Calculator | Online",
  description:
    "Compute CRC-7 checksums from text or hex. In-browser, no upload.",
  alternates: { canonical: "https://www.hashkitly.com/crc7" },
};

export default function Page() {
  return <Client />;
}
