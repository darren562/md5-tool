import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Base91 Encoder/Decoder — HashKitly",
  description: "Encode/decode Base91 in the browser.",
};
export default function Page() {
  return <Client />;
}
