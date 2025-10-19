import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "LRC-8 — HashKitly",
  description: "Compute LRC-8 (two’s complement of Sum-8) over UTF-8 bytes.",
};

export default function Page() {
  return <Client />;
}
