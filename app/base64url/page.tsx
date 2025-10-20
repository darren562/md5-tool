import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Base64url Encode/Decode Online | URL-Safe Base64 (No Padding)",
  description:
    "Encode and decode Base64url (RFC 4648) using URL-safe -_ alphabet and no padding. 100% in-browser, no upload.",
  alternates: { canonical: "https://www.hashkitly.com/base64url" },
};

export default function Page() {
  return <Client />;
}
