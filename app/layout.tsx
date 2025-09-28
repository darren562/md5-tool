import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MD5 Tool",
  description:
    "Online MD5 hash calculator supporting text and file MD5 calculation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="MD5, hash, online, encryption, checksum, file, text, tool"
        />
        <meta property="og:title" content="MD5 Tool" />
        <meta
          property="og:description"
          content="Online MD5 hash calculator supporting text and file MD5 calculation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:image" content="/favicon.ico" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="MD5 Tool" />
        <meta
          name="twitter:description"
          content="Online MD5 hash calculator supporting text and file MD5 calculation."
        />
        <meta name="twitter:image" content="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <title>MD5 Tool</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
