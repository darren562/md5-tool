import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "RS Hash — HashKitly",
  description: "Compute RS Hash (Robert Sedgwick) over string.",
};

export default function Page() {
  return <Client />;
}
