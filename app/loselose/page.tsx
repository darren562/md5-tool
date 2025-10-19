import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Lose Lose Hash — HashKitly",
  description: "Sum-of-bytes hash (non-crypto).",
};
export default function Page() {
  return <Client />;
}
