import type { Metadata } from "next";
import LongTailSEO from "@/app/components/LongTailSEO";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Verify file SHA-256 checksum on Windows, macOS, Linux",
  description:
    "Learn how to compute and verify SHA-256 checksums across Windows (PowerShell), macOS, and Linux. Prevent tampering and corrupted downloads.",
  keywords:
    "verify sha256 windows, sha256sum linux, shasum mac, check file checksum, powershell sha256, compare hash",
  alternates: {
    canonical: "https://www.hashkitly.com/guides/verify-file-sha256",
  },
  openGraph: {
    title: "Verify file SHA-256 checksum on Windows, macOS, Linux",
    description:
      "Learn how to compute and verify SHA-256 checksums across Windows (PowerShell), macOS, and Linux.",
    type: "article",
    url: "https://www.hashkitly.com/guides/verify-file-sha256",
    siteName: "Hashkitly",
  },
  twitter: {
    card: "summary",
    title: "Verify file SHA-256 checksum on Windows, macOS, Linux",
    description:
      "Learn how to compute and verify SHA-256 checksums across Windows, macOS, Linux.",
  },
};

export default function Page() {
  return (
    <div className="container">
      <div className="box">
        <h1>Verify a file's SHA-256 checksum</h1>
        <p>
          Use SHA-256 to confirm your download hasn't been tampered with.
          Compare the computed checksum with the publisher's official value.
        </p>

        <h2>Windows PowerShell</h2>
        <pre>
          <code>Get-FileHash -Algorithm SHA256 path\to\file</code>
        </pre>

        <h2>macOS</h2>
        <pre>
          <code>shasum -a 256 /path/to/file</code>
        </pre>

        <h2>Linux</h2>
        <pre>
          <code>sha256sum /path/to/file</code>
        </pre>

        <h2>Compare against checksum file</h2>
        <ul>
          <li>
            Linux: <code>sha256sum -c SHA256SUMS</code>
          </li>
          <li>
            macOS: <code>shasum -a 256 -c SHA256SUMS</code>
          </li>
        </ul>

        <LongTailSEO
          title="SHA-256 verification FAQs"
          breadcrumbs={[
            { name: "Home", url: "https://www.hashkitly.com/" },
            { name: "Guides", url: "https://www.hashkitly.com/guides" },
            {
              name: "Verify file SHA-256",
              url: "https://www.hashkitly.com/guides/verify-file-sha256",
            },
          ]}
          faqs={[
            {
              q: "Do I need to verify every download?",
              a: "It's strongly recommended for critical software, drivers, and firmware where tampering is risky.",
            },
            {
              q: "What if the hash doesn't match?",
              a: "Do not open the file. Download again from the official source and contact the publisher if mismatch persists.",
            },
            {
              q: "MD5 vs SHA-256?",
              a: "Use SHA-256 for security-sensitive verification; MD5 is susceptible to collisions.",
            },
          ]}
          relatedLinks={[
            { name: "SHA-256 Tool", url: "https://www.hashkitly.com/sha256" },
            {
              name: "Generate MD5 checksum",
              url: "https://www.hashkitly.com/guides/generate-md5-checksum",
            },
            {
              name: "HMAC-SHA256",
              url: "https://www.hashkitly.com/hmac-sha256",
            },
          ]}
        />
        {/* HowTo structured data */}
        <Script
          id="ld-howto-sha256"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Verify file SHA-256 checksum",
            description:
              "Compute and compare SHA-256 checksums on Windows, macOS, and Linux.",
            step: [
              {
                "@type": "HowToStep",
                name: "Windows PowerShell",
                text: "Run Get-FileHash -Algorithm SHA256 path\\to\\file.",
              },
              {
                "@type": "HowToStep",
                name: "macOS",
                text: "Run shasum -a 256 /path/to/file and compare.",
              },
              {
                "@type": "HowToStep",
                name: "Linux",
                text: "Run sha256sum /path/to/file or sha256sum -c SHA256SUMS.",
              },
            ],
            totalTime: "PT2M",
          })}
        </Script>
      </div>
    </div>
  );
}
