import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "RS Hash Online | Robert Sedgwick Hash",
  description:
    "Compute the RS Hash (Robert Sedgwick) over UTF-8 strings. In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/rshash" },
};

export default function Page() {
  return <Client />;
}
