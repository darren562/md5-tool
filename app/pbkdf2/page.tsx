import type { Metadata } from "next";
import Pbkdf2Client from "./Client";

export const metadata: Metadata = {
  title: "PBKDF2 Online Key Derivation | Demo",
  description:
    "Derive keys from passwords with PBKDF2 in your browser. Choose salt, iterations, and hasher.",
  keywords: "PBKDF2, key derivation, KDF, password hashing",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "PBKDF2 Online Key Derivation | Demo",
    description:
      "Derive keys from passwords with PBKDF2 in your browser. Choose salt, iterations, and hasher.",
    type: "website",
    url: "https://www.hashkitly.com/pbkdf2",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "PBKDF2 Online Key Derivation | Demo",
    description:
      "Derive keys from passwords with PBKDF2 in your browser. Choose salt, iterations, and hasher.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: {
    canonical: "https://www.hashkitly.com/pbkdf2",
  },
};

export default function Page() {
  return <Pbkdf2Client />;
}
