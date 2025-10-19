import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Morse Code Encoder/Decoder — HashKitly",
  description:
    "Encode text to Morse code and decode Morse back to text. Runs in your browser.",
};

export default function Page() {
  return <Client />;
}
