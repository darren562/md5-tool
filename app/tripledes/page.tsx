import type { Metadata } from "next";
import TripleDESClient from "./Client";

export const metadata: Metadata = {
  title: "TripleDES (3DES) Online Encryption Tool | Demo",
  description:
    "Legacy TripleDES (3DES) encrypt/decrypt demo in your browser. For compatibility only — prefer AES-GCM.",
  keywords: "3DES, TripleDES, DES-EDE, encryption, online",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "TripleDES (3DES) Online Encryption Tool | Demo",
    description:
      "Legacy TripleDES (3DES) encrypt/decrypt demo in your browser. For compatibility only — prefer AES-GCM.",
    type: "website",
    url: "https://www.hashkitly.com/tripledes",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "TripleDES (3DES) Online Encryption Tool | Demo",
    description:
      "Legacy TripleDES (3DES) encrypt/decrypt demo in your browser. For compatibility only — prefer AES-GCM.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: {
    canonical: "https://www.hashkitly.com/tripledes",
  },
};

export default function Page() {
  return <TripleDESClient />;
}
