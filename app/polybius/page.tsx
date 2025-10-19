import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Polybius Square — HashKitly",
  description: "Encode/decode using a 5x5 Polybius square (I/J combined).",
};

export default function Page() {
  return <Client />;
}
