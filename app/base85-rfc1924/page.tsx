import Client from "./Client";
export const metadata = {
  title: "Base85 (RFC 1924) Encode/Decode Online | IPv6/Base85 Alphabet",
  description:
    "Encode and decode Base85 using RFC 1924 alphabet (often referenced in IPv6/Base85 examples). In-browser, no upload.",
  alternates: { canonical: "https://www.hashkitly.com/base85-rfc1924" },
};
export default function Page() {
  return <Client />;
}
