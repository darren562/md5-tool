import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "HTML Entities Encoder/Decoder — HashKitly",
  description: "Encode special characters to HTML entities and decode back.",
};

export default function Page() {
  return <Client />;
}
