import type { Metadata } from "next";
import RsaOaepClient from "./Client";

export const metadata: Metadata = {
  title: "RSA-OAEP Encrypt/Decrypt Online | RSA-2048/SHA-256 Key Pair",
  description:
    "Generate RSA-2048 key pairs and encrypt/decrypt with RSA-OAEP (SHA-256) in your browser. Free, instant, no upload.",
  keywords: "RSA, RSA-OAEP, encrypt, decrypt, Web Crypto",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "RSA-OAEP Encrypt/Decrypt Online | RSA-2048/SHA-256 Key Pair",
    description:
      "Generate RSA-2048 key pairs and encrypt/decrypt with RSA-OAEP (SHA-256) in your browser. Free, instant, no upload.",
    type: "website",
    url: "https://www.hashkitly.com/rsa-oaep",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "RSA-OAEP Encrypt/Decrypt Online | RSA-2048/SHA-256 Key Pair",
    description:
      "Generate RSA-2048 key pairs and encrypt/decrypt with RSA-OAEP (SHA-256) in your browser. Free, instant, no upload.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: { canonical: "https://www.hashkitly.com/rsa-oaep" },
};

export default function Page() {
  return <RsaOaepClient />;
}
