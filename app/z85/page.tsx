import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Z85 Encode/Decode Online | ZeroMQ Base-85 Alphabet",
  description:
    "Encode and decode Z85 (ZeroMQ Base-85) for binary data; text treated as UTF-8. In-browser, no upload.",
  alternates: { canonical: "https://www.hashkitly.com/z85" },
};

export default function Page() {
  return <Client />;
}
