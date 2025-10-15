import type { Metadata } from "next";
import JwtClient from "./Client";

export const metadata: Metadata = {
  title: "JWT Decode (Header/Payload) | Safe Viewer",
  description:
    "Decode JWT header and payload (Base64URL) in your browser. No signature verification.",
  keywords: "JWT, JSON Web Token, decode, header, payload, base64url",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "JWT Decode (Header/Payload) | Safe Viewer",
    description:
      "Decode JWT header and payload (Base64URL) in your browser. No signature verification.",
    type: "website",
    url: "https://www.hashkitly.com/jwt",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "JWT Decode (Header/Payload) | Safe Viewer",
    description:
      "Decode JWT header and payload (Base64URL) in your browser. No signature verification.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: {
    canonical: "https://www.hashkitly.com/jwt",
  },
};

export default function Page() {
  return <JwtClient />;
}
