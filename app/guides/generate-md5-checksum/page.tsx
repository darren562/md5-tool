import type { Metadata } from "next";
import LongTailSEO from "@/app/components/LongTailSEO";
import Script from "next/script";

export const metadata: Metadata = {
  title: "How to generate MD5 checksum on Windows, macOS, Linux (CLI & GUI)",
  description:
    "Step-by-step guide: generate and verify MD5 checksum on Windows (PowerShell), macOS (shasum/md5), and Linux (md5sum). Includes tips, FAQs, and security notes.",
  keywords:
    "how to generate md5, md5 checksum windows powershell, md5sum linux, md5 mac terminal, verify md5 file, calculate md5 hash",
  alternates: {
    canonical: "https://www.hashkitly.com/guides/generate-md5-checksum",
  },
  openGraph: {
    title: "How to generate MD5 checksum on Windows, macOS, Linux (CLI & GUI)",
    description:
      "Step-by-step guide: generate and verify MD5 checksum on Windows (PowerShell), macOS (shasum/md5), and Linux (md5sum). Includes tips, FAQs, and security notes.",
    type: "article",
    url: "https://www.hashkitly.com/guides/generate-md5-checksum",
    siteName: "Hashkitly",
  },
  twitter: {
    card: "summary",
    title: "How to generate MD5 checksum on Windows, macOS, Linux (CLI & GUI)",
    description:
      "Step-by-step guide: generate and verify MD5 checksum on Windows (PowerShell), macOS (shasum/md5), and Linux (md5sum).",
  },
};

export default function Page() {
  return (
    <div className="container">
      <div className="box">
        <h1>Generate MD5 checksum (Windows/macOS/Linux)</h1>
        <p>
          This practical guide shows how to compute an MD5 hash of a file or
          text on all major platforms. Use MD5 only for integrity checks—do not
          use it for password storage or cryptographic security.
        </p>

        <h2>Windows PowerShell</h2>
        <ol>
          <li>Open PowerShell</li>
          <li>
            Run: <code>Get-FileHash -Algorithm MD5 path\to\file</code>
          </li>
          <li>Compare the hash with the expected MD5 from the publisher.</li>
        </ol>

        <h2>macOS</h2>
        <ul>
          <li>
            Built-in: <code>md5 /path/to/file</code>
          </li>
          <li>
            Or cross-platform: <code>shasum -a 0 /path/to/file</code> (auto MD5
            on some systems)
          </li>
        </ul>

        <h2>Linux</h2>
        <ul>
          <li>
            <code>md5sum /path/to/file</code>
          </li>
          <li>
            To verify against a checksum file:{" "}
            <code>md5sum -c checksums.md5</code>
          </li>
        </ul>

        <h2>Verify integrity</h2>
        <p>
          Always compare your computed MD5 with the official value from the
          software vendor. If they differ, do not trust the file.
        </p>

        <LongTailSEO
          title="MD5 checksum frequently asked questions"
          breadcrumbs={[
            { name: "Home", url: "https://www.hashkitly.com/" },
            { name: "Guides", url: "https://www.hashkitly.com/guides" },
            {
              name: "Generate MD5 checksum",
              url: "https://www.hashkitly.com/guides/generate-md5-checksum",
            },
          ]}
          faqs={[
            {
              q: "Is MD5 safe?",
              a: "MD5 is not collision-resistant and should not be used for security-critical purposes like password hashing or digital signatures.",
            },
            {
              q: "Why use MD5 then?",
              a: "It is still fine for accidental corruption detection and legacy workflows that expect MD5 checksums.",
            },
            {
              q: "How to generate MD5 of a string?",
              a: "Use our MD5 online tool on the homepage—everything runs in your browser, no upload.",
            },
          ]}
          relatedLinks={[
            { name: "MD5 Hash Generator", url: "https://www.hashkitly.com/" },
            {
              name: "Verify SHA-256 file",
              url: "https://www.hashkitly.com/guides/verify-file-sha256",
            },
            { name: "SHA-256 Tool", url: "https://www.hashkitly.com/sha256" },
          ]}
        />
        {/* HowTo structured data */}
        <Script
          id="ld-howto-md5"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Generate MD5 checksum on Windows, macOS, Linux",
            description:
              "Use PowerShell, macOS md5, or Linux md5sum to compute MD5 checksums and verify integrity.",
            step: [
              {
                "@type": "HowToStep",
                name: "Windows PowerShell",
                text: "Run Get-FileHash -Algorithm MD5 path\\to\\file in PowerShell.",
              },
              {
                "@type": "HowToStep",
                name: "macOS",
                text: "Run md5 /path/to/file in Terminal.",
              },
              {
                "@type": "HowToStep",
                name: "Linux",
                text: "Run md5sum /path/to/file or md5sum -c checksums.md5 to verify.",
              },
            ],
            totalTime: "PT2M",
          })}
        </Script>
      </div>
    </div>
  );
}
