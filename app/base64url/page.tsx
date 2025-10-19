import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Base64url Encoder/Decoder — HashKitly",
  description:
    "URL-safe Base64 (no padding) encode/decode. Runs in your browser.",
};

export default function Page() {
  return <Client />;
}
