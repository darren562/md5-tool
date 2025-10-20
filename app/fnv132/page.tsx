import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "FNV-1 32-bit Online | Non-Cryptographic Hash Calculator",
  description:
    "Compute FNV-1 32-bit hash (multiply then XOR) of text in your browser. Free and instant.",
};

export default function Page() {
  return <Client />;
}
