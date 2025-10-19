import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Fletcher-32 — HashKitly",
  description: "Compute Fletcher-32 checksum over UTF-8 bytes.",
};

export default function Page() {
  return <Client />;
}
