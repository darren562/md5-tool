import type { Metadata } from "next";
import AesGcmClient from "./Client";

export const metadata: Metadata = {
  title: "AES-GCM Encrypt/Decrypt Online | AES-256-GCM with IV, AAD, Tag",
  description:
    "Free AES-GCM online tool. Encrypt and decrypt with AES-256-GCM, IV/nonce, AAD (associated data), and authentication tag. No upload.",
  keywords: "AES-GCM, encryption, decryption, PBKDF2, Web Crypto",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "AES-GCM Encrypt/Decrypt Online | AES-256-GCM with IV, AAD, Tag",
    description:
      "Free AES-GCM online tool. Encrypt and decrypt with AES-256-GCM, IV/nonce, AAD (associated data), and authentication tag. No upload.",
    type: "website",
    url: "https://www.hashkitly.com/aes-gcm",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "AES-GCM Encrypt/Decrypt Online | AES-256-GCM with IV, AAD, Tag",
    description:
      "Free AES-GCM online tool. Encrypt and decrypt with AES-256-GCM, IV/nonce, AAD (associated data), and authentication tag. No upload.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: {
    canonical: "https://www.hashkitly.com/aes-gcm",
  },
};

export default function Page() {
  return <AesGcmClient />;
}
