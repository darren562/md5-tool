import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "CRC-24 (OpenPGP) Checksum Calculator | Online",
  description:
    "Compute CRC-24 (OpenPGP) checksums from text or hex. In-browser, no upload.",
  alternates: { canonical: "https://www.hashkitly.com/crc24" },
};

export default function Page() {
  return <Client />;
}
