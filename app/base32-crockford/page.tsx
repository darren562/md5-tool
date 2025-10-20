import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Base32 Crockford Encode/Decode Online | Human-Friendly Base32",
  description:
    "Encode and decode Base32 Crockford (no padding, case-insensitive, no I/L/O/U). Tolerant decoder. In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/base32-crockford" },
};

export default function Page() {
  return <Client />;
}
