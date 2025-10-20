import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Morse Code Translator | Text ↔ Morse Encoder/Decoder",
  description:
    "Translate text to Morse code and decode Morse back to text. In-browser, no upload.",
  alternates: { canonical: "https://www.hashkitly.com/morse" },
};

export default function Page() {
  return <Client />;
}
