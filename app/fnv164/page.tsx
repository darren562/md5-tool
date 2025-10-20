import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "FNV-1 64-bit Hash Online | Non-Crypto Hash",
  description:
    "Compute 64-bit FNV-1 hash (multiply then xor) over UTF-8 text. In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/fnv164" },
};

export default function Page() {
  return <Client />;
}
