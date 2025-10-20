import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import NavBar from "./components/NavBar";
import RouteSEO from "./components/RouteSEO";

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
                name: "SHA-3",
                url: "https://www.hashkitly.com/sha3",
              },
              {
                "@type": "SiteNavigationElement",
                name: "SHA-224",
                url: "https://www.hashkitly.com/sha224",
              },
              {
                "@type": "SiteNavigationElement",
                name: "SHA-1",
                url: "https://www.hashkitly.com/sha1",
              },
              {
                "@type": "SiteNavigationElement",
                name: "SHA-384",
                url: "https://www.hashkitly.com/sha384",
              },
              {
                "@type": "SiteNavigationElement",
                name: "SHA-512",
                url: "https://www.hashkitly.com/sha512",
              },
              {
                "@type": "SiteNavigationElement",
                name: "RIPEMD-160",
                url: "https://www.hashkitly.com/ripemd160",
              },
              {
                "@type": "SiteNavigationElement",
                name: "AES",
                url: "https://www.hashkitly.com/aes",
              },
              {
                "@type": "SiteNavigationElement",
                name: "AES-GCM",
                url: "https://www.hashkitly.com/aes-gcm",
              },
              {
                "@type": "SiteNavigationElement",
                name: "3DES",
                url: "https://www.hashkitly.com/tripledes",
              },
              {
                "@type": "SiteNavigationElement",
                name: "HMAC-SHA256",
                url: "https://www.hashkitly.com/hmac-sha256",
              },
              {
                "@type": "SiteNavigationElement",
                name: "HMAC-SHA512",
                url: "https://www.hashkitly.com/hmac-sha512",
              },
              {
                "@type": "SiteNavigationElement",
                name: "HMAC-SHA1",
                url: "https://www.hashkitly.com/hmac-sha1",
              },
              {
                "@type": "SiteNavigationElement",
                name: "URL",
                url: "https://www.hashkitly.com/url",
              },
              {
                "@type": "SiteNavigationElement",
                name: "ROT13",
                url: "https://www.hashkitly.com/rot13",
              },
              {
                "@type": "SiteNavigationElement",
                name: "ROT47",
                url: "https://www.hashkitly.com/rot47",
              },
              {
                "@type": "SiteNavigationElement",
                name: "ASCII85",
                url: "https://www.hashkitly.com/ascii85",
              },
              {
                "@type": "SiteNavigationElement",
                name: "UUID",
                url: "https://www.hashkitly.com/uuid",
              },
              {
                "@type": "SiteNavigationElement",
                name: "PBKDF2",
                url: "https://www.hashkitly.com/pbkdf2",
              },
              {
                "@type": "SiteNavigationElement",
                name: "HKDF",
                url: "https://www.hashkitly.com/hkdf",
              },
              {
                "@type": "SiteNavigationElement",
                name: "CRC32",
                url: "https://www.hashkitly.com/crc32",
              },
              {
                "@type": "SiteNavigationElement",
                name: "CRC32C",
                url: "https://www.hashkitly.com/crc32c",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Adler-32",
                url: "https://www.hashkitly.com/adler32",
              },
              {
                "@type": "SiteNavigationElement",
                name: "CRC64",
                url: "https://www.hashkitly.com/crc64",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Hex",
                url: "https://www.hashkitly.com/hex",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Base32",
                url: "https://www.hashkitly.com/base32",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Base32hex",
                url: "https://www.hashkitly.com/base32hex",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Base58",
                url: "https://www.hashkitly.com/base58",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Base64url",
                url: "https://www.hashkitly.com/base64url",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Base36",
                url: "https://www.hashkitly.com/base36",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Base45",
                url: "https://www.hashkitly.com/base45",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Base62",
                url: "https://www.hashkitly.com/base62",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Random",
                url: "https://www.hashkitly.com/random",
              },
              {
                "@type": "SiteNavigationElement",
                name: "HMAC-MD5",
                url: "https://www.hashkitly.com/hmac-md5",
              },
              {
                "@type": "SiteNavigationElement",
                name: "FNV-1a 32",
                url: "https://www.hashkitly.com/fnv1a32",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Murmur3 (32)",
                url: "https://www.hashkitly.com/murmur3",
              },
              {
                "@type": "SiteNavigationElement",
                name: "DJB2",
                url: "https://www.hashkitly.com/djb2",
              },
              {
                "@type": "SiteNavigationElement",
                name: "SDBM",
                url: "https://www.hashkitly.com/sdbm",
              },
              {
                "@type": "SiteNavigationElement",
                name: "ELF",
                url: "https://www.hashkitly.com/elf",
              },
              {
                "@type": "SiteNavigationElement",
                name: "FNV-1 32",
                url: "https://www.hashkitly.com/fnv132",
              },
              {
                "@type": "SiteNavigationElement",
                name: "FNV-1 64",
                url: "https://www.hashkitly.com/fnv164",
              },
              {
                "@type": "SiteNavigationElement",
                name: "FNV-1a 64",
                url: "https://www.hashkitly.com/fnv1a64",
              },
              {
                "@type": "SiteNavigationElement",
                name: "CRC-8",
                url: "https://www.hashkitly.com/crc8",
              },
              {
                "@type": "SiteNavigationElement",
                name: "CRC-24",
                url: "https://www.hashkitly.com/crc24",
              },
              {
                "@type": "SiteNavigationElement",
                name: "CRC-7",
                url: "https://www.hashkitly.com/crc7",
              },
              {
                "@type": "SiteNavigationElement",
                name: "xxHash32",
                url: "https://www.hashkitly.com/xxhash32",
              },
              {
                "@type": "SiteNavigationElement",
                name: "SDBM",
                url: "https://www.hashkitly.com/sdbm",
              },
              {
                "@type": "SiteNavigationElement",
                name: "ELF",
                url: "https://www.hashkitly.com/elf",
              },
              {
                "@type": "SiteNavigationElement",
                name: "FNV-1 32",
                url: "https://www.hashkitly.com/fnv132",
              },
              {
                "@type": "SiteNavigationElement",
                name: "FNV-1 64",
                url: "https://www.hashkitly.com/fnv164",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Z85",
                url: "https://www.hashkitly.com/z85",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Base91",
                url: "https://www.hashkitly.com/base91",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Base85 (RFC 1924)",
                url: "https://www.hashkitly.com/base85-rfc1924",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Base32 Crockford",
                url: "https://www.hashkitly.com/base32-crockford",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Quoted-Printable",
                url: "https://www.hashkitly.com/quoted-printable",
              },
              {
                "@type": "SiteNavigationElement",
                name: "HTML Entities",
                url: "https://www.hashkitly.com/html-entities",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Caesar",
                url: "https://www.hashkitly.com/caesar",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Vigenere",
                url: "https://www.hashkitly.com/vigenere",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Atbash",
                url: "https://www.hashkitly.com/atbash",
              },
              {
                "@type": "SiteNavigationElement",
                name: "ROT5",
                url: "https://www.hashkitly.com/rot5",
              },
              {
                "@type": "SiteNavigationElement",
                name: "ROT18",
                url: "https://www.hashkitly.com/rot18",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Morse",
                url: "https://www.hashkitly.com/morse",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Rail Fence",
                url: "https://www.hashkitly.com/railfence",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Affine",
                url: "https://www.hashkitly.com/affine",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Baconian",
                url: "https://www.hashkitly.com/baconian",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Polybius",
                url: "https://www.hashkitly.com/polybius",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Playfair",
                url: "https://www.hashkitly.com/playfair",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Beaufort",
                url: "https://www.hashkitly.com/beaufort",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Autokey",
                url: "https://www.hashkitly.com/autokey",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Porta",
                url: "https://www.hashkitly.com/porta",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Bifid",
                url: "https://www.hashkitly.com/bifid",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Columnar",
                url: "https://www.hashkitly.com/columnar",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Scytale",
                url: "https://www.hashkitly.com/scytale",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Double Transposition",
                url: "https://www.hashkitly.com/double-transposition",
              },
              {
                "@type": "SiteNavigationElement",
                name: "XOR Cipher",
                url: "https://www.hashkitly.com/xor-cipher",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Keyword Substitution",
                url: "https://www.hashkitly.com/keyword",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Gronsfeld",
                url: "https://www.hashkitly.com/gronsfeld",
              },
              {
                "@type": "SiteNavigationElement",
                name: "BKDR",
                url: "https://www.hashkitly.com/bkdr",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Lose Lose",
                url: "https://www.hashkitly.com/loselose",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Fletcher-16",
                url: "https://www.hashkitly.com/fletcher16",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Fletcher-32",
                url: "https://www.hashkitly.com/fletcher32",
              },
              {
                "@type": "SiteNavigationElement",
                name: "CRC-16/MODBUS",
                url: "https://www.hashkitly.com/crc16-modbus",
              },
              {
                "@type": "SiteNavigationElement",
                name: "CRC-16/XMODEM",
                url: "https://www.hashkitly.com/crc16-xmodem",
              },
              {
                "@type": "SiteNavigationElement",
                name: "CRC-16/IBM",
                url: "https://www.hashkitly.com/crc16-ibm",
              },
              {
                "@type": "SiteNavigationElement",
                name: "CRC-16/CCITT-FALSE",
                url: "https://www.hashkitly.com/crc16-ccitt",
              },
              {
                "@type": "SiteNavigationElement",
                name: "CRC-16/X25",
                url: "https://www.hashkitly.com/crc16-x25",
              },
              {
                "@type": "SiteNavigationElement",
                name: "CRC-16/KERMIT",
                url: "https://www.hashkitly.com/crc16-kermit",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Jenkins OAAT",
                url: "https://www.hashkitly.com/jenkins",
              },
              {
                "@type": "SiteNavigationElement",
                name: "JWT",
                url: "https://www.hashkitly.com/jwt",
              },
              {
                "@type": "SiteNavigationElement",
                name: "RSA-OAEP",
                url: "https://www.hashkitly.com/rsa-oaep",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Sum-8",
                url: "https://www.hashkitly.com/sum8",
              },
              {
                "@type": "SiteNavigationElement",
                name: "XOR-8",
                url: "https://www.hashkitly.com/xor8",
              },
              {
                "@type": "SiteNavigationElement",
                name: "LRC-8",
                url: "https://www.hashkitly.com/lrc8",
              },
              {
                "@type": "SiteNavigationElement",
                name: "RS Hash",
                url: "https://www.hashkitly.com/rshash",
              },
              {
                "@type": "SiteNavigationElement",
                name: "AP Hash",
                url: "https://www.hashkitly.com/aphash",
              },
              {
                "@type": "SiteNavigationElement",
                name: "DEK Hash",
                url: "https://www.hashkitly.com/dekhash",
              },
              {
                "@type": "SiteNavigationElement",
                name: "PJW Hash",
                url: "https://www.hashkitly.com/pjwhash",
              },
              {
                "@type": "SiteNavigationElement",
                name: "JS Hash",
                url: "https://www.hashkitly.com/jshash",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Luhn",
                url: "https://www.hashkitly.com/luhn",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Verhoeff",
                url: "https://www.hashkitly.com/verhoeff",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Damm",
                url: "https://www.hashkitly.com/damm",
              },
              {
                "@type": "SiteNavigationElement",
                name: "ISBN-10",
                url: "https://www.hashkitly.com/isbn10",
              },
              {
                "@type": "SiteNavigationElement",
                name: "UUEncode",
                url: "https://www.hashkitly.com/uuencode",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Base58Check",
                url: "https://www.hashkitly.com/base58check",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Q-encoding",
                url: "https://www.hashkitly.com/q-encoding",
              },
              {
                "@type": "SiteNavigationElement",
                name: "ISBN-13",
                url: "https://www.hashkitly.com/isbn13",
              },
              {
                "@type": "SiteNavigationElement",
                name: "ISSN",
                url: "https://www.hashkitly.com/issn",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Soundex",
                url: "https://www.hashkitly.com/soundex",
              },
              {
                "@type": "SiteNavigationElement",
                name: "IBAN",
                url: "https://www.hashkitly.com/iban",
              },
              {
                "@type": "SiteNavigationElement",
                name: "SuperFastHash",
                url: "https://www.hashkitly.com/superfasthash",
              },
              {
                "@type": "SiteNavigationElement",
                name: "CRC-32/BZIP2",
                url: "https://www.hashkitly.com/crc32-bzip2",
              },
              {
                "@type": "SiteNavigationElement",
                name: "CRC-32/MPEG-2",
                url: "https://www.hashkitly.com/crc32-mpeg2",
              },
              {
                "@type": "SiteNavigationElement",
                name: "EAN-13",
                url: "https://www.hashkitly.com/ean13",
              },
              {
                "@type": "SiteNavigationElement",
                name: "EAN-8",
                url: "https://www.hashkitly.com/ean8",
              },
              {
                "@type": "SiteNavigationElement",
                name: "UPC-A",
                url: "https://www.hashkitly.com/upca",
              },
              {
                "@type": "SiteNavigationElement",
                name: "NATO Phonetic",
                url: "https://www.hashkitly.com/nato",
              },
              {
                "@type": "SiteNavigationElement",
                name: "Leetspeak",
                url: "https://www.hashkitly.com/leetspeak",
              },
              {
                "@type": "SiteNavigationElement",
                url: "https://www.hashkitly.com/privacy",
              },
            ],
          })}
        </Script>
        {children}
        {/* Per-route long-tail SEO (FAQs, breadcrumbs, related links) */}
        <RouteSEO />
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
