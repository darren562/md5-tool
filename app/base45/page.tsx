import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Base45 — HashKitly",
  description: "Encode/decode Base45 (RFC 9285) with UTF‑8 bytes.",
};

export default function Page() {
  return <Client />;
}
