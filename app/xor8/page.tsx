import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "XOR-8 — HashKitly",
  description: "Compute simple XOR-8 checksum over UTF-8 bytes.",
};

export default function Page() {
  return <Client />;
}
