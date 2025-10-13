import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hashkitly.com"),
  title: "Online MD5 Hash Generator & Text Encryption Tool | Free & Secure",
  description:
    "Free online MD5 hash generator for text encryption. Instant MD5 hash calculation in your browser with no data upload. Perfect for password hashing and text verification.",
  keywords:
    "MD5 hash, text encryption, online MD5 generator, md5 calculator, password hash, string encryption, md5 online, md5 converter, secure hash",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Online MD5 Hash Generator & Text Encryption Tool | Free & Secure",
    description:
      "Free online MD5 hash generator for text encryption. Instant MD5 hash calculation in your browser with no data upload. Perfect for password hashing and text verification.",
    type: "website",
    url: "https://www.hashkitly.com/",
    siteName: "Hashkitly",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  twitter: {
    card: "summary",
    title: "Online MD5 Hash Generator & Text Encryption Tool | Free & Secure",
    description:
      "Free online MD5 hash generator for text encryption. Instant MD5 hash calculation in your browser with no data upload. Perfect for password hashing and text verification.",
    images: ["https://www.hashkitly.com/favicon.ico"],
  },
  alternates: {
    canonical: "https://www.hashkitly.com/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZNY75458QL"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZNY75458QL');
          `}
        </Script>
        {children}
        <footer
          style={{
            textAlign: "center",
            marginTop: "32px",
            paddingBottom: "50px",
            color: "#888",
            fontSize: "14px",
          }}
        >
          Copyright © 2025 Hashkitly
        </footer>
      </body>
    </html>
  );
}
