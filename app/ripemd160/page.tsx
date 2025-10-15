import type { Metadata } from "next";
import Ripemd160Client from "./Client";

export const metadata: Metadata = {
  title: "RIPEMD-160 Online Hash Generator | Free & Secure",
  description:
    "Free online RIPEMD-160 hash generator. Browser-only calculation with instant results.",
  keywords: "RIPEMD160, RIPEMD-160, hash, online, generator, ripemd",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "RIPEMD-160 Online Hash Generator | Free & Secure",
    description:
      "Free online RIPEMD-160 hash generator. Browser-only calculation with instant results.",
    type: "website",
    url: "https://www.hashkitly.com/ripemd160",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "RIPEMD-160 Online Hash Generator | Free & Secure",
    description:
      "Free online RIPEMD-160 hash generator. Browser-only calculation with instant results.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: {
    canonical: "https://www.hashkitly.com/ripemd160",
  },
};

export default function Page() {
  return <Ripemd160Client />;
}
