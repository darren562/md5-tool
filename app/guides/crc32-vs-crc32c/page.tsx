import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRC32 vs CRC32C: Which checksum do you need?",
  description:
    "Understand differences between CRC32 (IEEE) and CRC32C (Castagnoli), hardware acceleration, and interoperability.",
  alternates: { canonical: "https://www.hashkitly.com/guides/crc32-vs-crc32c" },
  openGraph: {
    title: "CRC32 vs CRC32C",
    description:
      "Parameters, performance, and use cases. Learn which CRC is used in your stack.",
    type: "article",
    url: "https://www.hashkitly.com/guides/crc32-vs-crc32c",
  },
  twitter: {
    card: "summary",
    title: "CRC32 vs CRC32C",
    description: "Differences and compatibility notes.",
  },
};

export default function Page() {
  return (
    <div className="container">
      <div className="box">
        <h1>CRC32 vs CRC32C</h1>
        <p>
          CRC32 and CRC32C use different polynomials. CRC32C (Castagnoli) may be
          hardware-accelerated (SSE4.2). Ensure both sides use the same variant
          to match results.
        </p>
        <p>
          Tools: <a href="/crc32">CRC32</a>, <a href="/crc32c">CRC32C</a>
        </p>
      </div>
    </div>
  );
}

export {};
