import type { Metadata } from "next";
import RsaOaepClient from "./Client";

export const metadata: Metadata = {
  title: "RSA-OAEP 2048/SHA-256 Encrypt/Decrypt | Demo",
  description:
    "Generate RSA key pairs and encrypt/decrypt using RSA-OAEP in your browser.",
  keywords: "RSA, RSA-OAEP, encrypt, decrypt, Web Crypto",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "RSA-OAEP 2048/SHA-256 Encrypt/Decrypt | Demo",
    description:
      "Generate RSA key pairs and encrypt/decrypt using RSA-OAEP in your browser.",
    type: "website",
    url: "https://www.hashkitly.com/rsa-oaep",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "RSA-OAEP 2048/SHA-256 Encrypt/Decrypt | Demo",
    description:
      "Generate RSA key pairs and encrypt/decrypt using RSA-OAEP in your browser.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: { canonical: "https://www.hashkitly.com/rsa-oaep" },
};

export default function Page() {
  return <RsaOaepClient />;
}
