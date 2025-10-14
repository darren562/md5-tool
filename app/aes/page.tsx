import type { Metadata } from "next";
import AesClient from "./Client";

export const metadata: Metadata = {
  title: "AES Text Encrypt & Decrypt Online | Browser Only",
  description:
    "Free AES text encryption and decryption tool. Encrypt or decrypt text in your browser using a passphrase. No data upload – instant, private, secure.",
  keywords:
    "AES, encryption, decrypt, encrypt text, AES online, cryptojs AES, passphrase encryption, browser encryption",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "AES Text Encrypt & Decrypt Online | Browser Only",
    description:
      "Free AES text encryption and decryption tool. Encrypt or decrypt text in your browser using a passphrase.",
    type: "website",
    url: "https://www.hashkitly.com/aes",
    images: ["https://www.hashkitly.com/social-card.svg"],
  },
  twitter: {
    card: "summary",
    title: "AES Text Encrypt & Decrypt Online | Browser Only",
    description:
      "Free AES text encryption and decryption tool. Encrypt or decrypt text in your browser using a passphrase.",
    images: ["https://www.hashkitly.com/social-card.svg"],
  },
  alternates: { canonical: "https://www.hashkitly.com/aes" },
};

export default function Page() {
  return <AesClient />;
}
