import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "FNV-1 64-bit — HashKitly",
  description: "Compute FNV-1 (multiply then xor) 64-bit hash of text.",
};

export default function Page() {
  return <Client />;
}
