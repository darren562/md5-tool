import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "ROT18 Encoder/Decoder Online | ROT13 + ROT5",
  description:
    "Apply ROT13 to letters and ROT5 to digits. Encode/decode in your browser.",
  alternates: { canonical: "https://www.hashkitly.com/rot18" },
};
export default function Page() {
  return <Client />;
}
