import type { Metadata } from "next";
import Pbkdf2Client from "./Client";

export const metadata: Metadata = {
  title: "PBKDF2 Key Derivation Online | Password to Key (SHA-256/SHA-512)",
  description:
    "Derive cryptographic keys from passwords using PBKDF2. Configure salt, iterations, and hash (SHA-256/SHA-512). Runs in your browser.",
  keywords: "PBKDF2, key derivation, KDF, password hashing",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "PBKDF2 Key Derivation Online | Password to Key (SHA-256/SHA-512)",
    description:
      "Derive cryptographic keys from passwords using PBKDF2. Configure salt, iterations, and hash (SHA-256/SHA-512). Runs in your browser.",
    type: "website",
    url: "https://www.hashkitly.com/pbkdf2",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "PBKDF2 Key Derivation Online | Password to Key (SHA-256/SHA-512)",
    description:
      "Derive cryptographic keys from passwords using PBKDF2. Configure salt, iterations, and hash (SHA-256/SHA-512). Runs in your browser.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: {
    canonical: "https://www.hashkitly.com/pbkdf2",
  },
};

export default function Page() {
  return <Pbkdf2Client />;
}
