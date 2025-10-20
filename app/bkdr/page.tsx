import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "BKDR Hash Online | Simple Non-Crypto Hash",
  description:
    "Compute BKDR hash (non-cryptographic) over UTF-8 text. In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/bkdr" },
};
export default function Page() {
  return <Client />;
}
