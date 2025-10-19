import type { Metadata } from "next";
import Djb2Client from "./Client";

export const metadata: Metadata = {
  title: "DJB2 Hash Online | Simple Non-Crypto Hash",
  description:
    "Compute DJB2 32-bit style hash online in your browser. Free, instant, no upload.",
  keywords: "djb2, hash, non-cryptographic, online hash, simple hash",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "DJB2 Hash Online | Simple Non-Crypto Hash",
    description:
      "Compute DJB2 32-bit style hash online in your browser. Free, instant, no upload.",
    type: "website",
    url: "https://www.hashkitly.com/djb2",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "DJB2 Hash Online | Simple Non-Crypto Hash",
    description:
      "Compute DJB2 32-bit style hash online in your browser. Free, instant, no upload.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: { canonical: "https://www.hashkitly.com/djb2" },
};

export default function Page() {
  return <Djb2Client />;
}
