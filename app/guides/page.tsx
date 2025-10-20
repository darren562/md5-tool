import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cryptography and encoding guides | Hashkitly",
  description:
    "Step-by-step guides for checksums, hashing, encoding, and security best practices. Practical tutorials for Windows, macOS, and Linux.",
  alternates: { canonical: "https://www.hashkitly.com/guides" },
  openGraph: {
    title: "Cryptography and encoding guides | Hashkitly",
    description:
      "Step-by-step guides for checksums, hashing, encoding, and security best practices.",
    type: "website",
    url: "https://www.hashkitly.com/guides",
  },
  twitter: {
    card: "summary",
    title: "Cryptography and encoding guides | Hashkitly",
    description:
      "Step-by-step guides for checksums, hashing, encoding, and security best practices.",
  },
};

export default function Page() {
  const guides = [
    { href: "/guides/generate-md5-checksum", title: "Generate MD5 checksum" },
    { href: "/guides/verify-file-sha256", title: "Verify file SHA-256" },
  ];
  return (
    <div className="container">
      <div className="box">
        <h1>Guides</h1>
        <p>Hands-on guides for hashing, checksums, and encoding workflows.</p>
        <ul>
          {guides.map((g) => (
            <li key={g.href}>
              <a href={g.href}>{g.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
