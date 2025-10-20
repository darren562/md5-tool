import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Lose Lose Hash Online | Sum-of-Bytes (Non-Crypto)",
  description:
    "Compute the classic Lose Lose hash (sum of bytes) over UTF-8 text. In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/loselose" },
};
export default function Page() {
  return <Client />;
}
