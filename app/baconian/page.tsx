import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Baconian Cipher Encoder/Decoder | Steganographic A/B",
  description:
    "Encode and decode Baconian cipher (A/B steganographic). In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/baconian" },
};

export default function Page() {
  return <Client />;
}
