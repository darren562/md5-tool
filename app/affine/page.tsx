import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Affine Cipher Encoder/Decoder | ax+b (mod 26)",
  description:
    "Encode and decode the Affine cipher with parameters a,b (gcd(a,26)=1). In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/affine" },
};

export default function Page() {
  return <Client />;
}
