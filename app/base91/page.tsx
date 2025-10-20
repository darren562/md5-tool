import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Base91 Encode/Decode Online | Text to Base91 Converter",
  description:
    "Encode or decode Base91 instantly in your browser. No upload, copy-friendly output.",
};
export default function Page() {
  return <Client />;
}
