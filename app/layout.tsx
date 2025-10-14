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
    locale: "en_US",
    images: ["https://www.hashkitly.com/social-card.svg"],
  },
  twitter: {
    card: "summary",
    title: "Online MD5 Hash Generator & Text Encryption Tool | Free & Secure",
    description:
      "Free online MD5 hash generator for text encryption. Instant MD5 hash calculation in your browser with no data upload. Perfect for password hashing and text verification.",
    images: ["https://www.hashkitly.com/social-card.svg"],
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
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
        <Script
          id="ld-webapp"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Online MD5 Hash Generator",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Web",
            url: "https://www.hashkitly.com/",
            offers: { "@type": "Offer", price: 0, priceCurrency: "USD" },
          })}
        </Script>
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Hashkitly",
            url: "https://www.hashkitly.com/",
            logo: "https://www.hashkitly.com/favicon.ico",
          })}
        </Script>
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Hashkitly",
            url: "https://www.hashkitly.com/",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.hashkitly.com/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </Script>
        <Script
          id="ld-sitenav"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "SiteNavigationElement",
                name: "MD5",
                url: "https://www.hashkitly.com/",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Base64",
                url: "https://www.hashkitly.com/base64",
              },
              {
                "@type": "SiteNavigationElement",
                name: "SHA256",
                url: "https://www.hashkitly.com/sha256",
              },
              {
                "@type": "SiteNavigationElement",
                name: "SHA-1",
                url: "https://www.hashkitly.com/sha1",
              },
              {
                "@type": "SiteNavigationElement",
                name: "SHA-512",
                url: "https://www.hashkitly.com/sha512",
              },
              {
                "@type": "SiteNavigationElement",
                name: "AES",
                url: "https://www.hashkitly.com/aes",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Privacy",
                url: "https://www.hashkitly.com/privacy",
              },
            ],
          })}
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
