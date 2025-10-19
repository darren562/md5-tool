import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "ROT18 — HashKitly",
  description: "ROT13 + ROT5 on letters and digits.",
};
export default function Page() {
  return <Client />;
}
