import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "ROT5 Encoder/Decoder Online | Digit Rotation",
  description: "Rotate digits by 5 (0-9). Encode/decode ROT5 in your browser.",
  alternates: { canonical: "https://www.hashkitly.com/rot5" },
};
export default function Page() {
  return <Client />;
}
