import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online MD5 Hash Generator & Text Encryption Tool | Free & Secure",
  description:
    "Free online MD5 hash generator for text encryption. Instant MD5 hash calculation in your browser with no data upload. Perfect for password hashing and text verification.",
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
          content="MD5 hash, text encryption, online MD5 generator, md5 calculator, password hash, string encryption, md5 online, md5 converter, secure hash"
        />
        <meta
          property="og:title"
          content="Online MD5 Hash Generator & Text Encryption Tool | Free & Secure"
        />
        <meta
          property="og:description"
          content="Free online MD5 hash generator for text encryption. Instant MD5 hash calculation in your browser with no data upload. Perfect for password hashing and text verification."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hashkitly.com" />
        <meta property="og:image" content="/favicon.ico" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Online MD5 Hash Generator & Text Encryption Tool | Free & Secure"
        />
        <meta
          name="twitter:description"
          content="Free online MD5 hash generator for text encryption. Instant MD5 hash calculation in your browser with no data upload. Perfect for password hashing and text verification."
        />
        <meta name="twitter:image" content="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.hashkitly.com/" />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Online MD5 Text Hash Generator",
              url: "https://www.hashkitly.com/",
              description:
                "Free online MD5 hash generator for text encryption. Instant MD5 hash calculation in your browser with no data upload. Perfect for password hashing and text verification.",
              applicationCategory: "Security",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
              creator: {
                "@type": "Organization",
                name: "Hashkitly",
                url: "https://www.hashkitly.com",
              },
              inLanguage: "en",
              featureList: [
                "32-bit and 16-bit MD5 hash generation",
                "Browser-based calculation",
                "Instant results",
                "Free to use",
                "Privacy focused - no data upload",
              ],
              softwareVersion: "1.0.0",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                ratingCount: "1",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
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
