import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Fletcher-16 — HashKitly",
  description: "Compute Fletcher-16 checksum (UTF-8 bytes).",
};
export default function Page() {
  return <Client />;
}
