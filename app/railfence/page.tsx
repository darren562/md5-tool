import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Rail Fence (Zigzag) Cipher | Encode/Decode Online",
  description:
    "Encode and decode Rail Fence (Zigzag) cipher with configurable rails. In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/railfence" },
};

export default function Page() {
  return <Client />;
}
