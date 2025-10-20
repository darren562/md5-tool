import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "LRC-8 Checksum Calculator | Longitudinal Redundancy Check",
  description:
    "Compute LRC-8 (two’s complement of Sum-8) over UTF-8 bytes. In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/lrc8" },
};

export default function Page() {
  return <Client />;
}
