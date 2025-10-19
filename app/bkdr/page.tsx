import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "BKDR Hash — HashKitly",
  description: "Compute BKDR hash (non-crypto).",
};
export default function Page() {
  return <Client />;
}
