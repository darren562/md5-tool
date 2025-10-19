import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Affine Cipher — HashKitly",
  description: "Encode/decode Affine cipher with parameters a,b (gcd(a,26)=1).",
};

export default function Page() {
  return <Client />;
}
