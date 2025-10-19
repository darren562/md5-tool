import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Base32 Crockford — HashKitly",
  description: "Encode/decode Base32 Crockford (no padding; tolerant decoder).",
};

export default function Page() {
  return <Client />;
}
