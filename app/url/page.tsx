import type { Metadata } from "next";
import UrlClient from "./Client";

export const metadata: Metadata = {
  title: "URL Encode/Decode Online Tool | Free & Fast",
  description:
    "Encode or decode URLs instantly in your browser. No data sent to server.",
  keywords: "URL encode, URL decode, percent-encoding, online",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "URL Encode/Decode Online Tool | Free & Fast",
    description:
      "Encode or decode URLs instantly in your browser. No data sent to server.",
    type: "website",
    url: "https://www.hashkitly.com/url",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "URL Encode/Decode Online Tool | Free & Fast",
    description:
      "Encode or decode URLs instantly in your browser. No data sent to server.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: {
    canonical: "https://www.hashkitly.com/url",
  },
};

export default function Page() {
  return <UrlClient />;
}
