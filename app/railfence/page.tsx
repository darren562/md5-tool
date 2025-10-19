import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Rail Fence Cipher — HashKitly",
  description:
    "Encode/decode Rail Fence (Zigzag) cipher with configurable rails.",
};

export default function Page() {
  return <Client />;
}
