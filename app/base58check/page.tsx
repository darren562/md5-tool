import Client from "./Client";
export const metadata = {
  title: "Base58Check Encode/Decode Online | Base58 + Checksum",
  description:
    "Encode and decode Base58Check (Base58 with 4-byte checksum). Commonly used in Bitcoin addresses.",
  alternates: { canonical: "https://www.hashkitly.com/base58check" },
};
export default function Page() {
  return <Client />;
}
