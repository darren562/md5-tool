import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SHA-1 vs SHA-256: Which hash should you use?",
  description:
    "Compare SHA-1 and SHA-256: security, performance, and compatibility. Learn when to migrate and how to verify checksums.",
  alternates: { canonical: "https://www.hashkitly.com/sha1-vs-sha256" },
  openGraph: {
    title: "SHA-1 vs SHA-256",
    description:
      "Why SHA-256 is recommended over SHA-1 for new systems. Practical advice and tooling.",
    type: "article",
    url: "https://www.hashkitly.com/sha1-vs-sha256",
  },
  twitter: {
    card: "summary",
    title: "SHA-1 vs SHA-256",
    description: "Security differences and migration tips.",
  },
};

export default function Page() {
  return (
    <div className="container">
      <div className="box">
        <h1>SHA-1 vs SHA-256</h1>
        <p>
          SHA-1 is deprecated due to collisions. SHA-256 provides strong
          collision resistance and broad support. For signatures and file
          verification, choose SHA-256.
        </p>
        <h2>Differences</h2>
        <ul>
          <li>Output: 160-bit vs 256-bit</li>
          <li>Security: SHA-1 broken; SHA-256 recommended</li>
          <li>Performance: SHA-1 slightly faster but not worth the risk</li>
        </ul>
        <p>
          Try our tools: <a href="/sha1">SHA-1</a>,{" "}
          <a href="/sha256">SHA-256</a>,{" "}
          <a href="/guides/verify-file-sha256">Verify SHA-256</a>
        </p>
      </div>
    </div>
  );
}
