import type { Metadata } from "next";
import JwtClient from "./Client";

export const metadata: Metadata = {
  title: "JWT Decoder Online | View Header & Payload (Base64URL)",
  description:
    "Decode JWTs safely in your browser. View header and payload (Base64URL) without verifying signatures. No upload.",
  keywords: "JWT, JSON Web Token, decode, header, payload, base64url",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "JWT Decoder Online | View Header & Payload (Base64URL)",
    description:
      "Decode JWTs safely in your browser. View header and payload (Base64URL) without verifying signatures. No upload.",
    type: "website",
    url: "https://www.hashkitly.com/jwt",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "JWT Decoder Online | View Header & Payload (Base64URL)",
    description:
      "Decode JWTs safely in your browser. View header and payload (Base64URL) without verifying signatures. No upload.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: {
    canonical: "https://www.hashkitly.com/jwt",
  },
};

export default function Page() {
  return <JwtClient />;
}
