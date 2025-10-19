import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Atbash Cipher — HashKitly",
  description: "Encode/decode Atbash substitution cipher.",
};

export default function Page() {
  return <Client />;
}
