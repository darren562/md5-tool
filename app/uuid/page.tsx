import type { Metadata } from "next";
import UuidClient from "./Client";

export const metadata: Metadata = {
  title: "UUID v4 Generator Online | Create Random UUIDs (RFC 4122)",
  description:
    "Generate random UUID v4 identifiers instantly in your browser. RFC 4122 compliant. No upload.",
  keywords: "UUID, UUID v4, GUID, generator, online",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "UUID v4 Generator Online | Create Random UUIDs (RFC 4122)",
    description:
      "Generate random UUID v4 identifiers instantly in your browser. RFC 4122 compliant. No upload.",
    type: "website",
    url: "https://www.hashkitly.com/uuid",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "UUID v4 Generator Online | Create Random UUIDs (RFC 4122)",
    description:
      "Generate random UUID v4 identifiers instantly in your browser. RFC 4122 compliant. No upload.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: {
    canonical: "https://www.hashkitly.com/uuid",
  },
};

export default function Page() {
  return <UuidClient />;
}
