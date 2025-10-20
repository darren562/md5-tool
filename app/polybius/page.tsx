import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Polybius Square Encoder/Decoder | 5x5 Grid",
  description:
    "Encode and decode with the 5x5 Polybius square (I/J combined). In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/polybius" },
};

export default function Page() {
  return <Client />;
}
