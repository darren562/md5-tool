import type { Metadata } from "next";
import JenkinsClient from "./Client";

export const metadata: Metadata = {
  title: "Jenkins One-at-a-Time Hash Online | Simple Non-Crypto",
  description:
    "Compute Jenkins OAAT hash online over UTF-8 bytes. Free, instant, no upload.",
  keywords: "jenkins hash, one at a time, non-cryptographic hash, online hash",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Jenkins One-at-a-Time Hash Online | Simple Non-Crypto",
    description:
      "Compute Jenkins OAAT hash online over UTF-8 bytes. Free, instant, no upload.",
    type: "website",
    url: "https://www.hashkitly.com/jenkins",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "Jenkins One-at-a-Time Hash Online | Simple Non-Crypto",
    description:
      "Compute Jenkins OAAT hash online over UTF-8 bytes. Free, instant, no upload.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: { canonical: "https://www.hashkitly.com/jenkins" },
};

export default function Page() {
  return <JenkinsClient />;
}
