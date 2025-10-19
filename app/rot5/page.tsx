import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "ROT5 — HashKitly",
  description: "Rotate digits by 5 (0-9).",
};
export default function Page() {
  return <Client />;
}
