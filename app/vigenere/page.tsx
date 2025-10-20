import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Vigenère Cipher Encoder/Decoder | Keyed Substitution",
  description: "Encode and decode Vigenère cipher with a key. In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/vigenere" },
};

export default function Page() {
  return <Client />;
}
