import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Fletcher-16 Checksum Calculator | Online",
  description:
    "Compute Fletcher-16 checksums from text or hex. In-browser, no upload.",
  alternates: { canonical: "https://www.hashkitly.com/fletcher16" },
};
export default function Page() {
  return <Client />;
}
