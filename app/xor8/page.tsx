import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "XOR-8 Checksum Calculator | Simple Byte-wise XOR",
  description:
    "Compute simple XOR-8 checksums over UTF-8 bytes. In-browser, no upload.",
  alternates: { canonical: "https://www.hashkitly.com/xor8" },
};

export default function Page() {
  return <Client />;
}
