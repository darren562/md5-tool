import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Sum-8 Checksum Calculator | Simple Byte Sum",
  description:
    "Compute simple 8-bit sum checksums over UTF-8 bytes. In-browser, no upload.",
  alternates: { canonical: "https://www.hashkitly.com/sum8" },
};

export default function Page() {
  return <Client />;
}
