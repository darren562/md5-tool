import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Atbash Cipher Encoder/Decoder | Substitution Cipher",
  description:
    "Encode and decode Atbash substitution cipher (A↔Z, B↔Y). In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/atbash" },
};

export default function Page() {
  return <Client />;
}
