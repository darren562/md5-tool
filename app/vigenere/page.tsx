import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Vigenere Cipher — HashKitly",
  description: "Vigenere encoder/decoder with key.",
};

export default function Page() {
  return <Client />;
}
