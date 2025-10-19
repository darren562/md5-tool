import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Caesar Cipher — HashKitly",
  description: "Shift cipher encoder/decoder with custom shift.",
};

export default function Page() {
  return <Client />;
}
