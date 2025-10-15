import type { Metadata } from "next";
import RandomClient from "./Client";

export const metadata: Metadata = {
  title: "Random Bytes Generator | Free & Fast",
  description:
    "Generate cryptographically secure random bytes in your browser (hex and base64).",
  keywords: "random bytes, CSPRNG, crypto.getRandomValues, hex, base64",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Random Bytes Generator | Free & Fast",
    description:
      "Generate cryptographically secure random bytes in your browser (hex and base64).",
    type: "website",
    url: "https://www.hashkitly.com/random",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "Random Bytes Generator | Free & Fast",
    description:
      "Generate cryptographically secure random bytes in your browser (hex and base64).",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: {
    canonical: "https://www.hashkitly.com/random",
  },
};

export default function Page() {
  return <RandomClient />;
}
