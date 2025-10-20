import Client from "./Client";
export const metadata = {
  title: "Base32hex Encode/Decode Online | RFC 4648 Base32 (Hex Alphabet)",
  description:
    "Encode and decode Base32hex (RFC 4648 extended hex alphabet). In-browser, no upload.",
  alternates: { canonical: "https://www.hashkitly.com/base32hex" },
};
export default function Page() {
  return <Client />;
}
