import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "FNV-1 32-bit — HashKitly",
  description: "Compute FNV-1 (multiply then xor) 32-bit hash of text.",
};

export default function Page() {
  return <Client />;
}
