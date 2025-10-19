import type { Metadata } from "next";
import HmacMd5Client from "./Client";

export const metadata: Metadata = {
  title: "HMAC-MD5 Online Generator | Free & In-Browser",
  description:
    "Compute HMAC-MD5 signatures online. Free, instant, no upload. Useful for legacy systems and demos.",
  keywords:
    "hmac-md5, hmac, md5, message authentication, online hmac, browser hmac",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "HMAC-MD5 Online Generator | Free & In-Browser",
    description:
      "Compute HMAC-MD5 signatures online. Free, instant, no upload.",
    type: "website",
    url: "https://www.hashkitly.com/hmac-md5",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "HMAC-MD5 Online Generator | Free & In-Browser",
    description:
      "Compute HMAC-MD5 signatures online. Free, instant, no upload.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: { canonical: "https://www.hashkitly.com/hmac-md5" },
};

export default function Page() {
  return <HmacMd5Client />;
}
