import type { Metadata } from "next";
import UuidClient from "./Client";

export const metadata: Metadata = {
  title: "UUID v4 Online Generator | Free & Fast",
  description: "Generate UUID v4 identifiers instantly in your browser.",
  keywords: "UUID, UUID v4, GUID, generator, online",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "UUID v4 Online Generator | Free & Fast",
    description: "Generate UUID v4 identifiers instantly in your browser.",
    type: "website",
    url: "https://www.hashkitly.com/uuid",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "UUID v4 Online Generator | Free & Fast",
    description: "Generate UUID v4 identifiers instantly in your browser.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: {
    canonical: "https://www.hashkitly.com/uuid",
  },
};

export default function Page() {
  return <UuidClient />;
}
