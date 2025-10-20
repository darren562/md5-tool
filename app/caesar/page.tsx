import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Caesar Cipher Encoder/Decoder | Custom Shift",
  description:
    "Encode and decode Caesar shift cipher with custom shift amount. In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/caesar" },
};

export default function Page() {
  return <Client />;
}
