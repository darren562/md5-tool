import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Z85 Encoder/Decoder — HashKitly",
  description: "ZeroMQ Z85 encoding for binary data; text handled as UTF-8.",
};

export default function Page() {
  return <Client />;
}
