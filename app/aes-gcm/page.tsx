import type { Metadata } from "next";
import AesGcmClient from "./Client";

export const metadata: Metadata = {
  title: "AES-GCM Online Encrypt/Decrypt | Secure Demo",
  description:
    "AES-GCM encryption/decryption in your browser with PBKDF2-based key derivation.",
  keywords: "AES-GCM, encryption, decryption, PBKDF2, Web Crypto",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "AES-GCM Online Encrypt/Decrypt | Secure Demo",
    description:
      "AES-GCM encryption/decryption in your browser with PBKDF2-based key derivation.",
    type: "website",
    url: "https://www.hashkitly.com/aes-gcm",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "AES-GCM Online Encrypt/Decrypt | Secure Demo",
    description:
      "AES-GCM encryption/decryption in your browser with PBKDF2-based key derivation.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: {
    canonical: "https://www.hashkitly.com/aes-gcm",
  },
};

export default function Page() {
  return <AesGcmClient />;
}
