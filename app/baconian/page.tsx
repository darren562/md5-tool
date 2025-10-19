import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Baconian Cipher — HashKitly",
  description: "Encode/decode Baconian cipher (A/B representation).",
};

export default function Page() {
  return <Client />;
}
