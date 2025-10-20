import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Base45 Encode/Decode Online | RFC 9285",
  description:
    "Encode and decode Base45 (RFC 9285) with UTF-8 bytes. In-browser, no upload.",
  alternates: { canonical: "https://www.hashkitly.com/base45" },
};

export default function Page() {
  return <Client />;
}
